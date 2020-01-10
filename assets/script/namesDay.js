
const getNameDay = async (name, country) => {

        const response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=${country}`);

        const data = await response.json();
        return data;
};

const getNames = async (country, day, month) => {

    const response = await fetch(`https://api.abalin.net/namedays?country=${country}&month=${month}&day=${day}`);

    const data = await response.json();
    return data;
    
};
