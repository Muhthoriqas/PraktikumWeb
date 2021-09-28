const inputItem = document.getElementById('input-item');
const btnAddItem = document.getElementById('btn-add-item');
const listContainer = document.querySelector('.list');

const database = new Map();

btnAddItem.addEventListener('click', () => {
  const ITEM_KEY = inputItem.value.toUpperCase();
  const ITEM_VALUE = inputItem.value;

  // NOTE: Create element
  const listItem = document.createElement('li');
  const textItem = document.createElement('p');
  const btnDelete = document.createElement('button');
  const counter = document.createElement('button');

  var jumlah=1;
  counter.textContent =jumlah;
  // WARN: Handle error, empty input
  if (ITEM_VALUE === '') {
    alert("Item Name can't be blank");
    inputItem.focus();
    return;
  }

  // WARN: Check for duplication
   if (database.has(ITEM_KEY)) {
    const getCounter = document.getElementById(ITEM_KEY);
    jumlah = Number(getCounter.textContent)
    getCounter.textContent=(jumlah + 1);
    inputItem.value = '';
    inputItem.focus();
    return;
  }


  // NOTE: Add the new item to database
  database.set(ITEM_KEY, ITEM_VALUE);

  // NOTE: Add attribute
  listItem.classList.add('list-item'); // NOTE: Add Class
  btnDelete.setAttribute("class","delete"); 
  counter.setAttribute("class","counter");
  counter.setAttribute("id",ITEM_KEY);
  // NOTE: Add value
  textItem.textContent = ITEM_VALUE;
  btnDelete.textContent = 'Delete';
  

  // NOTE: Combine elements
  listItem.append(textItem, btnDelete, counter);
  listContainer.appendChild(listItem);

  // NOTE: Handle click event for delete button
  btnDelete.addEventListener('click', () => {
    const konfirm = confirm("Yakin Hapus?");
    if (konfirm){
      const getCounter =document.getElementById(ITEM_KEY);
      if(getCounter.textContent === "1"){
        listContainer.removeChild(listItem)
      }else{
        jumlah =Number(getCounter.textContent);
        getCounter.textContent = jumlah-1;
        return;
      }
    }
    
  });

  inputItem.value = '';
  inputItem.focus();

});