;; Gathering stats about ages

(defn median [& ns]
  (let [ns (sort ns)
        cnt (count ns)
        mid (bit-shift-right cnt 1)]
    (if (odd? cnt)
      (nth ns mid)
      (/ (+ (nth ns mid) (nth ns (dec mid))) 2))))

(defn std-dev [& samples]
  (let [n (count samples)
        mean (/ (reduce + samples) n)
        intermediate (map #(Math/pow (- %1 mean) 2) samples)]
    (Math/sqrt
     (/ (reduce + intermediate) n))))


(let [a       (some-> (pirate-by-name "Jack Sparrow")    age)
      b       (some-> (pirate-by-name "Blackbeard")      age)
      c       (some-> (pirate-by-name "Hector Barbossa") age)
      avg     (avg a b c)
      median  (median a b c)
      std-dev (std-dev a b c)]
  {:avg avg
   :median median
   :std-dev std-dev})
;; {:avg 56.666668,
;;  :median 60,
;;  :std-dev 12.472191289246473}


(let [a       (some-> (pirate-by-name "Jack Sparrow")    age)
      b       (some-> (pirate-by-name "Davy Jones")      age)
      c       (some-> (pirate-by-name "Hector Barbossa") age)
      avg     (avg a b c)
      median  (median a b c)
      std-dev (std-dev a b c)]
  {:avg avg
   :median median
   :std-dev std-dev})
;; NullPointerException   clojure.lang.Numbers.ops (Numbers.java:1018)


(let [a       (some-> (pirate-by-name "Jack Sparrow")    age)
      b       (some-> (pirate-by-name "Davy Jones")      age)
      c       (some-> (pirate-by-name "Hector Barbossa") age)
      avg     (when (and a b c) (avg a b c))
      median  (when (and a b c) (median a b c))
      std-dev (when (and a b c) (std-dev a b c))]
  (when (and a b c)
    {:avg avg
     :median median
     :std-dev std-dev}))
;; nil
