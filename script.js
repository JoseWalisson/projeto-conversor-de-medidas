const valueInput = document.querySelector("#value");
const actionButton = document.querySelector("button");
const option1 = document.querySelector("#option");
const option2 = document.querySelector("#option2")
console.log(option1);
console.log(option2);

function converter() {
    const optionSelect1 = option1.value;
    const valueConvertido1 = parseInt(valueInput.value);
    const optionSelect2 = option2.value;
    // console.log(optionSelect1);
    // console.log(valueConvertido1);
    // console.log(optionSelect2);

    // Conversão do M
    if (optionSelect1 === "m" && optionSelect2 === "m") {
        window.alert("Medidas iguais não podem ser convertidas");
    } else if (optionSelect1 === "m" && optionSelect2 === "km") {
        const resultado = valueConvertido1 / 1000;
        window.alert(`Resultado ${resultado} km`);
    } else if (optionSelect1 === "m" && optionSelect2 === "hm") {
        const resultado = valueConvertido1 / 100;
        window.alert(`Resultado ${resultado} hm`);
    } else if (optionSelect1 === "m" && optionSelect2 === "dam") {
        const resultado = valueConvertido1 / 10;
        window.alert(`Resultado ${resultado} dam`);
    } else if (optionSelect1 === "m" && optionSelect2 === "cm") {
        const resultado = valueConvertido1 * 100;
        window.alert(`Resultado ${resultado} cm`);
    } else if (optionSelect1 === "m" && optionSelect2 === "mm") {
        const resultado = valueConvertido1 * 1000;
        window.alert(`Resultado ${resultado} mm`);
    // Conversão do Km
    } else if (optionSelect1 === "km" && optionSelect2 === "km") {
        window.alert("Medidas iguais não podem ser convertidas");
    } else if (optionSelect1 === "km" && optionSelect2 === "m") {
        const resultado = valueConvertido1 * 1000;
        window.alert(`Resultado ${resultado} m`);
    } else if (optionSelect1 === "km" && optionSelect2 === "hm") {
        const resultado = valueConvertido1 * 10;
        window.alert(`Resultado ${resultado} hm`);
    } else if (optionSelect1 === "km" && optionSelect2 === "dam") {
        const resultado = valueConvertido1 * 100;
        window.alert(`Resultado ${resultado} dam`);
    } else if (optionSelect1 === "km" && optionSelect2 === "dm") {
        const resultado = valueConvertido1 * 10000;
        window.alert(`Resultado ${resultado} dm`);
    } else if (optionSelect1 === "km" && optionSelect2 === "cm") {
        const resultado = valueConvertido1 * 100000;
        window.alert(`Resultado ${resultado} cm`);
    } else if (optionSelect1 === "km" && optionSelect2 === "mm") {
        const resultado = valueConvertido1 * 1000000;
        window.alert(`Resultado ${resultado} mm`);
    // Conversão do Hm
    } else if (optionSelect1 === "hm" && optionSelect2 === "hm") {
        window.alert("Medidas iguais não podem ser convertidas");
    } else if (optionSelect1 === "hm" && optionSelect2 === "m") {
        const resultado = valueConvertido1 * 100;
        window.alert(`Resultado ${resultado} m`);
    } else if (optionSelect1 === "hm" && optionSelect2 === "km") {
        const resultado = valueConvertido1 / 10;
        window.alert(`Resultado ${resultado} km`);
    } else if (optionSelect1 === "hm" && optionSelect2 === "dam") {
        const resultado = valueConvertido1 * 10;
        window.alert(`Resultado ${resultado} dam`);
    } else if (optionSelect1 === "hm" && optionSelect2 === "dm") {
        const resultado = valueConvertido1 * 1000;
        window.alert(`Resultado ${resultado} dm`);
    } else if (optionSelect1 === "hm" && optionSelect2 === "cm") {
        const resultado = valueConvertido1 * 10000;
        window.alert(`Resultado ${resultado} cm`);
    } else if (optionSelect1 === "hm" && optionSelect2 === "mm") {
        const resultado = valueConvertido1 * 100000;
        window.alert(`Resultado ${resultado} mm`);
    // Conversão do dam
    } else if (optionSelect1 === "dam" && optionSelect2 === "dam") {
        window.alert("Medidas iguais não podem ser convertidas");
    } else if (optionSelect1 === "dam" && optionSelect2 === "m") {
        const resultado = valueConvertido1 * 10;
        window.alert(`Resultado ${resultado} m`);
    } else if (optionSelect1 === "dam" && optionSelect2 === "km") {
        const resultado = valueConvertido1 / 100;
        window.alert(`Resultado ${resultado} km`);
    } else if (optionSelect1 === "dam" && optionSelect2 === "hm") {
        const resultado = valueConvertido1 / 10;
        window.alert(`Resultado ${resultado} hm`);
    } else if (optionSelect1 === "dam" && optionSelect2 === "dm") {
        const resultado = valueConvertido1 * 100;
        window.alert(`Resultado ${resultado} dm`);
    } else if (optionSelect1 === "dam" && optionSelect2 === "cm") {
        const resultado = valueConvertido1 * 1000;
        window.alert(`Resultado ${resultado} cm`);
    } else if (optionSelect1 === "dam" && optionSelect2 === "mm") {
        const resultado = valueConvertido1 * 10000;
        window.alert(`Resultado ${resultado} mm`);
        // Conversão do dm
    } else if (optionSelect1 === "dm" && optionSelect2 === "dm") {
        window.alert("Medidas iguais não podem ser convertidas");
    } else if (optionSelect1 === "dm" && optionSelect2 === "m") {
        const resultado = valueConvertido1 / 10;
        window.alert(`Resultado ${resultado} m`);
    } else if (optionSelect1 === "dm" && optionSelect2 === "km") {
        const resultado = valueConvertido1 / 10000;
        window.alert(`Resultado ${resultado} km`);
    } else if (optionSelect1 === "dm" && optionSelect2 === "hm") {
        const resultado = valueConvertido1 / 1000;
        window.alert(`Resultado ${resultado} hm`);
    } else if (optionSelect1 === "dm" && optionSelect2 === "dam") {
        const resultado = valueConvertido1 / 100;
        window.alert(`Resultado ${resultado} dam`);
    } else if (optionSelect1 === "dm" && optionSelect2 === "cm") {
        const resultado = valueConvertido1 * 10;
        window.alert(`Resultado ${resultado} cm`);
    } else if (optionSelect1 === "dm" && optionSelect2 === "mm") {
        const resultado = valueConvertido1 * 100;
        window.alert(`Resultado ${resultado} mm`);
    // Conversão do cm
    } else if (optionSelect1 === "cm" && optionSelect2 === "cm") {
        window.alert("Medidas iguais não podem ser convertidas");
    } else if (optionSelect1 === "cm" && optionSelect2 === "m") {
        const resultado = valueConvertido1 / 100;
        window.alert(`Resultado ${resultado} m`);
    } else if (optionSelect1 === "cm" && optionSelect2 === "km") {
        const resultado = valueConvertido1 / 100000;
        window.alert(`Resultado ${resultado} km`);
    } else if (optionSelect1 === "cm" && optionSelect2 === "hm") {
        const resultado = valueConvertido1 / 10000;
        window.alert(`Resultado ${resultado} hm`);
    } else if (optionSelect1 === "cm" && optionSelect2 === "dam") {
        const resultado = valueConvertido1 / 1000;
        window.alert(`Resultado ${resultado} dam`);
    } else if (optionSelect1 === "cm" && optionSelect2 === "dm") {
        const resultado = valueConvertido1 / 10;
        window.alert(`Resultado ${resultado} dm`);
    } else if (optionSelect1 === "cm" && optionSelect2 === "mm") {
        const resultado = valueConvertido1 * 10;
        window.alert(`Resultado ${resultado} mm`);
        // Conversão do mm
    } else if (optionSelect1 === "mm" && optionSelect2 === "mm") {
        window.alert("Medidas iguais não podem ser convertidas");
    } else if (optionSelect1 === "mm" && optionSelect2 === "m") {
        const resultado = valueConvertido1 / 1000;
        window.alert(`Resultado ${resultado} m`);
    } else if (optionSelect1 === "mm" && optionSelect2 === "km") {
        const resultado = valueConvertido1 / 1000000;
        window.alert(`Resultado ${resultado} km`);
    } else if (optionSelect1 === "mm" && optionSelect2 === "hm") {
        const resultado = valueConvertido1 / 100000;
        window.alert(`Resultado ${resultado} hm`);
    } else if (optionSelect1 === "mm" && optionSelect2 === "dam") {
        const resultado = valueConvertido1 / 10000;
        window.alert(`Resultado ${resultado} dam`);
    } else if (optionSelect1 === "mm" && optionSelect2 === "dm") {
        const resultado = valueConvertido1 / 100;
        window.alert(`Resultado ${resultado} dm`);
    } else if (optionSelect1 === "mm" && optionSelect2 === "cm") {
        const resultado = valueConvertido1 / 10;
        window.alert(`Resultado ${resultado} hm`);
    }

    
}

actionButton.addEventListener("click", converter)