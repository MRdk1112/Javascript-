document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "test" && password === "1234") {
        alert("Login Successful!");
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
