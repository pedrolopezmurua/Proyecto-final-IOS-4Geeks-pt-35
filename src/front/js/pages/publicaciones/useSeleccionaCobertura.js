//./pages/publicaciones/useSeleccionaCobertura.js
import { useState } from "react";
import { useShowPopup } from "../../component/common/popupx";
import { AllRegionesYcomunas } from "../../component/regionesYcomunas";

export const useSeleccionaCobertura = () => {
    const RegionesYcomunas = AllRegionesYcomunas;
    const { showPopupError } = useShowPopup();

    const [region, setRegion] = useState("");
    const [comuna, setComuna] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedComunas, setSelectedComunas] = useState([]);
    const [todoChileSelected, setTodoChileSelected] = useState(false);
    const [coberturaSeleccionada, setCoberturaSeleccionada] = useState(false);


    const handleRegionChange = (e) => {
        const selectedRegion = e.target.value;
        setRegion(selectedRegion);
        setComuna("");
        setSelectedRegion(selectedRegion);
        if (selectedRegion === "Todo Chile") {
        } else {
            setTodoChileSelected(false);
        }
    };
    const handleComunaChange = (e) => {
        if (todoChileSelected) {
            setComuna("")
        } else {
            const selectedComuna = e.target.value;
            setComuna(selectedComuna);
        }
    };
    const handleAddComuna = () => {
        if (region === "") {
            showPopupError("Debes seleccionar al menos una región");
            return;
        }
        if (comuna === "" && region !== "Todo Chile") {
            showPopupError("Debes seleccionar al menos una comuna");
            return;
        }
        if (selectedComunas && selectedRegion) {
            if (region === "Todo Chile") {
                setSelectedComunas([
                    {
                        region: "Todo Chile",
                        comunas: [],
                    },
                ]);
            } else {
                const existingRegion = selectedComunas.find(
                    (item) => item.region === selectedRegion
                );
                if (existingRegion) {
                    const updatedComunas = [...existingRegion.comunas, comuna];
                    const updatedRegion = {
                        ...existingRegion,
                        comunas: updatedComunas,
                    };
                    const updatedSelectedComunas = selectedComunas.map((item) => {
                        if (item.region === selectedRegion) {
                            return updatedRegion;
                        }
                        return item;
                    });
                    setSelectedComunas(updatedSelectedComunas);
                } else {
                    setSelectedComunas([
                        ...selectedComunas,
                        {
                            region: selectedRegion,
                            comunas: [comuna],
                        },
                    ]);
                }
            }
            setComuna("");
            if (region !== "") {
                setCoberturaSeleccionada(true);
            }
        }
    };
    const handleRemoveComuna = (index) => {
        const updatedSelectedComunas = selectedComunas.filter((item, i) => i !== index); // Filtra los elementos de selectedComunas y crea un nuevo array sin el elemento en el índice proporcionado
        setSelectedComunas(updatedSelectedComunas); // Actualiza el estado selectedComunas con el nuevo array sin el elemento eliminado
        if (updatedSelectedComunas.length === 0) {
            setCoberturaSeleccionada(false);
        }
    };

    return (
        {
            selectedComunas,
            setSelectedComunas,
            selectedRegion,
            region,
            comuna,
            todoChileSelected,
            RegionesYcomunas,
            handleRegionChange,
            handleComunaChange,
            handleAddComuna,
            handleRemoveComuna,
            coberturaSeleccionada,
            setCoberturaSeleccionada
        }
    );
}
