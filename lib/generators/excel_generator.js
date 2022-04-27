Blockly.Python['excel_copy_range_from_sheet'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_start_col = Blockly.Python.valueToCode(block, 'start_col', Blockly.Python.ORDER_ATOMIC);
  var value_start_row = Blockly.Python.valueToCode(block, 'start_row', Blockly.Python.ORDER_ATOMIC);
  var value_end_col = Blockly.Python.valueToCode(block, 'end_col', Blockly.Python.ORDER_ATOMIC);
  var value_end_row = Blockly.Python.valueToCode(block, 'end_row', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.excel_copy_range_from_sheet(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, start_col=${value_start_col}, start_row=${value_start_row}, end_col=${value_end_col}, end_row=${value_end_row})\n`;
  return code;
};

Blockly.Python['excel_get_single_cell'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
  var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
  var value_cell_number = Blockly.Python.valueToCode(block, 'cell_number', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.excel_get_single_cell(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, column_name=${value_column_name}, cell_number=${value_cell_number})\n`;
  return code;
};

Blockly.Python['excel_paste_range_to_sheet'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_start_col = Blockly.Python.valueToCode(block, 'start_col', Blockly.Python.ORDER_ATOMIC);
  var value_start_row = Blockly.Python.valueToCode(block, 'start_row', Blockly.Python.ORDER_ATOMIC);
  var value_copied_data = Blockly.Python.valueToCode(block, 'copied_data', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.excel_paste_range_to_sheet(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, start_col=${value_start_col}, start_row=${value_start_row}, copied_data=${value_copied_data})\n`;
  return code;
};

Blockly.Python['excel_set_single_cell'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
  var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
  var value_cell_number = Blockly.Python.valueToCode(block, 'cell_number', Blockly.Python.ORDER_ATOMIC);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.excel_set_single_cell(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, column_name=${value_column_name}, cell_number=${value_cell_number}, text=${value_text})\n`;
  return code;
};

Blockly.Python['excel_get_all_header_columns'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.excel_get_all_header_columns(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header})\n`;
  return code;
};

Blockly.Python['excel_get_row_column_count'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.excel_get_row_column_count(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header})\n`;
  return code;
};

Blockly.Python['excel_get_all_sheet_names'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.excel_get_all_sheet_names(input_filepath=${value_input_filepath})\n`;
  return code;
};

Blockly.Python['excel_clear_sheet'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.excel_clear_sheet(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header})\n`;
  return code;
};

Blockly.Python['excel_drop_columns'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
  var value_cols = Blockly.Python.valueToCode(block, 'cols', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.excel_drop_columns(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, cols=${value_cols})\n`;
  return code;
};

Blockly.Python['excel_remove_duplicates'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
  var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
  var checkbox_same_file = block.getFieldValue('same_file') === 'TRUE';
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.excel_remove_duplicates(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, column_name=${value_column_name}, output_folder=${value_output_folder}, output_filename=${value_output_filename}, same_file=${capitalize(checkbox_same_file.toString())})\n`;
  return code;
};

Blockly.Python['excel_group_by_column_values_n_split'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
  var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.excel_group_by_column_values_n_split(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, column_name=${value_column_name}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
  return code;
};

Blockly.Python['excel_if_value_exists'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
  var value_cols = Blockly.Python.valueToCode(block, 'cols', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.excel_if_value_exists(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, cols=${value_cols}, value=${value_value})\n`;
  return code;
};

Blockly.Python['excel_apply_template_format'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_input_template_filepath = Blockly.Python.valueToCode(block, 'input_template_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_template_sheetname = Blockly.Python.valueToCode(block, 'input_template_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
  var checkbox_same_file = block.getFieldValue('same_file') === 'TRUE';
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.excel_apply_template_format(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, input_template_filepath=${value_input_template_filepath}, input_template_sheetname=${value_input_template_sheetname}, output_folder=${value_output_folder}, output_filename=${value_output_filename}, same_file=${capitalize(checkbox_same_file.toString())})\n`;
  return code;
};

Blockly.Python['excel_apply_format_as_table'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.excel_apply_format_as_table(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname})\n`;
  return code;
};

Blockly.Python['excel_merge_all_files'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.excel_merge_all_files(input_filepath=${value_input_filepath}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
  return code;
};

Blockly.Python['excel_create_file'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_output_sheetname = Blockly.Python.valueToCode(block, 'output_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.excel_create_file(output_sheetname=${value_output_sheetname}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
  return code;
};