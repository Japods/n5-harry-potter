import { create } from "zustand";  // Corregido: Usar import nombrado
import { getCharacters } from '../api/harryPotterService';

export const useCharacterStore = create((set) => ({
    characters: [],
    fetchCharacters: async () => {
        try {
            const data = await getCharacters();
            console.log("Data", data);

            const filteredCharacters = data.data.filter(character => character.attributes.image !== null && character.attributes.image !== "");

            set({ characters: filteredCharacters });
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
    },
}));