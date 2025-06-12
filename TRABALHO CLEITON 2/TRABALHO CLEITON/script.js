document.addEventListener("DOMContentLoaded", () => {
    const nomeInput = document.getElementById('nome');
    const raInput = document.getElementById('ra');
  

    nomeInput.addEventListener('input', () => {
      nomeInput.value = nomeInput.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    });
  

    raInput.addEventListener('input', () => {
      raInput.value = raInput.value.replace(/\D/g, '').slice(0, 8);
    });
  });
  