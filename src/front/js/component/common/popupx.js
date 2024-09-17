// ./component/common/popupx.js
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const useShowPopup = () => {
    const navigate = useNavigate();

    const showPopupSuccess = (message) => {
        Swal.fire({
            title: 'Éxito',
            text: message,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    };

    const showPopupError = (mensaje) => {
        Swal.fire({
            title: 'Error',
            text: mensaje,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    };

    const showPopupCreated = (correo) => {
        Swal.fire({
            title: 'Proveedor Creado',
            text: `El usuario '${correo}' ha sido creado exitosamente.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    };

    const showPopupUpdated = (nombre) => {
        Swal.fire({
            title: 'Registro Modificado',
            text: `El registro '${nombre}' ha sido modificado exitosamente.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    };

    const showPopupErrorLogin = (message) => {
        const handleButtonClick = (result) => {
            if (result.isConfirmed) {
                // Redirigir al enlace de creación de proveedor
                navigate('/crear-proveedor');
            } else {
                // Redirigir al Home
                navigate('/login');
            }
        };
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
            showCancelButton: true,
            cancelButtonText: 'Volver',
            confirmButtonText: 'Crear nuevo proveedor',
            confirmButtonColor: '#198754',
            reverseButtons: true,
            footer: '<a href="http://127.0.0.1:3000/recupera-password">Recuperar contraseña</a>'
        }).then((result) => handleButtonClick(result));
    };

    return {
        showPopupSuccess,
        showPopupError,
        showPopupCreated,
        showPopupUpdated,
        showPopupErrorLogin,
    }
};
