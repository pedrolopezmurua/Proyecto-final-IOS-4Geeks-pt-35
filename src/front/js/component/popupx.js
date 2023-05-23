// ./component/popupx.js

import Swal from 'sweetalert2';

export const showPopupInfo = (message) => {
    Swal.fire({
        title: 'Información',
        text: message,
        icon: 'info',
        confirmButtonText: 'Aceptar'
    });
};

export const showPopupError = (mensaje) => {
    Swal.fire({
        title: 'Error',
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Aceptar'
    });
};

export const showPopupCreated = (nombre) => {
    Swal.fire({
        title: 'Registro Creado',
        text: `El registro '${nombre}' ha sido creado exitosamente.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
};

export const showPopupUpdated = (nombre) => {
    Swal.fire({
        title: 'Registro Modificado',
        text: `El registro '${nombre}' ha sido modificado exitosamente.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
};

