function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

// read the toolbox.xml file in lib/toolbox.xml and make it into a string
var toolbox_xml = "";
var workspace = null;
var htmlEditor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  mode: "python",
  // theme: "ayu-dark",
  theme: "night",
});
var toolbox_xml_file = new XMLHttpRequest();
toolbox_xml_file.open("GET", "lib/toolbox.xml", true);
toolbox_xml_file.onreadystatechange = function () {
  if (toolbox_xml_file.readyState === 4) {
    if (toolbox_xml_file.status === 200 || toolbox_xml_file.status == 0) {
      toolbox_xml = toolbox_xml_file.responseText;
      workspace = Blockly.inject("blocklyDiv", {
        // renderer: 'zelos',
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
          startScale: 0.85,
          maxScale: 1,
          minScale: 0.3,
          scaleSpeed: 1.2,
        },
        scrollbars: true,
        sounds: true,
        oneBasedIndex: true,
        grid: {
          spacing: 20,
          length: 2,
          colour: "#1919B5",
          snap: true,
        },
        move: {
          scrollbars: {
            vertical: true,
            horizontal: true
          },
        },
        theme: "Darker",
      });
      const workspaceSearch = new WorkspaceSearch(workspace);
      workspaceSearch.init();
      workspace.addChangeListener(block_added);
      // const contentHighlight = new ContentHighlight(workspace);
      // contentHighlight.init();
      const zoomToFit = new ZoomToFitControl(workspace);
      zoomToFit.init();
      const options = {
        contextMenu: true,
        shortcut: true,
      }

      // Initialize plugin.
      const plugin = new CrossTabCopyPaste();
      plugin.init(options);


    }
  }
};
toolbox_xml_file.send(null);





function block_added() {
  Blockly.Python.INFINITE_LOOP_TRAP = null;
  const code = Blockly.Python.workspaceToCode(workspace);
  complete_code = code;
  htmlEditor.setValue(complete_code);
}


function add_block() {
  var search_input = document.getElementById("search-input");
  console.log(search_input.value);
  add_xml_to_workspace(search_input.value);
}


function add_xml_to_workspace(xml) {

  // add them into xml tags
  var xml_string = '<xml xmlns="https://developers.google.com/blockly/xml">' + xml + '</xml>';


  XML_DATA = Blockly.Xml.textToDom(xml_string);
  Blockly.Xml.appendDomToWorkspace(XML_DATA, workspace);
}


// data = [
//   {
//     keywords: [""],
//     Label: "Repeat No",
//     Descript: "Repeat No of times",
//     long : "Repeat No of times",
//     code : "<block>\n" +
//   },
// ]