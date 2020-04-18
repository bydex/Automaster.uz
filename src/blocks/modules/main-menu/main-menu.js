import "nodelist-foreach-polyfill";

let modalBtn = document.querySelectorAll("[data-modal-id], [data-catalog-category]"),
    body = document.body,
    html = document.querySelector("html"),
    catalogMenu = document.querySelector("[data-catalog-menu]"),
    catalogContainer = document.querySelector("[data-catalog-container]"),
    modal;



function catalogOpen(ms = 250) {
    if (catalogMenu.classList.contains("is-active")) {
        catalogMenu.fadeOut(ms);
        catalogMenu.classList.remove("is-active");
        setTimeout(() => {
            catalogContainer.fadeIn(ms);
            catalogContainer.classList.add("is-active");
        }, ms);
    }
}
function catalogClose(ms = 250) {
    if (catalogContainer.classList.contains("is-active")) {
        catalogContainer.fadeOut(ms);
        catalogContainer.classList.remove("is-active");
        setTimeout(() => {
            catalogMenu.fadeIn(ms);
            catalogMenu.classList.add("is-active");
        }, ms);
    }
}

function toggleModal() {
    let isCatalogActive = catalogContainer.classList.contains("is-active");

    if (this.dataset.modalId) {  // Кнопки, которые вызывают функцию еще раз, чтобы открыть или закрыть окно, ссылку на которое хранят в data-modal-id
        document.querySelectorAll("[data-modal]").forEach(el => {
            if (el.classList.contains("active")
            && el !== document.querySelector(`[data-modal="${this.dataset.modalId}"]`)) {
                toggleModal.call(el);
            }
        });
        modal = document.querySelector(`[data-modal="${this.dataset.modalId}"]`);
        modal.classList.toggle("active");

    } else if (this.dataset.modal) { // открывается или закрывается модальное окно
        this.classList.toggle("active");
    }
    if (this.dataset.catalogCategory !== undefined && !isCatalogActive) { // Открывает каталог в модалке
        catalogOpen();
    } else if (isCatalogActive || this.dataset.catalogCategory !== undefined && isCatalogActive) { // Если каталог открыт и нажата любая кнопка, которая не вызывает каталог, то он закрывается
        catalogClose();
    }

    if (this.dataset.modalId && this.dataset.catalogCategory || this.dataset.modal || this.dataset.modalId) { // Если в условиях выше не открывается каталог, то скрывается скролл
        body.classList.toggle("overflow-hidden");
        html.classList.toggle("overflow-hidden");
    }
}
modalBtn.forEach(el => {
    el.addEventListener("click", () => toggleModal.call(el)); // по нажатию на кнопку закрывает все модальные окна, кроме вызываемого
});

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
        document.querySelectorAll("[data-modal]").forEach(el => {
            if (el.classList.contains("active")) toggleModal.call(el); // закрывает все модальные окна
        });
    }
});
