{
  class Calculator {
    public n1: string = "";
    public n2: string = "";
    public operator: string = "";
    public result: string = "";
    public container: HTMLDivElement;
    public outputContainer: HTMLDivElement;
    public output: HTMLSpanElement;
    public arr: Array<Array<string>> = [
      ["Clear", "÷"],
      ["7", "8", "9", "×"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "+"],
      ["0", ".", "="],
    ];

    constructor() {
      this.createContainer();
      this.createOutput();
      this.createButtons();
      this.bindEvents();
    }

    createContainer() {
      this.container = document.createElement("div");
      this.container.classList.add("container");
      document.body.appendChild(this.container);
    }

    createOutput() {
      this.outputContainer = document.createElement("div");
      this.outputContainer.classList.add("output-container");
      this.container.appendChild(this.outputContainer);

      this.output = document.createElement("span");
      this.output.classList.add("output");
      this.output.textContent = "0";
      this.outputContainer.appendChild(this.output);
    }

    createButtons() {
      this.arr.forEach((textList: Array<string>) => {
        let btnContainer: HTMLDivElement = document.createElement("div");
        btnContainer.classList.add("row");
        textList.forEach((text: string) => {
          this.createButton(text, btnContainer, `text-${text}`);
        });
        this.container.append(btnContainer);
      });
    }

    createButton(text: string, btnContainer: HTMLDivElement, className: string) {
      let button: HTMLButtonElement = document.createElement("button");
      button.textContent = text;
      className && button.classList.add(className);
      btnContainer.appendChild(button);
    }

    bindEvents() {
      this.container.addEventListener("click", (event) => {
        if (event.target instanceof HTMLButtonElement) {
          const text = event.target.textContent;
          if ("1234567890.".indexOf(text) >= 0) {
            if (this.operator) {
              this.n2 += text;
              this.output.textContent = this.n2;
            }
            else {
              this.result = "";
              this.n1 += text;
              this.output.textContent = this.n1;
            }
          }
          else if ("+×-÷".indexOf(text) >= 0) {
            this.operator = text;
            if (this.result) {
              this.n1 = this.result;
              this.result = "";
            }
          }
          else if ("=".indexOf(text) >= 0) {
            let newN1: number = parseFloat(this.n1);
            let newN2: number = parseFloat(this.n2);
            let midResult: number;

            if (this.operator === "+") {
              midResult = newN1 + newN2;
            }
            else if (this.operator === "-") {
              midResult = newN1 - newN2;
            }
            else if (this.operator === "×") {
              midResult = newN1 * newN2;
            }
            else if (this.operator === "÷") {
              midResult = newN1 / newN2;
            }

            if (midResult === Infinity && this.operator === "÷") {
              this.result = "除数不能为零";
            }
            else {
              this.result = midResult.toString().slice(0, 25);
            }
            this.n1 = "";
            this.n2 = "";
            this.operator = "";
            this.output.textContent = this.result;
          }
          else if ("Clear".indexOf(text) >= 0) {
            this.n1 = "";
            this.n2 = "";
            this.operator = "";
            this.result = "";
            this.output.textContent = "0";
          }
        }
      });
    }
  }
  new Calculator();
}
