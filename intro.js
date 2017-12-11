var items = document.getElementsByTagName('li');
var list = document.getElementById("thelist");
var button = document.getElementById('b');
var header = document.getElementById('h');
var b2 = document.getElementById("b2");
var l2 = document.getElementById("list2");
var counter = 0; 


var adder = function(e){
    var newItem = document.createElement('LI');
    newItem.innerHTML = 'item ' + (items.length - counter);
    list.appendChild(newItem);
    newItem.addEventListener("mouseover" , headChanger);
    newItem.addEventListener("mouseleave" , changeBack);
    newItem.addEventListener("click" , remover);
}


var headChanger = function(e){
    header.innerHTML = this.innerHTML;
    e;
}

var changeBack = function(e) {
    header.innerHTML = "Hello World!"
}

var remover = function(e){
    this.remove();
}


var fibonacci = function (n){
    if(n == 0){
	return 0;
    }
    if (n == 1){
	return 1;
    }
    
    else {
	return fibonacci(n-1) + fibonacci(n-2);
    }
}
var fibonacciAdd = function(e){
    var toAppend = document.createElement("LI");
    toAppend.innerHTML = fibonacci(counter);
    l2.appendChild(toAppend);
   counter +=  1;
}

b2.addEventListener("click", fibonacciAdd);
button.addEventListener('click', adder);

for (i=0 ; i < items.length ; i++){
    items[i].addEventListener("mouseover" , headChanger);
    items[i].addEventListener("mouseleave" , changeBack);
    items[i].addEventListener("click" , remover);
}



