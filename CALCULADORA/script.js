function addChar(char){
     document.getElementById('display').value += char;
     // .value += char : concatena o caracter passado a string atual
     // document.get(display)seleciona o campo de entrada com id=display
}

function clearDisplay(){
    document.getElementById('display').value = '';
}
function calculate(){
    try{
        document.getElementById('display').value = eval(document.getElementById('display').value); 
    }
    catch(e){
        document.getElementById('display').value = 'ERRO';
    }
}