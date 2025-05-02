// Menü açma/kapama fonksiyonu
function toggleMenu() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'block';
  }
}

// Login ve Sign Up formlarını açma
function showLogin() {
  document.getElementById('authForms').style.display = 'block';
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('authModal').style.display = 'flex';
}

function showSignup() {
  document.getElementById('authForms').style.display = 'block';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
  document.getElementById('authModal').style.display = 'flex';
}

// Modal'ı kapatma
function closeModal() {
  document.getElementById('authModal').style.display = 'none';
}

// Profil modalını açma
function showProfile() {
  const username = localStorage.getItem('username');
  document.getElementById('profileUsername').innerText = username;
  document.getElementById('profileModal').style.display = 'flex';
}

// Profil bilgilerini kaydetme
function saveProfile() {
  const bio = document.getElementById('bioInput').value;
  alert('Profile saved! Your bio: ' + bio); // Burada gerçek veritabanı kaydı yapılabilir
  closeProfile();
}

// Profil modalını kapatma
function closeProfile() {
  document.getElementById('profileModal').style.display = 'none';
}

// Kullanıcı çıkış yapınca
function logout() {
  localStorage.removeItem('username');
  document.getElementById('guestMenu').style.display = 'block';
  document.getElementById('userMenu').style.display = 'none';
  alert('Logged out successfully!');
}

// Kullanıcı giriş yapınca
function loginUser(username) {
  localStorage.setItem('username', username);
  document.getElementById('guestMenu').style.display = 'none';
  document.getElementById('userMenu').style.display = 'block';
  closeModal();
}

// Kullanıcı kaydederken
document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;

  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  if (/[çığİı]/.test(username)) {
    alert('Username cannot contain Turkish characters.');
    return;
  }

  // Kullanıcı kaydedildiğinde (örneğin, veritabanına kaydedebilirsiniz)
  loginUser(username);
  alert('Account created successfully!');
});

// Kullanıcı giriş yaparken
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Burada basit bir kontrol yapıyoruz. Gerçek uygulamalarda API ile doğrulama yapılmalıdır.
  if (username === 'testuser' && password === 'password123') {
    loginUser(username);
    alert('Logged in successfully!');
  } else {
    alert('Invalid username or password.');
  }
});

// Sayfa yüklendiğinde kullanıcının giriş yapıp yapmadığını kontrol et
window.onload = function () {
  const username = localStorage.getItem('username');
  if (username) {
    document.getElementById('guestMenu').style.display = 'none';
    document.getElementById('userMenu').style.display = 'block';
  }
};
