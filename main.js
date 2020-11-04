
let ul=document.getElementById('list');
let li;
let addButton=document.getElementById('add');
addButton.addEventListener('click',addItem);
let removeButton=document.getElementById('remove');
removeButton.addEventListener('click',removeItem);
let reset=document.getElementById('reset');
reset.addEventListener('click',removeEverything);
function removeEverything(){
    li = ul.children;
    for(let i = 0 ; i < li.length; i++){
        while (li[i]&&li[i].children[0]){
            ul.removeChild(li[i]);
        }
       }
}
function removeItem(){
        li = ul.children;
        var count = 0;
        for (let index = 0; index < li.length; index++) {
            while(li[index]&&li[index].children[0].checked){
                ul.removeChild(li[index]);
                count++;
            }
            
        }
        if(count==0){
            alert("Select a task to remove."); 
        }
}
function addItem(){
    let input=document.querySelector('#input').value;
    if(input===''){
        document.querySelector('.demo').innerHTML='Enter Something.';
        return false;
    }
    else{
        li=document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');
        let label=document.createElement('label');
        let textnode=document.createTextNode(input);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        document.querySelector('#input').value='';
        setTimeout(()=>{
            li.className='visual';
        },1);
        document.querySelector('.demo').innerHTML='';
    }
    input = "";   //Ye bol rha tha mai chutiye
    
}
