document.addEventListener('click', function handleClick(event) {
    if (event.target.parentElement.id =='yellow') {
        event.target.classList.add('flower__fall-down--yellowu');
    }
    else if (event.target.parentElement.id  =='pink') {
        event.target.classList.add('flower__fall-down--pinku');
    }
    else if (event.target.parentElement.id  == 'purple') {
        event.target.classList.add('flower__fall-down--purpleu');
    }
    else{}

  });   
