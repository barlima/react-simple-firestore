import { Firestore, deleteDoc, doc } from "firebase/firestore/lite";

export const removeItems = async <TCollection extends string>(
  firestore: Firestore,
  ids: string[],
  collectionName: TCollection
) => {
  try {
    await Promise.all(
      ids.map(async (id) => deleteDoc(doc(firestore, collectionName, id)))
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
