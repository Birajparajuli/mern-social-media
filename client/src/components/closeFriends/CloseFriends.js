import "./CloseFriends.css";

export const CloseFriends = ({ user }) => {
  return (
    <li className="sidebar-friend">
      <img src={user.profilePicture} alt="" className="sidebar-friend-img" />
      <span className="sidebar-friend-name">{user.username}</span>
    </li>
  );
};
