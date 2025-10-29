        let display = document.getElementById("display");

        function appendToDisplay(input) {
            display.value += input;
        }

        function clearDisplay() {
            display.value = "";
        }

        function calculate() {
            try {
                
                display.value = new Function('return ' + display.value)();
            } catch (error) {
                display.value = "Error";
            }
        }
        function deleteLast() {
            const display = document.getElementById('display');
            display.value = display.value.slice(0, -1); 
        }
        function calculatePercentage() {
            const display = document.getElementById('display');
            try {
                const value = eval(display.value);
                display.value = value / 100; 
            } catch (error) {
                display.value = 'Error';
            }
        }