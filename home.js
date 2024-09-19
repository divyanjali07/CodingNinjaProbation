let countdown;
let remainingTime = 3600;
        const timerDisplay = document.getElementById('timer');

        function startTimer(duration) {
            let timer = duration, minutes, seconds,hours;
            countdown = setInterval(() => {
                hours = parseInt(timer / 3600, 10);
                minutes = parseInt((timer % 3600) / 60, 10);
                seconds = parseInt(timer % 60, 10);

                timerDisplay.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

                if (--timer < 0) {
                    clearInterval(countdown);
                    timerDisplay.textContent = "Time's up!";
                }
            }, 1000);
        }

        document.getElementById('startButton').addEventListener('click', () => {
            const duration = 60; // Set duration in seconds (e.g., 10 seconds)
            clearInterval(countdown); // Clear any existing timer
            startTimer(remainingTime);
        });