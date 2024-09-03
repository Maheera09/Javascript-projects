const input = document.querySelector('#inputBox')
const list = document.querySelector('#list-container')

function addtask(){
    if (input.value === ''){
        alert('you must write something')
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = input.value
        list.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7' //cross icon
        li.appendChild(span)
    }
    input.value=''
    storedData()
} 

list.addEventListener('click', (e)=>{
if (e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
    storedData()
}
else if (e.target.tagName === 'SPAN'){
    e.target.parentElement.remove()
    storedData()
}
}, false)

function storedData(){
localStorage.setItem('data', list.innerHTML)
}

function showList(){
    list.innerHTML = localStorage.getItem('data')
}
showList()
