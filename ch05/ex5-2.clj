;; Implementing tokens

(deftype Token [ch]
  IToken
  (dispose [_]
    (close! ch)))
