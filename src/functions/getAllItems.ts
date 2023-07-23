import { Firestore, collection, getDocs } from "firebase/firestore/lite";
import { Keyof, TypeOfRecordKey } from "../types/utils";

export const getAllItems = async <TCollectionMap extends Record<string, any>>(
  firestore: Firestore,
  collectionName: Keyof<TCollectionMap>
): Promise<TypeOfRecordKey<TCollectionMap>[]> => {
  const project = collection(firestore, collectionName);
  const docsData = await getDocs(project);
  const items = docsData.docs.map((doc) => doc.data());
  return items as TypeOfRecordKey<TCollectionMap>[];
};
