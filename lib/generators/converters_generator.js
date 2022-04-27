Blockly.Python['convert_change_corrupt_xls_to_xlsx'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_file = Blockly.Python.valueToCode(block, 'input_file', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.convert_change_corrupt_xls_to_xlsx(input_file=${value_input_file}, input_sheetname=${value_input_sheetname}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
  return code;
};

Blockly.Python['convert_xls_to_xlsx'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_file = Blockly.Python.valueToCode(block, 'input_file', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.convert_xls_to_xlsx(input_file=${value_input_file}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
  return code;
};

Blockly.Python['convert_image_to_base64'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_file = Blockly.Python.valueToCode(block, 'input_file', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.convert_image_to_base64(input_file=${value_input_file})\n`;
  return code;
};

Blockly.Python['convert_base64_to_img'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_imgbase64str = Blockly.Python.valueToCode(block, 'imgBase64Str', Blockly.Python.ORDER_ATOMIC);
  var value_img_folder_path = Blockly.Python.valueToCode(block, 'img_folder_path', Blockly.Python.ORDER_ATOMIC);
  var value_img_file_name = Blockly.Python.valueToCode(block, 'img_file_name', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.convert_base64_to_img(imgBase64Str=${value_imgbase64str}, img_folder_path=${value_img_folder_path}, img_file_name=${value_img_file_name})\n`;
  return code;
};

Blockly.Python['convert_csv_to_excel'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_csv_path = Blockly.Python.valueToCode(block, 'csv_path', Blockly.Python.ORDER_ATOMIC);
  var value_sep = Blockly.Python.valueToCode(block, 'sep', Blockly.Python.ORDER_ATOMIC);
  var value_excel_output_folder_path = Blockly.Python.valueToCode(block, 'excel_output_folder_path', Blockly.Python.ORDER_ATOMIC);
  var value_excel_file_name = Blockly.Python.valueToCode(block, 'excel_file_name', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.convert_csv_to_excel(csv_path=${value_csv_path}, sep=${value_sep}, excel_output_folder_path=${value_excel_output_folder_path}, excel_file_name=${value_excel_file_name})\n`;
  return code;
};

Blockly.Python['convert_jpg_to_png'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.convert_jpg_to_png(input_filepath=${value_input_filepath}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
  return code;
};

Blockly.Python['convert_png_to_jpg'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.convert_png_to_jpg(input_filepath=${value_input_filepath}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
  return code;
};

Blockly.Python['convert_excel_to_colored_html'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.convert_excel_to_colored_html(input_filepath=${value_input_filepath}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
  return code;
};
