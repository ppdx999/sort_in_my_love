const mergeSort = (array: number[], left: number, right: number) => {
  if (left >= right) return;
  const mid = Math.floor((left + right) / 2);
  mergeSort(array, left, mid);
  mergeSort(array, mid + 1, right);
  merge(array, left, mid, right);
};

const merge = (array: number[], left: number, mid: number, right: number) => {
  const leftArray = new Array(mid - left + 1);
  const rightArray = new Array(right - mid);

  for (let i = 0; i < leftArray.length; i++) {
    leftArray[i] = array[left + i];
  }

  for (let i = 0; i < rightArray.length; i++) {
    rightArray[i] = array[mid + 1 + i];
  }

  let lIdx = 0;
  let rIdx = 0;
  let idx = left;

  while (lIdx < leftArray.length && rIdx < rightArray.length) {
    if (leftArray[lIdx] <= rightArray[rIdx]) {
      array[idx] = leftArray[lIdx];
      lIdx++;
    } else {
      array[idx] = rightArray[rIdx];
      rIdx++;
    }
    idx++;
  }

  while (lIdx < leftArray.length) {
    array[idx] = leftArray[lIdx];
    lIdx++;
    idx++;
  }

  while (rIdx < rightArray.length) {
    array[idx] = rightArray[rIdx];
    rIdx++;
    idx++;
  }
};

const main = () => {
  const array = process.argv.slice(2).map(Number);
  const size = array.length;
  mergeSort(array, 0, size - 1);
  console.log(array.join(" "));
};

main();
