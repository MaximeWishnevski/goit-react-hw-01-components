import Transacton from "./Transaction";
import styles from './TransactionTable.module.css'

export default function TransactionItem({transaction}) { 
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
        {transaction.map(transactions =>
          <tr key={transactions.id}>
            <Transacton
              type={transactions.type}
              amount={transactions.amount}
              currency={transactions.currency}
            />
          </tr>
        )}
      </tbody>
    </table>
  );
}