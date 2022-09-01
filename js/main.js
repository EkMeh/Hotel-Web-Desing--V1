var res=document.getElementById('reset');

window.onscroll = function (event) 
{
    if(this.scrollY > 150)
    {
        res.style.visibility='visible';
    }

    else if(this.scrollY==0)
    {
        res.style.visibility='hidden';
    }
}

res.addEventListener('click',function(event){
    window.scroll({
        top: 0,
        left: 100,
        behavior: 'smooth'
      });
});