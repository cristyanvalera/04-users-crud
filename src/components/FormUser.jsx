import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './styles/form-user.css';

export const FormUser = ({ createUser, editUser, updateUser, setEditUser }) => {
    const [isOpen, setIsOpen] = useState(true);
    const { handleSubmit, register, reset } = useForm();

    useEffect(() => reset(editUser), [editUser]);

    const submit = (data) => {
        if (editUser) {
            updateUser('/users/', editUser.id, data);
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
        <article className="form-background">
            <form onSubmit={handleSubmit(submit)} className="form-container">
                <div className="form-close">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </div>
                <h2 className="form-title">Nuevo Usuario</h2>

                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} id="email" type="email" />
                </div>

                <div className="form-item">
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} id="password" type="password" />
                </div>

                <div className="form-item">
                    <label htmlFor="first_name">Firstname</label>
                    <input {...register('first_name')} id="first_name" type="texto" />
                </div>

                <div className="form-item">
                    <label htmlFor="last_name">Lastname</label>
                    <input {...register('last_name')} id="last_name" type="texto" />
                </div>

                <div className="form-item">
                    <label htmlFor="birthday">Birthday</label>
                    <input {...register('birthday')} id="birthday" type="date" />
                </div>

                <div>
                    <button className="form-btn">Save</button>
                </div>
            </form>
        </article>
    );
};
