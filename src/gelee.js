const {ipcRenderer} = require('electron');

// random string
function randomID(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

// controls (yes it's messy)
ipcRenderer.on('window-blur', () => {
    document.body.classList.add('blur');
});

ipcRenderer.on('window-focus', () => {
    document.body.classList.remove('blur');
});

document.getElementById('Control_Close').addEventListener('click', () => {
    ipcRenderer.send('close-window');
});

document.getElementById('Control_Minimize').addEventListener('click', () => {
    ipcRenderer.send('minimize-window');
});

document.getElementById('Control_Maximize').addEventListener('click', () => {
    ipcRenderer.send('maximize-window');
});

ipcRenderer.on('maximized', () => {
    document.body.classList.add('max');
});

ipcRenderer.on('unmaximized', () => {
    document.body.classList.remove('max');
});

let Gel = new Object();

/* search bar */
Gel.SearchBar = new Object();

Gel.SearchBar.toggle = function() {
    document.querySelector('SearchBar').classList.toggle('active');
    document.getElementById('mainInput').focus();
};
Gel.SearchBar.hide = function() {
    document.querySelector('SearchBar').classList.remove('active');
};

// spinner
document.querySelectorAll('Spinner').forEach(function(spinner) {
    spinner.innerHTML = `
        <img src="../assets/Spinner.png" alt="spinner" />
    `;

    if(spinner.attributes.hasOwnProperty('small')) {
        spinner.classList.add('small');
    }
});

// toasts
Gel.Toast = new Object();

Gel.Toast.spawn = function(message) {
    let id = randomID(8);

    let toast = document.querySelector("Window").appendChild(document.createElement('Toast'));
    toast.id = id;
    toast.innerHTML = `
        <p>${message}</p>

        <svg onclick="Gel.Toast.remove('${id}')" width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.4646 0L4.00269 2.53809L6.54077 0H8V1.46997L5.46729 4.00269L8 6.5354V8H6.5354L4.00269 5.46729L1.46997 8H0V6.54077L2.53809 4.00269L0 1.4646V0H1.4646Z"/>
        </svg>
    `;

    setTimeout(() => {
        document.getElementById(id).remove();
    }, 3090);
}

Gel.Toast.remove = function(id) {
    document.getElementById(id).classList.add('fadeOut');
    setTimeout(() => {
        document.getElementById(id).remove();
    }, 300);
}

// Navigation
Gel.Navigation = new Object();
Gel.Navigation.current = null;

Gel.Navigation.open = function(div) {
    document.getElementById(div).style.display = "flex";
    Gel.Navigation.current = document.getElementById(div);
    Gel.Navigation.current.classList.remove('remove');
}

Gel.Navigation.back = function() {
    Gel.Navigation.current.classList.add('remove');
    setTimeout(() => {
        Gel.Navigation.current.style.display = "none";
    }, 300);
}

// Modal
Gel.Modal = new Object();
Gel.Modal.current = null;

Gel.Modal.open = function(div) {
    document.getElementById(div).style.display = "flex";
    Gel.Modal.current = document.getElementById(div);
    Gel.Modal.current.classList.remove('remove');
}

Gel.Modal.close = function() {
    Gel.Modal.current.classList.add('remove');
    setTimeout(() => {
        Gel.Modal.current.style.display = "none";
    }, 300);
}
