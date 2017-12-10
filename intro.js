var items = document.getElementsByTagName('li');
var list = document.getElementById("thelist");
var button = document.getElementById('b');
var header = document.getElementById('h');

var adder = function(e){
    var newItem = document.createElement('LI');
    newItem.innerHTML = 'item ' + items.length;
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

button.addEventListener('click', adder);

for (i=0 ; i < items.length ; i++){
    items[i].addEventListener("mouseover" , headChanger);
    items[i].addEventListener("mouseleave" , changeBack);
    items[i].addEventListener("click" , remover);
}



