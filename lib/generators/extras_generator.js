function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

Blockly.Python['pause_program'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.pause_program(seconds=${value_seconds})\n`;
  return code;
};

Blockly.Python['text_to_speech'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_audio = Blockly.Python.valueToCode(block, 'audio', Blockly.Python.ORDER_ATOMIC);
  var checkbox_show = block.getFieldValue('show') === 'TRUE';
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.text_to_speech(audio=${value_audio}, show=${capitalize(checkbox_show.toString())})\n`;
  return code;
};

Blockly.Python['speech_to_text'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.speech_to_text()\n`;
  return code;
};

Blockly.Python['image_to_text'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_img_path = Blockly.Python.valueToCode(block, 'img_path', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.image_to_text(img_path=${value_img_path})\n`;
  return code;
};

Blockly.Python['api_request'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
  var value_headers = Blockly.Python.valueToCode(block, 'headers', Blockly.Python.ORDER_ATOMIC);
  var value_body = Blockly.Python.valueToCode(block, 'body', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}, ${variable_data}] = ap.api_request(url=${value_url}, headers=${value_headers}, body=${value_body}, method=${dropdown_method})\n`;
  return code;
};