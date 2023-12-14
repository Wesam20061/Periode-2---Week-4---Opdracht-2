
        function toonTafel() {
            var getal = document.getElementById('getalInput').value;

          
            if (getal >= 1 && getal <= 10) {
              
                var resultaatElement = document.getElementById('resultaat');

           
                resultaatElement.innerHTML = '';

                for (var i = 1; i <= 10; i++) {
                    var resultaat = i * getal;

                 
                    var regelElement = document.createElement('p');

               
                    regelElement.textContent = i + ' x ' + getal + ' = ' + resultaat;

                   
                    resultaatElement.appendChild(regelElement);
                }
            } else {
                alert("Voer een getal in tussen 1 en 10.");
            }
        }

        document.getElementById('toonButton').addEventListener('click', toonTafel);
 