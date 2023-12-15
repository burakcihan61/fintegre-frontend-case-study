// Copy to clipboard
function copyText() {
  // Seçilen div içindeki metni al
  var textToCopy = document
    .getElementById("creditCardDiv")
    .querySelector(".div-23").innerText;

  // Geçici bir textarea oluştur
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;

  // Body içine ekle
  document.body.appendChild(tempTextArea);

  // Seçili metni seç
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999); /* For mobile devices */

  // Kopyala
  document.execCommand("copy");

  // Geçici textarea'yı kaldır
  document.body.removeChild(tempTextArea);

  // Kullanıcıya bir bilgi mesajı göster
  alert("Kopyalandı: " + textToCopy);
}

// Countdown
// Geri sayımın başlangıç değeri (saniye cinsinden)
let countdownValue = 59;

// Sayfa yüklendiğinde geri sayımı başlat
document.addEventListener("DOMContentLoaded", startCountdown);

// Geri sayımı başlatan fonksiyon
function startCountdown() {
  updateCountdown(); // Sayfa yüklendiğinde bir kere çağrılır

  // Her 1000 milisaniyede bir geri sayımı güncelle
  setInterval(function () {
    countdownValue--;

    // Eğer geri sayım sıfıra ulaştıysa sıfırla ve tekrar başlat
    if (countdownValue < 0) {
      countdownValue = 59;
    }

    updateCountdown(); // Geri sayımı güncelle
  }, 1000);
}

// Geri sayımı güncelleyen fonksiyon
function updateCountdown() {
  // Geri sayımın görüntülenen değerini güncelle
  document.querySelector(".div-35").textContent = countdownValue;

  // Her zaman "Saniye" olarak görüntüle
  document.querySelector(".div-36").textContent = "Saniye";
}
