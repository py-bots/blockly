Blockly.Blocks['art_simple_effects'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Simple Effects")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("user_input_img_path")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Image Path")
        .appendField("=");
    this.appendValueInput("name_required_on_image")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Name (OPT)")
        .appendField("=");
    this.appendValueInput("output_folder")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Folder (OPT)")
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

Blockly.Blocks['art_neural_effects'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Neural Effects")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_image_folder_path")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Image Folder")
        .appendField("=");
    this.appendValueInput("style_image_folder_path")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Styles Folder (OPT)")
        .appendField("=");
    this.appendValueInput("output_image_folder_path")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Folder (OPT)")
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

Blockly.Blocks['ar_facecam'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("AR Facecam")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("left_eye_image")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Left Eye Pic (OPT)")
        .appendField("=");
    this.appendValueInput("right_eye_image")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Right Eye Pic (OPT)")
        .appendField("=");
    this.appendValueInput("mouth_animation")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Mouth Video (OPT)")
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

Blockly.Blocks['ar_trackhands'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Track Hands")
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
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ar_facemesh'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Face Mesh")
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
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};