import './styles/card-user.css';

export const CardUser = ({ user, deleteUser, setEditUser, setIsOpen }) => {
    const onDelete = () => {
        deleteUser('/users', user.id);
    };

    const onEdit = () => {
        setIsOpen(true);
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
                <button onClick={onDelete}>
                    <box-icon name='trash'></box-icon>
                </button>
                <button onClick={onEdit}>
                    <box-icon name='edit-alt'></box-icon>
                </button>
            </div>
        </article>
    );
};
