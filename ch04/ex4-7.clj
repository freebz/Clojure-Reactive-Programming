;; Sliding buffer

(def result (chan (sliding-buffer 2)))
(go-loop []
  (<! (async/timeout 1000))
  (when-let [x (<! result)]
    (prn "Got value: " x)
    (recur)))

(go  (doseq [n (range 5)]
       (>! result n))
     (prn "Done putting values!")
     (close! result))

;; "Done putting values!"
;; "Got value: " 3
;; "Got value: " 4
