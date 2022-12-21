;; The Observer pattern revisited

(def numbers (atom []))

(defn adder [key ref old-state new-state]
  (print "Current sum is " (reduce + new-state)))

(add-watch numbers :adder adder)


(->> [1 2 3 4 5 6]
     (map inc)
     (filter even?)
     (reduce +))
