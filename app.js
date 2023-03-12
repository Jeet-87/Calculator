let display = '';

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        try{
            if(e.target.innerHTML == 'AC'){
                display = '';
                document.querySelector('input').value = display;
            }else if(e.target.innerHTML == '='){
                display = eval(display);
                document.querySelector('input').value = display;
            }else if(e.target.innerHTML == 'DE'){
                display = document.querySelector('input').value;
                display = display.slice(0,display.length-1);
                document.querySelector('input').value = display;
            }else{
                display = display + e.target.innerHTML;
                document.querySelector('input').value = display;
            }
        } catch(e){
            display = e.value;
            document.querySelector('input').value = display;
        }
 
        
    })
})
