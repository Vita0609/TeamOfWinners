const navLink = document.querySelector('.header-menu-link');
const dropdownMenu = document.querySelector('.header-menu-list')
const navBurger = document.querySelector('.burger-btn');
const overlayMenu = document.querySelector('.burger-menu');
const closeMenuBtn = document.querySelector('.close-btn');
const orderProjectBtn = document.querySelector('.burger-order-btn');
const overlayMenuList = document.querySelector('.burger-menu-list');

navLink.addEventListener('click', toggleDropdown);
navBurger.addEventListener('click', openOverlay);
closeMenuBtn.addEventListener('click', closeOverlay);
dropdownMenu.addEventListener('click', toggleDropdown);
orderProjectBtn.addEventListener('click', closeOverlay);
overlayMenuList.addEventListener('click', closeOverlay);

document.body.addEventListener('click', event => {
    if (!dropdownMenu.classList.contains('visually-hidden') && !event.target.classList.contains('header-menu-link')) {
        toggleDropdown();
    }
});

document.addEventListener('keydown', event => {
    if (event.key ==='Escape' && !dropdownMenu.classList.contains('visually-hidden')) {
        toggleDropdown();
    }
});

const dropdownAppearEffect = new KeyframeEffect(
    dropdownMenu,
    [{ opacity: "0",
      transform: "translateY(-100%)"
    },
    { opacity: "1",
      transform: "translateY(0)"
    }],
    { duration: 250 });

const dropdownDisappearEffect = new KeyframeEffect(
    dropdownMenu,
    [{ opacity: "1",
      transform: "translateY(0)"
    },
    { opacity: "0",
      transform: "translateY(-100%)"
    }],
    { duration: 250 });

const dropdownAppearAnim = new Animation(
    dropdownAppearEffect,
    document.timeline
);

const dropdownDisappearAnim = new Animation(
    dropdownDisappearEffect,
    document.timeline
);

const overlayOpenEffect = new KeyframeEffect(
    overlayMenu,
    [{ transform: "translateX(100%)"
    },
    { transform: "translateX(0)"
    }],
    { duration: 250 }
);

const overlayCloseEffect = new KeyframeEffect(
    overlayMenu,
    [{ transform: "translateX(0)"
    },
    { transform: "translateX(100%)"
    }],
    { duration: 250 }
);

const overlayOpenAnim = new Animation(
    overlayOpenEffect,
    document.timeline
);

const overlayCloseAnim = new Animation(
    overlayCloseEffect,
    document.timeline
);

function toggleDropdown() {  
    if (dropdownMenu.classList.contains('visually-hidden')) {   
        dropdownAppearAnim.play();
        dropdownMenu.classList.remove('visually-hidden');
        return;
    }
    dropdownDisappearAnim.play();
    setTimeout(() => {
        dropdownMenu.classList.add('visually-hidden');
    }, 250);
}

function openOverlay() {
    overlayMenu.classList.add('is-open');
    overlayOpenAnim.play();
    document.body.style.overflow = 'hidden';
}

function closeOverlay() {
    overlayCloseAnim.play();
    setTimeout(() => {
        overlayMenu.classList.remove('is-open');
    }, 250);
    document.body.style.overflow = '';
}
