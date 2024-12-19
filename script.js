let categories = {
    biologi: [
        { question: "Salah satu penyebab utama penurunan keanekaragaman hayati adalah", answer: "deforestasi" },
        { question: "Ekosistem yang paling kaya akan keanekaragaman hayati di Bumi adalah", answer: "Hutan Hujan Tropis" },
        { question: "Proses di mana spesies baru muncul akibat adaptasi dan perubahan lingkungan.", answer: "evolusi" },
        { question: "Bagian sel yang berfungsi sebagai penghalang yang mengontrol masuk dan keluarnya zat, serta menjaga kestabilan internal sel.", answer: "Membran Sel" },
        { question: "Organela yang berfungsi sebagai 'pembangkit energi' sel, memproduksi ATP melalui respirasi seluler adalah?", answer: "Mitokondria" },
        { question: "Jaringan serat protein yang memberikan dukungan struktural, bentuk, dan membantu pergerakan sel disebut", answer: "sitoskeleton" },
        { question: "Hewan yang memiliki kemampuan untuk beradaptasi dengan cepat terhadap perubahan lingkungan disebut?", answer: "Spesies invasif" },
        { question: "Ekosistem laut memiliki keanekaragaman hayati yang tinggi, salah satunya ditunjukkan oleh keberadaan?", answer: "Terumbu karang" },
        { question: "Proses yang menyebabkan pemanasan global disebut?", answer: "Efek Rumah Kaca" },
        { question: "Proses pembentukan sel baru dari sel induk yang berbeda disebut?", answer: "Meiosis" },
        { question: "Jaringan penyimpanan dan transportasi dalam sel tanaman disebut?", answer: "Vakuola" },
        { question: "Proses di mana sel mengeluarkan zat ke luar disebut?", answer: "eksositosis" },
        { question: "Struktur dalam sel yang bertanggung jawab untuk sintesis protein adalah?", answer: "Ribosom" }
    ],

    matematika: [
        { question: "Jika x² - 7x + 10 = 0, berapa nilai x?", answer: "2, 5" },
        { question: "Sebuah limas memiliki luas alas 36 cm² dan tinggi 12 cm. Berapakah volumenya?", answer: "144" },
        { question: "Diberikan sistem persamaan: 3x + 4y = 20 dan 5x - 2y = 10. Berapa nilai x dan y?", answer: "x = 4, y = 2" },
        { question: "Diberikan deret geometri 3, 6, 12, ..., dengan 5 suku. Berapakah jumlah dari deret tersebut?", answer: "93" },
        { question: "Jika tan(θ) = 3/4, berapakah nilai sin(θ)?", answer: "3/5" },
        { question: "Jika log₃(81) = x, berapakah nilai x?", answer: "4" },
        { question: "Dari sebuah dadu bersisi 6, berapa peluang untuk mendapatkan angka genap?", answer: "1/2" },
        { question: "Berapakah hasil integral dari ∫(2x + 3) dx?", answer: "x² + 3x + C" },
        { question: "Sebuah lingkaran memiliki diameter 14 cm. Berapakah luasnya? (π = 22/7)", answer: "154" },
        { question: "Jika 2^(x+1) = 16, berapakah nilai x?", answer: "3" }
    ]   
};

let questions = [];
let score = 0;
let currentQuestionIndex = 0;

// Fungsi untuk memilih kategori
function chooseCategory(category) {
    questions = categories[category]; // Isi questions berdasarkan kategori
    currentQuestionIndex = 0;
    score = 0;
    document.querySelector('.category-container').style.display = 'none'; // Sembunyikan menu kategori
    document.querySelector('.quiz-container').style.display = 'block'; // Tampilkan quiz
    loadQuestion(); // Mulai quiz
}

// Fungsi memuat pertanyaan
function loadQuestion() {
    document.getElementById('question').textContent = questions[currentQuestionIndex].question;
    document.getElementById('result').textContent = '';
    document.getElementById('next').style.display = 'none';
}

// Fungsi untuk submit jawaban
function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    if (userAnswer) {
        checkAnswer(userAnswer);
        document.getElementById('answer').value = '';
    } else {
        alert('Silakan ketik jawaban terlebih dahulu!');
    }
}

// Mengecek jawaban
function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('result').textContent = 'Jawaban Anda benar!';
        score++;
    } else {
        document.getElementById('result').textContent = `Jawaban salah! Jawaban yang benar: ${correctAnswer}`;
    }
    document.getElementById('next').style.display = 'block';
}

// Fungsi untuk pertanyaan selanjutnya
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
}

// Fungsi untuk menampilkan hasil akhir dan tombol kembali ke menu
function showFinalResult() {
    let level = '';

    // Menentukan level kemahiran berdasarkan skor
    if (score === questions.length) level = 'Ahli';
    else if (score >= questions.length * 0.7) level = 'Mahir';
    else if (score >= questions.length * 0.4) level = 'Cukup Baik';
    else level = 'Perlu Belajar Lagi';

    // Mengosongkan hasil jawaban sebelumnya
    document.getElementById('result').textContent = '';

    // Menampilkan skor dan level
    document.getElementById('question').textContent = `Quiz Selesai! Skor Anda: ${score}/${questions.length} - Level: ${level}`;
    document.querySelector('.input-container').style.display = 'none'; // Sembunyikan input jawaban
    document.getElementById('next').style.display = 'none'; // Sembunyikan tombol Next
    
    // Tampilkan tombol kembali ke menu awal
    document.getElementById('back-to-menu').style.display = 'block';
}

// Fungsi untuk kembali ke menu awal
function backToMenu() {
    // Reset semua variabel dan tampilan
    score = 0;
    currentQuestionIndex = 0;

    // Tampilkan menu kategori, sembunyikan quiz
    document.querySelector('.category-container').style.display = 'block';
    document.querySelector('.quiz-container').style.display = 'none';
    document.getElementById('back-to-menu').style.display = 'none'; // Sembunyikan tombol kembali ke menu
    document.querySelector('.input-container').style.display = 'block'; // Tampilkan kembali input
}

// Tetap sembunyikan quiz-container di awal
document.querySelector('.quiz-container').style.display = 'none';

// Fungsi untuk memilih kategori (tidak berubah)
function chooseCategory(category) {
    questions = categories[category]; // Isi questions berdasarkan kategori
    currentQuestionIndex = 0;
    score = 0;
    document.querySelector('.category-container').style.display = 'none'; // Sembunyikan menu kategori
    document.querySelector('.quiz-container').style.display = 'block'; // Tampilkan quiz
    loadQuestion(); // Mulai quiz
}
