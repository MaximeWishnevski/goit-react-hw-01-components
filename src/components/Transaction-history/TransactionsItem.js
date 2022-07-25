import Transaction from "./Transaction";
import styles from './TransactionTable.module.css'

export default function TransactionItem({items}) { 
  return (
    <table className={styles.table}>
      <thead >
        <tr>
          <th className={styles.title}>TYPE</th>
          <th className={styles.title}>AMOUNT</th>
          <th className={styles.title}>CURRENCY</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item =>
          <tr key={item.id}>
            <Transaction
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        )}
      </tbody>
    </table>
  );
}