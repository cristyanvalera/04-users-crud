export const CardUser = ({ user }) => {
    return (
        <article>
            <h3>{user.first_name} {user.last_name}</h3>

            <ul>
                <li>
                    <span>Correo: </span><span>{user.email}</span>
                </li>

                <li>
                    <span>Cumpleaño: </span><span>{user.birthday}</span>
                </li>
            </ul>
        </article>
    );
};
