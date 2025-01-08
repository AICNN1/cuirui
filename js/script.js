document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取用户输入的账户和密码
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // 设定正确的账户和密码
    const correctUsername = 'wcr';  
    const correctPassword = '20041027';  

    // 检查用户名和密码是否正确
    if (username === correctUsername && password === correctPassword) {
        // 登录成功，显示欢迎信息并跳转到页面1
        alert('欢迎你，武翠蕊大美女');
        window.location.href = 'hp.html';  // 跳转到 hp.html 页面
    } else {
        // 登录失败，显示错误提示信息
        document.getElementById('error-message').style.display = 'block';  // 显示错误信息
    }
});
