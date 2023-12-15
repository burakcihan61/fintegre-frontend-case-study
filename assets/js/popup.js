// Sayfa yüklendiğinde modalı aç
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Modalı kapat
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Kullanıcının modalın dışına tıkladığında modalı kapat
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
