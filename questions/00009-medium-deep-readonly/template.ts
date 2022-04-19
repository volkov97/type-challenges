// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends Record<string, unknown>
//     ? DeepReadonly<T[P]>
//     : T[P];
// }

// type DeepReadonly<T> = {
//     readonly [P in keyof T]: keyof T[P] extends object ? T[P] : DeepReadonly<T[P]>;
//   };

type DeepReadonly<T> = keyof T extends never ? T : {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}

// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends Record<string, unknown>
//     ? DeepReadonly<T[P]>
//     : T[P] extends any[] ?
//       DeepReadonly<T[P]> :
//       T[P];
// }
