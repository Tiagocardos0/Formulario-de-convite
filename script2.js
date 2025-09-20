const fileInput = document.getElementById('fileInput');
const customBtn = document.getElementById('customBtn');
const fileName = document.getElementById('fileName');

customBtn.addEventListener('click', () => {
  fileInput.click(); // Aciona o input file escondido
});

fileInput.addEventListener('change', () => {
  if(fileInput.files.length > 0) {
    fileName.textContent = fileInput.files[0].name; // Mostra o nome do arquivo
  } else {
    fileName.textContent = "Nenhum arquivo selecionado";
  }
});