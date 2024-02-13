import './styles/card-user.css';

export const CardUser = ({ user, deleteUser, setEditUser, setIsOpen }) => {
    const formatDate = new Date(user.birthday).toLocaleDateString();

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

            <div className="content">
                <span>Correo </span>
                <br />
                <span>{user.email}</span>
            </div>

            <div className='content'>
                <span>Cumpleaños</span>
                <br />
                <div className='adjust'>
                    <box-icon name='gift'></box-icon>
                    <span>{formatDate}</span>
                </div>
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
