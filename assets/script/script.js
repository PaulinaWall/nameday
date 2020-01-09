



const renderDate = data => {
    
    const names = data.results.map(name => name.name);
    const days = data.results.map(day => day.day);
    const months = data.results.map(month => month.month);

    document.querySelector('#date').innerHTML = `
    <h2>Name day ${days.join('')}/${months.join('')}:</h2>
    <h3>Others who also have name day this day:</h3>
    <p>${names.join(', ')}'</p>
    `
};

// Add eventlistener
document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();

    const name = document.querySelector('#nameInput').value;
    //const country = document.querySelector('#countryInput').value;
    
    getNamesDay(name)
    .then(data => {
        if(200){
            console.log(data);
            renderDate(data);
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