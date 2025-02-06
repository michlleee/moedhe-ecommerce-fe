
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('topscheckbox');

 
    const state = localStorage.getItem('checked');
    if (state !== null) {
        checkbox.checked = state === 'true';
    }
    
    checkbox.addEventListener('change', (event) => {
        localStorage.setItem('checkboxState', event.target.checked);

        if (!event.target.checked) {
            const previousPage = localStorage.getItem('previousPage');
            if (previousPage) {
                navigateTo(previousPage);
            } else {
                
                navigateTo('bestseller.html');
            }
        }
    });
});
