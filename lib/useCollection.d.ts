import { Keyof, TypeOfRecordKey, WithoutID } from "./types/utils";
export declare const useCollection: <TCollectionMap extends Record<string, any>>(collectionName: Keyof<TCollectionMap>) => {
    loading: boolean;
    collection: TypeOfRecordKey<TCollectionMap>[];
    addItem: (item: WithoutID<TCollectionMap[Keyof<TCollectionMap>]>) => Promise<boolean>;
    removeItems: (ids: string[]) => Promise<boolean>;
};
