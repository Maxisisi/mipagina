document.querySelectorAll('.planta').forEach(planta => {
    planta.addEventListener('click', () => {
        // Obtén el valor del atributo data-info
        const descripcion = planta.getAttribute('data-info');
        alert(`${descripcion}`);
    });
});