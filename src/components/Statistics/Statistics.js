import styles from './Statistics.module.css';
import PropTypes from 'prop-types';




export default function Statistic({ item,title }) { 
 
  return (
    <section className={styles.statistics}>
      {/* <h2 className={styles.title}>UPLOAD STATS</h2> */}
      {title  && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statlist}>
          {item.map(({ id, label, percentage }) => (
            <li className={styles.item} key={id}>
              <span className={styles.label}>{label}</span>
              <span className={styles.label}>{percentage}%</span>
              </li>
          ))}
       </ul>
  </section>
  );
}


Statistic.propTypes = {
  id:PropTypes.string,
  label: PropTypes.string,
  percentage:PropTypes.number
}