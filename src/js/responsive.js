window.addEventListener('load', () => {
    let navToggler = document.getElementById('nav-toggle')
    let mainNav = document.getElementById('main-nav')
    let closeMainNav = document.getElementById('close-main-nav')

    navToggler.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open')
    })

    closeMainNav.addEventListener('click',()=>{
        mainNav.classList.toggle('nav-open')
    })

    // Listen for route changes and close the navigation
    window.addEventListener('popstate', () => {
        mainNav.classList.remove('nav-open');
    });
})