import {bind, wire} from 'hyperhtml';
import jishoData from './data.json';

// This is so eslint will only complain once
const log = console.log.bind(console);

const renderFn = bind(document.getElementById('dataTable'));

const tableHeader = wire()`<thead><tr><th>Kanji</th><th>Pronunciation</th><th>Meaning</th></thead>`;
function display() {
    return renderFn`
        ${tableHeader}
        <tbody>
            ${jishoData.words[0]['1-36'].map((word) => {
                return wire(word)`
                    <tr>
                        <td>${word.kanji}</td>
                        <td>${word.pronun}</td>
                        <td>${word.meaning}</td>
                    </tr>
                `
            })}
        </tbody>
    `;
}

display();
