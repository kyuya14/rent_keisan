'use strict';
// Intersection Observer API
{
    const targets = document.querySelectorAll('.animation');
    const onScrollTarget = document.getElementById('target');
    const totop = document.getElementById('to_top')
    // const targets = document.querySelectorAll('section img');

    function inViewCallback(entries,obs){

        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
    }

    function onScrollCallback(entries,obs){
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                header.classList.add('scrolled')
                totop.classList.add('scrolled')
            } else {
                header.classList.remove('scrolled')
                totop.classList.remove('scrolled')

            }
        })

    }

    const header = document.querySelector('header')

    const options = {
        threshold: 0.5
    }

    const inViewObserver = new IntersectionObserver(inViewCallback,options);

    const onScrollObserver = new IntersectionObserver(onScrollCallback);
    onScrollObserver.observe(onScrollTarget);

    targets.forEach(target => {
        inViewObserver.observe(target);
    });

    totop.addEventListener('click', event => {
        event.preventDefault();
        window.scroll({
            top:0,
            behavior:'smooth'
        })
    })

}