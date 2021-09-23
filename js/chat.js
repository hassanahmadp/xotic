const showChat = document.querySelector('.showChat');
const people = document.querySelector('.people');
const showDetails = document.querySelector('.message_backButton');

showChat.addEventListener('click', () => {
    people.classList.add('active')
});
showDetails.addEventListener('click', () => {
    people.classList.remove('active')
});
