if (document.querySelectorAll('.input')) {
    let input = document.querySelectorAll('.input');

    input.forEach(e => {
        e.addEventListener("input", function() {
            console.log('typing')
            if (this.querySelector('.input__area').value.length === 0) {
                this.classList.remove("is-filled");
            } else {
                this.classList.add('is-filled');
            }
        });
        e.addEventListener("focus", function(e) {
            this.classList.add("is-focused");
        }, true)
        e.addEventListener("blur", function() {
            this.classList.remove("is-focused");
        }, true)
    })
}
