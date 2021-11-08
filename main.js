let EDIT = document.getElementById('edit');
let TEXT = document.getElementsByClassName('box_text');
let FORM_TEXT = document.forms.form_text;
let SAVE = document.getElementById('save');
let STYLE = document.getElementById('style');

EDIT.addEventListener('click', function () {
    FORM_TEXT.style.display = 'block';
    FORM_TEXT.my_text.textContent = document.querySelector('.box_text').innerHTML;
    form_style.style.display = 'none';
    color_background.style.display = 'none';
    myColor.style.display = 'none';
})

SAVE.addEventListener('click', function () {
    document.querySelector('.box_text').innerHTML = FORM_TEXT.my_text.value;
    FORM_TEXT.style.display = 'none';
})

STYLE.addEventListener('click', function () {
    FORM_TEXT.style.display = 'none';
    form_style.style.display = 'block';
})

let myColor = document.querySelector('.myColor');
let color_background = document.querySelector('.myColor_background');

document.getElementById('color_text').addEventListener('click', function () {
    myColor.style.display = 'flex';
    color_background.style.display = 'none';
})

document.getElementById('bacground').addEventListener('click', function () {
    color_background.style.display = 'flex';
    myColor.style.display = 'none';
})

form_style.addEventListener('click', function (event) {    
    for (let i = 0; i < TEXT.length; i++) {
        TEXT[i].style.fontSize = event.target.value;
        TEXT[i].style.fontFamily = event.target.value;

        myColor.addEventListener('click', function (event) {
            TEXT[i].style.color = getComputedStyle(event.target).backgroundColor;
            myColor.style.display = '';
        })
        color_background.addEventListener('click', function (event) {         
            document.querySelector('.box_text').style.backgroundColor = getComputedStyle(event.target).backgroundColor;        
            TEXT[i].style.backgroundColor = getComputedStyle(event.target).backgroundColor;                  
            color_background.style.display = '';
        })        

        if (event.target.name == 'bold') {
            if (event.target.checked) {
                TEXT[i].style.fontWeight = 'bold';
            }
            else {
                TEXT[i].style.fontWeight = '';
            }
        }
        if (event.target.name == 'cursive') {
            if (event.target.checked) {
                TEXT[i].style.fontStyle = 'Italic';
            }
            else {
                TEXT[i].style.fontStyle = '';
            }
        }        
    }
})

let ADD = document.getElementById('add');
ADD.addEventListener('click', function () {
    choose.style.display = 'block';
    document.querySelector('.box_text').style.display = 'none';
    document.querySelector('.box_two').style.display = 'none';
    document.querySelector('.box_three').style.display = 'none';
})

choose.addEventListener('click', function (event) {
    if (event.target.value == 'table') {
        document.querySelector('.box_one').style.height = '400px';
        table.style.display = 'block';
        list.style.display = 'none';
    }
    else if (event.target.value == 'list') {
        list.style.display = 'block';
        table.style.display = 'none';
    }
})

let create_table = document.getElementById('create_table');

create_table.addEventListener('click', function () {
    document.querySelector('.box_two').style.display = 'block';
    document.querySelector('.box_three').style.display = 'block';
    let rows = table.TR.value;
    let cols = table.TD.value;
    let border = table.width_of_border.value + 'px' + ' ' + table.type_of_border.value + ' '
        + table.color_of_border.value;    
    let width_of_TD = table.width_of_TD.value;
    let height_of_TD = table.height_of_TD.value;
    let mytable = '';
    function Create_my_table() {
        mytable += `<table>`;
        for (let i = 0; i <= rows; i++) {
            mytable += `<tr>`;
            for (let j = 0; j <= cols; j++) {
                mytable += `<td style="width: ${width_of_TD}px; height: ${height_of_TD}px; border: ${border}">` + "TD" + `</td>`;
            }
            mytable += `</tr>`;
        }
        mytable += `</table>`;
        FORM_TEXT.my_text.textContent = document.querySelector('.box_text').innerHTML + mytable;
        document.querySelector('.box_one').style.height = 'auto';
    }
    Create_my_table();
})

SAVE.addEventListener('click', function () {
    document.querySelector('.box_text').innerHTML = FORM_TEXT.my_text.value;
    choose.style.display = 'none';
    table.style.display = 'none';
    document.querySelector('.box_text').style.display = 'block';      
})

let create_list = document.getElementById('create_list');

create_list.addEventListener('click', function () {
    document.querySelector('.box_two').style.display = 'block';
    document.querySelector('.box_three').style.display = 'block';
    list.style.display = 'none';
    let count_li = list.count_li.value;
    let type_of_marks = list.type_of_marks.value;
    let mylist = '';
    function Create_my_list() {
        for (let i = 0; i < 1; i++) {
            mylist += `<ol style="list-style-type: ${type_of_marks}">`;
            for (let j = 1; j <= count_li; j++) {
                mylist += `<li>` + 'item ' + j + `</li>`;
            }
            mylist += `</ol>`;
            FORM_TEXT.my_text.textContent = document.querySelector('.box_text').innerHTML + mylist;
        }        
        document.querySelector('.box_one').style.height = 'auto';        
    }
    Create_my_list();
})

