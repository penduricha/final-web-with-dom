function saveToTable(){
    //get DOM Id from html
    const fullNameId = "fullName";
    const telephoneId = "telephone";
    const dateOfBirthId = "dateOfBirth";
    const addressId = "address";

    //table render
    const tableId = "table";

    let fullName = document.getElementById(fullNameId).value;
    let telephone = document.getElementById(telephoneId).value;
    let dateOfBirth = document.getElementById(dateOfBirthId).value;
    let address = document.getElementById(addressId).value;

    let table = document.getElementById(tableId);

    const member = {
        fullName: fullName.trim(),
        telephone: telephone.trim(),
        dateOfBirth: dateOfBirth.trim(),
        address: address.trim(),
    };

    let row = table.insertRow();
    row.insertCell(0).innerHTML = table.rows.length;
    row.insertCell(1).innerHTML = member.fullName;
    row.insertCell(2).innerHTML = member.telephone;
    row.insertCell(3).innerHTML = member.dateOfBirth;
    row.insertCell(4).innerHTML = member.address;
}