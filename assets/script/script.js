const formEl = document.querySelector('#form');

const renderTimezone = (data, country1) => {
    //Jag kan inte använda country1 som egentligen är samma, som country4 blir, trots att jag skickar in den. Därför plockar jag ut den igen (om du undrar).
    const country4 = document.querySelector('#countryInput1');
    const choosenCountry = country4.options[country4.selectedIndex].text;
    //save all names from the choosen country in a new array
    const timezoneNames = data.data.map(timezone => timezone.namedays[country1]);
    document.querySelector('#todayNames').innerHTML = `
        <div class="content-container" role="container">
            <h2>Today's namedays in ${choosenCountry}:</h2>
            <p>${timezoneNames}</p>
        </div>
    `;
    //reset input fields
    formEl.reset();
};


const renderNamesDate = (data, name) => {
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
    //reset input fields
    formEl.reset();
};


const renderDateNames = (data, country3, day, month) => {
    const country4 = document.querySelector('#countryInput3');
    const choosenCountry = country4.options[country4.selectedIndex].text;
    //Loop array and return names after choosen country. 
    const names = data.data.map(name => name.namedays[country3]);
    document.querySelector('#dateNames').innerHTML = 
    `
        <div class="content-container" role="container">
            <h2>Namedays in ${choosenCountry} ${day}/${month} is:</h2>
            <p>${names}</p>
        </div>
    `;
    formEl.reset();
};

 //Alert error message
const errorWarning = (err) => {
    alert('No response from server, did you fill in requested fields?')
};

// Add eventlistener
formEl.addEventListener('click', e => {

    //get input values
    const timezone = formEl.timezoneInput.value;
    const name = formEl.nameInput.value;
    const country1 = formEl.countryInput1.value;
    const country2 = formEl.countryInput2.value;
    const country3 = formEl.countryInput3.value;
    const day =  formEl.day.value;
    const month = formEl.month.value;

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
                errorWarning(err);
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
                errorWarning(err);
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
                errorWarning(err);
            });
    }  
 });
