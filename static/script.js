async function sendMessage() {

    const question =
        document.getElementById("question").value;

    if (!question.trim()) return;

    const chatBox =
        document.getElementById("chat-box");

    chatBox.innerHTML +=
        `<div class="user"><span>${question}</span></div>`;

    document.getElementById("question").value = "";

    try {

        const res = await fetch(
            "http://127.0.0.1:8000/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: question
                })
            }
        );

        const data = await res.json();

        chatBox.innerHTML +=
            `<div class="bot"><span>${data.response}</span></div>`;

    } catch (error) {

        chatBox.innerHTML +=
            `<div class="bot"><span>Error: Unable to connect to server.</span></div>`;

        console.error(error);
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("question").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
