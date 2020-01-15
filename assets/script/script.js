const renderTimezone = (data, country1) => {
    //save all names from the choosen country in a new array
    const timezoneNames = data.data.map(timezone => timezone.namedays[country1]);
    console.log(data);
    console.log(timezoneNames);
    document.querySelector('#todayNames').innerHTML = `
        <div class="content-container" role="container">
            <h2>Today's namedays:</h2>
            <p>${timezoneNames}</p>
        </div>
    `;
    //reset input fields
    document.querySelector('#timezoneInput').value = 'Timezone';
    document.querySelector('#countryInput1').value = 'Country';
};


const renderNamesDate = (data, name) => {
    //reset input fields
    document.querySelector('#date').innerHTML = '';
    document.querySelector('#nameInput').value = 'Name';
    document.querySelector('#countryInput2').value = 'Country';
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
        document.querySelector('#date').innerHTML = `
            <div class="content-container" role="container">
                <h2 class="no-nameDay">${name} has no nameday in ${data['country name']}.</h2>
            </div>
        `;
    }
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

 //alert error message
const errorWarning = () => {
    alert('Problem, did you fill in all requested fields?')
};

const catchError = (err) => {
    alert('Problem, did you fill in all requested fields?', err)
};

// Add eventlistener
document.querySelector('#form').addEventListener('click', e => {
    e.preventDefault();

    //get input values
    const timezone = document.querySelector('#timezoneInput').value;
    const name = document.querySelector('#nameInput').value;
    const country1 = document.querySelector('#countryInput1').value;
    const country2 = document.querySelector('#countryInput2').value;
    const country3 = document.querySelector('#countryInput3').value;
    const day = document.querySelector('#day').value;
    const month = document.querySelector('#month').value;

    //see wich button was clicked
    if(e.target.id === "btn1"){
        getTimezone(country1, timezone)
        .then(data => {
            if(200){
                renderTimezone(data, country1);
            }else{
                errorWarning();
            }
        })
        .catch((err) => {
            catchError(err);
        }); 
    }else if(e.target.id === "btn2"){
        getNameDay(name, country2)
        .then(data => {
            if(200){
                renderNamesDate(data, name);
            }else{
                errorWarning();
            }
        })
        .catch(err => {
            catchError(err);
        });
    }else if(e.target.id === "btn3"){
        getNames(country3, day, month)
        .then(data => {
            if(200){
                renderDateNames(data, country3, day, month);
            }else{
                errorWarning();
            }
        })
        .catch(err => {
            catchError(err);
        });
    }  
 });

