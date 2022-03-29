function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

workspace = Blockly.inject("blocklyDiv", {
  toolbox: toolbox_xml,
  collapse: true,
  comments: true,
  disable: true,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  toolboxPosition: "start",
  zoom: {
    controls: true,
    // wheel : true,
    startScale: 1,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
  },
  scrollbars: true,
  sounds: true,
  oneBasedIndex: true,
  grid: {
    spacing: 20,
    length: 0,
    colour: "#888",
    snap: true,
  },
  theme: "Darker",
});
workspace.addChangeListener(block_added);

var htmlEditor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  mode: "python",
  theme: "ayu-dark",
});

function block_added() {
  Blockly.Python.INFINITE_LOOP_TRAP = null;
  const code = Blockly.Python.workspaceToCode(workspace);
  complete_code = code;
  htmlEditor.setValue(complete_code);
}
