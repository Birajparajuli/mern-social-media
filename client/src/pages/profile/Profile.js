import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users?username=biraj`);
      setUser(res.data);
    };

    fetchUser();
  }, []);
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
              <h4 className="profile-info-name">{user.username}</h4>
              <span className="profile-info-desc">{user.desc}</span>
            </div>
          </div>

          <div className="profile-right-bottom">
            <Feed username="biraj" />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}
