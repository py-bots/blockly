Blockly.Python['key_press'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var dropdown_key_1 = block.getFieldValue('key_1');
  var dropdown_key_2 = block.getFieldValue('key_2');
  var dropdown_key_3 = block.getFieldValue('key_3');
  var value_write_to_window = Blockly.Python.valueToCode(block, 'write_to_window', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.key_press(key_1 = "${dropdown_key_1}", key_2 = "${dropdown_key_2}", key_3 = "${dropdown_key_3}", write_to_window = ${value_write_to_window})\n`;
  return code;
};

Blockly.Python['key_write_enter'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_text_to_write = Blockly.Python.valueToCode(block, 'text_to_write', Blockly.Python.ORDER_ATOMIC);
  var value_write_to_window = Blockly.Python.valueToCode(block, 'write_to_window', Blockly.Python.ORDER_ATOMIC);
  var dropdown_key = block.getFieldValue('key');
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.key_write(text_to_write = ${value_text_to_write}, write_to_window = ${value_write_to_window}, key = "${dropdown_key}")\n`;
  return code;
};

Blockly.Python['key_hit_enter'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_write_to_window = Blockly.Python.valueToCode(block, 'write_to_window', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.key_hit(write_to_window = ${value_write_to_window})\n`;
  return code;
};