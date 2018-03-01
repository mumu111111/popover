clickMe.addEventListener('click', function () {
    popover.style.display = 'block';
    console.log('block')//控制台打出了，那么说明按钮点击生效  
})

wrapper.addEventListener('click', function (e) {
    e.stopPropagation() //阻止冒泡
})

document.addEventListener('click', function () {
    popover.style.display = 'none';
    console.log('none')//有输出 说明执行过  

})

