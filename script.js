$(function logoImg() {
    let fileName = [
        '北屿',
        '村庄',
        '合照1',
        '合照2',
        '霖篁楼',
        '年镇',
        '新华园',
        '新源',
        '迎新广场',
        'Wry'
    ];
    let src = 'url(/background/' + fileName[Math.floor(Math.random() * fileName.length)] + '.png)'
    $('#st1 .background').css('background-image', src)
})

$(function hoverCard() {
    let timer = null
    $('#nd2 .server-card .child-server-card').mousemove(
        function(e) {
            if (timer !== null) return
            timer = setTimeout(()=>{
                x = $(this).offset().left
                y = $(this).offset().top
                mx = e.pageX
                my = e.pageY
                w = $(this).innerWidth()
                h = $(this).innerHeight()
                rotateX = (my - y) / h - 0.5
                rotateY = (mx - x) / w - 0.5
                $(this).css('--rotateX', rotateX * -2 + 'deg')
                $(this).css('--rotateY', rotateY * 2 + 'deg')
                timer = null
            }, 50)
        }
    )
})

$(function load() {
    console.log()
    console.log(
        '\n' + '%c 渐蓝方块' + '%c TwoBlueCube' + '%c \n',
        'color: #fff; background: #169c9c; padding: 5px;',
        'color: #fff; background: #3ab3da; padding: 5px;',
        'background: transparent;'
    )
    if (Math.floor(Math.random()*101)==100) console.log('这里是彩蛋QWQ')
})

// $(function scroll() {
//     let timer = null
//     let scroll
//     $(window).scroll(function () {
//         if (timer !== null) return
//         timer = setTimeout(()=>{
//             scroll = $(document).scrollTop();
//             $('#st1 .background').css('transform', `translateY(${ 0.4 * scroll }px)`)
//             timer = null
//             console.log(0)
//         }, 5)
// });
// })


$(window).scroll(function () {
    scroll = $(document).scrollTop()
    height = $(window).height()
    if ( scroll > height ) return
    rate = 0.5
    $('#st1 .background').css('transform', 'translateY('+ rate * scroll +'px)')
})