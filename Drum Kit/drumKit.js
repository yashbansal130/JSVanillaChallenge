document.addEventListener("keydown",function(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);//for sound
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);//for animation
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    console.log(key);
    key.classList.add('playing');
});
function removeTransition(e){
    if(e.propertyName!=="transform") return;
    this.classList.remove('playing');
}
const keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

