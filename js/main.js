const elSwitchForm = document.querySelector("[data-switch-form]");
const elCurrencyPrice = document.querySelectorAll("[data-currency-price]");

elSwitchForm.addEventListener("change", (evt) => {
  const period = evt.target.value;

  elCurrencyPrice.forEach((item) => {
    if (period === "anually") {
      item.textContent = item.closest(
        "[data-anually-payment]"
      ).dataset.anuallyPayment;
    } else {
      item.textContent = item.closest(
        "[data-monthly-payment]"
      ).dataset.monthlyPayment;
    }
  });
});
