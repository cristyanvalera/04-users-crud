import { useForm } from "react-hook-form";

export const FormUser = ({ createUser }) => {
    const { handleSubmit, register, reset } = useForm();

    const submit = (data) => {
        createUser('/users/', data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="email">Email</label>
                <input {...register('email')} id="email" type="email" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input {...register('password')} id="password" type="password" />
            </div>

            <div>
                <label htmlFor="first_name">Firstname</label>
                <input {...register('first_name')} id="first_name" type="texto" />
            </div>

            <div>
                <label htmlFor="last_name">Lastname</label>
                <input {...register('last_name')} id="last_name" type="texto" />
            </div>

            <div>
                <label htmlFor="birthday">Birthday</label>
                <input {...register('birthday')} id="birthday" type="date" />
            </div>

            <div>
                <button>Save</button>
            </div>
        </form>
    );
};
