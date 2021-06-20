let select = document.getElementById("options"),
    editable = document.getElementById("editableArea"),
    Neditable = document.getElementById("NEditableArea");

select.onchange = () => {
    switch (select.value) {
        case "NoChange":
            Neditable.innerText = editable.value;
            break;
        case "Highlighting":
            Neditable.innerHTML = highlighting(editable.value)
            break;
        case "Bold":
            Neditable.innerHTML = Bold(editable.value)
            break;
        case "StopWords":
            Neditable.innerHTML = StopWords(editable.value)
            break;
    }
}

function highlighting(txt) {
    txt = txt.split(" ");
    let output = []
    for (let word of txt) {
        if (word.length > 8) {
            output.push("<span class='highlighting'>" + word + "</span>")
        }
        else {
            output.push(word)
        }
    }
    return output.join(" ") // string instead of Array
}
function Bold(txt) {
    return "<span style='font-weight:bold'>" + txt + "</span>"
}

function StopWords(txt) {
    txt = txt.split(" ");
    let output = []
    for (let word of txt) {
        if (word !== "and")
            if (word != "the")
                output.push(word)
    }
    return output.join(" ")
}