function showAnswer() {
    const answerElements = document.getElementsByClassName('answer-1');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function showAnswer2() {
    const answerElements = document.getElementsByClassName('answer-2');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function showAnswer3() {
    const answerElements = document.getElementsByClassName('answer-3');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function showAnswer4() {
    const answerElements = document.getElementsByClassName('answer-4');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function showAnswer5() {
    const answerElements = document.getElementsByClassName('answer-5');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }



  function countdownTimer() {
    const countdownDate = new Date("July 14, 2024 18:00:00").getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown").innerHTML = "LIVE NOW";
        }
    }, 1000);
}

countdownTimer();



function toggleJuniors() {
    // Hide the seniors section and show the juniors section
    document.getElementById('senior').classList.add('hidden');
    document.getElementById('junior').classList.remove('hidden');
    
    // Update button styles
    document.getElementById('JuniorBtn').classList.add('bg-black', 'text-white');
    document.getElementById('JuniorBtn').classList.remove('bg-white', 'text-black');
    document.getElementById('SeniorBtn').classList.add('bg-white', 'text-black');
    document.getElementById('SeniorBtn').classList.remove('bg-black', 'text-white');
  }
    
  function toggleSeniors() {
    // Hide the juniors section and show the seniors section
    document.getElementById('junior').classList.add('hidden');
    document.getElementById('senior').classList.remove('hidden');
    
    // Update button styles
    document.getElementById('SeniorBtn').classList.add('bg-black', 'text-white');
    document.getElementById('SeniorBtn').classList.remove('bg-white', 'text-black');
    document.getElementById('JuniorBtn').classList.add('bg-white', 'text-black');
    document.getElementById('JuniorBtn').classList.remove('bg-black', 'text-white');
  }
  
  