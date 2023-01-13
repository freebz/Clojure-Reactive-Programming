(ns imminent-playground.repl
  (:require [imminent.core :as i]))

(def  repl-out *out*)
(defn prn-to-repl [& args]
  (binding [*out* repl-out]
    (apply prn args)))