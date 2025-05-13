export const fetchCountryData = async (countryName) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        if (!response.ok) throw new Error('Country not found');
        const [data] = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
  }