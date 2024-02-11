import { useEffect, useState } from 'react';
import './App.css';
import { useCrud } from './hooks/useCrud';
import { FormUser } from './components/FormUser';
import { CardUser } from './components/CardUser';

function App() {
    const [editUser, setEditUser] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const url = 'https://users-crud.academlo.tech/';
    const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);

    useEffect(() => getUsers('/users/'), []);

    const handleOpen = () => {
        setIsOpen(true);
    };

    return (
        <div>
            <h1>Users CRUD</h1>

            <button onClick={handleOpen}>+ Crear nuevo usuario</button>

            <FormUser
                createUser={createUser}
                editUser={editUser}
                updateUser={updateUser}
                setEditUser={setEditUser}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <div>
                {users?.map(user => (
                    <CardUser
                        key={user.id}
                        user={user}
                        deleteUser={deleteUser}
                        setEditUser={setEditUser}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
