function getUserOS() {
    let osName = '';
    
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf('Windows') != -1)
        osName = 'Windows';
    else if (userAgent.indexOf('Mac') != -1)
        osName = 'Mac';
    else 
        osName = 'your System';

    return osName
};

const downloadBtns = document.getElementsByClassName('download-tag');
for (let btn of downloadBtns) {
    if (window.screen.width < 1024) 
        btn.textContent = 'Download from Google Play';
    else {
        const osName = getUserOS();
        btn.textContent = 'Download for ' + osName || 'your System';
    }
};

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
};

function observerCallback(elements, observer) {
    elements.forEach(elem => {
        if (elem.isIntersecting && !elem.target.classList.contains('animate-fade-in-scroll')) 
            elem.target.classList.add('animate-fade-in-scroll');
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
const fadeElements = document.querySelectorAll('.feature-card');
fadeElements.forEach(elem => observer.observe(elem));

const sideMenu = document.getElementById('side-menu');
document.querySelector('.hamburger-menu-btn')
.addEventListener('click', (event) => {
    sideMenu.classList.remove('hidden');
    // setTimeout(() => (sideMenu.classList.remove('translate-x-[22rem]')), 10);
    setTimeout(() => {
        sideMenu.style.transform = 'translateX(0rem)';
    }, 10);
});

document.querySelector('.close-menu-btn')
.addEventListener('click', (event) => {
    // sideMenu.classList.add('translate-x-[22rem]');
    sideMenu.style.transform = 'translateX(22rem)';
    setTimeout(() => (sideMenu.classList.add('hidden')), 500);
});