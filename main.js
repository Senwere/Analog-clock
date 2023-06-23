let sec=document.getElementById('sec')
let min=document.getElementById('min')
let hr=document.getElementById('hr')

setInterval(()=>{
const date= new Date;
const secdg=date.getSeconds()/60*360-90;
sec.style.transform=`rotate(${secdg}deg)`;

const mindg=date.getMinutes()/60*360-90;

min.style.transform=`rotate(${mindg}deg)`;

const hrdg=date.getHours()/12*360-90;
hr.style.transform=`rotate(${hrdg}deg)`;
})