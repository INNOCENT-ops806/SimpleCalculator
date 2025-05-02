const themeButton = document.getElementById('theme-btn');
const themeStylesheet = document.getElementById('theme-stylesheet');

themeButton.addEventListener('click', () => {
  console.log("clicked the theme button");

  if (themeStylesheet.getAttribute('href') === 'styles/dark.css') {
    themeButton.value = '☀️';
    themeStylesheet.setAttribute('href', 'styles/light.css');

    localStorage.setItem('theme', 'styles/light.css');
  } else {
    themeButton.value = '🌑';
    themeStylesheet.setAttribute('href', 'styles/dark.css');

    localStorage.setItem('theme', 'styles/dark.css');
  }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme !== null) {
  themeStylesheet.setAttribute('href', savedTheme);

  if (savedTheme === 'styles/dark.css') {
    themeButton.value = '🌑';
  } else {
    themeButton.value = '☀️';
  }
}


function main() {
  let elements = document.querySelectorAll('.btn');
  let result_view = document.getElementById('result');
  let operators = ['+', '*', '-', '/', '.', '='];
  let reset = 'AC';
  let state = [];
  let justEvaluated = false;

  for (let item of elements) {
    let value = item.value;

    if (operators.includes(value)) {
      item.addEventListener('click', (e) => {
        let value = item.value;

        if (value == '.') {
          if (state.length === 0) {
            state.push('0.');
          } else if (!state[state.length - 1].includes('.')) {
            state[state.length - 1] += '.';
          }
          result_view.value = state[state.length - 1];
        } else if (value == '=') {
          try {
            let result = eval(state.join(''));
            state = [];
            state.push('' + result);
            result_view.value = state[0];
            justEvaluated = true;
          } catch (err) {
            result_view.value = 'Error';
            state = [];
            justEvaluated = false;
          }
        } else {
          justEvaluated = false;
          state.push(value);
          state.push('');
        }

        console.log(state);
      });
    } else if (value == reset) {
      item.addEventListener('click', (e) => {
        state = [];
        result_view.value = '';
        justEvaluated = false;
      });
    } else {
      item.addEventListener('click', (e) => {
        let value = item.value;

        if (justEvaluated) {
          state = [];
          justEvaluated = false;
        }

        if (state.length === 0) {
          state.push(value);
        } else {
          state[state.length - 1] += value;
        }

        result_view.value = state[state.length - 1];
        console.log(state);
      });
    }
  }
}

main();
