const Card = (props) => {
  return (
    <a href={props.elem.url} target="_blank">
            <div className="h-40 w-50 bg-white rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={props.elem.download_url}
                alt="image"
              />
            </div>
            <h2 className="font-bold text-center pt-2 text-lg">
              {props.elem.author}
            </h2>
    </a>
  );
}

export default Card;