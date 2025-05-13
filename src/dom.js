export const displayCountryInfo = (container, country) => {
    const {
        name: { common },
        capital,
        population,
        region,
        flags: { png },
        currencies,
        languages
    } = country;

    const currency = Object.values(currencies)[0]?.name || 'N/A';
    const language = Object.values(languages)[0] || 'N/A';

    // Clear existing content
    container.innerHTML = '';

    // Array of country info to display
    const countryInfo = [
        { element: 'img', src: png, alt: `${common} flag`, isImage: true },
        { label: 'Country', value: common },
        { label: 'Capital', value: capital?.[0] || 'N/A' },
        { label: 'Population', value: population.toLocaleString() },
        { label: 'Region', value: region },
        { label: 'Currency', value: currency },
        { label: 'Language', value: language }
    ];

    // Use forEach to create and append DOM elements
    countryInfo.forEach((info) => {
        if (info.isImage) {
            const img = document.createElement('img');
            img.src = info.src;
            img.alt = info.alt;
            container.appendChild(img);
        } else {
            const p = document.createElement('p');
            const strong = document.createElement('strong');
            strong.textContent = `${info.label}: `;
            p.append(strong);
            p.append(document.createTextNode(info.value));
            container.append(p);
        }
    });
};

export const displayError = (container, message) => {
    container.textContent = message;
};

export const clearError = (container) => {
    container.textContent = '';
};
