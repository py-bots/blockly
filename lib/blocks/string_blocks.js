Blockly.Blocks['string_extract_only_alphabets'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Extract Alphabets")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("inputString")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("String (or) Text")
        .appendField("=");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Returns")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("[")
        .appendField(new Blockly.FieldVariable("STATUS"), "status")
        .appendField("]");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("[")
        .appendField(new Blockly.FieldVariable("DATA"), "data")
        .appendField("]");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Data :")
        .appendField("ModifiedString");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['string_extract_only_numbers'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Extract Numbers")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("inputString")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("String (or) Text")
        .appendField("=");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Returns")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("[")
        .appendField(new Blockly.FieldVariable("STATUS"), "status")
        .appendField("]");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("[")
        .appendField(new Blockly.FieldVariable("DATA"), "data")
        .appendField("]");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Data :")
        .appendField("123456789");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['string_remove_special_characters'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Remove Symbols")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("inputStr")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("String (or) Text")
        .appendField("=");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Returns")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("[")
        .appendField(new Blockly.FieldVariable("STATUS"), "status")
        .appendField("]");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("[")
        .appendField(new Blockly.FieldVariable("DATA"), "data")
        .appendField("]");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Data :")
        .appendField("Abc123");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};