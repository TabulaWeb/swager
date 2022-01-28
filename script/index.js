var arrayCrud = []
var arrayCrudItem = []
window.addEventListener(`resize`, event => {
    arrayCrud = []
    arrayCrudItem = []

    document.querySelectorAll('.crud-container').forEach((crudItem, crudId, crudArr) => {
        arrayCrud.push(crudItem.querySelector('.crud-body').clientHeight + 52)
        arrayCrudItem.push(crudItem)
    })

    arrayCrudItem.forEach((element, elementID, elemntArr) => {
        if(element.classList.contains('open')){
            element.style.height = `${arrayCrud[elementID]}px`
        }
    })
}, false);

document.querySelectorAll('.crud-container').forEach((crudItem, crudId, crudArr) => {
    crudItem.addEventListener('click', function(){
        crudItem.classList.toggle('open')
    })
})

// открываем crud
document.addEventListener('click', function(event){
    let target = event.target

    if(target.closest('.crud-header')){
        let crudElement = target?.getAttribute('data-id')

        target.classList.toggle('rotation')

        document.querySelectorAll('.crud-container').forEach((crudItem, crudId, crudArr) => {
            let heightContainer = crudArr[crudElement].querySelector('.crud-body').clientHeight + 52

            if(crudArr[crudElement].classList.contains('open')){
                crudArr[crudElement].style.height = `${arrayCrud[crudElement] || heightContainer}px`
            } else {
                
                crudArr[crudElement].style.height = '58px'
            }
        })
    }
})

// Меню
document.addEventListener('click', function(e){
    if(e.target.closest('.header-burger') || e.target.closest('.header-menu')){
        document.querySelector('.header-menu').classList.toggle('open')
        document.querySelector('.header-burger').classList.toggle('open')
    } else {
        document.querySelector('.header-menu').classList.remove('open')
        document.querySelector('.header-burger').classList.remove('open')
    }
    
    if(e.target.closest('.results-list')){
        document.querySelector('.results-container').style.display = 'none'
    }
})

// Поиск
const searchItem = [
    {name: 'начало работы', link: '#beginning'},
    {name: 'создание заявки на продажу btc', link: '#createRequestion'},
    {name: 'подтверждение оплаты заявки', link: '#paymentСonfirmation'},
    {name: 'получение списка заявок', link: '#getApplication'},
    {name: 'удаление заявки', link: '#deleteApplicationOne'},
    {name: 'удаление группы заявок', link: '#deleteApplication'},
    {name: 'получение актуального курса торговли', link: '#getCourse'},
]

function setList(results){
    clearList()
    for (const search of results){
        const resultItem = document.createElement('a')
        resultItem.setAttribute('href', search.link)
        resultItem.classList.add('result-item')
        const text = document.createTextNode(search.name)
        resultItem.appendChild(text)
        list.appendChild(resultItem)
    }

    if (results.length === 0 ){
        noResults()
    }
}

function clearList(){
    while (list.firstChild){
        list.removeChild(list.firstChild)
    }
}

function noResults(){
    const error = document.createElement('p')
    error.classList.add('error-message')
    const text = document.createTextNode('Ничего не найдено')
    error.appendChild(text)
    list.appendChild(error)
}

whateverElement.addEventListener("input", (e) => {
    let value = e.target.value

    if (value && value.trim().length > 0){
        document.querySelector('.results-container').style.display = 'flex'
        value = value.trim().toLowerCase()
        setList(searchItem.filter(search => {
            return search.name.includes(value)
        }))
    } else {
        clearList()
        document.querySelector('.results-container').style.display = 'none'
    }
})

whateverElement.addEventListener('focus', (e) => {
    let value = e.target.value
    if (value && value.trim().length > 0){
        document.querySelector('.results-container').style.display = 'flex'
    }
})



