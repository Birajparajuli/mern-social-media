import "./Online.css";

export default function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbar-friend">
      <div className="rightbar-profile-image-container">
        <img
          src={PF + user.profilePicture}
          alt=""
          className="rightbar-profile-img"
        />
        <span className="rightbar-online"></span>
      </div>
      <span className="rightbar-profile-name">{user.username}</span>
    </li>
  );
}
