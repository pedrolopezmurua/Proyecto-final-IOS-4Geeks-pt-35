// ./component/footer/whatsapp.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsApp = () => {
    return (
        <Button href="https://wa.me/+56977994555?text=Hola%20APPLE%20GEEKS!%20Tengo%20una%20consulta." target="_blank" variant="success">
            <FaWhatsapp size={20} /> WhatsApp
        </Button>
    );
};
