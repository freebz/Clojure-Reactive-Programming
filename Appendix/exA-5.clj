;; Applicative Functors

(defprotocol Applicative
  (pure [av v])
  (fapply [ag av]))



(extend-protocol fkp/Applicative
  Some
  (pure [_ v]
    (Some. v))

  (fapply [ag av]
    (if-let [v (:v av)]
      (Some. ((:v ag) v))
      (None.)))

  None
  (pure [_ v]
    (Some. v))

  (fapply [ag av]
    (None.)))



(fkc/fapply (option inc) (option 2))
;; #library_design.option.Some{:v 3}

(fkc/fapply (option nil) (option 2))
;; #library_design.option.None{}



(def age-option (comp (partial kfc/fmap age) option pirate-by-name))

(let [a (age-option "Jack Sparrow")
      b (age-option "Blackbeard")
      c (age-option "Hector Barbossa")]
  (fkc/<*> (option (fkj/curry avg 3))
           a b c))
;; #library_design.option.Some{:v 56.666668}



(def curried-1 (fkj/curry + 2))
(def curried-2 (fn [a]
                 (fn [b]
                   (+ a b))))

((curried-1 10) 20) ;; 30
((curried-2 10) 20) ;; 30



(defn alift
  "Lifts a n-ary function `f` into a applicative context"
  [f]
  (fn [& as]
    {:pre  [(seq as)]}
    (let [curried (fkj/curry f (count as))]
      (apply fkc/<*>
             (fkc/fmap curried (first as))
             (rest as)))))


(let [a (age-option "Jack Sparrow")
      b (age-option "Blackbeard")
      c (age-option "Hector Barbossa")]
  ((alift avg) a b c))
;; #library_design.option.Some{:v 56.666668}



((alift avg) (age-option "Jack Sparrow")
             (age-option "Blackbeard")
             (age-option "Hector Barbossa"))
;; #library_design.option.Some{:v 56.666668}

((alift avg) (age-option "Jack Sparrow")
             (age-option "Davy Jones")
             (age-option "Hector Barbossa"))
;; #library_design.option.None{}


((alift avg) (i/future (some-> (pirate-by-name "Jack Sparrow") age))
             (i/future (some-> (pirate-by-name "Blackbeard") age))
             (i/future (some-> (pirate-by-name "Hector Barbossa") age)))
;; #<Future@687e06fd: #<Success@50119070: 56.666668>>
