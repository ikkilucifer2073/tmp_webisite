document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("contactButton");
    if (sendButton) {
        sendButton.onclick = contactUs;
    }
});

function contactUs() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    // const subscribe = document.getElementById("subscribe").checked ? "Yes" : "No";

    if (!name || !email || !message) {
        alert("請填寫所有必填欄位！");
        return;
    }

    const emailBody = `姓名: ${name}%0D%0AEmail: ${email}%0D%0A電話: ${phone}%0D%0A主旨: ${subject}%0D%0A%0D%0A ${message}`;
    // const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ASubject: ${subject}%0D%0AMessage: ${message}%0D%0ASubscribe: ${subscribe}`;

    // 使用 mailto 讓使用者的 Email 客戶端開啟
    window.location.href = `mailto:ikkilucifer2073@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
}
