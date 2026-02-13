
(function () {
    emailjs.init({
        publicKey: "WAv3XJBr3CXxzLm0i",
    });
})();


function showAll() {
    document.getElementById('projects').style.display = 'none';
    document.getElementById('all-projects').style.display = 'block';
    document.querySelectorAll('#all-projects .extra-project').forEach(el => el.style.display = '');
    document.getElementById('all-projects').scrollIntoView({ behavior: 'smooth' });
}

function hideAll() {
    document.getElementById('all-projects').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_uciwlt8', 'template_j8v806g', this)
        .then(() => {
            alert('✅ Message sent successfully!');
            this.reset();
        }, (error) => {
            alert('❌ Failed to send. Please try again.');
            console.error('Error:', error);
        });
});

const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
