import './App.css';

import UsersProfiles from '../src/components/Profiles.js';
import UserList from '../src/components/userList.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// CONTEXT
import UserState from './context/users/UserState';

function App() {
  return (
    <div className="Container  p-4">
      <UserState>
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <UsersProfiles />
          </div>
        </div>
      </UserState>
    </div>
  );
}

export default App;
