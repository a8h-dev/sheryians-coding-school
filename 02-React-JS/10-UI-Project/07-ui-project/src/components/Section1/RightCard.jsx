import RightCardContent from "./RightCardContent";

const RightCard = () => {
  return (
    <div className="h-full overflow-hidden relative w-80 rounded-4xl">
      <img className="h-full w-full object-cover" src="https://i.pinimg.com/736x/9f/24/cf/9f24cf1ba9a7ed0fe0c107a4f466b102.jpg" alt="person-image" />
    <RightCardContent />
    </div>
  );
}

export default RightCard;