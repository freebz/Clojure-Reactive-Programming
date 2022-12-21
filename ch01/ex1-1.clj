;; The Observer design pattern

(def numbers (atom []))

(defn adder [key ref old-state new-state]
  (print "Current sum is " (reduce + new-state)))

(add-watch numbers :adder adder)


(swap! numbers conj 1)
;; Current sum is  1

(swap! numbers conj 2)
;; Current sum is  3

(swap! numbers conj 7)
;; Current sum is  10
