import { setupEventListeners } from './event.js';
import { handleSearch } from './handler.js';
import { getElement } from './util.js';

const init = () => {
    setupEventListeners();
    const countryInfo = getElement('#countryInfo');
    const errorMessage = getElement('#errorMessage');
    // Load Belgium by default
    handleSearch('Belgium', countryInfo, errorMessage);
};

window.addEventListener('load', init);
