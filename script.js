// The keys and notes variables store the piano keys
let keys = document.getElementById('script');


let chancgecolor = function(element) {
    element.target.style.bacgroundColor = 'red';
}

keys.onclick = chancgecolor;