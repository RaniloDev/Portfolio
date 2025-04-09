document.getElementById("main_contact_form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const formsubmitURL = "https://formsubmit.co/12ranilo3@gmail.com"; 

    fetch(formsubmitURL, {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        window.location.href = "thank-you.html";
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro na conexão.");
    });
  });