Blockly.Python['windows_show_desktop'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.windows_show_desktop()`;
  return code;
};

Blockly.Python['windows_launch_app'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_pathofexefile = Blockly.Python.valueToCode(block, 'pathOfExeFile', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.windows_launch_app("pathOfExeFile = ${value_pathofexefile}")`;
  return code;
};

Blockly.Python['window_restore_windows'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_windowname = Blockly.Python.valueToCode(block, 'windowName', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.window_restore_windows("windowName = ${value_windowname}")`;
  return code;
};

Blockly.Python['window_activate_and_maximize_windows'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_windowname = Blockly.Python.valueToCode(block, 'windowName', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.window_activate_and_maximize_windows("windowName = ${value_windowname}")`;
  return code;
};

Blockly.Python['window_minimize_windows'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_windowname = Blockly.Python.valueToCode(block, 'windowName', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.window_minimize_windows("windowName = ${value_windowname}")`;
  return code;
};

Blockly.Python['window_close_windows'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_windowname = Blockly.Python.valueToCode(block, 'windowName', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.window_close_windows("windowName = ${value_windowname}")\n`;
  return code;
};

Blockly.Python['window_get_all_opened_titles_windows'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.window_get_all_opened_titles_windows()\n`;
  return code;
};

Blockly.Python['window_get_active_window'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.window_get_active_window()\n`;
  return code;
};

Blockly.Python['window_activate_window'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_window_title = Blockly.Python.valueToCode(block, 'window_title', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.window_activate_window("window_title = ${value_window_title}")\n`;
  return code;
};