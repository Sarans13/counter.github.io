//initialising a variable name data

var data = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//creation of increment function
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
//creation of decrement function
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
