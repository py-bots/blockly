Blockly.Python['string_extract_only_alphabets'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_inputstring = Blockly.Python.valueToCode(block, 'inputString', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.string_extract_only_alphabets(inputString = ${value_inputstring})\n`;
  return code;
};

Blockly.Python['string_extract_only_numbers'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_inputstring = Blockly.Python.valueToCode(block, 'inputString', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.string_extract_only_numbers(inputString = ${value_inputstring})\n`;
  return code;
};

Blockly.Python['string_remove_special_characters'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_inputstr = Blockly.Python.valueToCode(block, 'inputStr', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.string_remove_special_characters(inputStr = ${value_inputstr})\n`;
  return code;
};