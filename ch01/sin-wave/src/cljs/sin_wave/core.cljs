(ns sin-wave.core)

(defn main [])


(.log js/console "hello clojurescript")


(def canvas  (.getElementById js/document "myCanvas"))
(def ctx     (.getContext canvas "2d"))


;; Clear canvas before doing anything else
(.clearRect ctx 0 0 (.-width canvas) (.-height canvas))



;; Creating time

(def interval    js/Rx.Observable.interval)
(def time        (interval 10))


(-> time
    (.take 5)
    (.subscribe (fn [n]
                  (.log js/console n))))


(defn deg-to-rad [n]
  (* (/ Math/PI 180) n))

(defn sine-coord [x]
  (let [sin (Math/sin (deg-to-rad x))
        y   (- 100 (* sin 90))]
    {:x   x
     :y   y
     :sin sin}))


(.log js/console (str (sine-coord 50)))
;;{:x 50, :y 31.05600011929198, :sin 0.766044443118978}


(def sine-wave
  (.map time sine-coord))


(-> sine-wave
    (.take 5)
    (.subscribe (fn [xysin]
                  (.log js/console (str xysin)))))

;; {:x 0, :y 100, :sin 0}
;; {:x 1, :y 98.42928342064448, :sin 0.01745240643728351}
;; {:x 2, :y 96.85904529677491, :sin 0.03489949670250097}
;; {:x 3, :y 95.28976393813505, :sin 0.052335956242943835}
;; {:x 4, :y 93.72191736302872, :sin 0.0697564737441253}


(defn fill-rect [x y colour]
  (set! (.-fillStyle ctx) colour)
  (.fillRect ctx x y 2 2))

(-> sine-wave
    (.take 600)
    (.subscribe (fn [{:keys [x y]}]
                  (fill-rect x y "orange"))))



;; More colors

(def colour (.map sine-wave
                  (fn [{:keys [sin]}]
                    (if (< sin 0)
                      "red"
                      "blue"))))


(-> (.zip sine-wave colour #(vector % %2))
    (.take 600)
    (.subscribe (fn [[{:keys [x y]} colour]]
                  (fill-rect x y colour))))



;; Making it reactive

(def red  (.map time (fn [_] "red")))
(def blue (.map time (fn [_] "blue")))


(def concat     js/Rx.Observable.concat)
(def defer      js/Rx.Observable.defer)
(def from-event js/Rx.Observable.fromEvent)


(def mouse-click (from-event canvas "click"))


(def cycle-colour
  (concat (.takeUntil red mouse-click)
          (defer #(concat (.takeUntil blue mouse-click)
                          cycle-colour))))


(-> (.zip sine-wave cycle-colour #(vector % %2))
    (.take 600)
    (.subscribe (fn [[{:keys [x y]} colour]]
                  (fill-rect x y colour))))
