const form = document.querySelector('form')

// const h= parseInt(document.querySelector('#height').value)
// const w= parseInt(document.querySelector('#weight').value)
//It is not recommended to take values out of the click event because then when the page loads values will be taken in the variables right away and at that time there is empyt value

form.addEventListener('submit', function(e){
    e.preventDefault() //Stops the default action, doesn't submit right away
    const h= parseInt(document.querySelector('#height').value);
    const w= parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')
     if(h === '' || h<0 || isNaN(h) || w === '' || w<0 || isNaN(w)){
        result.innerHTML = "Please give valid values"
     }
     else {
        const bmi = (w / ((h*h)/10000)).toFixed(2)
        if (bmi < 18.6){
            result.innerHTML = `${bmi} - Underweight`
        }
        else if (bmi >=19.6 && bmi <= 24.9){
            result.innerHTML = `${bmi} - Normal weight`
        }
        else if (bmi > 24.9){
            result.innerHTML = `${bmi} - Overweight`
        }
     }
})