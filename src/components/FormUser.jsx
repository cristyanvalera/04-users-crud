import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const FormUser = ({ createUser, editUser, updateUser, setEditUser }) => {
    const { handleSubmit, register, reset } = useForm();

    useEffect(() => reset(editUser), [editUser]);

    const submit = (data) => {
        if (editUser) {
            updateUser('/users', editUser.id, data);
            setEditUser();
        } else {
            createUser('/users/', data);
        }

        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        });
    };

    return (
        <article>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Nuevo Usuario</h2>
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
        </article>
    );
};
