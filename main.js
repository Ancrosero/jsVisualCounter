const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = ()=> {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 500

        if(c < target){
            counter.innerText = c + increment;
            setTimeout(updateCounter,1);
        } else {
            counters.innerText = target;
        }
    };
    updateCounter();
})