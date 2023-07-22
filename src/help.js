const i=document.getElementById('shad');

let xv , yv;
window.addEventListener('onScroll' , (el)=>{
    xv=el.screenY
    yv=el.clientY
    console.log(xv);
    console.log(yv)
})