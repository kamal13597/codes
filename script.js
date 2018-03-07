
let pre= document.getElementById("myButton");
let text= document.getElementById("addText");
let trys= document.getElementById("try");
let deletes= document.getElementsByClassName("deletes");
let ar=[];
let searchList = document.getElementById("searchButton");

pre.onclick= () => {
  
  createList(text.value);
}

searchList.onclick= () => {
  debugger;
  let text = document.getElementById('search').value;
  let name = document.getElementById('searchName');
  let index = ar.indexOf(text);   
  if( index > -1)
  {
    show = document.createElement('h2');
    show.innerHTML = ar[index];
    name.appendChild(show);
    alert("Match");
  } 
}
//do not add duplicates 
//clear input after adding the element
var createList = (arr) => {
  if(arr != '') 
  {
    if(duplicate(arr))
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
        ar.splice(i,1);
        console.log(event.target);
        console.log(event.target.parentElement);
        event.target.parentElement.classList.add('hide');
      }
    }
  }
}

var duplicate = (text) => {
  
  let index = -1;
  index= ar.indexOf(text);
  if(index == -1)
    return 1;
  else {
    return 0;
  } 
  // for(let i = 0;i < arr.length; i++)
  // {
  //  if(arr[i] == text){

  //    return 0; 
  //  }
  // }  
  // return 1;
} 
