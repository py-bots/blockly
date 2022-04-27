Blockly.Python['print_ap'] = function (block) {
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `print(${variable_status})\n`;
  return code;
};

Blockly.Python['mouse_click'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_no_of_clicks = Blockly.Python.valueToCode(block, 'no_of_clicks', Blockly.Python.ORDER_ATOMIC);
  var dropdown_left_or_right = block.getFieldValue('left_or_right');
  var dropdown_type_of_movement = block.getFieldValue('type_of_movement');
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.mouse_click(x=${value_x}, y=${value_y}, no_of_clicks=${value_no_of_clicks}, left_or_right='${dropdown_left_or_right}', type_of_movement='${dropdown_type_of_movement}'))\n`;
  return code;
};

Blockly.Python['mouse_move'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type_of_movement = block.getFieldValue('type_of_movement');
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.mouse_move(x=${value_x}, y=${value_y}, type_of_movement='${dropdown_type_of_movement}')\n`;
  return code;
};

Blockly.Python['mouse_drag_from_to'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
  var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
  var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.mouse_drag_from_to(x1=${value_x1}, y1=${value_y1}, x2=${value_x2}, y2=${value_y2})\n`;
  return code;
};

Blockly.Python['mouse_search_snip_return_coordinates_x_y'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var value_wait = Blockly.Python.valueToCode(block, 'wait', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.mouse_search_snip_return_coordinates_x_y(img=${value_img}, wait=${value_wait})\n`;
  return code;
};