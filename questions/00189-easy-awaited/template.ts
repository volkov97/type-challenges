type MyAwaitedHelper<T> = T extends Promise<infer K> ? MyAwaitedHelper<K> : T
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer K> ? MyAwaitedHelper<K> : T
