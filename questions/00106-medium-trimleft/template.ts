type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer P}` ? TrimLeft<P> : S
