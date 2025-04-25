const themeButton = document.getElementById('theme-btn');
const themeStylesheet = document.getElementById('theme-stylesheet');

themeButton.addEventListener('click', () => {
    console.log("clicked the theme button");
    if (themeStylesheet.getAttribute('href') === 'styles/dark.css') {
        themeButton.value = '☀️';
        themeStylesheet.setAttribute('href', 'styles/light.css');
    } else {
        themeButton.value = '🌑';
        themeStylesheet.setAttribute('href', 'styles/dark.css');
    }
});


function main() {
    let elements = document.querySelectorAll('.btn')
    let result_view = document.getElementById('result')
    let operators = ['+', '*', '-', '/', '.', '=']
    let reset = 'AC'

    let opButtons = []
    let numButtons = [];

    let state = [];
    let state_index = 0;
    for (let item of elements) {
        let value = item.value;

        if (operators.includes(value)) {
            item.addEventListener('click', (e) => {
                let value = item.value;
                if (value == '.') {
                    if (state.length == 0) {
                        state.push('0'.concat(value))
                    } else {
                        state[state.length - 1] += ''.concat(value);
                    }
                    result_view.value = ''.concat(state[state.length - 1])
                } else if (value == '=') {
                    let result = eval(state.join(""))
                    state = [];
                    state.push(''.concat(result))
                    //console.log("= ", result)
                    result_view.value = ''.concat(state[state.length - 1])
                } else {
                    state.push(value)
                    state.push("")
                }
                console.log(state)
            })
        } else if (value == reset) {
            item.addEventListener('click', (e) => {
                state = [];
            })
        } else {
            item.addEventListener('click', (e) => {
                let value = item.value;
                if (state.length == 0) {
                    state.push(''.concat(value))
                } else {
                    state[state.length - 1] += ''.concat(value);
                }
                result_view.value = ''.concat(state[state.length - 1])
                console.log(state)
            })
        }
    }


}

main();
