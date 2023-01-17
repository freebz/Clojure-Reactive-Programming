;; Functors

(defprotocol Functor
  (fmap [fv g]))


(= (fmap a-functor identity)
   (identity a-functor))


(= (fmap a-functor (comp f g))
   (fmap (fmap a-functor g) f))
