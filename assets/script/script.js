const renderTimezone = (data, country1) => {
    console.log('timezone data', data);

    const timezoneNames = data.data.map(timezone => timezone.namedays[country1]);

    document.querySelector('#todayNames').innerHTML = `
        <div class="content-container" role="container">
            <h2>Today's namedays:</h2>
            <p>${timezoneNames}</p>
        </div>
    `;

    document.querySelector('#timezoneInput').value = 'Timezone';
    document.querySelector('#countryInput1').value = 'Country';
};

const renderNamesDate = (data, name) => {
    console.log('Datan du behöver', data);
    //loop the array to get info
    data.results.forEach(dataName => {
        document.querySelector('#date').innerHTML = `
            <div class="content-container" role="container">
                <h2>${name}:</h2>
                <h3>has nameday ${dataName.day}/${dataName.month} in ${data['country name']}.</h3>
                <h4>More with nameday this date:</h4>
                <p>${dataName.name}</p>
            </div>
        `;
    });
    //render another message if data.results is empty and don´t have nameday in this country
    if(data.results.length === 0){
        console.log(data.results);
        document.querySelector('#date').innerHTML = `
            <div class="content-container" role="container">
                <h2 class="no-nameDay">${name} has no nameday in ${data['country name']}.</h2>
            </div>
        `;
    }
    //reset input fields
    document.querySelector('#nameInput').value = 'Name';
    document.querySelector('#countryInput2').value = 'Country';
};

const renderDateNames = (data, country3, day, month) => {
    //Loop array and return names after choosen country. 
    const names = data.data.map(name => name.namedays[country3]);
console.log('datum data', data);
    document.querySelector('#dateNames').innerHTML = 
    `
        <div class="content-container" role="container">
            <h2>Namedays in choosen country ${day}/${month} is:</h2>
            <p>${names}</p>
        </div>
    `;
    //reset input fields
    document.querySelector('#day').value = 'Day';
    document.querySelector('#month').value = 'Month';
    document.querySelector('#countryInput3').value = 'Country';
};

// Add eventlistener
document.querySelector('#form').addEventListener('click', e => {
    e.preventDefault();

    const timezone = document.querySelector('#timezoneInput').value;
    const name = document.querySelector('#nameInput').value;
    const country1 = document.querySelector('#countryInput1').value;
    const country2 = document.querySelector('#countryInput2').value;
    const country3 = document.querySelector('#countryInput3').value;
    const day = document.querySelector('#day').value;
    const month = document.querySelector('#month').value;

    if(e.target.id === "btn1"){
        getTimezone(country1, timezone)
        .then(data => {
        if(200){
            console.log(data);
            renderTimezone(data, country1);
        }else{
            console.error('not OK');
            //kalla på en warnings funktion med data.message
            //errorWarning();
        }
        })
        .catch(err => {
            //kalla på en warnings funktion med err
            console.error(err);
            //catchError(err);
        }); 
    }else if(e.target.id === "btn2"){
        getNameDay(name, country2)
        .then(data => {
            if(200){
                renderNamesDate(data, name);
            }else{
                console.error('not OK');
                //kalla på en warnings funktion med data.message
                //errorWarning();
            }
        })
        .catch(err => {
            //kalla på en warnings funktion med err
            console.error(err);
            //catchError(err);
        });
    }else if(e.target.id === "btn3"){
        getNames(country3, day, month)
        .then(data => {
            if(200){
                console.log(data);
                renderDateNames(data, country3, day, month);
            }else{
                console.error('not OK');
                //kalla på en warnings funktion med data.message
                //errorWarning();
            }
        })
        .catch(err => {
            //kalla på en warnings funktion med err
            console.error(err);
            //catchError(err);
        });
    }  
 });

 /*
 const emptyNamesDates = () => {
    document.querySelector('#todayNames').innerHTML = '';
    document.querySelector('#date').innerHTML = '';
    document.querySelector('#dateNames').innerHTML = '';
};
*/

/*
 const errorWarning = () => {
    `
        <div class="alert alert-warning" role="alert">
        Fyll i alla fält.
        </div>
    `
};

const catchError = (err) => {
    document.querySelector('#date').innerHTML = 
    `
        <div class="alert alert-warning" role="alert">
        ${err}
        </div>
    `
};
*/