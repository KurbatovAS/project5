
const more = document.querySelectorAll(".product-card__button");
for (const i = 0; i<more.length; i++){
    more[i].addEventListener('click',function(){
        more[i].parentNode.classList.toggle('active')
    })
}