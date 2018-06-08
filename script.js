function submit() {
  var input = document.getElementById('input');
  var item = input.value;
  if (item.length>0) {
    var ul = document.getElementById("list");
    var li = document.createElement('li');
    var task = document.createTextNode(item);
    li.appendChild(task);
    ul.appendChild(li);
    document.getElementById('input').value = "";
    li.onclick = removeItem;
  } else {
    alert("Please enter a task");
  }
}

function removeItem(e) {
  var ul = document.getElementById("list");
  var completed = e.target;
  ul.removeChild(completed);
}


