import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
import { Posts } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/posts/timeline/61f02fd39d094cc5da65030c"
      );
      console.log(res);
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((p) => {
          return <Post key={p.id} post={p} />;
        })}
      </div>
    </div>
  );
}
