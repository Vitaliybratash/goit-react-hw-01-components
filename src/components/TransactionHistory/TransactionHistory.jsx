import PropTypes from 'prop-types';
import {Transaction} from './Transaction'
import s from './transaction.module.css'
export const TransactionHistory = ({ items }) => {
  return (
    <table className={s['transaction-history']}>
      <thead > 
        <tr className={s.transactionName}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  )
};
TransactionHistory.prototype = {
        TransactionHistory: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}
