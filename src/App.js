import './App.css';

import UsersProfiles from '../src/components/Profiles.js';
import UserList from '../src/components/userList.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// CONTEXT
import UserState from './context/users/UserState';

function App() {
  return (
    <div className="Container">
      <UserState>
        <UserList></UserList>
        <UsersProfiles></UsersProfiles>
      </UserState>
    </div>
  );
}

export default App;
