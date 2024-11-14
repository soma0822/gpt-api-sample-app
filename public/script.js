async function sendMessage() {
  const message = document.getElementById('userInput').value;
  const responseDiv = document.getElementById('response');

  try {
      const response = await fetch('/chat', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
      });
      const data = await response.json();
      responseDiv.innerHTML = `<p>${data.reply}</p>`;
  } catch (error) {
      responseDiv.innerHTML = `<p>エラーが発生しました</p>`;
  }
}
