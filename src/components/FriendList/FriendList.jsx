import PropTypes from 'prop-types';
import { FriendsListItem } from "./FriendsListItem";
import s from './friends.module.css'
export const FriendList = ({ friends }) => {
  return (
    <ul className={s['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};
FriendList.protoTypes  ={
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
}

