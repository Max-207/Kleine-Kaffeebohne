const productDialogElement = document.querySelector(".product-dialog");
const productDialogHeadlineElement = productDialogElement.querySelector("div p.h2");

const productElements = document.querySelectorAll(".product");
for(productElement of productElements) {
    const text = productElement.querySelector("p.h3").textContent;
    const source = productElement.querySelector("img").src;
    productElement.addEventListener("click", () => {
        productDialogElement.showModal();
        document.body.classList.add("openedDialog");
        productDialogHeadlineElement.textContent = text;
        productDialogElement.querySelector("img").src = source;
    });
}

const productDialogCloseElement = document.querySelector(".product-dialog__close");
productDialogCloseElement.addEventListener("click", () => {
    productDialogElement.close();
    document.body.classList.remove("openedDialog");
})