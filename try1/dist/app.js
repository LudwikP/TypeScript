const v1 = document.querySelector("#val1");
const v2 = document.querySelector("#val2");
const addButton = document.querySelector("button");
const add = (v1, v2) => v1 + v2;
addButton.addEventListener("click", () => {
    console.log(v1.value);
    console.log(v2.value);
    const sum = add(Number(v1.value), Number(v2.value));
    console.log(sum);
});
