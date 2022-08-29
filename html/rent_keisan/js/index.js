'use strict';

{
    // 定数定義
    const targets = document.querySelectorAll('.animation') // animation class

    function inViewCallback (entries,obs) {
        entries.forEach(entry => {
            // console.log("hoge")
            if(!entry.isIntersecting) {
                return
            }
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
    }

    
    // インスタンス化
    const options = {
        threshold: 0.5
    }
    const inViewObserver = new IntersectionObserver(inViewCallback,options);
    
    targets.forEach(target => {
        inViewObserver.observe(target);
    });
}

