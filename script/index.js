// открываем crud
document.addEventListener('click', function(event){
    let target = event.target

    if(target.closest('.crud-header__arrow')){
        let crudElement = target.getAttribute('data-id')

        target.classList.toggle('rotation')

        document.querySelectorAll('.crud-container').forEach((crudItem, crudId, crudArr) => {
            crudArr[crudElement].classList.toggle('open')
            let heightContainer = crudArr[crudElement].querySelector('.crud-body').clientHeight + 52

            if(crudArr[crudElement].classList.contains('open')){
                crudArr[crudElement].style.height = `${heightContainer}px`
            } else {
                crudArr[crudElement].style.height = '52px'
            }
        })

        
    }
})