function hitungBMI() {
    
    // mengambil nilai dari input
    var beratBadan = document.getElementById("beratBadan").value;
    var tinggiBadan =document.getElementById("tinggiBadan").value;

    // mengkonversi tinggi badan dari CM ke M
    tinggiBadan = tinggiBadan / 100;

    // menghitung BMI dengan rumus beratBadan / (tinggiBadan^2)
    var BMI = beratBadan / Math.pow(tinggiBadan, 2);
    let hasil = parseInt(BMI);

    // keterangan dari hasil
    var keterangan = "";
    if (BMI < 18.5) {
        keterangan = "Kekurangan Berat Badan";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        keterangan ="Berat Badan Ideal";
    } else if (BMI >=25 && BMI <29.9) {
        keterangan ="Kelebihan Berat Badan";
    } else {
        keterangan = "Obesitas";
    }

     // menampilkan hasil dan keterangan
     var resultText = "<span class = 'BMI-value'>" + BMI.toFixed(2) + "</span><br>" +
     "<span class = 'keterangan'>" + keterangan + "</span>";
     document.getElementById('resultArea').innerHTML = resultText;
     console.log(resultText);

    //  arahan dari keterangan
     var textArahan = "";
     if (BMI < 18.5) {
        textArahan = "Anda berada dalam kategori 'Kekurangan Berat Badan'. Cara terbaik untuk menambah berat badan adalah dengan mengatur kalori dari makanan yang di konsumsi atau dengan meningkatkan massa otot";
     } else if (BMI >= 18.5 && BMI < 24.9){
        textArahan = " Anda berada dalam kategori 'Berat Badan Ideal' . Pertahankan Berat Badan Anda dengan mengatur pola makan dan berolahraga";
     } else if (BMI >= 25 && BMI < 29.9){
        textArahan = "Anda berada dalam kategori 'Kelebihan Berat Badan' . Cara terbaik untuk menurunkan berat badan adalah mulai dari mengatur pola makan, diet atau berolahraga ";
     } else {
        textArahan ="Anda dalam kategori 'Obesitas' . Segera rujuk ke Rumah Sakit";
     }
        
     var resultArahan = textArahan;
     document.getElementById('areaArahan').innerHTML =resultArahan;
     console.log(resultArahan);
} 

function resetForm() {
    // Reset semua input dan hasil
    document.getElementById("beratBadan").value = "";
    document.getElementById("tinggiBadan").value = "";
    document.getElementById("Usia").value = "";
    document.getElementById("lakiLaki").checked = false;
    document.getElementById("Perempuan").checked = false;
    document.getElementById("resultArea").innerHTML = "";
    document.getElementById("areaArahan").innerHTML ="";
}