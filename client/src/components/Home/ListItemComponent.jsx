function ListItemComponent(props) {
  return (
    <>
      <div className="card">
        <div className="photo">
          <img src={`http://localhost:3000${props.user.avatarUrl}` || '/public/photo.jpg'} alt="avatar" />
          <h3 className="username">{props.item.creator}</h3>
        </div>
        <div className="user-information">
          <p className="text">{props.item.text}texxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxx</p>
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
