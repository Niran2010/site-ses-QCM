document.getElementById('questionnaire-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    if (age === '' || isNaN(age)) {
        alert('Veuillez entrer un âge valide.');
        return;
    }

    // Ici vous pouvez ajouter des fonctionnalités supplémentaires pour traiter les réponses.
    alert('Merci pour vos réponses !');
});
