import { useEffect } from 'react';
import './App.css';
import { useCrud } from './hooks/useCrud';
import { FormUser } from './components/FormUser';
import { CardUser } from './components/CardUser';

function App() {
    const url = 'https://users-crud.academlo.tech/';

    const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);

    useEffect(() => getUsers('/users/'), []);

    return (
        <div>
            <h1>Users C.R.U.D.</h1>

            <FormUser createUser={createUser} />

            <div>
                {users?.map(user => (
                    <CardUser key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default App;
