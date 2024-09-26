type Whitespace = ' ' | '\n' | '\t'
type Trim<S extends string> =
    S extends `${Whitespace}${infer P}`
      ? Trim<P>
      : S extends `${infer K}${Whitespace}`
        ? Trim<K>
        : S
