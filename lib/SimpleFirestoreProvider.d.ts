import React, { PropsWithChildren } from "react";
import { Firestore } from "firebase/firestore/lite";
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
export declare const SimpleFirestoreProvider: React.FC<PropsWithChildren<ISimpleFirestoreProviderProps>>;
export default SimpleFirestoreProvider;
export declare const useSimpleFirestoreProviderContext: () => ISimpleFirestoreProviderContext;
