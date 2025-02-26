document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('js-banks-search');
  const suggestionsList = document.getElementById('js-banks-suggestions');
  const noResultsBlock = document.getElementById('js-no-results');
  const clearInputBtn = document.getElementById('js-clear-input-button');
  const banksContainer = document.getElementById('js-banks-list');

  const banksList = [...document.querySelectorAll('.js-bank-item')].map(bank => ({
    name: bank.dataset.name.toLowerCase(),
    element: bank
  }));

  searchInput.addEventListener('keydown', function (e) {
    if (this.value) {
      if (e.key === 'Enter') {
        filterBanks();
        clearInput();
      }
    }
  });

  searchInput.addEventListener('input', () => {
    showSuggestions();
  });

  clearInputBtn.addEventListener('click', () => {
    clearInput();
    showAllBanks();
  });

  const filterBanks = () => {
    const query = searchInput.value.toLowerCase().trim();
    let isBankFound = false;

    for (let bank of banksList) {
      if (bank.name.includes(query)) {
        bank.element.classList.add('banks__item_active');
        isBankFound = true;
      } else {
        bank.element.classList.remove('banks__item_active');
      }
    }

    if (isBankFound) {
      banksContainer.classList.add('banks__list_active');
      noResultsBlock.classList.remove('banks__no-results_active')
    } else {
      banksContainer.classList.remove('banks__list_active');
      noResultsBlock.classList.add('banks__no-results_active');
    }
  };

  const showSuggestions = () => {
    suggestionsList.innerHTML = '';
    const query = searchInput.value.toLowerCase().trim();

    if (query) {
      const matchesList = banksList.filter(bank => bank.name.includes(query));

      if (matchesList.length) {
        suggestionsList.classList.add('banks__suggestions_active');

        matchesList.forEach(bank => {
          const suggestion = document.createElement('li');

          suggestion.classList.add('banks__suggestion');
          suggestion.textContent = bank.name;

          suggestion.addEventListener('click', () => {
            showChosenBank(bank.name);
            clearInput();
            suggestionsList.classList.remove('banks__suggestions_active');
          });

          suggestionsList.appendChild(suggestion);
        });
      } else {
        suggestionsList.classList.remove('banks__suggestions_active');
      }
    } else {
      suggestionsList.classList.remove('banks__suggestions_active');
    }
  };

  const clearInput = () => {
    searchInput.value = '';
    suggestionsList.classList.remove('banks__suggestions_active');
  };

  const showChosenBank = bankName => {
    for (let bank of banksList) {
      if (bank.name === bankName) {
        bank.element.classList.add('banks__item_active');
      } else {
        bank.element.classList.remove('banks__item_active');
      }
    }

    banksContainer.classList.add('banks__list_active');
    noResultsBlock.classList.remove('banks__no-results_active');
  };

  const showAllBanks = () => {
    banksList.forEach(bank => {
      bank.element.classList.add('banks__item_active')
    });

    banksContainer.classList.add('banks__list_active');
    noResultsBlock.classList.remove('banks__no-results_active');
  };
});
