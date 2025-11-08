document.getElementById("sendBtn").addEventListener("click", () => {
  const input = document.getElementById("userInput");
  if (input.value.trim() === "") return;

  alert("You asked: " + input.value + "\n(This is where Chef AI would respond!)");
  input.value = "";
});
