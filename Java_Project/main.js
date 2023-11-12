

const menuBtn = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    navbar.classList.toggle('show')
}

// Lấy các phần tử từ DOM
const decreaseBtn = document.querySelector('.btn-decrease');
const increaseBtn = document.querySelector('.btn-increase');
const inputValue = document.querySelector('.input-value');

// Định nghĩa hàm tăng giá trị
function increaseValue() {
    const currentValue = parseInt(inputValue.value);
    inputValue.value = currentValue + 1;
}

// Định nghĩa hàm giảm giá trị
function decreaseValue() {
    const currentValue = parseInt(inputValue.value);
    inputValue.value = currentValue - 1;
}

// Gán sự kiện cho nút tăng và giảm
increaseBtn.addEventListener('click', increaseValue);
decreaseBtn.addEventListener('click', decreaseValue);

