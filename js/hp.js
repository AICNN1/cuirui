document.getElementById('likeButton').addEventListener('click', function() {
    document.getElementById('happyMessage').classList.remove('hidden');
});

document.getElementById('dislikeButton').addEventListener('click', function() {
    // 没有反应
});

document.getElementById('whatisthisButton').addEventListener('click', function() {
    // 隐藏所有内容，显示“欢迎你”
    document.querySelector('.content').innerHTML = '<h2>欢迎来到武翠蕊大美女的3D相册❤</h2>';
    setTimeout(function() {
        window.location.href = 'index1.html';
    }, 2000);
});
