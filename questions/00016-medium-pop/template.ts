type Pop<T extends any[]> = T extends [...infer E, infer L] ? E : never
