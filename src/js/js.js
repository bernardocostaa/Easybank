const btnMenu = document.getElementById('mobile')
const menuMobile = document.getElementById('menu')
const btnMenuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')


btnMenu.addEventListener('click',()=>{
  menuMobile.classList.toggle('ativo')
  btnMenuMobile.classList.toggle('ativo')
  body.classList.toggle('bg-mobile')
})


const elements = document.querySelectorAll("[data-animate]");
const callback = (entries, observer) => {
    const animate = ({ isIntersecting, target }) => {
        if (isIntersecting) {
            target.classList.add("--animated");
            observer.unobserve(target);
        }
    };

    if (entries.length > 1) {
        entries.reduce((acc, entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => animate(entry), acc);
                return acc + 400;
            }
            return acc;
        }, 0);
    } else {
        animate(entries[0]);
    }
};

const isVisible = new IntersectionObserver(callback, { threshold: 0.7 });
elements.forEach(element => isVisible.observe(element));
