function ListItemComponent(props) {
  const currentAvatar = props.item._owner === props.user._id;

  return (
    <>
      <div className="card">
        <div className="photo">
          <img
            src={
              currentAvatar
                ? `http://localhost:3000${props.user.avatarUrl}`
                : "/guess.png"
            }
            alt="avatar"
          />
          <h3 className="username">{props.item.creator}</h3>
        </div>
        <div className="user-information">
          <p className="text">
            {props.item.text}
            texxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxxtexxx
          </p>
          <div className="buttons-wrapper">
            <div className="show-stats">
              <p>Likes: 0</p>
            </div>
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
