document.addEventListener('DOMContentLoaded',function(){
    
    document.querySelector('form').onsubmit = function() {
        
        var myHeaders = new Headers();
        myHeaders.append("apikey", "Yq9Jqrl8EQQKUvJwUEitQago9OIgqbqy");
    
        var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
        };
    
        fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=&base=USD", requestOptions)
        .then(response => response.json())
        .then(data => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[currency];
            if(rate != undefined) {
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
            } else{
                document.querySelector('#result').innerHTML = 'Invalid currency.';
            }
        })
        .catch(error => {
            console.log("Error",error);
        });
        
        return false;
    }

    
});