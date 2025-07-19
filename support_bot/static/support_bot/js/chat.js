const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
    // Add message to chat window
    function addMessage(text, sender) {
      const div = document.createElement('div');
      div.classList.add('message', sender);
      div.textContent = text;
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight; // auto scroll
    }

    // Handle quick reply buttons
    document.querySelectorAll('.quick-replies button').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.textContent.toLowerCase();
        addMessage(key.charAt(0).toUpperCase() + key.slice(1), 'user');
        addMessage(faq[key], 'bot');
      });
    });



const faq = {
  shipping: "Shipping usually takes 3-5 business days after your order is processed.",
  returns: "You can return your order within 14 days of receipt for a full refund.",
  payment: "We accept Visa, MasterCard, and PayPal payments."
};

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.classList.add('message', sender);
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Création et ajout du typing indicator
function addTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.classList.add('message', 'bot', 'typing-indicator');
  typingDiv.id = 'typingIndicator';
  typingDiv.innerHTML = 'Le bot écrit <span></span><span></span><span></span>';
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Suppression du typing indicator
function removeTypingIndicator() {
  const typingDiv = document.getElementById('typingIndicator');
  if (typingDiv) {
    chatMessages.removeChild(typingDiv);
  }
}

document.querySelectorAll('.quick-replies button').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.textContent.toLowerCase();
    addMessage(key.charAt(0).toUpperCase() + key.slice(1), 'user');

    addTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      addMessage(faq[key], 'bot');
    }, 1000);
  });
});

function sendMessage(event) {
  event.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  userInput.value = '';

  addTypingIndicator();

  const key = Object.keys(faq).find(k => message.toLowerCase().includes(k));
  setTimeout(() => {
    removeTypingIndicator();

    if (key) {
      addMessage(faq[key], 'bot');
    } else {
      addMessage("Sorry, I didn't understand that. Can you rephrase?", 'bot');
    }
  }, 1500);

  return false;
}