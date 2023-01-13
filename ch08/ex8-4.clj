;; Combinators and event handlers

(def double-age (i/map age #(* % 2)))
;; #<Future@259dd0c9: #<Success@5c18e47e: 62>>


(i/on-success age #(prn-to-repl (str "Age is: " %)))
;; "Age is: 31"


(-> failed-computation
    (i/map #(* % 2)))
;; #<Future@6ea8a6ba: #<Failure@10f310f6: #<Exception java.lang.Exception:ㄸ깩>>>

(i/map (i/success "hello")
       #(str % " world"))
;; #<Success@163153f9: "hello world">

(i/map (i/failure "error")
       #(str % " world"))
;; #<Failure@7030372c: "error">


(i/map-failure (i/success "hello")
               #(str % " world"))
;; #<Success@6671f56f: "hello">

(i/map-failure (i/failure "Error")
               #(str "We failed: " %))
;; #<Failure@6cd03e38: "We failed: Error">


(i/on-complete age
               (fn [result]
                 (i/map result #(prn-to-repl "success: " %))
                 (i/map-failure result #(prn-to-repl "error: " %))))
;; "success: " 31


(defn range-future [n]
  (i/const-future (range n)))

(def age-range (i/map age range-future))

;; #<Future@1d711e4f: #<Success@8069959: (0 1 2 ...)>>


(def name (i/future (do (Thread/sleep 500)
                        "Leo")))
(def genres (i/future (do (Thread/sleep 500)
                          ["Heavy Metal" "Black Metal" "Death Metal" "Rock 'n Roll"])))

(-> (i/sequence [name age genres])
    (i/on-success
     (fn [[name age genres]]
       (prn-to-repl (format "%s is %s years old and enjoys %s"
                            name
                            age
                            (clojure.string/join "," genres))))))

;; "Leo is 31 years old and enjoys Heavy Metal,Black Metal,Death Metal,Rock 'n Roll"


(defn calculate-double [n]
  (i/const-future (* n 2)))

(-> (i/map-future calculate-double [1 2 3 4])
    i/await
    i/dderef)

;; [2 4 6 8]
