var Form=document.getElementById('addForm');
var ItemList=document.getElementById('items');

//form submit event
Form.addEventListener('submit',addItem);

// Delete event
ItemList.addEventListener('click', removeItem);

//...................Add new item................................
function addItem(e){
    e.preventDefault();
    //input value to add
    var newItem=document.getElementById('item').value;

    //cretae new li element
    var li=document.createElement('li');
    li.className='list-group-item';

    //add text value to input value
    li.appendChild(document.createTextNode(newItem));

    //add Delete Button in li
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    //add Edit button in li
    var editButton=document.createElement('button');
    editButton.className='btn btn-warning btn-sm float-right';
    editButton.appendChild(document.createTextNode('Edit'));
    li.appendChild(editButton);

    //add new li element with value into itemlist
    ItemList.appendChild(li);
}

//.........................Remove item......................
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        ItemList.removeChild(li);
      }
    }
  }