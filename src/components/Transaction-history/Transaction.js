import PropTypes from "prop-types";
import styles from './TransactionTable.module.css'

export default function Transacton(props) {
  const {type,amount,currency} = props;
  return (
    <>
      <td className={styles.textInfo}>{type}</td>
      <td className={styles.textInfo}>{amount}</td>
      <td className={styles.textInfo}>{currency}</td>
    </>

  );
};

Transacton.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired
}