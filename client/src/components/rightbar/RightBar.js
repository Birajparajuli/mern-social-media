import "./RightBar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function RightBar() {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <img src="/assets/gift.png" alt="birthday" className="birthday-img" />
          <span className="birthday-text">
            <b>Bibek Dhital</b> and <b> 3 other friends </b>have a birthday
            today !
          </span>
        </div>
        <a href="https://projectiii.vercel.app">
          <img className="rightbar-ad-img" src="/assets/ad.png" alt="ad" />
        </a>
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
