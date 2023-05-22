import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaWhatsapp } from 'react-icons/fa';
import Footer from './footer';



export const WhatsApp = () => {

    return (
        <Button href="https://wa.me/+56977994555?text=Bienvenido%20al%20portal%20donde%20el%20estilo%20y%20la%20funcionalidad%20de%20Apple%20se%20unen,%20¿cuéntame%20como%20te%20puedo%20acompañar?" target="_blank" variant="success">
            <FaWhatsapp size={20} /> WhatsApp
        </Button>
    );
};
