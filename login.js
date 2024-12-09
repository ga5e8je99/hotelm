function handleLogin() {
    const email = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const loginDetails = {
        email: email,
        password: password,
    };

    $.ajax({
        url: 'https://hotelrev-eight.vercel.app/hotel/api/auth/login', // API تسجيل الدخول
        method: 'POST',
        contentType: "application/json",
        data: JSON.stringify(loginDetails),
        success(response) {
            console.log("Login Response:", response);

            // استخراج الجزء الأول من البريد الإلكتروني
            const emailPrefix = email.split('@')[0];

            // تخزين الجزء الأول من البريد الإلكتروني في localStorage
            localStorage.setItem('username', emailPrefix);
            
            alert(`Welcome back, ${emailPrefix}!`);

            // التوجيه إلى الصفحة الرئيسية
            window.location.href = "index.html";
        },
        error(err) {
            console.error("Login Error:", err);
            alert(`Login failed: ${err.responseJSON?.message || err.statusText || "Unknown error"}`);
        }
    });
}