document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        {
            question: "Hangi aktivitelerden daha çok keyif alırsın?",
            answers: [
                { text: "Doğada yürüyüş yapmak" },
                { text: "Bir kitap okumak" },
                { text: "Yaratıcı bir proje üzerinde çalışmak" },
                { text: "Sosyal etkinliklere katılmak" }
            ]
        },
        {
            question: "Zor zamanlarda kendini rahatlatmak için hangi yöntemi tercih edersin?",
            answers: [
                { text: "Meditasyon veya yoga yapmak" },
                { text: "Sevdiğin bir filmi izlemek" },
                { text: "Sanatla uğraşmak (resim yapmak, enstrüman çalmak vb.)" },
                { text: "Yakın arkadaşlarınla konuşmak" }
            ]
        },
        {
            question: "Bir sorunla karşılaştığında hangi davranış sana daha yakın gelir?",
            answers: [
                { text: "Mantıklı bir plan yapmak ve adım adım çözümlemek" },
                { text: "Duygularını yazarak ifade etmek" },
                { text: "Yaratıcı bir çözüm bulmaya çalışmak" },
                { text: "Destek almak için çevrene danışmak" }
            ]
        },
        {
            question: "Güçlü olduğunu düşündüğün özellik hangisidir?",
            answers: [
                { text: "Organize olma ve planlama yeteneği" },
                { text: "Empati ve insan ilişkilerinde başarılı olma" },
                { text: "Yaratıcılık ve problem çözme becerisi" },
                { text: "Liderlik ve etkili iletişim" }
            ]
        },
        {
            question: "Hangi durumda kendini en rahat hissedersin?",
            answers: [
                { text: "Yeni bir yer keşfetmek" },
                { text: "Farklı bir kültürü tanımak" },
                { text: "Yeni bir proje veya hobi başlatmak" },
                { text: "Yeni insanlarla tanışmak" }
            ]
        },
        {
            question: "Hangi durum seni daha fazla heyecanlandırır?",
            answers: [
                { text: "Doğada yürüyüş yapmak" },
                { text: "Bir kitap okumak" },
                { text: "Yaratıcı bir proje üzerinde çalışmak" },
                { text: "Sosyal etkinliklere katılmak" }
            ]
        },
        {
            question: "Hayatında en çok önemsediğin değer hangisidir?",
            answers: [
                { text: "Özgürlük ve bağımsızlık" },
                { text: "Aile ve ilişkiler" },
                { text: "Yaratıcılık ve özgünlük" },
                { text: "Adalet ve toplumsal sorumluluk" }
            ]
        },
        {
            question: "Hangi durum seni daha fazla sıkabilir?",
            answers: [
                { text: "Kontrol dışı değişiklikler veya belirsizlikler" },
                { text: "Sevdiğin biriyle yaşanan anlaşmazlıklar" },
                { text: "Yaratıcılığımın önüne geçilmesi" },
                { text: "Toplumsal adaletsizlikler veya haksızlık" }
            ]
        }
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-button");
    const next = document.getElementById("next");
    const infoContainer = document.querySelector('.info');
    const quizContainer = document.querySelector('.quiz');

    let currentQuestionIndex = 0;

    function startQuiz() {
        infoContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        currentQuestionIndex = 0;
        nextButton.innerHTML = "Devam Et";
        showQuestion();
    }

    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("buttons");
            answerButtons.appendChild(button);

            button.addEventListener("click", selectAnswer);
        });
    }

    function resetState() {
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;

        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }

    function showNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        questionElement.innerHTML = "Test tamamlandı!";
        nextButton.style.display = "none";
    }

    next.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;

        if (name && age && gender) {
            startQuiz();
        } else {
            alert("Lütfen tüm bilgileri doldurun");
        }
    });

    nextButton.addEventListener("click", () => {
        showNextQuestion();
    });
});
