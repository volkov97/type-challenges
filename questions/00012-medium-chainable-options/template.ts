type Chainable<R = {}> = {
  option<K extends string, V>(
    key: K & (K extends keyof R ? never : K),
    value: V
  ): Chainable<R & { [key in K]: V }>
  get(): R
}
