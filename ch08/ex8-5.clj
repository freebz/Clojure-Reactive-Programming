;; Futures and blocking IO

(-> (immi/blocking-future
     (Thread/sleep 100)
     10)
    (immi/await))
;; #<Future@b538f6f: #<Success@1ce38b75: 10>>

(-> (immi/blocking-future-call
     (fn []
       (Thread/sleep 100)
       10))
    (immi/await))
;; #<Future@536ec27b: #<Success@69b52f1b: 10>>
