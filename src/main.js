import './style.css'

document.querySelector('#app').innerHTML = `
  <div id="calculator">
    <h1>JS Calculator</h1>

    <div class="screen">
      <p class="answer">0</p>
      <p class="calculation">0</p>
    </div>

    <div class="keypad">
      <button id="ac" value="ac">AC</button>
      <button id="ce" value="ce">CE</button>
      <button class="operator" value="/">&divide;</button>
      <button class="operator" value="*">&times;</button>

      <button class="number" value="7">7</button>
      <button class="number" value="8">8</button>
      <button class="number" value="9">9</button>
      <button class="operator" value="-">-</button>

      <button class="number" value="4">4</button>
      <button class="number" value="5">5</button>
      <button class="number" value="6">6</button>
      <button class="operator" value="+">+</button>

      <button class="number" value="1">1</button>
      <button class="number" value="2">2</button>
      <button class="number" value="3">3</button>
      <button id="equals" value="=">=</button>

      <button class="number" value="0">0</button>
      <button id="decimal" value=".">.</button>
    </div>
  </div>
  <p class="by-nate">Developed by <a href="https://nate-dev.com?utm_source=codebynate&utm_medium=web&utm_campaign=calculator">Nate</a>.</p>
`

