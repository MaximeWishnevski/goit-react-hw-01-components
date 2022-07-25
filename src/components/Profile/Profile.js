import PropTypes from "prop-types";
import styles from './Profile.module.css'

export default function Profile(props) {
  const { username,avatar, tag, location,stats } = props;
  
  return (
    <div className={styles.profile}>
      <div>
    <img
          src={avatar}
          width={120}
          alt="User avatar"
          className={styles.avatar}
    />
        <p className={styles.name}>{username}</p>
        <p className={styles.text}>{tag}</p>
        <p className={styles.text}>{location}</p>
  </div>
    
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className="label">Followers</span>
      <span className={styles.quantity}> {stats.followers}</span>
    </li>
    <li  className={styles.item}>
          <span className="label">Views</span>
      <span className={styles.quantity}> {stats.views}</span>
    </li>
    <li  className={styles.item}>
          <span className="label">Likes </span>
          <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired
  })
  }