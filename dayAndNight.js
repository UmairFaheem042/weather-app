const button =document.querySelector('.appName i')

button.addEventListener('click',()=>{
    // console.log('Hello');
    if(button.classList.contains('ri-moon-line')){
        button.classList.remove('ri-moon-line')
        button.classList.add('ri-sun-line')

        // color change
        document.body.style.backgroundColor = '#171717';
        document.body.style.color = '#f2f2f2';
        document.querySelector('.search').style.backgroundColor = '#1e1e1e';
        document.querySelector('.search').style.color = '#fff';
        document.querySelector('.description').style.backgroundColor = '#1e1e1e';
        let box = document.querySelectorAll('.box');
        box.forEach(e => {
            e.style.backgroundColor = '#1e1e1e'
        })
        
    }
    
    else if(button.classList.contains('ri-sun-line')){
        button.classList.remove('ri-sun-line')
        button.classList.add('ri-moon-line')
        
        // color change
        document.body.style.backgroundColor = '#d8d8d8';
        document.body.style.color = '#171717';
        document.querySelector('.search').style.backgroundColor = '#dfdfdf';
        document.querySelector('.search').style.color = '#171717';
        document.querySelector('.description').style.backgroundColor = '#dfdfdf';

        let box = document.querySelectorAll('.box');
        box.forEach(e => {
            e.style.backgroundColor = '#dfdfdf'
        })
    }
})


// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
//   } else {
//     console.log("Geolocation is not supported by this browser.");
//   }
  
//   function successFunction(position) {
//     console.log(position);
//   }
  
//   function errorFunction() {
//     console.log("Unable to retrieve your location.");
//   }