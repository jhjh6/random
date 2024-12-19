'use strict';

const min = document.getElementById('min');
const max = document.getElementById('max');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const history = document.getElementById('history');
const historyTitle = document.getElementById('history-title');
const clearHistoryBtn = document.getElementById('clear-history');

btn.addEventListener('click', () =>{
    const num = Math.floor(Math.random() * (max.value - min.value + 1)) + Number(min.value);

    result.textContent = num;

    const historyItem = document.createElement('div');
    historyItem.textContent = num;
    history.insertBefore(historyItem, history.firstChild);

    if (historyTitle.style.display === 'none') {
        historyTitle.style.display = 'block';
        clearHistoryBtn.style.display = 'block';
    }
});

clearHistoryBtn.addEventListener('click', () => {
    history.innerHTML = '';
    historyTitle.style.display = 'none';
    clearHistoryBtn.style.display = 'none';
});