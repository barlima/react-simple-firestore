import { useState, useEffect } from "react";

import { Keyof, TypeOfRecordKey, WithoutID } from "./types/utils";
import { useSimpleFirestoreProviderContext } from "./SimpleFirestoreProvider";

import { getAllItems as firestoreGetAllItems } from "./functions/getAllItems";
import { addItem as firestoreAddItem } from "./functions/addItem";
import { removeItems as firestoreRemoveItems } from "./functions/removeItems";

export const useCollection = <TCollectionMap extends Record<string, any>>(
  collectionName: Keyof<TCollectionMap>
): {
  loading: boolean;
  collection: TypeOfRecordKey<TCollectionMap>[];
  addItem: (
    item: WithoutID<TCollectionMap[Keyof<TCollectionMap>]>
  ) => Promise<boolean>;
  removeItems: (ids: string[]) => Promise<boolean>;
} => {
  const { firestore } = useSimpleFirestoreProviderContext();

  const [loading, setLoading] = useState(false);
  const [collection, setCollection] = useState<
    TCollectionMap[Keyof<TCollectionMap>][]
  >([]);

  const initialized = !!firestore;

  const addItem = async (
    item: WithoutID<TCollectionMap[Keyof<TCollectionMap>]>
  ) => {
    if (!initialized) {
      return false;
    }

    const newItem = await firestoreAddItem<TCollectionMap>(
      firestore,
      item,
      collectionName
    );

    if (newItem) {
      setCollection((current) => [...current, newItem]);
    }

    return !!newItem;
  };

  const removeItems = async (ids: string[]) => {
    if (!initialized) {
      return false;
    }

    const success = await firestoreRemoveItems(firestore, ids, collectionName);

    if (success) {
      setCollection((current) =>
        current.filter((item) => item.id && !ids.includes(item.id))
      );
    }

    return success;
  };

  useEffect(() => {
    if (!initialized) {
      return;
    }

    firestoreGetAllItems<TCollectionMap>(firestore, collectionName).then(
      (res) => {
        setCollection(res);
        setLoading(false);
      }
    );
  }, [initialized]);

  return {
    loading,
    collection,
    addItem,
    removeItems,
  };
};
