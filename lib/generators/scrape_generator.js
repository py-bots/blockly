Blockly.Python['screen_clear_search'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_delay = Blockly.Python.valueToCode(block, 'delay', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.screen_clear_search(delay = ${value_delay})\n`;
  return code;
};

Blockly.Python['scrape_save_contents_to_notepad'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_folderpathtosavethenotepad = Blockly.Python.valueToCode(block, 'folderPathToSaveTheNotepad', Blockly.Python.ORDER_ATOMIC);
  var value_switch_to_window = Blockly.Python.valueToCode(block, 'switch_to_window', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.scrape_save_contents_to_notepad(folderPathToSaveTheNotepad = ${value_folderpathtosavethenotepad}, switch_to_window = ${value_switch_to_window})\n`;
  return code;
};