Blockly.Blocks['convert_change_corrupt_xls_to_xlsx'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Corrupt XLS to XLSX")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_file")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("output_folder")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Folder (OPT)")
        .appendField("=");
    this.appendValueInput("output_filename")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Filename (OPT)")
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

Blockly.Blocks['convert_xls_to_xlsx'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("XLS to XLSX")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_file")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("output_folder")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Folder (OPT)")
        .appendField("=");
    this.appendValueInput("output_filename")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Filename (OPT)")
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

Blockly.Blocks['convert_image_to_base64'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Image to Base64")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_file")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
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
        .appendField("[x,y]");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['convert_base64_to_img'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Base64 to Image")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("imgBase64Str")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Base64")
        .appendField("=");
    this.appendValueInput("img_folder_path")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Folder (OPT)")
        .appendField("=");
    this.appendValueInput("img_file_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Filename (OPT)")
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

Blockly.Blocks['convert_csv_to_excel'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("CSV to Excel")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("csv_path")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("sep")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Separator")
        .appendField("=");
    this.appendValueInput("excel_output_folder_path")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Folder (OPT)")
        .appendField("=");
    this.appendValueInput("excel_file_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Filename (OPT)")
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

Blockly.Blocks['convert_jpg_to_png'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("JPG to PNG")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("output_folder")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Folder (OPT)")
        .appendField("=");
    this.appendValueInput("output_filename")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filename (OPT)")
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

Blockly.Blocks['convert_png_to_jpg'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("PNG to JPG")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("output_folder")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Folder (OPT)")
        .appendField("=");
    this.appendValueInput("output_filename")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filename (OPT)")
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

Blockly.Blocks['convert_excel_to_colored_html'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Excel to HTML")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("output_folder")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Folder (OPT)")
        .appendField("=");
    this.appendValueInput("output_filename")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filename (OPT)")
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