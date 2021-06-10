var numId = 0

function addButtonClicked() {
    var text
    text = document.getElementById('addBox').value
    var parent = document.getElementById('mainFrame');
    var newChild = '<div id=' + numId + ' > <input class="displaybox" type="text" disabled value="' + text + '">  <span onclick="deleteButtonClicked(' + numId + ')" class="del"><i class="material-icons">delete</i></span>  </div>';
    parent.insertAdjacentHTML('beforeend', newChild);
    document.getElementById('addBox').value = ''
    numId++

}

function deleteButtonClicked(number) {
    var obj = document.getElementById(number)
    obj.remove()



}
