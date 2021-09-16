let phonePrice = 0;
let coverPrice = 0;
let subTotal = 1219 + 59;
let total = 0;

function priceHandling(isIncrease) {
  let unitPhone = Number(document.getElementById("unit-phone").value);
  if (isIncrease) {
    unitPhone++;
    subTotal += 1219;
  } else {
    if (unitPhone !== 0) {
      unitPhone--;
      subTotal -= 1219;
    }
  }
  document.getElementById("unit-phone").value = unitPhone;
  phonePrice = unitPhone * 1219;
  document.getElementById("phone-price").innerText = phonePrice;
  document.getElementById("sub-total").innerText = subTotal;
  total = subTotal;
  document.getElementById("total").innerText = total;
}
//plus Phone
document.getElementById("plus-phone").addEventListener("click", function () {
  priceHandling(true);
});
//Minus Phone
document.getElementById("minus-phone").addEventListener("click", function () {
  priceHandling(false);
});

//Cover plus
document.getElementById("plus-cover").addEventListener("click", function () {
  let unitCover = Number(document.getElementById("unit-cover").value);
  unitCover++;
  document.getElementById("unit-cover").value = unitCover;
  coverPrice = unitCover * 59;
  document.getElementById("cover-price").innerText = coverPrice;
  subTotal += 59;
  document.getElementById("sub-total").innerText = subTotal;
  total = subTotal;
  document.getElementById("total").innerText = total;
});
document.getElementById("minus-cover").addEventListener("click", function () {
  let unitCover = Number(document.getElementById("unit-cover").value);
  if (unitCover !== 0) {
    unitCover--;
    document.getElementById("unit-cover").value = unitCover;
    coverPrice = unitCover * 59;
    document.getElementById("cover-price").innerText = coverPrice;
    subTotal -= 59;
    document.getElementById("sub-total").innerText = subTotal;
    total = subTotal;
    document.getElementById("total").innerText = total;
  }
});
function submit() {
  if (total > 0) {
    document.getElementById("message").style.display = "block";
    document.getElementById("container").style.display = "none";
  }
}
