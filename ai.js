export async function sendChat() {
  const prompt = document.getElementById("prompt").value;
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<p><b>Kamu:</b> ${prompt}</p>`;
  document.getElementById("prompt").value = "";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer sk-proj--RQdx..." // Ganti dengan API key kamu
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;
  chatBox.innerHTML += `<p><b>Dinnoo:</b> ${reply}</p>`;
}