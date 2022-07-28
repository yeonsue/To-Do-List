let i =1;
let idofRemove ='';
function addTodo(){
    let todoContent = document.getElementById('inputTodo').value;
    //input으로부터 value값 받기
    let tagArea = document.getElementById('listofTodo');
    
    let todo = document.createElement('div');
    todo.setAttribute('id',`todo${i}`);
    todo.setAttribute('onclick','colorChange(this.id)');
    todo.innerHTML= `${todoContent}<input id=${i} type="button" value="x" onClick="deleteThis(this.id)">`;
    //li태그만들고 input으로 받은 값 내용으로 집어넣기
    tagArea.appendChild(todo);
    i++;
    //해당위치에 태그생성
}

function deleteThis(idofThis){
    console.log(`${idofThis}`);
    number = idofThis;
    const div = document.getElementById(`todo${number}`);
    div.remove();
}
function colorChange(divid){
    if(document.getElementById(`${divid}`).style.backgroundColor !== 'rgb(0, 128, 255)'){
        document.getElementById(`${divid}`).style.backgroundColor = '#0080ff';
    }else{
        document.getElementById(`${divid}`).style.backgroundColor =  '#6a6a6a';
    }
}