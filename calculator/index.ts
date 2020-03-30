{
  function createButton(
    text: string,
    btnContainer: HTMLDivElement,
    className: string
  ) {
    let button: HTMLButtonElement = document.createElement("button");
    button.textContent = text;
    className && button.classList.add(className);
    btnContainer.appendChild(button);
  }

  let container: HTMLDivElement = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  let outputContainer: HTMLDivElement = document.createElement("div");
  outputContainer.classList.add("output-container");
  container.appendChild(outputContainer);

  let output: HTMLSpanElement = document.createElement("span");
  output.classList.add("output");
  output.textContent = "0";
  outputContainer.appendChild(output);

  let arr: Array<Array<string>> = [
    ["Clear", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];
  arr.forEach((textList: Array<string>) => {
    let btnContainer: HTMLDivElement = document.createElement("div");
    btnContainer.classList.add("row");
    textList.forEach((text: string) => {
      createButton(text, btnContainer, `text-${text}`);
    });
    container.append(btnContainer);
  });
  let n1: string = "";
  let n2: string = "";
  let operator: string = "";
  let result: string = "";

  container.addEventListener("click", (event) => {
    if (event.target instanceof HTMLButtonElement) {
      const text = event.target.textContent;
      if ("1234567890.".indexOf(text) >= 0) {
        if (operator) {
          n2 += text;
          output.textContent = n2;
        } else {
          result = "";
          n1 += text;
          output.textContent = n1;
        }
      } else if ("+×-÷".indexOf(text) >= 0) {
        operator = text;
        if (result) {
          n1 = result;
          result = "";
        }
      } else if ("=".indexOf(text) >= 0) {
        let newN1: number = parseFloat(n1);
        let newN2: number = parseFloat(n2);
        let midResult: number;

        if (operator === "+") {
          midResult = newN1 + newN2;
        } else if (operator === "-") {
          midResult = newN1 - newN2;
        } else if (operator === "×") {
          midResult = newN1 * newN2;
        } else if (operator === "÷") {
          midResult = newN1 / newN2;
        }

        if (midResult === Infinity && operator === "÷") {
          result = "除数不能为零";
        } else {
          result = midResult.toString().slice(0, 25);
        }
        n1 = "";
        n2 = "";
        operator = "";
        output.textContent = result;
      } else if ("Clear".indexOf(text) >= 0) {
        n1 = "";
        n2 = "";
        operator = "";
        result = "";
        output.textContent = "0";
      }
    }
  });
}
