var budgetController = (function() {
	//code
})();

var UIController = (function() {
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	};

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value,
				description: document.querySelector(DOMStrings.inputDescription).value,
				value: document.querySelector(DOMStrings.inputValue).value
			};
		},
		getDOMstrings: function() {
			return DOMstrings;
		}
	};
})();

var controller = (function(budgetCtrl, UIctrl) {
	var setupEventListeners = function() {
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event) {
			if (event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	};

	var DOM = UIctrl.getDOMstrings();

	var ctrlAddItem = function() {
		//1. Get input data
		var input = UIctrl.getInput();

		console.log(input);
		//2. Add item to the budget controller
		//3. Add the new item to the UI controller
		//4. Calculate the budget
		//5. Display the budget
	};

	return {
		init: function() {
			setupEventListeners();
		}
	};
})(budgetController, UIController);

controller.init();
