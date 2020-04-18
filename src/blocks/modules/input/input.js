if (document.querySelectorAll(".input")) {
    let input = document.querySelectorAll(".input");

    for (let i = 0; i < input.length; i++) {
        let elem = input[i];
        elem.addEventListener("input", function() {
            if (this.querySelector(".input__area").value.length === 0) {
                this.classList.remove("is-filled");
            } else {
                this.classList.add("is-filled");
            }
        });
        elem.addEventListener("focus", function() {
            this.classList.add("is-focused");
        }, true);
        elem.addEventListener("blur", function() {
            this.classList.remove("is-focused");
        }, true);
    }
}
