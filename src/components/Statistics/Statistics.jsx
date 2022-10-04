import PropTypes from 'prop-types';
import { Stats } from '../Statistics/Stats';
import s from './statistics.module.css'
export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.sstatistics}>
      {title&&<h2 className={s.title}>{title}</h2>}
      <ul className={s['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <Stats key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
Statistics.prototype = {
    stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};
