function showJoke() {
    const jokeOverlay = document.getElementById('joke-overlay');
    jokeOverlay.classList.add('active');
}

function hideJoke() {
    const jokeOverlay = document.getElementById('joke-overlay');
    jokeOverlay.classList.remove('active');
}

function showTemporaryMessage() {
    const temporaryMessageOverlay = document.getElementById('temporary-message-overlay');
    temporaryMessageOverlay.classList.add('active');
}

function hideTemporaryMessage() {
    const temporaryMessageOverlay = document.getElementById('temporary-message-overlay');
    temporaryMessageOverlay.classList.remove('active');
}

function showSarcasticMessage() {
    const sarcasticMessageOverlay = document.getElementById('sarcastic-message-overlay');
    sarcasticMessageOverlay.classList.add('active');
}

function hideSarcasticMessage() {
    const sarcasticMessageOverlay = document.getElementById('sarcastic-message-overlay');
    sarcasticMessageOverlay.classList.remove('active');
}
