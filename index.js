document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector('.menu');
    // const layout = document.querySelector('.layout');
    const overlay = document.querySelector('.overlay');
    const menuSVG = document.querySelector('.menu svg path');
    const backbtn = document.querySelector('.button');
    const mbt = document.querySelector('.mbt');
    const menuItems = gsap.utils.toArray('ul li a');
    const navY = document.querySelector('nav');
    const body = document.querySelector('html');
    const xButton = document.querySelector('.x');
    
    

    let menuOpen = false;

    // gsap.set(overlay, {
    //     scaleY: 0
    // })

    //this is for slider effect <--
    gsap.set(overlay, {
        xPercent: -100
    })

    gsap.set(menuItems, {
        yPercent: 100
    })

    gsap.set(navY, {
        xPercent: -100
    })

    const navTl = gsap.timeline({
        defaults: {
            ease: 'power2.inOut',
            duration: 0.8
        }
    });

    navTl
        //this is for slider effect <--
        .to(overlay, {
            xPercent: 0
        }, "+=0")
        // .to(overlay, {
        //     scaleY: 1
        // }, "+=0")
        .to(navY, {
            xPercent: 0,
            duration: 0.5,
        }, "-=0.6")
        // .to(menuSVG, {
        //     fill: 'black'
        // }, "<")
        .to(menuItems, {
            yPercent: 0,
            stagger: 0.04,
            duration: 1
        }, "-=0.75")
        .to(xButton, {
            rotation: 0,
            duration: 0.5,
            // scale: 1.15,
            ease: 'power2.inOut',
        }, "<")
        
    navTl.pause();

    menuBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (!menuOpen) {
            backbtn.classList.add('menu-open');
            mbt.classList.add('menu-open');
            menuSVG.classList.add('menu-open');
            body.classList.add('no-scroll');  // Disable scroll
            navTl.play();
            menuOpen = true;
        } else {
            backbtn.classList.remove('menu-open');
            mbt.classList.remove('menu-open');
            menuSVG.classList.remove('menu-open');
            body.classList.remove('no-scroll');  // Enable scroll
            navTl.reverse();
            menuOpen = false;
        }
    });

    //  // Add this block to close the menu when a link is clicked
    //  menuItems.forEach(link => {
    //     link.addEventListener('click', (event) => {
    //         if (menuOpen) {  // Check if the menu is open
    //             event.preventDefault();  // Prevent default link behavior
    //             backbtn.classList.remove('menu-open');
    //             mbt.classList.remove('menu-open');
    //             menuSVG.classList.remove('menu-open');
    //             body.classList.remove('no-scroll');  // Enable scroll
    //             navTl.reverse();
    //             menuOpen = false;
                
    //             // Allow the menu to close and then navigate
    //             setTimeout(() => {
    //                 window.open(link.href, '_blank');
    //             }, 100);  // Match this delay with the menu closing animation duration
    //         }
    //     });
    // });
});


// og
//     menuBtn.addEventListener('click', (event) => {
//         event.preventDefault();
//         if (!menuOpen) {
//             navTl.play();
//             menuOpen = true;
//         } else {
//             navTl.reverse();
//             menuOpen = false;
//         }
//     })
// })




