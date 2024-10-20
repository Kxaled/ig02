document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Save username and password to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password); // Note: Storing passwords in local storage is NOT secure!

    // Simple validation message
    document.getElementById('message').innerText = `Username saved: ${username}`;
});
