import PropTypes from 'prop-types';
import s from "../Profile/profile.module.css"
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={s.profile}>
      <div className="description">
        <img
          src={
            avatar
              ? avatar
              : 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
          }
          width={100}
          alt="User avatar"
          className="avatar"
        />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}> {followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}> {views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.protoTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
