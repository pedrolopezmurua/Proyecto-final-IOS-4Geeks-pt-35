// ./component/validanombre,js

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export function ValidaNombre({ nombreInicial, onChange }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue
    } = useForm();

    useEffect(() => {
        setValue('name', nombreInicial);
    }, [nombreInicial, setValue]);

    const onSubmit = (data) => {
        console.log(data);
    };

    const nombre = watch('name');

    useEffect(() => {
        onChange(nombre);
    }, [nombre, onChange]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder=""
                    type="text"
                    className="form-control"
                    id="nombre"
                    maxLength={100}
                    style={{ width: '300px' }}
                    {...register('name', {
                        required: 'El campo es requerido.',
                        pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: 'Solo se pueden ingresar letras y espacios.'
                        },
                        validate: (value) => {
                            return !(/[0-9\-]/).test(value) || 'No se permiten números ni el símbolo "-"';
                        }
                    })}
                />
                {errors.name && (
                    <p style={{ color: 'red' }}>{errors.name.message}</p>
                )}
            </form>
        </div>
    );
}
