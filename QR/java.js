
const imgBox = document.getElementById("ImgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
function generateQR() {
    const qrData = qrText.value.trim();
    if (qrData) {
        
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrData);
    } else {
      
        alert("Please enter a URL or text to generate a QR code.");
    }
}