import { fetchPhotos } from "./api/mediaApi";

const App = () => {
  return (
    <div className="h-screen text-white w-full bg-gray-950">
      <button onClick={ async () => {
        const data = await fetchPhotos('dog');
        console.log(data.results);
      }}>Get Photos</button>
    </div>
  );
}

export default App;
