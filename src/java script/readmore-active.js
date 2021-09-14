
const more = document.querySelectorAll("#myBtn");
for (const i = 0; i<more.length; i++){
    more[i].addEventListener('click',function(){
        more[i].parentNode.classList.toggle('active')
    })
}