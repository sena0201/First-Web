const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const searchInput = $(".search-input");
const searchHistory = $(".search-history");

searchInput.onclick = function (e) {
    searchHistory.classList.add("open");
};

searchHistory.onmousedown = function (e) {
    e.preventDefault();
};

searchInput.onblur = function () {
    searchHistory.classList.remove("open");
};

const searchSelect = $(".search-select");
const selectList = $(".select__list");

searchSelect.onmouseover = function (e) {
    selectList.classList.add("open");
};

searchSelect.onmouseout = function (e) {
    selectList.classList.remove("open");
};

const selectPrice = $(".select-price");
const priceList = $(".price-list");

selectPrice.onmouseover = function (e) {
    priceList.classList.add("open");
};

selectPrice.onmouseout = function (e) {
    priceList.classList.remove("open");
};

var controlList = $$(".control-btn");
var controlBtns = Array.from(controlList);

controlBtns.forEach(function (btn) {
    btn.onclick = function () {
        $(".control-btn.active").classList.remove("active");
        btn.classList.add("active");
    };
});

var productElement = document.getElementById("product");
if (productElement) {
    for (var i = 1; i <= 20; i++) {
        var product = document.createElement("div");
        product.classList.add("product-item", "col-5");
        product.innerHTML = `
        <img src="./assets/image/macbook.jpg" alt="" class="product-photo" />
        <p class="product-name">Laptop</p>
        <p class="product-price">999.000đ</p>
        <div class="product-evaluate">
            <i class="heart-icon fa-solid fa-heart"></i>
            <div class="product-star">
                <i class="star-icon fa-solid fa-star"></i>
                <i class="star-icon fa-solid fa-star"></i>
                <i class="star-icon fa-solid fa-star"></i>
                <i class="star-icon fa-solid fa-star"></i>
                <i class="star-icon fa-regular fa-star"></i>
            </div>
            <p class="product-quantity">88 đã bán</p>
        </div>
        <div class="product-footer">
            <p>Whoo</p>
            <p>Nhật Bản</p>
        </div>
        <div class="discount">
            <span>GIẢM</span>
            <span>43%</span>
        </div>
        `;
        productElement.appendChild(product);
    }
}
