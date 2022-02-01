import "./Share.css";
import { MdPermMedia, MdLabel, MdRoom, MdEmojiEmotions } from "react-icons/md";
export default function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src="/assets/person/2.jpeg"
            alt="profile"
            className="share-profile-img"
          />
          <input
            placeholder="What's in your mind, Biraj ?"
            className="share-input"
          />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <MdPermMedia className="share-icon share-1" />
              <span className="share-option-text">Photo or Video</span>
            </div>
            <div className="share-option">
              <MdLabel className="share-icon share-2" />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <MdRoom className="share-icon share-3" />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option ">
              <MdEmojiEmotions className="share-icon share-4" />
              <span className="share-option-text">Feelings</span>
            </div>
          </div>
          <button className="share-btn">Share</button>
        </div>
      </div>
    </div>
  );
}
