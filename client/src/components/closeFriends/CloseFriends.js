import "./CloseFriends.css";

export const CloseFriends = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebar-friend">
      <img
        src={PF + user.profilePicture}
        alt=""
        className="sidebar-friend-img"
      />
      <span className="sidebar-friend-name">{user.username}</span>
    </li>
  );
};
