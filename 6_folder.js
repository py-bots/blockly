Blockly.Blocks["folder_read_text_file"] = {
  init: function () {
    this.appendValueInput("txt_file_path")
      .setCheck("String")
      .appendField("Folder Read Text File |     File Path :");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#800080");
    this.setTooltip(
      "Reads from a given text file and returns entire contents as a single list."
    );
    this.setHelpUrl("");
  },
};

Blockly.Python["folder_read_text_file"] = function (block) {
  var value_txt_file_path = Blockly.Python.valueToCode(
    block,
    "txt_file_path",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.folder_read_text_file(txt_file_path=${value_txt_file_path})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["folder_write_text_file"] = {
  init: function () {
    this.appendValueInput("txt_file_path")
      .setCheck("String")
      .appendField("Folder Write Text File |     File Path :");
    this.appendValueInput("contents")
      .setCheck("String")
      .appendField("Content :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setColour("#800080");
    this.setOutput(true, null);
    this.setTooltip("Writes given contents to a text file.");
    this.setHelpUrl("");
  },
};

Blockly.Python["folder_write_text_file"] = function (block) {
  var value_txt_file_path = Blockly.Python.valueToCode(
    block,
    "txt_file_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_contents = Blockly.Python.valueToCode(
    block,
    "contents",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.folder_write_text_file(txt_file_path=${value_txt_file_path}, contents=${value_contents})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["folder_create"] = {
  init: function () {
    this.appendValueInput("strFolderPath")
      .setCheck("String")
      .appendField("Create Folder |     Folder Path :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setColour("#800080");
    this.setOutput(true, null);
    this.setTooltip("Create Folder with given Location.");
    this.setHelpUrl("");
  },
};

Blockly.Python["folder_create"] = function (block) {
  var value_strfolderpath = Blockly.Python.valueToCode(
    block,
    "strFolderPath",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.folder_create(strFolderPath=${value_strfolderpath})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["folder_create_text_file"] = {
  init: function () {
    this.appendValueInput("textFolderPath")
      .setCheck("String")
      .appendField("Create Text File in Folder | Folder Path :");
    this.appendValueInput("txtFileName")
      .setCheck("String")
      .appendField("Text File Name :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setColour("#800080");
    this.setOutput(true, null);
    this.setTooltip("Creates Text file in the given path.");
    this.setHelpUrl("");
  },
};

Blockly.Python["folder_create_text_file"] = function (block) {
  var value_textfolderpath = Blockly.Python.valueToCode(
    block,
    "textFolderPath",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_txtfilename = Blockly.Python.valueToCode(
    block,
    "txtFileName",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.folder_create_text_file(textFolderPath=${value_textfolderpath}, txtFileName=${value_txtfilename})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["folder_get_all_filenames_as_list"] = {
  init: function () {
    this.appendValueInput("strFolderPath")
      .appendField(
        new Blockly.FieldImage("./images/crown.png", 30, 30, {
          alt: "*",
          flipRtl: "FALSE",
        })
      )
      .setCheck("String")
      .appendField("Get Files names Folder |     Folder Path :");
    this.appendDummyInput()
      .appendField("Extension :")
      .appendField(new Blockly.FieldTextInput("all"), "extension");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#800080");
    this.setOutput(true, null);
    this.setTooltip("Get all the files of the given folder in a list.");
    this.setHelpUrl("");
  },
};

Blockly.Python["folder_get_all_filenames_as_list"] = function (block) {
  var value_strfolderpath = Blockly.Python.valueToCode(
    block,
    "strFolderPath",
    Blockly.Python.ORDER_ATOMIC
  );
  var text_extension = block.getFieldValue("extension");
  // TODO: Assemble Python into code variable.
  var code = `ap.folder_get_all_filenames_as_list(strFolderPath=${value_strfolderpath}, extension='${text_extension}')\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["folder_delete_all_files"] = {
  init: function () {
    this.appendValueInput("fullPathOfTheFolder")
      .setCheck("String")
      .appendField(
        new Blockly.FieldImage("./images/crown.png", 30, 30, {
          alt: "*",
          flipRtl: "FALSE",
        })
      )
      .appendField("Delete Files from Folder |     Folder Path :");
    this.appendDummyInput()
      .appendField("Extension :")
      .appendField(
        new Blockly.FieldTextInput("all"),
        "file_extension_without_dot"
      );
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setColour("#800080");
    this.setOutput(true, null);
    this.setTooltip("Deletes all the files of the given folder.");
    this.setHelpUrl("");
  },
};

Blockly.Python["folder_delete_all_files"] = function (block) {
  var value_fullpathofthefolder = Blockly.Python.valueToCode(
    block,
    "fullPathOfTheFolder",
    Blockly.Python.ORDER_ATOMIC
  );
  var text_file_extension_without_dot = block.getFieldValue(
    "file_extension_without_dot"
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.folder_delete_all_files(fullPathOfTheFolder=${value_fullpathofthefolder}, file_extension_without_dot='${text_file_extension_without_dot}')\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["file_rename"] = {
  init: function () {
    this.appendValueInput("old_file_path")
      .setCheck("String")
      .appendField("File rename |     Old File Path :");
    this.appendValueInput("new_file_name")
      .setCheck("String")
      .appendField("New File Path :");
    this.appendDummyInput()
      .appendField("Extension :")
      .appendField(
        new Blockly.FieldCheckbox("TRUE"),
        "file_extension_without_dot"
      );
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setColour("#800080");
    this.setOutput(true, null);
    this.setTooltip(
      "Renames the given file name to new file name with same extension."
    );
    this.setHelpUrl("");
  },
};

Blockly.Python["file_rename"] = function (block) {
  var value_old_file_path = Blockly.Python.valueToCode(
    block,
    "old_file_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_new_file_name = Blockly.Python.valueToCode(
    block,
    "new_file_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var checkbox_file_extension_without_dot =
    block.getFieldValue("file_extension_without_dot") == "TRUE";
  // TODO: Assemble Python into code variable.
  var code = `ap.file_rename(old_file_path=${value_old_file_path}, new_file_name=${value_new_file_name}, ext=${capitalize(
    checkbox_file_extension_without_dot.toString()
  )})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["file_get_json_details"] = {
  init: function () {
    this.appendValueInput("path_of_json_file")
      .setCheck("String")
      .appendField(
        new Blockly.FieldImage("./images/crown.png", 30, 30, {
          alt: "*",
          flipRtl: "FALSE",
        })
      )
      .appendField("File JSON details |     JSON file path :");
    this.appendValueInput("section")
      .setCheck("String")
      .appendField("Section :");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#800080");
    this.setTooltip(
      "Returns all the details of the given section in a dictionary."
    );
    this.setHelpUrl("");
  },
};

Blockly.Python["file_get_json_details"] = function (block) {
  var value_path_of_json_file = Blockly.Python.valueToCode(
    block,
    "path_of_json_file",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_section = Blockly.Python.valueToCode(
    block,
    "section",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.file_get_json_details(path_of_json_file=${value_path_of_json_file}, section=${value_section})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
