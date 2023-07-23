import React, { PropsWithChildren, createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore/lite";

export interface ISimpleFirestoreProviderProps {
  config: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  };
}

interface ISimpleFirestoreProviderContext {
  firestore: Firestore | null;
}

const SimpleFirestoreContext = createContext<ISimpleFirestoreProviderContext>({
  firestore: null,
});

export const SimpleFirestoreProvider: React.FC<PropsWithChildren<ISimpleFirestoreProviderProps>> = ({
  config,
  children,
}) => {
  const app = initializeApp(config);
  const firestore = getFirestore(app);

  return (
    <SimpleFirestoreContext.Provider value={{ firestore }}>
      {children}
    </SimpleFirestoreContext.Provider>
  );
};

export default SimpleFirestoreProvider;

export const useSimpleFirestoreProviderContext = () =>
  useContext(SimpleFirestoreContext);
