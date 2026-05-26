const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

function filterProjects(cat, btn) {
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');

    const cards = document.querySelectorAll('.proj-card');
    let visible = 0;
    cards.forEach(card => {
        const cats = card.dataset.cat || '';
        const show = cat === 'all' || cats.includes(cat);
        card.style.display = show ? 'flex' : 'none';
        if (show) visible++;
    });
    document.getElementById('count').textContent = visible;
}

// function handleSubmit() {
//     const fname = document.getElementById('fname').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();
//     if (!fname || !email || !message) {
//         alert('Please fill in your name, email, and message.');
//         return;
//     }
//     document.getElementById('contactForm').style.display = 'none';
//     const success = document.getElementById('formSuccess');
//     success.style.display = 'flex';
// }

const hamburger = document.getElementById('hamburger');
const navmenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
});


/*async function handleSubmit() {
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!fname || !email || !message) {
        alert('Please fill your name, email, and message.');
        return;
    }

    const btn = document.getElementById('send-btn');
    btn.innerHTML = 'Sending... <i class"fa-solid fa-spinner fa-spin"></i>';
    btn.disabled = true;

    try {
        const res = await fetch('https://formspree.io/f/xgoqzopp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: fname + '' + lname,
                email: email,
                subject: subject || 'New message from portfolio',
                message: message
            })
        });

        if (res.ok) {
            document.getElementById('contactForm').style.display = 'none';
            document.getElementById('formSuccess').style.display = 'flex';
        }
        else {
            const data = await res.json();
            throw new Error(data?.errors?.[0]?.message || 'Server error');
        }
    }
    catch (err) {
        btn.innerHTML = 'Send Message';
        btn.disabled = false;
        alert('Something went wrong:' + err.message);
    }
}*/