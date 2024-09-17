// ./component/common/protectedroute.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useShowPopup } from './popupx';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');

    const { showPopupError } = useShowPopup();

    useEffect(() => {
        if (!userName) {
            showPopupError('La página es privada, debes estar autenticado para su uso.');
            navigate("/login");
        }
    }, [userName, navigate]);

    return userName ? children : null;
};

export default ProtectedRoute;