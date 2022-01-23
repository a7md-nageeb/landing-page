//jshint esversion:6

/**
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll("section");
const numsOfSections = sections.length;
const navbarList = document.getElementById('navbar__list');
const menuButton = document.querySelector('.navmenu-but');
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
 // Build menu
 // build the nav
function createListItems() {
  for (let i = 0; i < numsOfSections; i++) {
    const navbarLink = document.createElement('a');
    navbarLink.textContent = sections[i].dataset.nav;
    navbarLink.classList.add('menu__link');
    navbarLink.href = "#" + sections[i].id;
    navbarListItem = document.createElement('li');
    navbarListItem.appendChild(navbarLink);
    navbarList.appendChild(navbarListItem);
  }
}


//calling the function
createListItems();

//creating scroll to anchor
// creating this const here not at the global Variables section because it selects the anchor tags which are created after calling the first function
const navListItems = document.querySelectorAll('a');

function scrollSmoothly(e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
}
for (let i = 0; i < navListItems.length; i++) {
  navListItems[i].addEventListener('click', scrollSmoothly);
}


//Creating scroll Highlight
const navListHeight = navbarList.offsetHeight;

window.addEventListener('scroll', function() {
  let positionTop = window.pageYOffset + navListHeight + 50;

  let current = [];

  [...sections].map(function(item) {
    if (item.offsetTop < positionTop) {
      current.push(item);
    }
  });

  //to get the last item of the array
  lastItem = current[current.length - 1];

  //remove class from all sections and add it to the current section
  sections.forEach(function(elem) {
    elem.classList.remove('your-active-class');
    lastItem.classList.add('your-active-class');
  });

  //remove active class from all links and add it to the current section's link
  navListItems.forEach(function(elem) {
    elem.classList.remove('menu_link_active');
    navListItems[current.length - 1].classList.add('menu_link_active');
  });

});

//Mobile Version nav menu
menuButton.addEventListener('click', function() {
  navbarList.classList.toggle('appear');
});
