const itemList = document.querySelector('tbody')


insertData = () => {
    let newDataRow = document.createElement('tr');

    const table = document.getElementById("data_table");
    const tableLength = (table.rows.length) - 1;

    const textSelection = document.getElementById('text-patterns');
    const selectedTextPattern = textSelection.options[textSelection.selectedIndex].value;

    const channelSelection = document.getElementById('channels');
    const selectedChannel = channelSelection.options[channelSelection.selectedIndex].value;
    
    if ( selectedTextPattern === "Add Text Pattern..." || selectedChannel === "Add Channel..." ) {
        alert(`All fields must be filled`);
    } else {
        newDataRow.innerHTML = `
        <td class="text-cell${tableLength}">${selectedTextPattern}</td>
        <td class="channel-cel${tableLength}l">${selectedChannel}</td>
        <td><i class=" fas fa-eye btn btn-secondary"></i></td>
        <td>
            <i class="fas fa-edit btn btn-primary btn-edit"></i>
            <i class="fas fa-trash-alt btn btn-danger btn-remove"></i>
        </td>`;

    }

    itemList.appendChild(newDataRow);
    activateRemoveButtons();
    activateEditButtons();
};

removeRow = (event) => {
    const target = event.currentTarget;
    itemList.removeChild(target.parentNode.parentNode);
}
  
activateRemoveButtons = () => {
    const removeButtonsGroup = document.getElementsByClassName('btn-remove');
  
    for (const button of removeButtonsGroup) {
      button.addEventListener('click', removeRow);
    }
}

activateEditButtons = () => {
    const editButtonsGroup = document.getElementsByClassName('btn-edit');
  
    for (const button of editButtonsGroup) {
      button.addEventListener('click', editRow);
    }
}


editRow = (event) => {
    const target = event.currentTarget.parentElement.parentElement;

    document.getElementById("update-form").style.visibility = "visible";
    document.getElementById("text-patterns-update").value = target.cells[0].innerHTML;
    document.getElementById("channels-update").value = target.cells[1].innerHTML;

    const updateButton = document.querySelector('#update');
    updateButton.addEventListener('click', function() {
        target.cells[0].innerHTML = document.getElementById("text-patterns-update").value
        document.getElementById("update-form").style.visibility = "hidden";

    });
   
}




window.addEventListener('load', () => {
    
    const insertButton = document.querySelector('#insert');
    insertButton.addEventListener('click', insertData);
});