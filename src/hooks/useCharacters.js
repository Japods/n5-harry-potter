import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/harryPotterService";

export function useCharacters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadCharacters() {
            try {
                const data = await fetchCharacters();
                console.log("Data HP", data.data)
                setCharacters(data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadCharacters();
    }, []);

    return { characters, loading, error };
}
