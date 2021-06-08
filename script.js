function addButtonClicked() {
    var text
   
    text = document.getElementById('addBox').value
    var parent = document.getElementById('mainFrame');
    var newChild = ' <input class="displaybox" type="text" disabled value="'+text+'">';
    parent.insertAdjacentHTML('beforeend', newChild);
    document.getElementById('addBox').value= ''
   
    
}