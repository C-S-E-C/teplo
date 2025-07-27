function toggleDarkMode() {
    if (document.body.style.background === 'white') {
        document.body.style.background = '';
        document.body.style.color = '';
    } else {
        document.body.style.background = 'white';
        document.body.style.color = '#222';
    }
}
