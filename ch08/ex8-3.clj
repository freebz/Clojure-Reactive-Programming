;; Creating futures

(def age (i/future 31))

;; #<Future@fc4d113: #<Success@42ed0772: 31>>


(def failed-computation   (i/future (throw (Exception. "Error"))))
;; #<Future@64852f42: #<Failure@2448cf6a: #<Exception java.lang.Exception: Error>>>

(def failed-computation-1 (i/failed-future :invalid-data))
;; #<Future@530b99f4: #<Failure@3dd9c101: :invalid-data>>


@age           ;; #<Success@42ed0772: 31>
(deref @age)   ;; 31
(i/dderef age) ;; 31


@(i/future (do (Thread/sleep 500)
               "hello"))
;; :imminent.future/unresolved
