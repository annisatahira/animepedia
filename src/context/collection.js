import { createContext, useEffect, useState } from "react";
import Storage from "../utils/storage";

const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
  const [collectionData, setCollectionData] = useState(
    Storage.getDataStorage({ type: localStorage, key: "data-collection" })
  );

  useEffect(() => {
    Storage.setDataStorage({
      type: localStorage,
      key: "data-collection",
      value: collectionData
    });
  }, [collectionData]);

  console.log({ collectionData });

  return (
    <CollectionContext.Provider
      value={{
        collectionData: collectionData,
        setCollectionData: setCollectionData
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
export default CollectionContext;
