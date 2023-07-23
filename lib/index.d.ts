/// <reference types="react" />
declare const _default: {
    SimpleFirestoreProvider: import("react").FC<import("react").PropsWithChildren<import("./SimpleFirestoreProvider").ISimpleFirestoreProviderProps>>;
    useCollection: <TCollectionMap extends Record<string, any>>(collectionName: import("./types/utils").Keyof<TCollectionMap>) => {
        loading: boolean;
        collection: import("./types/utils").TypeOfRecordKey<TCollectionMap>[];
        addItem: (item: import("./types/utils").WithoutID<TCollectionMap[import("./types/utils").Keyof<TCollectionMap>]>) => Promise<boolean>;
        removeItems: (ids: string[]) => Promise<boolean>;
    };
};
export default _default;
