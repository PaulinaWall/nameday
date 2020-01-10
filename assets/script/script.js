



const renderDate = (data, name) => {
    
    const names = data.results.map(name => name.name);
    const days = data.results.map(day => day.day);
    const months = data.results.map(month => month.month);

    document.querySelector('#date').innerHTML = `
        <div class="content-container">
            <h2>${name}</h2>
            <h3>Name day ${days.join('')}/${months.join('')}</h3>
            <h4>Others who also have name day this day:</h4>
            <p>${names.join(', ')}</p>
        </div>
    `
};

const renderNames = (data, country, day, month) => {
   
    const names = data.data.map(name => name.namedays[country]);

    document.querySelector('#names').innerHTML = `
        <div class="content-container">
            <h2>These names have name day ${day}/${month}:</h2>
            <p>${names}</p>
        </div>
    `
};

// Add eventlistener
document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();

    const name = document.querySelector('#nameInput').value;
    const country = document.querySelector('#countryInput').value;
    const day = document.querySelector('#day').value;
    const month = document.querySelector('#month').value;
    
    getNameDay(name, country)
    .then(data => {
        if(200){
            console.log(data);
            renderDate(data, name);
        }else{
            console.error('not OK');
            //kalla på en warnings funktion med data.message
        }
    })
    .catch(err => {
        //kalla på en warnings funktion med err
        console.error(err);
    });

    getNames(country, day, month)
    .then(data => {
        if(200){
            console.log(data);
            renderNames(data, country, day, month);
        }else{
            console.error('not OK');
            //kalla på en warnings funktion med data.message
        }
    })
    .catch(err => {
        //kalla på en warnings funktion med err
        console.error(err);
    }); 
 });


/*
 let country;
 switch(data.data[0].namedays){
     case "us":
         country = "us";
         break;
     case "at":
         break;
     case "dk":
         break;
     case "fr":
         break;
     case "it":
         break;
     case "sk":
         break; 
     case "cz":
         break;
     case "es":
         break;
     case "pl":
         break;
     case "de":
         break;
     case "fi":
         break;
     case "hu":
         break;
     case "se":
         break;
 }
 */