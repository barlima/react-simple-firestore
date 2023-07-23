export type WithoutID<T> = T extends {
    id: any;
} ? Omit<T, "id"> : T;
export type Keyof<T> = T extends Record<any, any> ? keyof T : never;
export type TypeOfRecordKey<T> = T extends Record<any, any> ? T[Keyof<T>] : never;
