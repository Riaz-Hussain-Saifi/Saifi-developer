document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form') as HTMLFormElement;

    form.addEventListener('submit', (event) => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const message = (document.getElementById('message') as HTMLTextAreaElement).value;

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            event.preventDefault();
        }
    });
});
