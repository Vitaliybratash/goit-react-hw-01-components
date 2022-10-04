import s from './transaction.module.css'
export const Transaction = ({ type, amount, currency })=>  {
  return (
    <tr className={s.transactionName}>
      <td className={s.name}>{type}</td>
      <td className={s.name}>{amount}</td>
      <td className={s.name}>{currency}</td>
    </tr>
  );
}
