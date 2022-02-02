import "./RightBar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function RightBar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbar-title">User Information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">Kathmandu</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">Sindhupalchok</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">Single</span>
          </div>

          <h4 className="rightbar-title">User Friends</h4>
          <div className="rightbar-followings">
            <div className="rightbar-following">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="rightbar-following-img"
              />
              <span className="rightbar-following-name">Jhon Doe</span>
            </div>
            <div className="rightbar-following">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="rightbar-following-img"
              />
              <span className="rightbar-following-name">Jhon Doe</span>
            </div>
            <div className="rightbar-following">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="rightbar-following-img"
              />
              <span className="rightbar-following-name">Jhon Doe</span>
            </div>
            <div className="rightbar-following">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="rightbar-following-img"
              />
              <span className="rightbar-following-name">Jhon Doe</span>
            </div>
            <div className="rightbar-following">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="rightbar-following-img"
              />
              <span className="rightbar-following-name">Jhon Doe</span>
            </div>
            <div className="rightbar-following">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="rightbar-following-img"
              />
              <span className="rightbar-following-name">Jhon Doe</span>
            </div>
          </div>
          <a href="https://projectiii.vercel.app">
            <img className="rightbar-ad-img" src="/assets/ad.png" alt="ad" />
          </a>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
