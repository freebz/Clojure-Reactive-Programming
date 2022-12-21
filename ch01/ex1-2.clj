;; Functional Reactive Programming
;; Higher-order FRP

(->> [1 2 3 4 5 6]
     (map inc)
     (filter even?)
     (reduce +))
;; 12
