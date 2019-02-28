(function(){
    function drap(selector) {
let box = selector;
let x = 0;
let y = 0;
let l = 0;
let t = 0;
let isDown = false;
box.style.position="absolute";
// box.style.left="50%";
// box.style.marginLeft = "-50px"
// box.style.top="50%";
// box.style.marginTop = "-10px"
box.style.transition="transform  0.2s"

box.onmousedown = function(e) {
    x = e.clientX;
    y = e.clientY;
    l = box.offsetLeft;
    t = box.offsetTop;
    isDown = true;
    box.style.cursor = 'move';
    
}
window.onmousemove = function(e) {
    let nx = e.clientX;
    let ny = e.clientY;
    let nl = nx-(x-l)<0?0:nx-(x-l);
    let nt = ny-(y-t)<0?0:ny-(y-t);
    if(isDown===false){
        return;
    }
    box.style.left = nl+'px';
    box.style.top = nt+'px';
}
window.onmouseup = function() {
    isDown = false;
    box.style.cursor = 'default';
}
}
document.addEventListener('click',function(e){
    if(e.target.id||e.target.className){
        drap(e.target)
    }
});
})()