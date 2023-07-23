import {
  collection,
  addDoc,
  updateDoc,
  doc,
  Firestore,
} from "firebase/firestore/lite";

import { Keyof, TypeOfRecordKey, WithoutID } from "../types/utils";

export const addItem = async <TCollectionMap extends Record<string, any>>(
  firestore: Firestore,
  item: WithoutID<TypeOfRecordKey<TCollectionMap>>,
  collectionName: Keyof<TCollectionMap>
): Promise<TypeOfRecordKey<TCollectionMap> | null> => {
  const project = collection(firestore, collectionName);

  try {
    const newDoc = await addDoc(project, item);
    await updateDoc(doc(firestore, collectionName, newDoc.id), {
      id: newDoc.id,
    });

    return { ...item, id: newDoc.id } as TypeOfRecordKey<TCollectionMap>;
  } catch (e) {
    console.error(e);
    return null;
  }
};
