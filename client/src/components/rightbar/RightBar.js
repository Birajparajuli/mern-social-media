import "./RightBar.css";

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
          <li className="rightbar-friend">
            <div className="rightbar-profile-image-container">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="rightbar-profile-img"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-profile-name">Rohan Dhimal</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-image-container">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="rightbar-profile-img"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-profile-name">Bibek Dhital</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
