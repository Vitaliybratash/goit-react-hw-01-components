import s from './statistics.module.css'
export const Stats = ({label, percentage}) =>{
    return(
        <li className={s.item}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
        </li>
    )
}