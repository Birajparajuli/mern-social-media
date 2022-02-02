import "./Online.css";

export default function Online({ user }) {
  return (
    <li className="rightbar-friend">
      <div className="rightbar-profile-image-container">
        <img
          src={user.profilePicture}
          alt=""
          className="rightbar-profile-img"
        />
        <span className="rightbar-online"></span>
      </div>
      <span className="rightbar-profile-name">{user.username}</span>
    </li>
  );
}
