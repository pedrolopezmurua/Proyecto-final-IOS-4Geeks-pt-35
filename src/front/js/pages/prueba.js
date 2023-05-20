import React from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Prueba = () => {
    // const MySwal = withReactContent(Swal)
    // const showSwalWithLink = () => {
    //     MySwal.fire({
    //         html: (
    //             <HistoryRouter history={browserHistory}>
    //                 <Link to={`${rootPath}/about`} onClick={() => Swal.close()}>
    //                     Navigate to /about
    //                 </Link>
    //             </HistoryRouter>
    //         ),
    //     });
    // };

    // return (
    //     <div>
    //         <h1>Home</h1>
    //         <button onClick={showSwalWithLink}>Show SweetAlert2 modal with Link inside</button>
    //     </div>
    // );
    let navigate = useNavigate();
    function handleClick() {
        navigate("/");
    }
    return (
        <div>
            <button onClick={handleClick}>go home</button>
        </div>
    );
};

