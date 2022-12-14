

var data = 0;

document.getElementById("counting").innerText = data;

function increment() {
	data = data + 1;
	document.getElementById("counting").innerText = data;
    if(data%2==0){
        console.log('even');
        document.body.style.backgroundColor="rgb(250,95,85)";
    }
    else{
        console.log('odd');
        document.body.style.backgroundColor="green";
    }
}
function decrement() {
	data = data - 1;
	document.getElementById("counting").innerText = data;
    if(data%2==0){
        console.log('even');
        document.body.style.backgroundColor="rgb(250,95,85)";
    }
    else{
        console.log('odd');
        document.body.style.backgroundColor="green";
    }
}
