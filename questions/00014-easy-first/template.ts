type First<T extends any[]> = T extends [] ? never : T[0]

// type a = ['b', 1, 'a', 3]

// type B = First<a>
