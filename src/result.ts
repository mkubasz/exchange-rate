export type Ok<T> = { ok: true; value: T };
export type OkWithRetry<T> = { ok: true; value: T; retry: false };

export type Err<E> = { ok: false; error: E };
export type Retry = { ok: true; retry: true };

export type Result<T, E> = Ok<T> | Err<E>;
export type ResultWithRetry<T, E> = OkWithRetry<T> | Err<E> | Retry;

export const retry = (): Retry => ({ ok: true, retry: true });

export const okWithRetry = <T>(value: T): OkWithRetry<T> => ({ ok: true, value, retry: false });

export const ok = <T>(value: T): Ok<T> => ({ ok: true, value });

export const err = <E>(error: E): Err<E> => ({ ok: false, error });
