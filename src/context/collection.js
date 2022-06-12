import { createContext, useEffect, useState } from "react";
import Storage from "../utils/storage";

const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
  const [collectionData, setCollectionData] = useState([]);

  useEffect(() => {
    const collections = new Storage({
      type: localStorage,
      key: "data-collection",
      value: collectionData
    });

    if (collectionData.length !== 0) {
      collections.setDataStorage();
    } else {
      // check data from storage
      const data = collections.getDataStorage();
      if (data) {
        setCollectionData(data);
      }
    }
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
