
// scripts.js
function navigate(page) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = page;
    }, 500);
}

// Keep the navigation function
function navigate(page) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = page;
    }, 500);
}
// Updated interactive button functionality
const buttons = document.querySelectorAll('.interactive-button');
const displayText = document.getElementById('display-text');

let currentText = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const text = button.getAttribute('data-text');

        if (text === currentText) {
            // If the clicked button's text is already displayed, do nothing
            return;
        }

        currentText = text;

        // Animate out the current text
        if (!displayText.classList.contains('hidden')) {
            displayText.classList.add('hide');
            setTimeout(() => {
                displayText.innerHTML = text; // Use innerHTML to support HTML content
                displayText.classList.remove('hide');
                displayText.classList.add('show');
            }, 500); // Match the CSS animation duration
        } else {
            // If hidden, directly show the new text
            displayText.innerHTML = text; // Use innerHTML to support HTML content
            displayText.classList.remove('hidden');
            displayText.classList.add('show');
        }
    });
});

function showImageEffect(button) {
    const image = button.querySelector('.button-image');

    // Add a class for a temporary animation
    image.classList.add('clicked-effect');

    // Remove the effect after animation ends
    setTimeout(() => {
        image.classList.remove('clicked-effect');
    }, 300); // Duration should match the CSS transition
}

// Add event listener for the picture button
const pictureButton = document.getElementById('picture-button');
const productImage = document.getElementById('product-image');

pictureButton.addEventListener('click', () => {
    // Toggle visibility of the product image
    if (productImage.classList.contains('hidden')) {
        productImage.classList.remove('hidden');
        productImage.classList.add('show');
    } else {
        productImage.classList.add('hidden');
        productImage.classList.remove('show');
    }
});






