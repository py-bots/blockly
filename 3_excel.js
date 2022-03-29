Blockly.Blocks["excel_get_row_column_count"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Get Row Column count |");
    this.appendValueInput("excel_path")
      .setCheck("String")
      .appendField("Excel Path :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.appendValueInput("header")
      .setCheck("Number")
      .appendField("Header Row :");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip(
      "Gets the row and coloumn count of the provided excel sheet."
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_copy_range_from_sheet"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Copy Range from sheet |");
    this.appendValueInput("excel_path")
      .setCheck("String")
      .appendField("Excel Path :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.appendValueInput("startCol")
      .setCheck("Number")
      .appendField("Start Col :");
    this.appendValueInput("startRow")
      .setCheck("Number")
      .appendField("Start Row :");
    this.appendValueInput("endCol").setCheck("Number").appendField("End Col :");
    this.appendValueInput("endRow").setCheck("Number").appendField("End Row :");
    this.setInputsInline(true);
    // this.setOutput(true, ["Array", "EXCEL_RANGE"]);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip(
      "Copies the specific range from the provided excel sheet and returns copied data as a list"
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_copy_paste_range_from_to_sheet"] = {
  init: function () {
    this.appendDummyInput().appendField(
      "Excel | Copy Range from sheet to Another Sheet |"
    );
    this.appendValueInput("excel_path")
      .setCheck("String")
      .appendField("Excel Path :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.appendValueInput("startCol")
      .setCheck("Number")
      .appendField("Start Col :");
    this.appendValueInput("startRow")
      .setCheck("Number")
      .appendField("Start Row :");
    this.appendValueInput("endCol").setCheck("Number").appendField("End Col :");
    this.appendValueInput("endRow").setCheck("Number").appendField("End Row :");
    this.appendValueInput("copiedData")
      .setCheck(null)
      .appendField("To Excel :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip(
      "Copies the specific range from the provided excel sheet and returns copied data as a list"
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_split_by_column"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Split By Column |");
    this.appendValueInput("excel_path")
      .setCheck("String")
      .appendField("Excel Path :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.appendValueInput("header")
      .setCheck("Number")
      .appendField("Header Row :");
    this.appendValueInput("columnName")
      .setCheck("String")
      .appendField("Column Name :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip("Splits the excel file by Column Name");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_merge_all_files"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Merge all files |");
    this.appendValueInput("input_folder_path")
      .setCheck("String")
      .appendField("Input Folder Path :");
    this.appendValueInput("output_folder_path")
      .setCheck("String")
      .appendField("Output Folder Path :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip("Merges all the excel files in the given folder");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_drop_columns"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Drop Columns |");
    this.appendValueInput("excel_path")
      .setCheck("String")
      .appendField("Excel Path :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.appendValueInput("header")
      .setCheck("Number")
      .appendField("Header Row :");
    this.appendValueInput("columnsToBeDropped")
      .setCheck(null)
      .appendField("Columns :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip("Drops the desired column from the given excel file");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_clear_sheet"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Clear Sheet |");
    this.appendValueInput("excel_path")
      .setCheck("String")
      .appendField("Excel Path :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.appendValueInput("header")
      .setCheck("Number")
      .appendField("Header Row :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip(
      "Clears the contents of given excel files keeping header row intact."
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_set_single_cell"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Set cell |");
    this.appendValueInput("excel_path")
      .setCheck("String")
      .appendField("Excel Path :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.appendValueInput("header")
      .setCheck("Number")
      .appendField("Header Row :");
    this.appendValueInput("columnName")
      .setCheck("String")
      .appendField("Column Name:");
    this.appendValueInput("cellNumber")
      .setCheck("Number")
      .appendField("Cell Number :");
    this.appendValueInput("setText").setCheck(null).appendField("Content :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip(
      "Writes the given text to the desired column/cell number for the given excel file"
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_get_single_cell"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Get cell |");
    this.appendValueInput("excel_path")
      .setCheck("String")
      .appendField("Excel Path :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.appendValueInput("header")
      .setCheck("Number")
      .appendField("Header Row :");
    this.appendValueInput("columnName")
      .setCheck("String")
      .appendField("Column Name:");
    this.appendValueInput("cellNumber")
      .setCheck("Number")
      .appendField("Cell Number :");
    this.setInputsInline(true);
    // this.setOutput(true, null);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip(
      "Gets the text from the desired column/cell number of the given excel file"
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_remove_duplicates"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Remove Duplicates |");
    this.appendValueInput("excel_path")
      .setCheck("String")
      .appendField("Excel Path :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.appendValueInput("header")
      .setCheck("Number")
      .appendField("Header Row :");
    this.appendValueInput("columnName")
      .setCheck("String")
      .appendField("Column Name :");
    this.appendDummyInput()
      .appendField("Keep :")
      .appendField(
        new Blockly.FieldDropdown([
          ["First", "'first'"],
          ["Last", "'last'"],
          ["None", "False"],
        ]),
        "which_one_to_keep"
      )
      .appendField("Replace Changes in same file :")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "saveResultsInSameExcel");
    this.setInputsInline(true);
    // this.setOutput(true, null);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip(
      "Drops the duplicates from the desired Column of the given excel file"
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_create_excel_file_in_given_folder"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Create File |");
    this.appendValueInput("fullPathToTheFolder")
      .setCheck("String")
      .appendField("Folder Path :");
    this.appendValueInput("excelFileName")
      .setCheck("String")
      .appendField("File name :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip(
      "Creates an excel file in the desired folder with desired filename. Create folders if the folder/s does not exist."
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_get_all_header_columns"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Get Headers |");
    this.appendValueInput("excel_path")
      .setCheck("String")
      .appendField("Excel Path :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.appendValueInput("header")
      .setCheck("Number")
      .appendField("Header Row :");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip(
      "Gives you all column header names of the given excel sheet."
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_describe_data"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Describe Data |");
    this.appendValueInput("excel_path")
      .setCheck("String")
      .appendField("Excel Path :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.appendValueInput("header")
      .setCheck("Number")
      .appendField("Header Row :");
    this.setInputsInline(true);
    // this.setOutput(true, null);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip("Describe statistical data for the given excel");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_get_all_sheet_names"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Get sheet names |");
    this.appendValueInput("excelFilePath")
      .setCheck("String")
      .appendField("Excel Path :");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip("Describe statistical data for the given excel");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_if_value_exists"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Check value Exists |");
    this.appendValueInput("excel_path")
      .setCheck("String")
      .appendField("Excel Path :");
    this.appendValueInput("sheet_name")
      .setCheck("String")
      .appendField("Sheet Name :");
    this.appendValueInput("header")
      .setCheck("Number")
      .appendField("Header Row :");
    this.appendValueInput("usecols").setCheck("Array").appendField("Colums :");
    this.appendValueInput("value").setCheck("String").appendField("Value :");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour("#12641D");
    this.setTooltip(
      "Check if a given value exists in given excel. Returns True / False"
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["excel_to_colored_html"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | to HTML |");
    this.appendValueInput("formatted_excel_path")
      .setCheck("String")
      .appendField("Formatted Excel Path :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#12641D");
    this.setTooltip(
      "Converts given Excel to HTML preserving the Excel format and saves in same folder as .html"
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["isnan"] = {
  init: function () {
    this.appendDummyInput().appendField("Excel | Check is NaN |");
    this.appendValueInput("formatted_excel_path")
      .setCheck(null)
      .appendField("Value :");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour("#12641D");
    this.setTooltip("Returns TRUE if a given value is NaN False otherwise");
    this.setHelpUrl("");
  },
};

Blockly.Python["excel_get_row_column_count"] = function (block) {
  var value_excel_path = Blockly.Python.valueToCode(
    block,
    "excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_header = Blockly.Python.valueToCode(
    block,
    "header",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_get_row_column_count(excel_path=${value_excel_path}, sheet_name=${value_sheet_name}, header=${value_header})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_copy_range_from_sheet"] = function (block) {
  var value_excel_path = Blockly.Python.valueToCode(
    block,
    "excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_startcol = Blockly.Python.valueToCode(
    block,
    "startCol",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_startrow = Blockly.Python.valueToCode(
    block,
    "startRow",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_endcol = Blockly.Python.valueToCode(
    block,
    "endCol",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_endrow = Blockly.Python.valueToCode(
    block,
    "endRow",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_copy_range_from_sheet(excel_path=${value_excel_path}, sheet_name=${value_sheet_name}, startCol=${value_startcol}, startRow=${value_startrow}, endCol=${value_endcol}, endRow=${value_endrow})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_copy_paste_range_from_to_sheet"] = function (block) {
  var value_excel_path = Blockly.Python.valueToCode(
    block,
    "excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_startcol = Blockly.Python.valueToCode(
    block,
    "startCol",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_startrow = Blockly.Python.valueToCode(
    block,
    "startRow",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_endcol = Blockly.Python.valueToCode(
    block,
    "endCol",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_endrow = Blockly.Python.valueToCode(
    block,
    "endRow",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_copieddata = Blockly.Python.valueToCode(
    block,
    "copiedData",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_copy_range_from_sheet(excel_path=${value_excel_path}, sheet_name=${value_sheet_name}, startCol=${value_startcol}, startRow=${value_startrow}, endCol=${value_endcol}, endRow=${value_endrow}, copiedData=${value_copieddata})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_split_by_column"] = function (block) {
  var value_excel_path = Blockly.Python.valueToCode(
    block,
    "excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_header = Blockly.Python.valueToCode(
    block,
    "header",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_columnname = Blockly.Python.valueToCode(
    block,
    "columnName",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_split_by_column(excel_path=${value_excel_path}, sheet_name=${value_sheet_name}, header=${value_header}, columnName=${value_columnname})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_merge_all_files"] = function (block) {
  var value_input_folder_path = Blockly.Python.valueToCode(
    block,
    "input_folder_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_output_folder_path = Blockly.Python.valueToCode(
    block,
    "output_folder_path",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_merge_all_files(input_folder_path=${value_input_folder_path}, output_folder_path=${value_output_folder_path})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_drop_columns"] = function (block) {
  var value_excel_path = Blockly.Python.valueToCode(
    block,
    "excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_header = Blockly.Python.valueToCode(
    block,
    "header",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_columnstobedropped = Blockly.Python.valueToCode(
    block,
    "columnsToBeDropped",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_drop_columns(excel_path=${value_excel_path}, sheet_name=${value_sheet_name}, header=${value_header}, columnsToBeDropped =${value_columnstobedropped})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_clear_sheet"] = function (block) {
  var value_excel_path = Blockly.Python.valueToCode(
    block,
    "excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_header = Blockly.Python.valueToCode(
    block,
    "header",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_clear_sheet(excel_path=${value_excel_path}, sheet_name=${value_sheet_name}, header=${value_header})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_set_single_cell"] = function (block) {
  var value_excel_path = Blockly.Python.valueToCode(
    block,
    "excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_header = Blockly.Python.valueToCode(
    block,
    "header",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_columnname = Blockly.Python.valueToCode(
    block,
    "columnName",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_cellnumber = Blockly.Python.valueToCode(
    block,
    "cellNumber",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_settext = Blockly.Python.valueToCode(
    block,
    "setText",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_set_single_cell(excel_path=${value_excel_path}, sheet_name=${value_sheet_name}, header=${value_header}, columnName=${value_columnname}, cellNumber=${value_cellnumber}, setText=${value_settext})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_get_single_cell"] = function (block) {
  var value_excel_path = Blockly.Python.valueToCode(
    block,
    "excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_header = Blockly.Python.valueToCode(
    block,
    "header",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_columnname = Blockly.Python.valueToCode(
    block,
    "columnName",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_cellnumber = Blockly.Python.valueToCode(
    block,
    "cellNumber",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_get_single_cell(excel_path=${value_excel_path}, sheet_name=${value_sheet_name}, header=${value_header}, columnName=${value_columnname}, cellNumber=${value_cellnumber})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_remove_duplicates"] = function (block) {
  var value_excel_path = Blockly.Python.valueToCode(
    block,
    "excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_header = Blockly.Python.valueToCode(
    block,
    "header",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_columnname = Blockly.Python.valueToCode(
    block,
    "columnName",
    Blockly.Python.ORDER_ATOMIC
  );
  var dropdown_which_one_to_keep = block.getFieldValue("which_one_to_keep");
  var checkbox_saveresultsinsameexcel =
    block.getFieldValue("saveResultsInSameExcel") == "TRUE";
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_remove_duplicates(excel_path=${value_excel_path}, sheet_name=${value_sheet_name}, header=${value_header}, columnName=${value_columnname}, which_one_to_keep=${dropdown_which_one_to_keep}, saveResultsInSameExcel=${capitalize(
    checkbox_saveresultsinsameexcel.toString()
  )})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_create_excel_file_in_given_folder"] = function (block) {
  var value_fullpathtothefolder = Blockly.Python.valueToCode(
    block,
    "fullPathToTheFolder",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_excelfilename = Blockly.Python.valueToCode(
    block,
    "excelFileName",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_create_excel_file_in_given_folder(fullPathToTheFolder=${value_fullpathtothefolder}, excelFileName=${value_excelfilename}, sheet_name=${value_sheet_name})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_get_all_header_columns"] = function (block) {
  var value_excel_path = Blockly.Python.valueToCode(
    block,
    "excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_header = Blockly.Python.valueToCode(
    block,
    "header",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_get_all_header_columns(excel_path=${value_excel_path}, sheet_name=${value_sheet_name}, header=${value_header})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_describe_data"] = function (block) {
  var value_excel_path = Blockly.Python.valueToCode(
    block,
    "excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_header = Blockly.Python.valueToCode(
    block,
    "header",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_describe_data(excel_path=${value_excel_path}, sheet_name=${value_sheet_name}, header=${value_header})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_get_all_sheet_names"] = function (block) {
  var value_excelfilepath = Blockly.Python.valueToCode(
    block,
    "excelFilePath",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_get_all_sheet_names(excelFilePath=${value_excelfilepath})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_if_value_exists"] = function (block) {
  var value_excel_path = Blockly.Python.valueToCode(
    block,
    "excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_sheet_name = Blockly.Python.valueToCode(
    block,
    "sheet_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_header = Blockly.Python.valueToCode(
    block,
    "header",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_usecols = Blockly.Python.valueToCode(
    block,
    "usecols",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_value = Blockly.Python.valueToCode(
    block,
    "value",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_if_value_exists(excel_path=${value_excel_path}, sheet_name=${value_sheet_name}, header=${value_header}, usecols=${value_usecols}, value=${value_value})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["excel_to_colored_html"] = function (block) {
  var value_formatted_excel_path = Blockly.Python.valueToCode(
    block,
    "formatted_excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.excel_to_colored_html(formatted_excel_path=${value_formatted_excel_path})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["isnan"] = function (block) {
  var value_formatted_excel_path = Blockly.Python.valueToCode(
    block,
    "formatted_excel_path",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.isNaN(${value_formatted_excel_path})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
