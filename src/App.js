import './App.css';

import UsersProfiles from '../src/components/Profiles.js';
import UserList from '../src/components/userList.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="Container">
      <UserList></UserList>
      <UsersProfiles></UsersProfiles>
    </div>
  );
}

export default App;
