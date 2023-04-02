const btn = document.getElementById('btn');

btn.onclick = setInterval(onClick, 10000);

btn.addEventListener("click", onClick);

let index = 0;

const colors = ['yellow', 'green', 'red'];

function onClick() {
    btn.style.backgroundColor = colors[index];
    index = index >= colors.length - 1 ? 0 : index + 1;
}