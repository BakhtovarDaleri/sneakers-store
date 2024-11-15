function functio(small) {
  var full = document.getElementById("imagebox");
  full.src = small.src;
}

const validate = new JustValidate("#msg-form");

validate.addField("#name", [
  {
    rule: "required",
    errorMessage: "Введите имя",
  },
]);

validate.addField("#email", [
  {
    rule: "required",
    errorMessage: "Введите почту",
  },
  {
    rule: "email",
    errorMessage: "Почта введена не верно!",
  },
]);
validate.addField("#tel-number", [
  {
    rule: "required",
    errorMessage: "Введите номер телефона",
  },
]);

validate.onSuccess(function () {
  alert("Проверка пройдена успешно!");

  // Находим форму и сбрасываем ее поля
  document.querySelector("#msg-form").reset();
});

// Добавление товара в корзину и избранное
document.addEventListener("DOMContentLoaded", function () {
  const cartCount = document.querySelector("#cart-count");
  const favoritesCount = document.querySelector("#favorites-count");

  // Начальные значения для корзины и избранного
  let cartItems = 0;
  let favoriteItems = 0;

  //Функция для добавления товара в корзину
  function addToCart() {
    cartItems++;
    cartCount.textContent = cartItems;
  }

  //функция для добавления товара в избранное
  function addToFavorites() {
    favoriteItems++;
    favoritesCount.textContent = favoriteItems;
  }

  //Получаем все кнопки "Добавить в корзину" и иконки "Избранное"
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  document.querySelectorAll(".small_card .fa-heart").forEach((icon) => {
    icon.addEventListener("click", addToFavorites);
  });
});

// Функция для гамбургера
function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}
