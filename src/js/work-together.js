const form = document.getElementById('form');
const modal = document.getElementById('modal-window');
const span = document.getElementsByClassName('close')[0];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {
        email: formData.get('email'),
        comments: formData.get('comments')
    };

    axios.post('https://github.com/Subx1s0o/portfolio-js-project-api', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log('Success:', response.data);
        form.reset();
        modal.style.display = "block";
    })
    .catch(error => {
        alert('There was a problem with your submission: ' + error.message);
    });
});


    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = "none";
        }
    });