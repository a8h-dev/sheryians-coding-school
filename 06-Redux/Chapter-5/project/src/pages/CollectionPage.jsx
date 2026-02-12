import React from 'react';
import { useSelector } from 'react-redux';
import CollectionCard from '../components/CollectionCard';

const CollectionPage = () => {

    const collection = useSelector(state => state.collection.items)

  return (
    <div className="flex justify-center w-full flex-wrap gap-5 px-10 py-6">
      {collection.map((item, idx) => {
        return <div key={idx}>
            <CollectionCard item={item} />
        </div>
      })}
    </div>
  );
}

export default CollectionPage;
