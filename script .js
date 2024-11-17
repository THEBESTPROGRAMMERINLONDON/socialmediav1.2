// script.js

// Select DOM elements
const usernameInput = document.getElementById('username');
const languageSelect = document.getElementById('language');
const saveProfileButton = document.getElementById('saveProfile');
const postContentInput = document.getElementById('postContent');
const postButton = document.getElementById('postButton');
const postsContainer = document.getElementById('postsContainer');

// User profile
let userProfile = {};

// Save profile data
saveProfileButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const language = languageSelect.value;

  if (!username || !language) {
    alert('Please complete your profile!');
    return;
  }

  userProfile = { username, language };
  alert(`Profile saved: ${username} learning ${language}`);
});

// Add a post
postButton.addEventListener('click', () => {
  const postContent = postContentInput.value.trim();

  if (!postContent) {
    alert('Please write something to post!');
    return;
  }

  if (!userProfile.username || !userProfile.language) {
    alert('Please complete your profile before posting!');
    return;
  }

  // Create post element
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  postElement.innerHTML = `
    <h3>${userProfile.username}</h3>
    <p>${postContent}</p>
    <p class="language">Learning: ${userProfile.language}</p>
  `;

  // Add post to feed
  postsContainer.prepend(postElement);

  // Clear input
  postContentInput.value = '';
});