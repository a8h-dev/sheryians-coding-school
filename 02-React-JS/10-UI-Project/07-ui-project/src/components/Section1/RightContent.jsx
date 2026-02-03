import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-10 w-2/3 p-6">
      {props.users.map(function(elem, idx){
        return <RightCard color={elem.color} key={idx} id={idx} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
}

export default RightContent;
