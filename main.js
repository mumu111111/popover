$(clickMe).on('click', function () {
    $(popover).toggleClass('active')
    setTimeout(function () {
        $(document).one('click', function (e) {
            $('#popover').removeClass('active')
            console.log('none')
        })
    }, 0)
})

$(wrapper).on('click', function (e) {
    e.stopPropagation()   //阻止传播 
})










