const myForm = document.querySelector('#my-form');
const amountInput = document.querySelector('#amount');
const describeInput = document.querySelector('#describe');
const categoryInput=document.querySelector('#category')
//const msg = document.querySelector('.msg');

//var ItemList=document.getElementById('userDetail');

//console.log("test");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(amountInput==''||describeInput==''||categoryInput==''){
        msg.innerHTML = 'Please enter all fields';
    }else{

        let myObj={
            amount:amountInput.value,
            describe:describeInput.value,
            category:categoryInput.value
        };
        
        localStorage.setItem(myObj.describe,JSON.stringify(myObj));
        console.log(localStorage.getItem(myObj));
        showUser(myObj);
    }
}

function Display() {
    for (var i = 0; i < localStorage.length; i++) {
        // set iteration key name
        var key = localStorage.key(i);
        // use key name to retrieve the corresponding value
        var value = localStorage.getItem(key);
      
        var object=JSON.parse(value);
        showUser(object);
    }
}

Display();


function showUser(obj){
    const parElem=document.getElementById('expanseDetail');
    const childElem=document.createElement('li');
    childElem.className='list-group-item';

    childElem.textContent="₹"+obj.amount +" -- "+obj.describe +" -- "+obj.category; 

    //create Delete Button to add in li
    var deleteBtn = document.createElement('button');
    deleteBtn.className ='delete';
    deleteBtn.style='float:right';
    deleteBtn.appendChild(document.createTextNode('delete'));

    deleteBtn.onclick=()=>{
        localStorage.removeItem(obj.describe);
        parElem.removeChild(childElem);
    }
    childElem.appendChild(deleteBtn);    //add delete button Li

        
    //create Edit button to add in li
        
    var editBtn=document.createElement('button');
    editBtn.className='edit';
    editBtn.style='float:right';
    
    editBtn.appendChild(document.createTextNode('edit'));
    
    editBtn.onclick =()=>{
        //delete old details
        localStorage.removeItem(obj.describe);
        parElem.removeChild(childElem);

        //add new details in input to edit
        document.getElementById("amount").value = obj.amount;
        document.getElementById("describe").value = obj.describe;
        document.getElementById("category").value = obj.category;
    }
    childElem.appendChild(editBtn);     //add edit button to child


    parElem.appendChild(childElem);
}

