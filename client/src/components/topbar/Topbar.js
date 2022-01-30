import "./Topbar.css";
import { MdSearch, MdPerson, MdChat, MdNotifications } from "react-icons/md";

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">SocialHub</span>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
          <MdSearch />
          <input placeholder="Search SocialHub... " className="search-input" />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <MdPerson />
            <span className="topbar-icon-badge">3</span>
          </div>
          <div className="topbar-icon-item">
            <MdChat />
            <span className="topbar-icon-badge">3</span>
          </div>
          <div className="topbar-icon-item">
            <MdNotifications />
            <span className="topbar-icon-badge">3</span>
          </div>
        </div>
        <img src="/assets/person/2.jpeg" alt="profile" className="topbar-img" />
      </div>
    </div>
  );
}
