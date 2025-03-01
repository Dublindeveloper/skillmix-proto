// scripts.js
function setupForm() {
    const pushButton = document.getElementById('push-shift');
    const dateInput = document.getElementById('shift-date');
    const typeSelect = document.getElementById('shift-type');

    pushButton.addEventListener('click', (e) => {
        e.preventDefault();
        const date = dateInput.value || 'Mar 5';
        const type = typeSelect.value;
        window.location.href = `staff.html?shift=${encodeURIComponent(`${date}, ${type} - Mary Ward`)}`;
    });
}

function loadShift() {
    const urlParams = new URLSearchParams(window.location.search);
    const shift = urlParams.get('shift');
    if (shift) {
        const list = document.getElementById('overtime-list');
        const li = document.createElement('li');
        li.innerHTML = `${shift} <a href="confirmed.html" class="button">Accept</a>`;
        list.appendChild(li);
    }
}