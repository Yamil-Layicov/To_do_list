


let list = document.querySelector('#icon');
let ul = document.querySelector('#task-list');


list.addEventListener('click',function(e){
   e.preventDefault;

   let input = document.querySelector('#input');
   
   let li = document.createElement('li');
   li.className = 'list';
   li.appendChild(document.createTextNode(input.value));

   input.value = '';

   let a = document.createElement('a');
   a.className = 'delete-item';
   a.setAttribute('href','#');
   a.innerHTML = '<i class="fa-solid fa-xmark"></i>';

   li.appendChild(a);
   ul.appendChild(li);
})

ul.addEventListener('click',del);

function del(e){
    e.preventDefault;
    if(e.target.className == 'fa-solid fa-xmark'){
        e.target.parentElement.parentElement.remove();
    }

}