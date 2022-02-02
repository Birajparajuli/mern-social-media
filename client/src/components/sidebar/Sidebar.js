import "./Sidebar.css";
import {
  MdRssFeed,
  MdBookmarks,
  MdHelpOutline,
  MdEvent,
  MdSchool,
  MdChat,
  MdVideoLibrary,
} from "react-icons/md";
import { CloseFriends } from "../closeFriends/CloseFriends";
import { Users } from "../../dummyData";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <MdRssFeed className="sidebar-icon" />
            <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <MdChat className="sidebar-icon" />
            <span className="sidebar-list-item-text">Chat</span>
          </li>
          <li className="sidebar-list-item">
            <MdVideoLibrary className="sidebar-icon" />
            <span className="sidebar-list-item-text">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <MdBookmarks className="sidebar-icon" />
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <MdHelpOutline className="sidebar-icon" />
            <span className="sidebar-list-item-text">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <MdEvent className="sidebar-icon" />
            <span className="sidebar-list-item-text">Events</span>
          </li>
          <li className="sidebar-list-item">
            <MdSchool className="sidebar-icon" />
            <span className="sidebar-list-item-text">Courses</span>
          </li>
        </ul>
        <button className="sidebar-btn">Show More</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friend-list">
          {Users.map((user) => (
            <CloseFriends id={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
