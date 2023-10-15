function subscribeButton() {
  const elementButton = document.querySelector('.js-subscribe-button');
  
  if (elementButton.innerHTML === 'Subscribe') {
    elementButton.innerHTML = 'Subscribed';
    elementButton.classList.add('is-subscribed')
  } else {
    elementButton.innerHTML = 'Subscribe';
    elementButton.classList.remove('is-subscribed')
  }
};

 
function calculateShipping() {
    // Get the order amount from the input field
    let orderAmount = document.querySelector('.js-text-input').value;
    orderAmount = parseFloat(orderAmount);
    

    // Calculate the shipping price
    let totalPrice;
    
    if (orderAmount < 40) {
      totalPrice = orderAmount + 10;
      totalPrice = totalPrice.toFixed(2);

     } else {
      totalPrice = orderAmount;
    }


    const displayPrice = document.querySelector('.displayPrice');
    displayPrice.innerHTML = `Total Price: $${totalPrice}`;
}

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateShipping();
  }
}

function changeSecondButton() {
   const changeButton = document.querySelector('.second-button');
   changeButton.innerHTML = '9b done'
}

function headsButton(button) {
  if (button === 'heads') {
  document.querySelector('.choice').innerHTML = 'You choose heads !'
  } else if (button === 'tails') {
    document.querySelector('.choice').innerHTML = 'You choose tails !'  
  }
}

function showText() {
  const showText = document.querySelector('.text-area');
  document.querySelector('.show-text').innerHTML = `Your name is ${showText.value}`;
}

function onKey(event) {
  if (event.key === 'Enter') {
    showText();
  }
}

function typeSame() {
  let inputText = document.querySelector('.type-same');
  document.querySelector('.text-same').innerHTML = inputText.value; 
}

let testButton = document.querySelector('.js-button');
 console.log(testButton.classList.contains('js-button'));

function isToggledButton(button) {
     if (button === 'gaming') {
     let gamingButton = document.querySelector('.js-gaming');
     if (gamingButton.classList.contains('is-toggled')) {
       gamingButton.classList.remove('is-toggled');
     } else {
       gamingButton.classList.add('is-toggled')
     }
   } else if (button === 'music') {
    let gamingButton = document.querySelector('.js-music');
     if (gamingButton.classList.contains('is-toggled')) {
       gamingButton.classList.remove('is-toggled');
     } else {
       gamingButton.classList.add('is-toggled')
     }
   } else if (button === 'tech') {
    let gamingButton = document.querySelector('.js-tech');
     if (gamingButton.classList.contains('is-toggled')) {
       gamingButton.classList.remove('is-toggled');
     } else {
       gamingButton.classList.add('is-toggled')
     }
    }
}