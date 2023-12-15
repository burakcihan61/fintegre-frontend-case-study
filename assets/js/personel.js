function showLoader() {
  // Butona tıklandığında loader'ı görünür yap
  document.getElementById("loader1").style.display = "inline-block";

  // 3 saniye sonra loader'ı gizle
  setTimeout(function () {
    document.getElementById("loader1").style.display = "none";
  }, 3000);
}
