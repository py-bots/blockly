Blockly.Blocks["click_button"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Filepath :")
      .appendField(new Blockly.FieldTextInput("default"), "filename")
      .appendField(
        new Blockly.FieldImage(
          "https://raw.githubusercontent.com/google/material-design-icons/master/png/file/file_upload/materialicons/48dp/2x/baseline_file_upload_black_48dp.png",
          20,
          20,
          "*",
          function () {
            alert(this.getText());
          }
        )
      );
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Python["click_button"] = function (block) {
  var text_folder = block.getFieldValue("folder");
  var text_filename = block.getFieldValue("filename");
  // TODO: Assemble Python into code variable.
  var code = 'os.path.join("' + text_filename + '")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
