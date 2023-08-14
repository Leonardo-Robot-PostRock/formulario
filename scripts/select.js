// Initialize custom select elements on the page
function initializeCustomSelects() {
	const customSelects = document.getElementsByClassName('custom-select');
	for (let i = 0; i < customSelects.length; i++) {
		initializeSingleSelect(customSelects[i]);
	}
}

// Initialize a single custom select element
function initializeSingleSelect(selectContainer) {
	const selectElement = selectContainer.querySelector('select');
	const selectedDiv = createSelectedDiv(selectElement);
	const optionContainer = createOptionContainer(selectElement);

	selectContainer.appendChild(selectedDiv);
	selectContainer.appendChild(optionContainer);

	selectedDiv.addEventListener('click', function (event) {
		event.stopPropagation();
		closeAllSelectsExcept(selectedDiv);
		toggleOptionContainer(optionContainer, selectedDiv);
	});
}

// Create and configure the selected item div
function createSelectedDiv(selectElement) {
	const selectedDiv = document.createElement('DIV');
	selectedDiv.setAttribute('class', 'select-selected');
	selectedDiv.innerHTML =
		selectElement.options[selectElement.selectedIndex].innerHTML;
	return selectedDiv;
}

// Create and configure the options container div
function createOptionContainer(selectElement) {
	const optionContainer = document.createElement('DIV');
	optionContainer.setAttribute('class', 'select-items select-hide');

	for (let j = 1; j < selectElement.length; j++) {
		const optionItem = createOptionItem(selectElement.options[j]);
		optionContainer.appendChild(optionItem);
	}

	return optionContainer;
}

// Create and configure an individual option item
function createOptionItem(option) {
	const optionItem = document.createElement('DIV');
	optionItem.innerHTML = option.innerHTML;

	optionItem.addEventListener('click', function (event) {
		updateSelectAndSelectedDiv(this, option);
		event.target.parentNode.previousSibling.click();
	});

	return optionItem;
}

// Update the select and selected div when an option is clicked
function updateSelectAndSelectedDiv(optionItem, option) {
	const selectElement =
		optionItem.parentNode.parentNode.querySelector('select');
	const selectedDiv = optionItem.parentNode.previousSibling;

	selectElement.selectedIndex = option.index;
	selectedDiv.innerHTML = option.innerHTML;

	updateSelectedClass(optionItem);
}

// Update the "same-as-selected" class for styling
function updateSelectedClass(clickedOptionItem) {
	const siblings = clickedOptionItem.parentNode.children;
	for (let i = 0; i < siblings.length; i++) {
		siblings[i].classList.remove('same-as-selected');
	}
	clickedOptionItem.classList.add('same-as-selected');
}

// Toggle visibility of the option container and update styling
function toggleOptionContainer(optionContainer, selectedDiv) {
	optionContainer.classList.toggle('select-hide');
	selectedDiv.classList.toggle('select-arrow-active');
}

// Close all select boxes except the clicked one
function closeAllSelectsExcept(clickedSelectedDiv) {
	const allOptionContainers = document.getElementsByClassName('select-items');
	const allSelectedDivs = document.getElementsByClassName('select-selected');

	for (let i = 0; i < allSelectedDivs.length; i++) {
		if (allSelectedDivs[i] !== clickedSelectedDiv) {
			allSelectedDivs[i].classList.remove('select-arrow-active');
		}
	}

	for (let i = 0; i < allOptionContainers.length; i++) {
		if (allSelectedDivs[i] !== clickedSelectedDiv) {
			allOptionContainers[i].classList.add('select-hide');
		}
	}
}

// Close all select boxes when clicking outside
document.addEventListener('click', function () {
	closeAllSelectsExcept(null);
});

// Initialize custom select dropdowns on page load
initializeCustomSelects();

function clickReset() {
	const provincias = document.querySelector('#provincias');
	const buttonClear = document.querySelector('.button2');
	console.log('clickReset function called');

	buttonClear.addEventListener('click', () => {
		provincias.selectedIndex = 0; // Reset the selected index

		// Update the custom dropdown display
		const customSelect = document.querySelector('.custom-select');
		const selectedDiv = customSelect.querySelector('.select-selected');
		selectedDiv.innerHTML = provincias.options[0].innerHTML; // Display the default option text
	});
}

clickReset();
