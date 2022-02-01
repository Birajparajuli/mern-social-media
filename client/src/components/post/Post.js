import "./Post.css";
import { MdMoreVert } from "react-icons/md";
function Post() {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src="/assets/person/2.jpeg"
              alt="profile"
              className="post-profile-img"
            />
            <span className="post-username">Biraj Parajuli</span>
            <span className="post-date">5 min ago</span>
          </div>
          <div className="post-top-right">
            <MdMoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-test">Hello guys this is my first post !!</span>
          <img src="/assets/post/1.jpeg" alt="post" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src="/assets/like.png" alt="like" className="like-icon" />
            <img src="/assets/heart.png" alt="like" className="like-icon" />
            <div className="post-like-counter">32 people liked this</div>
          </div>
          <div className="post-bottom-right">
            <div className="post-comment-text">10 Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
