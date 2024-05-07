document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        fname: formData.get('fname'),
        lname: formData.get('lname'),
        age: formData.get('age'),
        email: formData.get('email')
    };

    fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Ma\'lumotlar yuborildi:', data);
        // Foydalanuvchiga ma'lumotlar yuborilganligi haqida xabar berish mumkin
    })
    .catch((error) => {
        console.error('Xatolik yuz berdi:', error);
        // Foydalanuvchiga xatolik haqida xabar berish mumkin
    });
});
