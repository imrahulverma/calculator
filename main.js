clk = document.querySelector(".buttons").addEventListener("click", calc);
var a;
var disp=document.querySelector(".display")
function calc() {
  on = event.target.id;

  switch(on){
    case "=":
      try{
        disp.innerHTML=eval(disp.innerHTML);
      }
      catch{
        
        disp.innerHTML="Invalid Expression"
      }
    break;
    case "x":disp.innerHTML = disp.innerHTML.slice(0,-1);
    break;
    case "c":disp.innerHTML = " ";
    break;
    default:
        disp.innerHTML += on;
  }
}