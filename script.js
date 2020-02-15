(function () {
	function init() {
		const form = document.forms.register;
		const validationFormCheck = function (e, myForm) {
			const fileds = Array.from(myForm.elements);
			let isValidForm = true;
			fileds.forEach((elem) => {
				if (!elem.classList.contains('form__button')) {
					if (!elem.reportValidity()) isValidForm = false;
				}
			});
			if(!isValidForm) e.preventDefault();
		}
		document.querySelector('.form__button').addEventListener("click", () => validationFormCheck(event, form));
	}
	document.addEventListener("DOMContentLoaded", init);
})();