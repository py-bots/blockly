Blockly.Blocks["import_cf"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("ClointFusion Starts")
      .appendField(
        new Blockly.FieldImage("./images/crown.png", 30, 30, {
          alt: "*",
          flipRtl: "FALSE",
        })
      );
    this.setColour("#000");
    this.setNextStatement(true, null);
    this.setStyle("hat_blocks");
    this.setTooltip("Import ClointFusion");
    this.setDeletable(false);
    this.setEditable(false);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["import_cf"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "";
  return code;
};
