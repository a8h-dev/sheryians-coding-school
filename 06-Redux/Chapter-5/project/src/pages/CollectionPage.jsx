import { useDispatch, useSelector } from 'react-redux';
import CollectionCard from '../components/CollectionCard';
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {

    const collection = useSelector(state => state.collection.items)
    const dispatch = useDispatch()
    const clearAll = () => {
        dispatch(clearCollection());
    }

  return (
    <div className='px-10 py-6 overflow-auto'>
        <div className='flex justify-between mb-6'>
        {collection.length>0 ? <div className='flex w-full justify-between mb-6'><h2 className='text-xl font-medium'>
            Your Collection
        </h2> <button
        onClick={() => {
            clearAll();
        }}
        className='bg-red-600 active:scale-95 transition px-5 cursor-pointer py-2 text-base font-medium rounded'
        >Clear Collection</button></div> : <h2 className='w-full text-4xl font-bold text-center'>
            Collection is Empty
        </h2>}
        </div>

        <div className="flex justify-center w-full flex-wrap gap-5">
      {collection.map((item, idx) => {
        return <div key={idx}>
            <CollectionCard item={item} />
        </div>
      })}
    </div>
    </div>
  );
}

export default CollectionPage;
