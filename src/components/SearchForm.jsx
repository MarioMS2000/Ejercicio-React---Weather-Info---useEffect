import { useState } from "react"

const SerchForm = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault(); // Evitar que recargue la página
    
    if (!search) return; // si esta vacío no hace nada

    onSearch(search);

    setSearch(""); // Limpiar input
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={search} placeholder='escriba una ciudad' onChange={(e) => setSearch(e.target.value)}>
            </input>
            <button type="submit">SUBMIT</button> 
        </form>
    )
}

export default SerchForm