/////menu
function toggleMenu() {
    document.getElementById("nav-list").classList.toggle("show");
}

/////copy code
function copyCode() {
    const code = document.getElementById("p1-c1").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    });
}

function copyCode2() {
    const code = document.getElementById("p1-c2").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    });
}

function copyCode3() {
    const code = document.getElementById("p1-c3").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    });
}

function copyCode4() {
    const code = document.getElementById("p2-c1").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    });
}

function copyCode5() {
    const code = document.getElementById("p2-c2").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    });
}

function copyCode6() {
    const code = document.getElementById("p2-c3").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    });
}

function copyCode7() {
    const code = document.getElementById("p3-c1").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    });
}

function copyCode8() {
    const code = document.getElementById("p3-c2").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    });
}

function copyCode9() {
    const code = document.getElementById("p3-c3").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    });
}

function copyCode10() {
    const code = document.getElementById("p4-c1").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    });
}

function copyCode11() {
    const code = document.getElementById("p4-c2").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    });
}

function copyCode12() {
    const code = document.getElementById("p4-c3").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    });
}
////functions
function function1(){
    document.getElementById("code1").classList.toggle("show");
    document.getElementById("button1").classList.toggle("rotate");
}

function function2(){
    document.getElementById("code2").classList.toggle("show");
    document.getElementById("button2").classList.toggle("rotate");
}

function function3(){
    document.getElementById("code3").classList.toggle("show");
    document.getElementById("show3").classList.toggle("show2");
    document.getElementById("button3").classList.toggle("rotate");
}

function function4(){
    document.getElementById("code4").classList.toggle("show");
    document.getElementById("button4").classList.toggle("rotate");
}