$(function(){
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
    console.log(fileName)
    let src = 'url(/background/' + fileName[Math.floor(Math.random() * fileName.length)] + '.png)'
    console.log(src)
    $('#st1').css('background-image', src)
})