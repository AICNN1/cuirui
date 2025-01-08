$(function () {
    'use strict';

    var $container = $('#mediaDiv');
    var $image = $container.children('div.on');
    var mediaObj;
    var iTransform, cTransform;

    // 随机生成一个数字，范围在1到50
    var randomIndex = Math.ceil(Math.random() * 50);

    // 使用随机数设置音乐和图片路径
    mediaObj = new Audio();
    mediaObj.src = "media/Music" + randomIndex + ".mp3";  // 背景音乐
    mediaObj.loop = true;
    mediaObj.autoplay = true;

    $(document).one('touchstart.play click.play', function () {
        mediaObj.play();
        mediaPlay();
    });

    $image.bind('click', function () {
        if (mediaObj.paused) {
            mediaObj.play();
            mediaPlay();
        } else {
            setTimeout(function(){
                mediaObj.pause();
                mediaPause();
            }, 0.1e3);
        }
    });

    function mediaPlay() {
        $image.addClass('animate');
    }

    function mediaPause() {
        iTransform = $image.css('transform');
        cTransform = $container.css('transform');
        $container.css('transform', cTransform === 'none' ? iTransform : iTransform.concat(' ', cTransform));
        $image.removeClass('animate');
    }

    $(mediaObj).bind('canplaythrough', function () {
        // mediaObj.play();
    }).bind('pause ended', function () {
        mediaPause();
    }).bind('playing', function () {
        mediaPlay();
    });

    // 设置背景图片，确保与音乐对应
    $image.css('backgroundImage', 'url("media/on' + randomIndex + '.jpg")');
});
