import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("posts/profile/" + username)
        : await axios.get("posts/timeline/61f0338be300543ff151b920");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {posts.map((p) => {
          return <Post key={p._id} post={p} />;
        })}
      </div>
    </div>
  );
}
