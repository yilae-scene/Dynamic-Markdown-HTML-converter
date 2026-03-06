const markdownInput = document.querySelector("#markdown-input");

const htmlOutput = document.querySelector("#html-output");

const htmlPreview = document.querySelector("#preview");

function convertMarkdown(){

    let headingReg = /^[ \t]*(#{1,6})[ \t]+(.*)$/gm;
    let values = markdownInput.value;
    let string  = values.replace(headingReg, (matched, $1 , $2) => {
        let length = $1.length;
        return `<h${length}>${$2}</h${length}>`;
    });

    let boldReg = /(\*\*|__)(.*)\1/gm;
    string = string.replace(boldReg, (match,$1,$2) => {
        return `<strong>${$2}</strong>`
    });

    let italicReg = /(\*|_)(.*)\1/gm;
    string = string.replace(italicReg, (match, $1, $2) => {
        return `<em>${$2}</em>`
    });

    let imgReg = /!\[(.*)\]\((.*)\)/gm;
    string = string.replace(imgReg, (match, $1, $2) =>{
        return `<img alt = "${$1}" src = "${$2}">`
    });

    let urlReg = /\[(.*)\]\((.*)\)/gm;
    string = string.replace(urlReg, (match, $1, $2) => {
        return `<a href="${$2}">${$1}</a>`
    });

    let qouteReg = /^>\s+(.*)/gm;
    string = string.replace(qouteReg, (match, $1) => {
        return `<blockquote>${$1}</blockquote>`
    });
    return string;
}

markdownInput.addEventListener("input", () => {
    htmlOutput.textContent = convertMarkdown();
    htmlPreview.innerHTML =  convertMarkdown();
});

