import PropTypes from "prop-types";
import styles from './Friends.module.css'


export default function Friends(props) { 
  const {avatar,name,isOnline} = props
  return (
    <section>
      <span className={styles.statysOnline} style={{backgroundColor: isOnline ? 'green': 'red'}}></span>
      <img className={styles.imgUser} src={avatar} alt="User avatar" width="30" />
      <h2 className={styles.nameUser}>{name}</h2>
    </section>
  )
}

Friends.propTypes = {
 avatar: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired
}