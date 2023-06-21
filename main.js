var Form=document.getElementById('addForm');
var ItemList=document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
Form.addEventListener('submit',addItem);

// Delete event
ItemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);



//...................Add new item................................
function addItem(e){
    e.preventDefault();
    //input value to add
    var newItem=document.getElementById('item').value;
    var newItem2=document.getElementById('detail').value;

    //cretae new li element
    var li=document.createElement('li');
    li.className='list-group-item';

    //add text value to input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem2));

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


//.......................Filter Items.............................
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = ItemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var itemName1= item.firstChild.nextSibling.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 ||itemName1.toLowerCase().indexOf(text) != -1 ){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }