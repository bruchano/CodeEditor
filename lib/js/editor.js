const ExecuteBtn = document.querySelector(".editor__run");
const ResetBtn = document.querySelector(".editor__reset");

let CodeEditor = ace.edit("editor");
var LanguageList = ["c_cpp", "csharp", "python", "java", "javascript"]


let EditorLib = {
    init() {
        // Theme
        CodeEditor.setTheme("ace/theme/dracula");

        // Set Language Mode
        CodeEditor.session.setMode("ace/mode/c_cpp");

        // Set Options
        CodeEditor.setOptions({
            //fontFamily, fontSize
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
        });

        CodeEditor.setReadOnly(false);

    }
}


// Events
ExecuteBtn.addEventListener("click", () => {
  const UserInput = CodeEditor.getValue();

    try {
        var Selected = document.getElementById("editor_language_select").value;
        if (Selected == "0") {

        } else if (Selected == "1") {


        } else if (Selected == "2") {


        } else if (Selected == "3") {


        } else if (Selected == "4") {


        }

        CodeEditor.setValue("");

    } catch (err) {
        document.getElementById("editor__console").innerHTML = err;
        CodeEditor.setValue("");

    }
});

ResetBtn.addEventListener("click", () => {
    CodeEditor.setValue("");
});

function SelectValueUpdate() {
    var Selected = document.getElementById("editor_language_select").value;
    Selected = parseInt(Selected);
    console.log(Selected);
    CodeEditor.session.setMode("ace/mode/" + LanguageList[Selected]);
};



// Initialize
EditorLib.init();
