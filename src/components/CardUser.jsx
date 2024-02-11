import './styles/card-user.css';

export const CardUser = ({ user, deleteUser, setEditUser }) => {
    const onDelete = () => {
        deleteUser('/users', user.id);
    };

    const onEdit = () => {
        setEditUser(user);
    };

    return (
        <article>
            <h3>{user.first_name} {user.last_name}</h3>

            <ul>
                <li>
                    <span>Correo: </span><span>{user.email}</span>
                </li>

                <li>
                    <span>Cumpleaños: </span><span>{user.birthday}</span>
                </li>
            </ul>

            <div>
                <button onClick={onDelete}>Delete</button>
                <button onClick={onEdit}>Edit</button>
            </div>
        </article>
    );
};
