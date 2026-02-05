function getInputValueByID(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}


function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convetedValue = parseFloat(value);
    return convetedValue;
}