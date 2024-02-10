export const FormUser = () => {
    return (
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
            </div>

            <div>
                <label htmlFor="first_name">Firstname</label>
                <input id="first_name" type="texto" />
            </div>

            <div>
                <label htmlFor="last_name">Lastname</label>
                <input id="last_name" type="texto" />
            </div>

            <div>
                <label htmlFor="birthday">Birthday</label>
                <input id="birthday" type="date" />
            </div>

            <div>
                <button>Save</button>
            </div>
        </form>
    );
};
