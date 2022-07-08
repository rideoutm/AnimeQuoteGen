'use-strict';

const btn = document.querySelector('#new-quote');
const span = document.querySelector('.quote');
const author = document.querySelector('.person');
const apiCall = 'https://animechan.vercel.app/api/random';

function getQuotes() {
  fetch(apiCall)
    .then(response => {
      if (!response.ok) throw new Error(`Error, ${response.status}`);
      return response.json();
    })
    .then(quote => {
      updateQuoteText(quote.quote, quote.character);
    })
    .catch(err => console.log(`${err}`));
  //   console.log(quote.character, quote.quote)
}

function updateQuoteText(quote, person) {
  span.innerText = quote;
  author.innerText = person;
}

btn.addEventListener('click', function () {
  getQuotes();
});
