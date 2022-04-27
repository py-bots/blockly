Blockly.Blocks['pause_program'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Pause Program")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("seconds")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Seconds")
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
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['text_to_speech'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Text To Speech")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("audio")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Text")
        .appendField("=");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Show Text")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "show");
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
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['speech_to_text'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Speech To Text")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
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
        .appendField("Text you spoke..");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['image_to_text'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Image To Text")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("img_path")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Path")
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
        .appendField("Text from image");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['api_request'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("API")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("url")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("URL")
        .appendField("=");
    this.appendValueInput("headers")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("HEADERS")
        .appendField("=");
    this.appendValueInput("body")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("BODY")
        .appendField("=");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Method")
        .appendField(new Blockly.FieldDropdown([["GET","get"], ["POST","post"], ["PUT","put"], ["DELETE","delete"]]), "method");
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
        .appendField("Text from image");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};