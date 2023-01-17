;; The Option Functor

(count nil) ;; 0



(ns library-design.option
  (:require [uncomplicate.fluokitten.protocols :as fkp]
            [uncomplicate.fluokitten.core :as fkc]
            [uncomplicate.fluokitten.jvm :as fkj]
            [imminent.core :as i]))

(def pirates [{:name "Jack Sparrow"    :born 1700 :died 1740 :ship "Black Pearl"}
              {:name "Blackbeard"      :born 1680 :died 1750 :ship "Queen Anne's Revenge"}
              {:name "Hector Barbossa" :born 1680 :died 1740 :ship nil}])


(defn pirate-by-name [name]
  (->> pirates
       (filter #(= name (:name %)))
       first))

(defn age [{:keys [born died]}]
  (- died born))


(-> (pirate-by-name "Jack Sparrow")
    age) ;; 40

(-> (pirate-by-name "Davy Jones")
    age) ;; NullPointerException    clojure.lang.Numbers.ops (Numbers.java:1018)



(defrecord Some [v])

(defrecord None [])

(defn option [v]
  (if v
    (Some. v)
    (None.)))


(extend-protocol fkp/Functor
  Some
  (fmap [f g]
    (Some. (g (:v f))))
  None
  (fmap [_ _]
    (None.)))



(->> (option (pirate-by-name "Jack Sparrow"))
     (fkc/fmap age)) ;; #library_design.option.Some{:v 40}

(->> (option (pirate-by-name "Davy Jones"))
     (fkc/fmap age)) ;; #library_design.option.None{}


(->> (option (pirate-by-name "Jack Sparrow"))
     (fkc/fmap age)
     (fkc/fmap inc)
     (fkc/fmap #(* 2 %))) ;; #library_design.option.Some{:v 82}

(->> (option (pirate-by-name "Davy Jones"))
     (fkc/fmap age)
     (fkc/fmap inc)
     (fkc/fmap #(* 2 %))) ;; #library_design.option.None{}


(some-> (pirate-by-name "Davy Jones")
        age
        inc
        (* 2)) ;; nil


(->> (i/future (pirate-by-name "Jack Sparrow"))
     (fkc/fmap age)
     (fkc/fmap inc)
     (fkc/fmap #(* 2 %))) ;; #<Future@7e49c82a: #<Success@6b807e14: 82>>



;; Identity
(= (fkc/fmap identity (option 1))
   (identity (option 1))) ;; true


;; Composition
(= (fkc/fmap (comp identity inc) (option 1))
   (fkc/fmap identity (fkc/fmap inc (option 1)))) ;; true
