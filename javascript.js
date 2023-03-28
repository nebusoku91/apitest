const button = document.getElementById('get-joke');
const details = document.getElementById('joke-details');

button.addEventListener('click', () => {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      const setup = data.setup;
      const punchline = data.punchline;
      const html = `
        <p><strong>Setup:</strong> ${setup}</p>
        <p><strong>Punchline:</strong> ${punchline}</p>
      `;
      details.innerHTML = html;
    })
    .catch(error => {
      const html = `
        <p>Error retrieving joke. Please try again later.</p>
      `;
      details.innerHTML = html;
    });
});
