async function sendQuery() {
    const input = document.getElementById('user-input').value;
    if(input.trim() === "") return alert("Please enter a question!");

    try {
        const res = await fetch('/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: input })
        });

        const data = await res.json();
        if(data.error) alert(data.error);
        else alert("AI Response:\n" + data.answer);

    } catch (err) {
        alert("Error contacting AI: " + err.message);
    }
}
