console.log("===== Task 1 =====");

const nativeBtn = document.getElementById("nativeBtn");
const customBtn = document.getElementById("customBtn");

console.log("Native Button tabIndex:", nativeBtn.tabIndex);
console.log("Plain Div tabIndex:", customBtn.tabIndex);

console.log("--------------------------------");


console.log("===== Task 2 =====");

customBtn.setAttribute("role", "button");
customBtn.setAttribute("tabindex", "0");

console.log("Role:", customBtn.getAttribute("role"));
console.log("tabIndex:", customBtn.tabIndex);

console.log("--------------------------------");


console.log("===== Task 3 =====");

const toggleBtn = document.getElementById("toggleBtn");
const panel = document.getElementById("infoPanel");

console.log("aria-expanded:",
    toggleBtn.getAttribute("aria-expanded"));

console.log("aria-controls:",
    toggleBtn.getAttribute("aria-controls"));

console.log("--------------------------------");


console.log("===== Task 4 =====");

toggleBtn.addEventListener("click", () => {

    const expanded =
        toggleBtn.getAttribute("aria-expanded") === "true";

    toggleBtn.setAttribute(
        "aria-expanded",
        String(!expanded)
    );

    panel.hidden = expanded;

    console.log(
        "aria-expanded:",
        toggleBtn.getAttribute("aria-expanded")
    );

    console.log(
        "Panel Hidden:",
        panel.hidden
    );
});

console.log("--------------------------------");


console.log("===== Task 5 =====");

const iconBtn = document.getElementById("iconBtn");

console.log(
    "Accessible Name:",
    iconBtn.getAttribute("aria-label")
);

console.log("--------------------------------");


console.log("===== Task 6 =====");

const label = document.querySelector("label");
const input = document.getElementById("emailInput");

console.log(
    "Label 'for':",
    label.getAttribute("for")
);

console.log(
    "Input id:",
    input.id
);

console.log(
    "Association Valid:",
    label.getAttribute("for") === input.id
);