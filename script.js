// Функции для PDF
function openPdf() {
  const pdfViewer = document.getElementById("pdf-viewer");
  const pdfIframe = document.getElementById("pdf-iframe");
  pdfIframe.src = "27115558.pdf"; // Укажите путь к вашему PDF файлу
  pdfViewer.style.display = "block";
}

function closePdf() {
  const pdfViewer = document.getElementById("pdf-viewer");
  const pdfIframe = document.getElementById("pdf-iframe");
  pdfIframe.src = "";
  pdfViewer.style.display = "none";
}

// Функции для фотогалереи
let currentImageIndex = 0;
const images = document.querySelectorAll(".gallery-img");

function showNextImage() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
}

// Автолистание каждые 3 секунды
setInterval(showNextImage, 3000);
