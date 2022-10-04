import s from './friends.module.css'
export const FriendsListItem = ({avatar, name, isOnline = true}) => {
    return (
        <li className={s.item}>
        {isOnline ? <span className={s.status}></span>: <span className={s.statusOfline}></span> }
        <img className="avatar" src={avatar} alt="User avatar" width="48" /> 
        <p className="name">{name}</p>
      </li>
    );
  };
  FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}