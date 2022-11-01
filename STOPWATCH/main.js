const time_el = document.querySelector('.watch .time');
const start_btn=document.getElementById('start');
const stop_btn=document.getElementById("stop");
const reset_btn=document.getElementById("reset");

let seconds=0;
let interval =null;
  
// Event listeners
start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);

//Update the timer
function timer(){
    seconds++;

    //format our time
    let hrs  = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds-(hrs * 3600)) / 60);
    let secs = seconds % 60;
    
    
    if (secs < 10) secs ='0' + secs;
    if (mins < 10) mins ="0" + mins;
    if (hrs < 10) hrs ="0" + hrs;
    
    
    time_el.innerText = `${hrs}:${mins}:${secs}`;
}
function start(){
    if(interval){
        return
    }
    interval = setInterval(timer, 1000);

}
function stop(){
    clearInterval(interval);
    interval=null;

}
function reset(){
    stop();
    seconds=0;
    time_el.innerText='00:00:00';
}
