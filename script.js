let pre= document.getElementById("myButton");
let text= document.getElementById("addText");
let trys= document.getElementById("try");
let deletes= document.getElementsByClassName("deletes");
let ar=[];

pre.onclick= () => {
  
  createList(text.value);
}


//do not add duplicates 
//clear input after adding the element
var createList = (arr) => {
  debugger;
  if(arr != '') 
  {
    if(duplicate(ar,arr))
    {
      var li = document.createElement('li');
      li.innerHTML = li.innerHTML + arr;
      var but = document.createElement('button');
      but.innerHTML="Delete";
      but.className= "deletes";
      li.appendChild(but);
      trys.appendChild(li);
      ar[ar.length] = text.value;   
    } 
    text.value = "";
  }

  if(deletes.length) {
    for(let i = 0 ; i < deletes.length; i++) {
      deletes[i].onclick = (event) => {
        console.log(event.target);
        console.log(event.target.parentElement);
        event.target.parentElement.classList.add('hide');
      }
    }
  }
}

var duplicate = (arr,text) => {
  for(let i = 0;i < arr.length; i++)
  {
    if(arr[i] == text)
      return 0; 
  } 
  return 1;
} 
