import Container from 'Components/Container/Container'
import user from './data/user.json'
import Profile from './Components/Profile/Profile'
import Statistic from './Components/Statistics/Statistics'
import data from './data/data.json'
import dataFriends from './data/friends.json'
import FriendsList from 'Components/Friends/FriendsList'
import transactions from './data/transactions.json'
import TransactionItem from 'Components/Transaction-history/TransactionsItem'

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