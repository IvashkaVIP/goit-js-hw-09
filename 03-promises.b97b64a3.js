var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("7Y9D8");const u={inputDelay:document.querySelector("[name=delay]"),inputStep:document.querySelector("[name=step]"),inputAmount:document.querySelector("[name=amount]"),formSubmit:document.querySelector(".form")};u.formSubmit.addEventListener("submit",(function(e){e.preventDefault(),console.log(u.inputDelay.value),console.log(u.inputStep.value),console.log(u.inputAmount.value)}));
//# sourceMappingURL=03-promises.b97b64a3.js.map
