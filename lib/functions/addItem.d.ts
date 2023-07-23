import { Firestore } from "firebase/firestore/lite";
import { Keyof, TypeOfRecordKey, WithoutID } from "../types/utils";
export declare const addItem: <TCollectionMap extends Record<string, any>>(firestore: Firestore, item: WithoutID<TypeOfRecordKey<TCollectionMap>>, collectionName: Keyof<TCollectionMap>) => Promise<TypeOfRecordKey<TCollectionMap> | null>;
