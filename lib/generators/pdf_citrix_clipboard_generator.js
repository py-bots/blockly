Blockly.Python['pdf_extract_all_tables'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_pdf_file_path = Blockly.Python.valueToCode(block, 'pdf_file_path', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var value_output_file_name = Blockly.Python.valueToCode(block, 'output_file_name', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.pdf_extract_all_tables(pdf_file_path=${value_pdf_file_path}, output_folder=${value_output_folder}, output_file_name=${value_output_file_name})\n`;
  return code;
};

Blockly.Python['citrix_scrape_contents_by_search_copy_paste'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_highlight_text = Blockly.Python.valueToCode(block, 'highlight_text', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.citrix_scrape_contents_by_search_copy_paste(highlight_text=${value_highlight_text})\n`;
  return code;
};

Blockly.Python['citrix_window_clear_search'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.citrix_window_clear_search()\n`;
  return code;
};

Blockly.Python['clipboard_get_data'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.clipboard_get_data()\n`;
  return code;
};

Blockly.Python['clipboard_set_data'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.clipboard_set_data(data=${value_data})\n`;
  return code;
};
