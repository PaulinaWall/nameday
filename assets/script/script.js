
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
        `
    });
    //render another message if data.results is empty and don´t have nameday in this country
    if(data.results.length === 0){
        console.log(data.results);
        document.querySelector('#date').innerHTML = `
            <div class="content-container" role="container">
                <h2 class="no-nameDay">${name} has no nameday in ${data['country name']}.</h2>
            </div>
        `
    }
    //reset input fields
    document.querySelector('#nameInput').value = 'Name';
    document.querySelector('#countryInput2').value = 'Country';
};

const renderNames = (data, country3, day, month) => {
    //Loop array and return names after choosen country. 
    const names = data.data.map(name => name.namedays[country3]);
console.log('datum data', data);
    document.querySelector('#dateNames').innerHTML = 
    `
        <div class="content-container" role="container">
            <h2>Namedays in choosen country ${day}/${month} is:</h2>
            <p>${names}</p>
        </div>
    `
    //reset input fields
    document.querySelector('#day').value = 'Day';
    document.querySelector('#month').value = 'Month';
    document.querySelector('#countryInput3').value = 'Country';
};

const emptyNamesDates = () => {
    document.querySelector('#names').innerHTML = '';
    document.querySelector('#date').innerHTML = '';
};

// Add eventlistener
document.querySelector('#form').addEventListener('click', e => {
    e.preventDefault();

    const name = document.querySelector('#nameInput').value;
    const country1 = document.querySelector('#countryInput1').value;
    const country2 = document.querySelector('#countryInput2').value;
    const country3 = document.querySelector('#countryInput3').value;
    const day = document.querySelector('#day').value;
    const month = document.querySelector('#month').value;

    if(e.target.id === "btn1"){
        getTimezone()
        .then(data => {
        if(200){
            console.log(data);
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
                renderNames(data, country3, day, month);
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
 const errorWarning = () => {
    `
        <div class="alert alert-warning" role="alert">
        Fyll i alla fält.
        </div>
    `
};
emptyNamesDates();
const catchError = (err) => {
    document.querySelector('#date').innerHTML = 
    `
        <div class="alert alert-warning" role="alert">
        ${err}
        </div>
    `
};
*/