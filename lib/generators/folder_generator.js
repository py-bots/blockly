function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

Blockly.Python['folder_write_text_file'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_txt_file_path = Blockly.Python.valueToCode(block, 'txt_file_path', Blockly.Python.ORDER_ATOMIC);
  var value_contents = Blockly.Python.valueToCode(block, 'contents', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.folder_write_text_file(txt_file_path = ${value_txt_file_path}, contents = ${value_contents})\n`;
  return code;
};

Blockly.Python['folder_create'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_strfolderpath = Blockly.Python.valueToCode(block, 'strFolderPath', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.folder_create(strFolderPath = ${value_strfolderpath})\n`;
  return code;
};

Blockly.Python['folder_create_text_file'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_textfolderpath = Blockly.Python.valueToCode(block, 'textFolderPath', Blockly.Python.ORDER_ATOMIC);
  var value_txtfilename = Blockly.Python.valueToCode(block, 'txtFileName', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.folder_create_text_file(textFolderPath = ${value_textfolderpath}, txtFileName = ${value_txtfilename})\n`;
  return code;
};

Blockly.Python['folder_delete_all_files'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_fullpathofthefolder = Blockly.Python.valueToCode(block, 'fullPathOfTheFolder', Blockly.Python.ORDER_ATOMIC);
  var value_file_extension_without_dot = Blockly.Python.valueToCode(block, 'file_extension_without_dot', Blockly.Python.ORDER_ATOMIC);
  var checkbox_print_status = block.getFieldValue('print_status') === 'TRUE';
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.folder_delete_all_files(fullPathOfTheFolder = ${value_fullpathofthefolder}, file_extension_without_dot = ${value_file_extension_without_dot}, print_status = ${capitalize(checkbox_print_status.toString())})\n`;
  return code;
};

Blockly.Python['file_rename'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_old_file_path = Blockly.Python.valueToCode(block, 'old_file_path', Blockly.Python.ORDER_ATOMIC);
  var value_new_file_name = Blockly.Python.valueToCode(block, 'new_file_name', Blockly.Python.ORDER_ATOMIC);
  var checkbox_print_status = block.getFieldValue('print_status') === 'TRUE';
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.file_rename(old_file_path = ${value_old_file_path}, new_file_name = ${value_new_file_name}, print_status = ${capitalize(checkbox_print_status.toString())})\n`;
  return code;
};

Blockly.Python['folder_get_all_filenames_as_list'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_strfolderpath = Blockly.Python.valueToCode(block, 'strFolderPath', Blockly.Python.ORDER_ATOMIC);
  var value_extension = Blockly.Python.valueToCode(block, 'extension', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.folder_get_all_filenames_as_list(strFolderPath = ${value_strfolderpath}, extension = ${value_extension})\n`;
  return code;
};

Blockly.Python['folder_read_text_file'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_txt_file_path = Blockly.Python.valueToCode(block, 'txt_file_path', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.folder_read_text_file(txt_file_path = ${value_txt_file_path})\n`;
  return code;
};

Blockly.Python['file_get_json_details'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_path_of_json_file = Blockly.Python.valueToCode(block, 'path_of_json_file', Blockly.Python.ORDER_ATOMIC);
  var value_section = Blockly.Python.valueToCode(block, 'section', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.file_get_json_details(path_of_json_file = ${value_path_of_json_file}, section = ${value_section})\n`;
  return code;
};