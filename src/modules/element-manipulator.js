const rootSelector = document.querySelector(":root");

const darkModeClass = () => rootSelector.classList.add("dark");

const lightModeClass = () => rootSelector.classList.remove("dark");

export const hide = (selector) => selector.classList.add("hide");

export const show = (selector) => selector.classList.remove("hide");

export function changeToLight() {
    hide(document.querySelector(".light-icon"));
    show(document.querySelector(".dark-icon"));
    lightModeClass();
}

export function changeToDark() {
    hide(document.querySelector(".dark-icon"));
    show(document.querySelector(".light-icon"));
    darkModeClass();
}

export const build = (elementType, ...classes)  => {
    let createdElement = document.createElement(elementType);
    createdElement.classList.add(...classes);
    return createdElement;
};