const Card = ({ title, content, date }) => {
  return (
    <>
      <div className="card *:py-2 group">
        <h1>{title}</h1>
        <p className="text-zinc-600">{content}</p>
        <div className="flex justify-between">
          <p className="text-zinc-700">{date}</p>
          <button className="px-4">
            <span className="material-symbols-rounded btn-delete">delete</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
