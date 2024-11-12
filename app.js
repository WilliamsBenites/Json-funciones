function randomWord() {
    fetch('https://random-word-api.herokuapp.com/word?number=2')
        .then(response => response.json())
        .then(data => {
            const randomName = `${data[0]}-${data[1]}`;
            document.getElementById('randomWord').innerText = randomName;
        })
        .catch(error => {
            document.getElementById('randomWord').innerText = 'Error al cargar las palabras';
            console.error('Error al obtener las palabras:', error);
        });
}
randomWord();
