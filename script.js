document.addEventListener('DOMContentLoaded', () => {
    const generateArraysBtn = document.getElementById('generate-arrays');
    const arraySizeInput = document.getElementById('array-size');
    const resultsContainer = document.getElementById('results');
    const inputArraysP = document.getElementById('input-arrays');
    const sortedArray1P = document.getElementById('sorted-array1');
    const sortedArray2P = document.getElementById('sorted-array2');
    const smallestMatchingP = document.getElementById('smallest-matching');

    generateArraysBtn.addEventListener('click', () => {
        const size = parseInt(arraySizeInput.value);
        if (isNaN(size) || size <= 0) {
            alert('Будь ласка, введіть дійсний розмір масивів.');
            return;
        }

        const array1 = generateRandomArray(size);
        const array2 = generateRandomArray(size);

        const matchingElements = array1.filter(value => array2.includes(value));
        const smallestMatching = matchingElements.length > 0 ? Math.min(...matchingElements) : 'Немає збігів';

        bubbleSort(array1);
        bubbleSort(array2);

        inputArraysP.textContent = `Вхідні масиви: [${array1.join(', ')}], [${array2.join(', ')}]`;
        sortedArray1P.textContent = `Відсортований перший масив: [${array1.join(', ')}]`;
        sortedArray2P.textContent = `Відсортований другий масив: [${array2.join(', ')}]`;
        smallestMatchingP.textContent = `Найменший збіг: ${smallestMatching}`;

        resultsContainer.classList.remove('hidden');
    });

    function generateRandomArray(size) {
        const array = [];
        for (let i = 0; i < size; i++) {
            array.push(Math.floor(Math.random() * 100)); // Генерація випадкових чисел від 0 до 99
        }
        return array;
    }

    function bubbleSort(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
});
