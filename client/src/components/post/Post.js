import "./Post.css";
import { MdMoreVert } from "react-icons/md";
import { Users } from "../../dummyData";
import { useState } from "react";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="profile"
              className="post-profile-img"
            />
            <span className="post-username">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
            <MdMoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-test">{post?.desc}</span>
          <img src={post.photo} alt="post" className="post-img" />
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
