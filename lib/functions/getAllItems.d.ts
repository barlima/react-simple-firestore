import { Firestore } from "firebase/firestore/lite";
import { Keyof, TypeOfRecordKey } from "../types/utils";
export declare const getAllItems: <TCollectionMap extends Record<string, any>>(firestore: Firestore, collectionName: Keyof<TCollectionMap>) => Promise<TypeOfRecordKey<TCollectionMap>[]>;
