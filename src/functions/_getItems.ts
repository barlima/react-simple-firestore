// export const getItemByIdFromFirebase = async <
//   TItem extends ICollectionTypeMap[ICollectionType]
// >(
//   basket: ICollectionType,
//   id: string
// ): Promise<TItem | null> => {
//   const project = collection(db, basket);
//   const q = query(project, where("id", "==", id));
//   const docsData = await getDocs(q);

//   if (docsData.docs.length === 0) {
//     return null;
//   }

//   return docsData.docs[0].data() as TItem;
// };
