window.onload = function() {
    document.getElementById("button").onclick = sendEmail;
};

function sendEmail() {
    const emailInput = document.getElementById("email"); 
    if (!emailInput) {
        console.error("❌ 找不到 emailInput，請檢查 HTML 是否正確！");
        return;
    }

    const email = emailInput.value.trim(); 
    if (!email) {
        alert("請輸入 Email 地址！");
        return;
    }

    const subject = encodeURIComponent("[了解最新資訊]");
    const body = encodeURIComponent("您好\n我想了解貴公司的最新資訊。\n這是我的聯絡電話：");

    window.location.href = `mailto:bella.huang@cardioring.co?subject=${subject}&body=${body}`;
}
