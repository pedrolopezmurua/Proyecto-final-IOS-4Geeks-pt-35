// ./pages/faqpage.js

import React from 'react';

const FaqPage = () => {
    return (
        <div className="container">
            <h1 className="my-5">Preguntas Frecuentes</h1>

            <div className="mb-5">
                <h2>¿Cómo puedo hacer un pedido?</h2>
                <p>Puedes hacer un pedido navegando por nuestro catálogo de productos Mac y añadiendo los artículos que desees a tu carrito de compras. Cuando hayas terminado, solo tienes que hacer clic en "Finalizar compra" y seguir los pasos indicados.</p>
            </div>

            <div className="mb-5">
                <h2>¿Qué métodos de pago aceptan?</h2>
                <p>Aceptamos todas las principales tarjetas de crédito y débito, así como PayPal. También puedes pagar con Apple Pay si estás haciendo un pedido desde un dispositivo Apple.</p>
            </div>

            <div className="mb-5">
                <h2>¿Cuánto tiempo tardará en llegar mi pedido?</h2>
                <p>El tiempo de entrega varía en función de la ubicación y del producto que hayas pedido. Normalmente, los pedidos se entregan en un plazo de 3 a 5 días laborables.</p>
            </div>

            <div className="mb-5">
                <h2>¿Qué hago si mi producto llega dañado o defectuoso?</h2>
                <p>Si tu producto llega dañado o defectuoso, por favor, ponte en contacto con nuestro equipo de atención al cliente lo antes posible y te ayudaremos a gestionar la devolución y el reemplazo del producto.</p>
            </div>

            <div className="mb-5">
                <h2>¿Puedo devolver un producto si cambio de opinión?</h2>
                <p>Sí, aceptamos devoluciones en un plazo de 14 días a partir de la fecha de entrega, siempre que el producto esté en su estado original y con su embalaje intacto. Para más información, consulta nuestra política de devoluciones.</p>
            </div>

        </div>
    );
}

export default FaqPage;
