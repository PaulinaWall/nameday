//const URL = 'https://api.abalin.net/getdate?name=John&country=us';

const getNamesDay = async (name) => {

    const response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=us`);

    const data = await response.json();
    return data;
    
};