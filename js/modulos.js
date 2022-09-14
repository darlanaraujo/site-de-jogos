export const limpaInput = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.value = '';
    });
};