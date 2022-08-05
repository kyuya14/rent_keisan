'use strict';
// Intersection Observer API
{
    const targets = document.querySelectorAll('.animation');
    // const targets = document.querySelectorAll('section img');

    function callback(entries,obs){

        console.log("debug")
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
    }

    const options = {
        threshold: 0.5
    }

    const observer = new IntersectionObserver(callback,options);

    targets.forEach(target => {
        observer.observe(target);
    });

}