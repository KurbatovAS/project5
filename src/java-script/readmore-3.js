const more = document.querySelectorAll("#icecream");
for (const i = 0; i<more.length; i++){
    more[i].addEventListener('click',function(){
        more[i].parentNode.classList.toggle('active')
    })
}