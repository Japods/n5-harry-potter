import { apiClient } from "./apiClient";

const BASE_URL = "https://api.potterdb.com/v1";

export const getCharacters = async () => {
    return await apiClient(`${BASE_URL}/characters`);
};