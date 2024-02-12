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
        <article className='card'>
            <h3 className='card-title'>{user.first_name} {user.last_name}</h3>

            <hr />

            <div className='content'>
                <p>
                    <span>Correo </span>
                    <br />
                    <span>{user.email}</span>
                </p>

                <br />

                <p>
                    <span>Cumpleaños</span>
                    <br />
                    <div className='adjust'>
                        <box-icon name='gift'></box-icon>
                        <span>{user.birthday}</span>
                    </div>
                </p>
            </div>

            <hr />

            <footer className='footer'>
                <button onClick={onDelete} className='btn btn-danger'>
                    <box-icon name='trash'></box-icon>
                </button>

                <button onClick={onEdit} className='btn'>
                    <box-icon name='edit-alt'></box-icon>
                </button>
            </footer>
        </article>
    );
};
