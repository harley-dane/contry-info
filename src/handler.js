import { fetchCountryData } from './data.js';
import { displayCountryInfo, displayError, clearError } from './dom.js';

export  const  handleSearch = async (countryName, infoContainer, errorContainer) => {
    try {
        const country = await fetchCountryData(countryName);
        clearError(errorContainer);
        displayCountryInfo(infoContainer, country);
    } catch (error) {
        clearError(errorContainer);
        displayError(errorContainer, error.message);
    }
}