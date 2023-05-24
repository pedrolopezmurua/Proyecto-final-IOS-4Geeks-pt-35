// ./pages/devolucionespage.js

import React from 'react';

const DevolucionesPage = () => {
    return (
        <div className="container">
            <h1 className="my-5">Política de Devoluciones</h1>

            <div className="mb-5">
                <h2>Derecho de Desistimiento</h2>
                <p>Tienes derecho a desistir de tu compra en un plazo de 14 días naturales sin necesidad de justificación. El plazo de desistimiento expirará a los 14 días naturales del día que tú o un tercero indicado por ti, distinto del transportista, adquirió la posesión material de los bienes.</p>
            </div>

            <div className="mb-5">
                <h2>Para ejercer el derecho de desistimiento, deberás notificarnos</h2>
                <p>Para cumplir el plazo de desistimiento, basta con que la comunicación relativa al ejercicio por tu parte de este derecho sea enviada antes de que venza el plazo correspondiente.</p>
            </div>

            <div className="mb-5">
                <h2>Consecuencias del desistimiento</h2>
                <p>En caso de desistimiento por tu parte, te devolveremos todos los pagos recibidos, incluidos los gastos de entrega (con la excepción de los gastos adicionales resultantes de la elección por tu parte de una modalidad de entrega diferente a la modalidad menos costosa de entrega ordinaria que ofrezcamos) sin ninguna demora indebida y, en todo caso, a más tardar 14 días naturales a partir de la fecha en la que se nos informe de tu decisión de desistir del presente contrato.</p>
            </div>

            <div className="mb-5">
                <h2>Productos exceptuados del derecho de desistimiento</h2>
                <p>El derecho de desistimiento no será aplicable a los contratos que se refieran a la prestación de alguno de los productos siguientes:</p>
                <ul>
                    <li>Artículos personalizados.</li>
                    <li>Artículos desprecintados por el usuario tras la entrega.</li>
                    <li>Artículos que estén íntegramente descargados o reproducidos con carácter inmediato para su uso permanente.</li>
                </ul>
            </div>
        </div>
    );
}

export default DevolucionesPage;
