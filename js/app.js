const tabsItems = document.querySelectorAll('.tab-item');
const tabsContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add('tab-border');

  // Grab content item from DOM
  const tabsContentItem = document.querySelector(`#${this.id}-content`);

  // Add show class
  tabsContentItem.classList.add('show');
}

function removeBorder() {
  // Remove border form the previos item
  tabsItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  // Remove border form the previos item
  tabsContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabsItems.forEach(item => item.addEventListener('click', selectItem));