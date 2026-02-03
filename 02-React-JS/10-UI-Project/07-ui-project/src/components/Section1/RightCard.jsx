import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full overflow-hidden shrink-0 relative w-80 rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt="person-image" />
    <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
}

export default RightCard;