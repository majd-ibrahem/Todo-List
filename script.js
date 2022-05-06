
const addBtn = document.querySelector('.btn-add');
const container = document.querySelector('.container')

// Event Listeners //
addBtn.addEventListener('click', addItem)

container.addEventListener('click', deleteCheckItem)

document.addEventListener('keypress', (e) =>{
    if(e.code === 'Enter')
    {
        addItem()
    }
})

// functions //

// add item
function addItem(){

    let inputValue = document.querySelector('input').value
    if(inputValue !==""){
        const html =`<div class="content"><p>${inputValue}</p><div class="flex"><button class="btn btn-completed"><i class="fas fa-check"></i></button><button class="btn btn-delete"><i class="fas fa-trash"></i></button></div></div>`
        container.insertAdjacentHTML('beforeend', html)
        const input = document.querySelector('input')
        input.value = ''
    }
}

// delete check item
function deleteCheckItem(e){

    const element = e.target
    if(element.classList[1] === "btn-delete"){
        const parentElement = element.parentElement.parentElement
        parentElement.classList.add('fadetion')
        parentElement.addEventListener('transitionend', ()=>{
            parentElement.remove()
        })
    }

    if(element.classList[1] === "btn-completed"){
        const parentElement = element.parentElement.parentElement
        parentElement.classList.toggle('line-through')
    }
}