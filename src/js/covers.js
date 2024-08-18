const scroller = document.querySelector(".marquee");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}
function addAnimation(){
    scroller.setAttribute('data-animated', true);
    const scrollerInner = scroller.querySelectorAll(".marquee-inner");
    const scrollerInnerArray =  Array.from(scrollerInner);
    scrollerInnerArray.forEach((scroller) =>{
        const scrollerContent = Array.from(scroller.children);
        scrollerContent.forEach(item => {
            const duplItem = item.cloneNode(true);
            duplItem.setAttribute('aria-hidden', true);
            scroller.classList.add('duplicated');
            scroller.appendChild(duplItem);
        });
    });
}