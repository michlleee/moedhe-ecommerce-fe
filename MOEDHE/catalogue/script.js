
function filter() {
    window.location.href = 'tops.html'; 
}

document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('topscheckbox');
    checkbox.addEventListener('change', (event) => {
        localStorage.setItem('checked', event.target.checked);
        if (event.target.checked) {
            localStorage.setItem('prev', window.location.href);
            filter('bestseller.html');
        }
    });

    const state=localStorage.getItem('checked');
    if(state!=NULL){
        checkbox.checked=state=='true';
    }

    checkbox.addEventListener('change', (event) => {
        // Store the checkbox state in localStorage
        localStorage.setItem('checkboxState', event.target.checked);

        if (event.target.checked) {
            // Store the current page URL before navigating
            localStorage.setItem('previousPage', window.location.href);
            filter();
        }
    });
});
