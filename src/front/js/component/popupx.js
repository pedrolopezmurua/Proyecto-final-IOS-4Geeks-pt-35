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
        const handleButtonClick = (isConfirmed) => {
            if (isConfirmed) {
                // Redirigir al enlace de creación de proveedor
                navigate('/crear-proveedor');
            } else {
                // Redirigir al Home
                navigate('/');
            }
        };

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: mensaje,
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Crear Proveedor',
            reverseButtons: true,
        }).then((result) => handleButtonClick(result.isConfirmed));
    };

    return {
        showPopupInfo,
        showPopupError,
        showPopupCreated,
        showPopupUpdated,
        showPopupErrorLogin,
    }
};
