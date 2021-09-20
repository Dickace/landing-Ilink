import '../scss/style.scss';
import '../index.html';
//Some useful func and const
const gender = document.getElementById('client_gender');
const name = document.getElementById('client_name');
const country =  document.getElementById('client_country');
const city =  document.getElementById('client_city');
const birth =  document.getElementById('client_birth');
const file =  document.getElementById('client_file');
const genderList = document.getElementById('client_select_list');
const fileInfo = document.getElementById('file-chosen');
const form = document.getElementsByClassName('tellUsForm')[0];
const valitateBtn = document.getElementById('client_send');
const fields = form.getElementsByClassName('inputField');
function sizeConvert(size){
    let newSize = (size / 1024);
    if (newSize > 512){
        newSize = (newSize/ 1024)
        if (newSize > 512) {
            newSize = (newSize/1024)
            return `${newSize.toFixed(2)} gb`
        }else {
            return `${newSize.toFixed(2)} mb`
        }
    } else {
        return `${newSize.toFixed(2)} kb`
    }
}
const generateError = function (text) {
    let error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = text
    return error
}
//End some useful func
// Start step by step form functionality.
let allVisible = false;
if (window.matchMedia("(max-width: 375px)").matches) {
    document.getElementsByClassName('tellUsSecondColumn')[0].style.visibility = 'visible';
    document.getElementsByClassName('tellUsUploadColumn')[0].style.visibility = 'visible';
    allVisible = true;
    valitateBtn.removeAttribute('disabled')
} else {
    allVisible = false;
}
for( let item of genderList.getElementsByTagName('li')){
    item.addEventListener('click', (event)=>{
        gender.value = item.innerText;
        genderList.style.display = 'none';
        genderList.style.borderColor = '#8E43ED';
        gender.style.borderColor = '#8E43ED';
        item.style.borderColor = '#8E43ED';
        checkNextStep();
    })
}
gender.addEventListener('click', (event)=>{
    if (genderList.style.display === 'none'){
        genderList.style.display = 'block';
    } else{
        genderList.style.display = 'none';
    }
})
gender.addEventListener('blur',(event) =>{
    if ( event.relatedTarget !== genderList){
        genderList.style.display = 'none';
    }
})

name.addEventListener('change', (event) => {
    if (name.value.length > 3){
        name.style.borderColor = '#8E43ED';
        checkNextStep();
    } else {
        name.style.borderColor = '#D4B1FF';
        checkNextStep();
    }
})
country.addEventListener('change', (event) => {
    if (country.value.length > 3){
        country.style.borderColor = '#8E43ED';
        checkNextStep();
    } else {
        country.style.borderColor = '#D4B1FF';
        checkNextStep()
    }
})
city.addEventListener('change', (event) => {
    if (city.value.length > 3){
        city.style.borderColor = '#8E43ED';
        checkNextStep();
    } else {
        city.style.borderColor = '#D4B1FF';
        checkNextStep()
    }
})
birth.addEventListener('change', (event) => {
    if (birth.value.length > 3){
        birth.style.borderColor = '#8E43ED';
        checkNextStep();
    } else {
        birth.style.borderColor = '#D4B1FF';
        checkNextStep()
    }
})

function checkNextStep(){
    if (!allVisible){
        if ( gender.value !== "" && name.value.length > 3){
            document.getElementsByClassName('tellUsSecondColumn')[0].style.visibility = 'visible';
        }else {
            document.getElementsByClassName('tellUsSecondColumn')[0].style.visibility = 'hidden';
        }
        console.log(gender.value, name.value,country.value,birth.value ,city.value )
        if (gender.value !== "" && name.value.length > 3 && country.value.length > 3 && birth.value !== ""  && city.value.length > 3){
            document.getElementsByClassName('tellUsUploadColumn')[0].style.visibility = 'visible';
        }
        else {
            document.getElementsByClassName('tellUsUploadColumn')[0].style.visibility = 'hidden';
            fileInfo.style.visibility = 'hidden';
        }
        if (gender.value !== "" && name.value.length > 3 && country.value.length > 3 && birth.value !== ""  && city.value.length > 3 && file.value !== ""){
            document.getElementById('client_send').removeAttribute('disabled');
        }else{
            document.getElementById('client_send').setAttribute('disabled', 'true');
        }
    }
}

file.addEventListener('change', (event)=>{
    fileInfo.style.visibility = 'visible';
    fileInfo.getElementsByClassName('file_icon')[0].style.backgroundImage = `url("${URL.createObjectURL(file.files[0])}"`;
    fileInfo.getElementsByClassName('file_name')[0].innerHTML = file.files[0].name;
    fileInfo.getElementsByClassName('file_props')[0].innerHTML = `${file.files[0].name.split('.')[file.files[0].name.split('.').length-1].toUpperCase()} ${sizeConvert(file.files[0].size)}`
    checkNextStep();
})
fileInfo.getElementsByTagName('img')[0].addEventListener('click',(event)=>{
    console.log('click');
    fileInfo.style.visibility = 'hidden';
    file.value = '';
    checkNextStep();
})
// End step by step form functionality.

// Start form validation functionality

form.addEventListener('submit', (event)=>{
    removeValidation();
    checkValidation(event);
    completeForm();
    event.preventDefault();
})
function completeForm(){
    document.getElementById('completeFrom').style.display = 'flex';
    valitateBtn.setAttribute('disabled', 'true');
}
function checkValidation(event){
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('field is blank', fields[i])
            let error = generateError('Cant be blank')
            form[i].parentElement.insertBefore(error, fields[i])
        }
    }
    if(form.getElementsByClassName('error')[0] !== undefined){
        event.preventDefault();
    }
}
const removeValidation = function () {
    let errors = form.querySelectorAll('.error')
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
}
// End form validation

// Start drag and drop functionality.
const dragBox = document.getElementsByClassName('uploadBox')[0];
dragBox.addEventListener('drop', (event)=>{
    event.preventDefault();
    const firstEl = new DataTransfer();
    firstEl.items.add(event.dataTransfer.files[0]);
    file.files = firstEl.files;
    file.dispatchEvent(new Event('change'));
    dragBox.style.backgroundColor = 'white';
})
dragBox.addEventListener('dragenter',function(event){
    event.preventDefault();
    dragBox.style.backgroundColor =  '#E0CFF8';
})
dragBox.addEventListener('dragleave',function(event){
    dragBox.style.backgroundColor = 'white';
})
dragBox.addEventListener('dragover',function(event){
    event.preventDefault();
    dragBox.style.backgroundColor =  '#E0CFF8';
})
//End drag and drop