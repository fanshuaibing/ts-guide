{
    function createButton(text, btnContainer, className) {
        var button = document.createElement("button");
        button.textContent = text;
        className && button.classList.add(className);
        btnContainer.appendChild(button);
    }
    var container_1 = document.createElement("div");
    container_1.classList.add("container");
    document.body.appendChild(container_1);
    var outputContainer = document.createElement("div");
    outputContainer.classList.add("output-container");
    container_1.appendChild(outputContainer);
    var output_1 = document.createElement("span");
    output_1.classList.add("output");
    output_1.textContent = "0";
    outputContainer.appendChild(output_1);
    var arr = [
        ["Clear", "÷"],
        ["7", "8", "9", "×"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="],
    ];
    arr.forEach(function (textList) {
        var btnContainer = document.createElement("div");
        btnContainer.classList.add("row");
        textList.forEach(function (text) {
            createButton(text, btnContainer, "text-" + text);
        });
        container_1.append(btnContainer);
    });
    var n1_1 = "";
    var n2_1 = "";
    var operator_1 = "";
    var result_1 = "";
    container_1.addEventListener("click", function (event) {
        if (event.target instanceof HTMLButtonElement) {
            var text = event.target.textContent;
            if ("1234567890.".indexOf(text) >= 0) {
                if (operator_1) {
                    n2_1 += text;
                    output_1.textContent = n2_1;
                }
                else {
                    result_1 = "";
                    n1_1 += text;
                    output_1.textContent = n1_1;
                }
            }
            else if ("+×-÷".indexOf(text) >= 0) {
                operator_1 = text;
                if (result_1) {
                    n1_1 = result_1;
                    result_1 = "";
                }
            }
            else if ("=".indexOf(text) >= 0) {
                var newN1 = parseFloat(n1_1);
                var newN2 = parseFloat(n2_1);
                var midResult = void 0;
                if (operator_1 === "+") {
                    midResult = newN1 + newN2;
                }
                else if (operator_1 === "-") {
                    midResult = newN1 - newN2;
                }
                else if (operator_1 === "×") {
                    midResult = newN1 * newN2;
                }
                else if (operator_1 === "÷") {
                    midResult = newN1 / newN2;
                }
                if (midResult === Infinity && operator_1 === "÷") {
                    result_1 = "除数不能为零";
                }
                else {
                    result_1 = midResult.toString().slice(0, 25);
                }
                n1_1 = "";
                n2_1 = "";
                operator_1 = "";
                output_1.textContent = result_1;
            }
            else if ("Clear".indexOf(text) >= 0) {
                n1_1 = "";
                n2_1 = "";
                operator_1 = "";
                result_1 = "";
                output_1.textContent = "0";
            }
        }
    });
}
