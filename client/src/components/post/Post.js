import "./Post.css";
import { MdMoreVert } from "react-icons/md";
import { Users } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLike] = useState(false);
  const [user, setUser] = useState({});
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };

    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <Link to={`/profile/${user.username}`}>
              <img
                src={user.profilePicture || PF + "person/2.jpeg"}
                alt="profile"
                className="post-profile-img"
              />
            </Link>
            <span className="post-username">{user.username}</span>
            <span className="post-date">{format(post.createdAt)}</span>
          </div>
          <div className="post-top-right">
            <MdMoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-test">{post?.desc}</span>
          <img src={PF + post.img} alt="post" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img
              src="/assets/like.png"
              alt="like"
              className="like-icon"
              onClick={likeHandler}
            />
            <img
              src="/assets/heart.png"
              alt="like"
              className="like-icon"
              onClick={likeHandler}
            />
            <div className="post-like-counter">{like} people liked this</div>
          </div>
          <div className="post-bottom-right">
            <div className="post-comment-text">{post.comment} Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
