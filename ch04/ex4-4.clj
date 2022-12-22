;; Error handling

(defn get-data []
  (throw (Exception. "Bad things happen!")))

(defn process []
  (let [result (chan)]
    ;; do some processing...
    (go (>! result (get-data)))
    result))


(go (let [result (<! (->> (process "data")
                          (map> #(* % %))
                          (map> #(prn %))))]
      (prn "result is: " result)))


(defn throw-err [e]
  (when (instance? Throwable e) (throw e))
  e)

(defmacro <? [ch]
  `(throw-err (async/<! ~ch)))


(defn process []
  (let [result (chan)]
    ;; do some processing...
    (go (>! result (try (get-data)
                        (catch Exception e
                          e))))
    result))


(go (try (let [result  (<? (->> (process "data")
                                (map> #(* % %))
                                (map> #(prn %))))]
           (prn "result is: " result))
         (catch Exception e
           (prn "Oops, an error happened! We better do something about it here!"))))
;; "Oops, an error happened! We better do something about it here!"
