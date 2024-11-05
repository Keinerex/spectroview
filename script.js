const table = document.getElementById("table");

const rows = table.children;

Array.from(table.rows).forEach(row => {
    console.log(Array.from(row.cells).map(cell => cell.textContent))
})