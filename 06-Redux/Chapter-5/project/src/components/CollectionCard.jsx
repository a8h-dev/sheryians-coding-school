import { useDispatch } from "react-redux";
import { removeCollection, removedToast } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {

  const dispatch = useDispatch();
  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id))
    dispatch(removedToast())
  }

  return (
    <div className="w-[21vw] h-66 bg-white rounded">
      <div className="h-full relative">
        <a href={item.url} target="_blank">
          {item.type == "photo" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}
          {item.type == "video" ? (
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              src={item.src}
            ></video>
          ) : (
            ""
          )}
        </a>
        <div
          id="bottom"
          className="w-full flex gap-2 justify-between items-center px-6 py-10 text-white absolute bottom-0"
        >
          <h2 className="text-sm font-semibold overflow-hidden capitalize">
            {item.title}
          </h2>
          <button
            onClick={() => {
              removeFromCollection(item);
            }}
            className="bg-indigo-900 active:scale-95 cursor-pointer text-white rounded px-3 py-2 font-medium"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
