// ./component/popupx.js
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

export const useShowPopup = () => {
    const navigate = useNavigate();

    const showPopupInfo = (message) => {
        Swal.fire({
            title: 'Información',
            text: message,
            icon: 'info',
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

    const showPopupCreated = (nombre) => {
        Swal.fire({
            title: 'Registro Creado',
            text: `El registro '${nombre}' ha sido creado exitosamente.`,
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

    const showPopupErrorLogin = ({ mensaje }) => {
        const handleButtonClick = (result) => {
            if (result.isConfirmed) {
                // Redirigir al enlace de creación de proveedor
                navigate('/crear-proveedor');
            } else if (result.isDenied) {
                navigate('/recupera-password')
            } else {
                // Redirigir al Home
                navigate('/login');
            }
        };

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Correo o contraseña incorrecta.',
            showCancelButton: true,
            showDenyButton: true,
            cancelButtonText: 'Volver',
            denyButtonText: 'Recuperar contraseña',
            confirmButtonText: 'Crear nuevo proveedor',
            confirmButtonColor: '#198754',
            denyButtonColor: '#0d6efd',
            reverseButtons: true,
        }).then((result) => handleButtonClick(result));
    };

    return {
        showPopupInfo,
        showPopupError,
        showPopupCreated,
        showPopupUpdated,
        showPopupErrorLogin,
    }
};
