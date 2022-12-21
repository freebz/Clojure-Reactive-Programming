// Observer - an Iterator's dual

public interface Iterator<E> {
    boolean hasNext();
    E next();
    void remove();
}


public interface Observer<T> {
    void onCompleted();
    void onError(THrowable e);
    void onNext(T t);
}
