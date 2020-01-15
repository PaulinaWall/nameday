const getTimezone = async (country1, timezone) => {

    const response = await fetch(`https://api.abalin.net/today?timezone=${timezone}&country=${country1}`);

    const data = await response.json();
    return data;
};

const getNameDay = async (name, country2) => {

    const response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=${country2}`);

    const data = await response.json();
    return data;
};

const getNames = async (country3, day, month) => {

    const response = await fetch(`https://api.abalin.net/namedays?country=${country3}&month=${month}&day=${day}`);

    const data = await response.json();
    return data;
};


