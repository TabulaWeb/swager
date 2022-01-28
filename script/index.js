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

    console.log(arrayCrud)
    console.log(arrayCrudItem)
}, false);

// открываем crud
document.addEventListener('click', function(event){
    let target = event.target

    if(target.closest('.crud-header')){
        let crudElement = target?.getAttribute('data-id')

        target.classList.toggle('rotation')

        document.querySelectorAll('.crud-container').forEach((crudItem, crudId, crudArr) => {
            crudArr[crudElement].classList.toggle('open')
            let heightContainer = crudArr[crudElement].querySelector('.crud-body').clientHeight + 52

            if(crudArr[crudElement].classList.contains('open')){
                crudArr[crudElement].style.height = `${arrayCrud[crudElement] || heightContainer}px`
            } else {
                crudArr[crudElement].style.height = '52px'
            }
        })

        
    }
})

document.addEventListener('click', function(e){
    if(e.target.closest('.header-burger') || e.target.closest('.header-menu')){
        document.querySelector('.header-menu').classList.toggle('open')
        document.querySelector('.header-burger').classList.toggle('open')
    } else {
        document.querySelector('.header-menu').classList.remove('open')
        document.querySelector('.header-burger').classList.remove('open')
    }
    
})