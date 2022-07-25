import Container from 'components/Container/Container'
import user from './data/user.json'
import Profile from './components/Profile/Profile'
import Statistic from './components/Statistics/Statistics'
import data from './data/data.json'
import dataFriends from './data/friends.json'
import FriendsList from 'components/Friends/FriendsList'
import transactions from './data/transactions.json'
import TransactionItem from 'components/Transaction-history/TransactionsItem'

function App() { 
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic
        title='Upload stats'
        item={data} />
      <FriendsList item={dataFriends} />
      <TransactionItem transaction={transactions}
        type={transactions.type}
        amount={transactions.amount}
        currency={transactions.amount}
      />
      </Container>
    )
}
export default App;