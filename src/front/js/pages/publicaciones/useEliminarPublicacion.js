//./pages/publicaciones/useEliminarPublicacion.js
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import { useShowPopup } from "../../component/common/popupx";

export const useEliminarPublicacion = () => {
    const navigate = useNavigate();
    const { showPopupError, showPopupSuccess } = useShowPopup();
    const { actions } = useContext(Context);

    const eliminarServicio = (servicio_id) => {
        const url = `http://127.0.0.1:3001/api/servicios/${servicio_id}`;
        const opts = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(url, opts)
            .then(response => {
                if (response.status === 204) {
                    showPopupSuccess('La publicación se eliminó correctamente');
                    actions.getServicios();
                    navigate("/publicaciones");
                } else if (response.status === 400) {
                    showPopupError('La publicación no puede ser eliminada ya que tiene imágenes asociadas.');
                } else {
                    showPopupError('Error al eliminar el servicio');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        {
            eliminarServicio
        }
    );

}

// export const useEliminarImagen = () => {

//     const { showPopupError, showPopupSuccess } = useShowPopup();
//     const { actions } = useContext(Context);

//     const eliminarImagen (servicio_id) => {

//     }

// }