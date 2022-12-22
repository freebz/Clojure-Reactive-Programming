;; Communicationg sequential processes

(import 'java.util.concurrent.ArrayBlockingQueue)

(defn producer [c]
  (prn "Taking a nap")
  (Thread/sleep 5000)
  (prn "Now putting a name in queue...")
  (.put c "Leo"))

(defn consumer [c]
  (prn "Attempting to take value from queue now...")
  (prn (str "Got it. Hello " (.take c) "!")))

(def chan (ArrayBlockingQueue. 10))

(future (consumer chan))
(future (producer chan))


;; "Attempting to take value from queue now..."
;; "Taking a nap"
;; then 5 seconds later
;; "Now putting a name in queue..."
;; "Got it. Hello Leo!"
