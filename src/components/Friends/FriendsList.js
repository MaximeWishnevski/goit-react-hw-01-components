import PropTypes from "prop-types";
import Friends from "./Friends";
import styles from './Frindes.module.css'

export default function FriendsList({item}) {
  return (
    <ul className={styles.FriendsList}>
      {item.map(items =>
        <li className={styles.itemList} key={items.id}>
          <Friends
            isOnline={items.isOnline}
            avatar={items.avatar}
            name={items.name}
            
         />
        </li>
      )}
    </ul>
  )};


FriendsList.propTypes = {
 
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
  }
  ))
}