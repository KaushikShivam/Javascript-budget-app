var budgetController = (function() {
	//code
})();

var UIController = (function() {
	//code
})();

var controller = (function(budgetCtrl, UIctrl) {
	var ctrlAddItem = function() {
		//1. Get inout data
		//2. Add item to the budget controller
		//3. Add the new item to the UI controller
		//4. Calculate the budget
		//5. Display the budget
	};

	document.querySelector('.add__button').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event) {
		if (event.keyCode === 13 || event.which === 13) {
			ctrlAddItem();
		}
	});
})(budgetController, UIController);
