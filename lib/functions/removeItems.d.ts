import { Firestore } from "firebase/firestore/lite";
export declare const removeItems: <TCollection extends string>(firestore: Firestore, ids: string[], collectionName: TCollection) => Promise<boolean>;
