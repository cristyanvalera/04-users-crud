import { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles/form-user.css';

export const FormUser = ({ createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen }) => {
    const { handleSubmit, register, reset } = useForm();

    useEffect(() => reset(editUser), [editUser]);

    const resetAll = () => {
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        });
    };

    const submit = (data) => {
        if (editUser) {
            updateUser('/users/', editUser.id, data);
            setEditUser();
        } else {
            createUser('/users/', data);
        }

        resetAll();
        handleClose();
    };

    const handleClose = () => {
        setIsOpen(false);

        resetAll();
    };

    return (
        <div className={`form-background ${isOpen && 'able'}`}>
            <form onSubmit={handleSubmit(submit)} className="form-container">
                <div onClick={handleClose} className="form-close">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </div>

                <h2 className="form-title">Nuevo Usuario</h2>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" {...register('email')} id="email" type="email" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" {...register('password')} id="password" type="password" />
                </div>

                <div className="form-group">
                    <label htmlFor="first_name">Firstname</label>
                    <input className="form-control" {...register('first_name')} id="first_name" type="texto" />
                </div>

                <div className="form-group">
                    <label htmlFor="last_name">Lastname</label>
                    <input className="form-control" {...register('last_name')} id="last_name" type="texto" />
                </div>

                <div className="form-group">
                    <label htmlFor="birthday">Birthday</label>
                    <input className="form-control" {...register('birthday')} id="birthday" type="date" />
                </div>

                <div className="form-btn-group">
                    <button className="app-btn form-btn">
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </div>
    );
};
