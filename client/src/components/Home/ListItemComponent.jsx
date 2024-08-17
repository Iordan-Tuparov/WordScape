function ListItemComponent(props) {
  return (
    <>
      <div className="card">
        <div className="photo">
          <img src="photo.jpg" alt="photo" />
        </div>
        <div className="user-information">
          <h3 className="username">{props.item.creator}</h3>
          <p className="text">{props.item.text}</p>
          <div className="buttons-wrapper">
            <button>Like</button>
            <button>Dislike</button>
            <button>Comment</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItemComponent;
