Blockly.Blocks['excel_copy_range_from_sheet'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Copy From Sheet")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("start_col")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Start Column")
        .appendField("=");
    this.appendValueInput("start_row")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Start Row")
        .appendField("=");
    this.appendValueInput("end_col")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("End Column")
        .appendField("=");
    this.appendValueInput("end_row")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("End Row")
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
        .appendField("Contents in range");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['excel_get_single_cell'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Get from Cell")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("header")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header")
        .appendField("=");
    this.appendValueInput("column_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Column Name")
        .appendField("=");
    this.appendValueInput("cell_number")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Cell Number")
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
        .appendField("Content in Cell");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['excel_paste_range_to_sheet'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Paste to Sheet")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("start_col")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Start Column")
        .appendField("=");
    this.appendValueInput("start_row")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Start Row")
        .appendField("=");
    this.appendValueInput("copied_data")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Data")
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

Blockly.Blocks['excel_set_single_cell'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Set to Cell")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("header")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header")
        .appendField("=");
    this.appendValueInput("column_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Column Name")
        .appendField("=");
    this.appendValueInput("cell_number")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Cell Number")
        .appendField("=");
    this.appendValueInput("text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Data")
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

Blockly.Blocks['excel_get_all_header_columns'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Get Headers")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("header")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header")
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
        .appendField("[Head1, Hea..]");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['excel_get_row_column_count'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Row Column Count")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("header")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header")
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
        .appendField("[Row, Column]");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['excel_get_all_sheet_names'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Get Sheet Names")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
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
        .appendField("[Sheet 1, Sheet..]");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['excel_clear_sheet'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Clear Sheet")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("header")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header")
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

Blockly.Blocks['excel_drop_columns'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Drop Columns")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("header")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header")
        .appendField("=");
    this.appendValueInput("cols")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Columns")
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

Blockly.Blocks['excel_remove_duplicates'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Remove Duplicates")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("header")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header")
        .appendField("=");
    this.appendValueInput("column_name")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Columns")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Save to Same file")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "same_file");
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

Blockly.Blocks['excel_group_by_column_values_n_split'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Group By Column and Split")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("header")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header")
        .appendField("=");
    this.appendValueInput("column_name")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Columns")
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

Blockly.Blocks['excel_if_value_exists'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Check Value Exists")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("header")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header")
        .appendField("=");
    this.appendValueInput("cols")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Columns")
        .appendField("=");
    this.appendValueInput("value")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value")
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

Blockly.Blocks['excel_apply_template_format'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Apply Template Format")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
        .appendField("=");
    this.appendValueInput("input_template_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Template Filepath")
        .appendField("=");
    this.appendValueInput("input_template_sheetname")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Template Sheetname")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Save to Same file")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "same_file");
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

Blockly.Blocks['excel_apply_format_as_table'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Apply Table Format")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Filepath")
        .appendField("=");
    this.appendValueInput("input_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheetname")
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

Blockly.Blocks['excel_merge_all_files'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Merge All Files")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("input_filepath")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Folder Path")
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

Blockly.Blocks['excel_create_file'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Create Excel File")
        .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("output_sheetname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sheet Name")
        .appendField("=");
    this.appendValueInput("output_folder")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Folder")
        .appendField("=");
    this.appendValueInput("output_filename")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Output Filename")
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