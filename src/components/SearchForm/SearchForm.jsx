import { useState } from "react";
import styles from "./SearchForm.module.css"; // CSS Module: estilos propios de SearchForm

const SerchForm = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault(); // Evitar que recargue la página
    
    const searchValue = search.trim(); // Eliminamos espacios delante y detras en el input del buscador

    if (!searchValue) return; // si esta vacío no hace nada

    onSearch(searchValue);

    setSearch(""); // Limpiar input
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input className={styles.searchInput} type="text" value={search} placeholder='escriba una ciudad' onChange={(e) => setSearch(e.target.value)}>
            </input>
            <button className={styles.searchButton} type="submit">SUBMIT</button> 
        </form>
    )
}

export default SerchForm
