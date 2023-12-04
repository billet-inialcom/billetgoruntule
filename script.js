// Bu fonksiyon, iletişim formunu sunucuya gönderir ve bir mesaj gösterir
function submitForm(event) {
    event.preventDefault(); // Formun varsayılan davranışını engeller
    let name = document.getElementById("name").value; // Adınız alanındaki değeri alır
    let email = document.getElementById("email").value; // E-posta Adresiniz alanındaki değeri alır
    let message = document.getElementById("message").value; // Mesajınız alanındaki değeri alır
    let data = {name, email, message}; // Gönderilecek veri objesini oluşturur
    let url = "https://example.com/send-form"; // Sunucunun URL'sini belirler
    fetch(url, { // Fetch API ile sunucuya istek yapar
        method: "POST", // İstek yöntemi POST olur
        headers: { // İstek başlıklarını belirler
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // İstek gövdesine veri objesini JSON formatında ekler
    })
    .then(response => response.json()) // Sunucudan gelen yanıtı JSON formatında alır
    .then(data => { // Yanıt verisini işler
        if (data.success) { // Yanıt verisinde success özelliği true ise
            alert("Mesajınız başarıyla gönderildi. Teşekkürler."); // Bir uyarı mesajı gösterir
            document.getElementById("contact-form").reset(); // Formu sıfırlar
        } else { // Yanıt verisinde success özelliği false ise
            alert("Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin."); // Bir uyarı mesajı gösterir
        }
    })
    .catch(error => { // Sunucudan gelen yanıtta bir hata oluşursa
        console.error(error); // Hatayı konsola yazar
        alert("Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin."); // Bir uyarı mesajı gösterir
    });
    return false; // Formun varsayılan davranışını engeller
}