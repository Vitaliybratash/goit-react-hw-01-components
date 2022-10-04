import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;
export const App = () => {
  return (
      <><Profile
        username={username}
        tag={tag}
        avatar={avatar}
        location={location}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </>
  );
};
