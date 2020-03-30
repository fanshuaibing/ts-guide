{
    var Calculator = /** @class */ (function () {
        function Calculator() {
            this.n1 = "";
            this.n2 = "";
            this.operator = "";
            this.result = "";
            this.arr = [
                ["Clear", "÷"],
                ["7", "8", "9", "×"],
                ["4", "5", "6", "-"],
                ["1", "2", "3", "+"],
                ["0", ".", "="],
            ];
            this.createContainer();
            this.createOutput();
            this.createButtons();
            this.bindEvents();
        }
        Calculator.prototype.createContainer = function () {
            this.container = document.createElement("div");
            this.container.classList.add("container");
            document.body.appendChild(this.container);
        };
        Calculator.prototype.createOutput = function () {
            this.outputContainer = document.createElement("div");
            this.outputContainer.classList.add("output-container");
            this.container.appendChild(this.outputContainer);
            this.output = document.createElement("span");
            this.output.classList.add("output");
            this.output.textContent = "0";
            this.outputContainer.appendChild(this.output);
        };
        Calculator.prototype.createButtons = function () {
            var _this = this;
            this.arr.forEach(function (textList) {
                var btnContainer = document.createElement("div");
                btnContainer.classList.add("row");
                textList.forEach(function (text) {
                    _this.createButton(text, btnContainer, "text-" + text);
                });
                _this.container.append(btnContainer);
            });
        };
        Calculator.prototype.createButton = function (text, btnContainer, className) {
            var button = document.createElement("button");
            button.textContent = text;
            className && button.classList.add(className);
            btnContainer.appendChild(button);
        };
        Calculator.prototype.bindEvents = function () {
            var _this = this;
            this.container.addEventListener("click", function (event) {
                if (event.target instanceof HTMLButtonElement) {
                    var text = event.target.textContent;
                    if ("1234567890.".indexOf(text) >= 0) {
                        if (_this.operator) {
                            _this.n2 += text;
                            _this.output.textContent = _this.n2;
                        }
                        else {
                            _this.result = "";
                            _this.n1 += text;
                            _this.output.textContent = _this.n1;
                        }
                    }
                    else if ("+×-÷".indexOf(text) >= 0) {
                        _this.operator = text;
                        if (_this.result) {
                            _this.n1 = _this.result;
                            _this.result = "";
                        }
                    }
                    else if ("=".indexOf(text) >= 0) {
                        var newN1 = parseFloat(_this.n1);
                        var newN2 = parseFloat(_this.n2);
                        var midResult = void 0;
                        if (_this.operator === "+") {
                            midResult = newN1 + newN2;
                        }
                        else if (_this.operator === "-") {
                            midResult = newN1 - newN2;
                        }
                        else if (_this.operator === "×") {
                            midResult = newN1 * newN2;
                        }
                        else if (_this.operator === "÷") {
                            midResult = newN1 / newN2;
                        }
                        if (midResult === Infinity && _this.operator === "÷") {
                            _this.result = "除数不能为零";
                        }
                        else {
                            _this.result = midResult.toString().slice(0, 25);
                        }
                        _this.n1 = "";
                        _this.n2 = "";
                        _this.operator = "";
                        _this.output.textContent = _this.result;
                    }
                    else if ("Clear".indexOf(text) >= 0) {
                        _this.n1 = "";
                        _this.n2 = "";
                        _this.operator = "";
                        _this.result = "";
                        _this.output.textContent = "0";
                    }
                }
            });
        };
        return Calculator;
    }());
    new Calculator();
}
