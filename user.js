// Paste the authorization function here
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more users as needed
  ];

  function authorize(username, password) {
    return users.some(user => user.username === username && user.password === password);
  }

  function attemptLogin() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    if (authorize(enteredUsername, enteredPassword)) {
      alert('Login successful');
      window.location.href="index.html";
    } else {
      alert('Login failed. Please check your username and password.');
    }
  }