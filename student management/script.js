const { isValidElement } = require("react");

function onFormSubmit () {
    if (validate()){
        var formData = readFormdata();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateFormData(formData);
        resetForm()
    }

}
    

function readFormdata (){
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}
var selectedRow = null;

function onEdit(td){
    selectedRow = td.parantElement.parantElement;
    document.getElementById('id').value = selectedRow.cells[0].innerHTML;
    document.getElementById('name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('email').value = selectedRow.cells[2].innerHTML;
}

function onDelete(td){
    if (confirm('Are you sure to Delete this record')){
        row = td.parantElement.parantElement;
        document.getElementById('stdlist').deleteRow(row.rowIndex);
        resetForm();
    }
}

function updateFormData(formData){
    selectedRow.cell[0].innerHTML = formData.id;
    selectedRow.cell[1].innerHTML = formData.name;
    selectedRow.cell[2].innerHTML = formData.email;
}

function validate(){
    isValid = true;
    if(document.getElementById('name').value == '' && document.getElementById('email').value == '' && document.getElementById('id').value == ''){
        isValid = false;
        document.getElementById('nameValidationError').classList.remove('hide');
        document.getElementById("emailValidationError").classList.remove('hide');
        document.getElementById('idValidationError').classList.remove('hide');
    }
    else{
        isValid = true;
        if(document.getElementById('nameValidationError').classList.contains('hide') && document.getElementById('emailValidationError').classList.contains('hide') && document.getElementById('idValidationError').classList.contains('hide'));
        document.getElementById('nameValidationError').classList.add('hide')
        document.getElementById('emailValidationError').classList.add('hide')
        document.getElementById('idValidationError').classList.add('hide')

    }
    return isValid;
}


function insertNewRecord (data) {
    var table = document.getElementById("stdList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = '<a onClick="onEdit(this)">Edit</a>';
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<a onClick="onDelete(this)">Delete</a>'
}

function resetForm(){
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

selectedRow = null;
}


