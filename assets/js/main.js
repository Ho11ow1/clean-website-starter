/*=============== NAV MENU ===============*/
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

/*===== Show =====*/
if(navToggle)
{
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== Hide =====*/
if(navClose)
{
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction()
{
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE HEADER BACKGROUND ===============*/
function scrollHeader()
{
    const header = document.getElementById('header')

    if(this.scrollY >= 50) 
    {
        header.classList.add('sticky-header'); 
    }
    else 
    {
        header.classList.remove('sticky-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/*=============== ACTIVE ELEMENT ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
        
        const navLink = document.querySelector('.nav-link[href*=' + sectionId + ']')
        const navItem = navLink.closest('.nav-item')  // Get the parent nav-item

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link')
            navItem.classList.add('active')  // Add active class to parent
        } else {
            navLink.classList.remove('active-link')
            navItem.classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
