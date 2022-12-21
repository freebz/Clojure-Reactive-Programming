(ns stock-market-monitor.core
  (:require [rx.lang.clojure.core :as rx]
            [seesaw.core :refer :all])
  (:import (java.util.concurrent TimeUnit)
           (rx Observable)))

(native!)

(def main-frame (frame :title "Stock price monitor"
                       :width 200 :height 100
                       :on-close :exit))

(def price-label       (label "Price: -"))

(config! main-frame :content price-label)

(defn share-price [company-code]
  (Thread/sleep 200)
  (rand-int 1000))

(defn make-price-obj [company-code]
  (rx/return (share-price company-code)))

(defn -main [& args]
  (show! main-frame)
  (let [price-obs (rx/flatmap (fn [_] (make-price-obj "xyz"))
                              (Observable/interval 500 TimeUnit/MILLISECONDS))]
    (rx/subscribe price-obs
                  (fn [price]
                    (text! price-label (str "Price: " price))))))