const v1 : HTMLInputElement = document.querySelector("#val1");
const v2 : HTMLInputElement = document.querySelector("#val2");
const addButton = document.querySelector("button");

const add = (v1: number, v2: number) => v1+v2;

    addButton.addEventListener("click", () => {
        console.log(v1.value);
        console.log(v2.value);
        const sum = add(Number(v1.value), Number(v2.value));
        console.log(sum);
    })  