const btn_encript = document.querySelector("#encript");
const btn_decript = document.querySelector("#decript");

const input = document.querySelector("#textarea-encript");
const result = document.querySelector("#textarea-decript");

const image = document.querySelector("#image");
const default_msg = document.querySelector("#default-message");
const btn_copy = document.querySelector("#copy-button");

var codes = [ ["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"] ];

function check_text_encripted(){
    if(input.value != ""){
        encript(input.value);
    } else {
        show_empty_search();
    }
}

function check_text_decripted(){
    if(input.value != ""){
        decript();
    } else {
        show_empty_search();
    }
}

function encript(){
    let text = input.value;
    let end_text = "";
    let found = false ;

    for(let i = 0; i < text.length; i++){
        for(let j = 0; j < codes.length; j++){
            if(text[i] == codes[j][0]){
                found = true;
                end_text += codes[j][1];
                break;
            }
        }
        if(found == false){
            end_text += text[i];       
        }
        found = false;
    }
    show_result(end_text);
}

function decript(){
    let text = input.value;
    for(let i = 0; i < codes.length; i++){
            text = text.replaceAll(codes[i][1], codes[i][0]);
        }

    show_result(text);
}

function copy_text(){
    navigator.clipboard.writeText(result.innerHTML)
}

function show_result(text){
    result.innerHTML = text;
    result.style.display = "block";
    image.style.display = "none";
    default_msg.style.display = "none";
    btn_copy.style.display = "block";
}

function show_empty_search(){
    image.style.display = "block";
    default_msg.style.display = "block";
    result.style.display = "none";
    btn_copy.style.display = "none";
}

input.focus();
btn_encript.onclick = check_text_encripted;
btn_decript.onclick = check_text_decripted;
btn_copy.onclick = copy_text;