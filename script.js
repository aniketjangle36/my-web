const donateBtn = document.getElementById('donateBtn');
const donationForm = document.getElementById('donationForm');
const continueBtn = document.getElementById('continueBtn');
const amountInput = document.getElementById('amount');
const errorText = document.getElementById('error');

donateBtn.addEventListener('click', () => {
    donationForm.classList.remove('hidden');
    donateBtn.style.display = 'none';
});

continueBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        errorText.classList.remove('hidden');
    } else {
        errorText.classList.add('hidden');
        alert('Proceeding to Payment...');
        // Next steps: redirect or show payment form
    }
});