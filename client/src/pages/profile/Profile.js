import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                src="/assets/post/9.jpeg"
                alt=""
                className="profile-cover-img"
              />
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="profile-user-img"
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Biraj parajuli</h4>
              <span className="profile-info-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                officia!
              </span>
            </div>
          </div>

          <div className="profile-right-bottom">
            <Feed />
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
}
