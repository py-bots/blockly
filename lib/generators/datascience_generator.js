Blockly.Python['ds_html_table_from_website'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_website_url = Blockly.Python.valueToCode(block, 'website_url', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.ds_html_table_from_website(website_url=${value_website_url}, output_folder=${value_output_folder})\n`;
  return code;
};

Blockly.Python['ds_pivot_excel_table'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
  var value_rows = Blockly.Python.valueToCode(block, 'rows', Blockly.Python.ORDER_ATOMIC);
  var value_cols = Blockly.Python.valueToCode(block, 'cols', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.ds_pivot_excel_table(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, rows=${value_rows}, cols=${value_cols})\n`;
  return code;
};

Blockly.Python['ds_describe_excel_data'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.ds_describe_excel_data(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header})\n`;
  return code;
};

Blockly.Python['ds_draw_charts_from_excel'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
  var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
  var value_x_col = Blockly.Python.valueToCode(block, 'x_col', Blockly.Python.ORDER_ATOMIC);
  var value_y_col = Blockly.Python.valueToCode(block, 'y_col', Blockly.Python.ORDER_ATOMIC);
  var value_title = Blockly.Python.valueToCode(block, 'title', Blockly.Python.ORDER_ATOMIC);
  var dropdown_chart_type = block.getFieldValue('chart_type');
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.ds_draw_charts_from_excel(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, x_col=${value_x_col}, y_col=${value_y_col}, title=${value_title}, chart_type=${dropdown_chart_type})\n`;
  return code;
};
