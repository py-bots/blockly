Blockly.Python['art_simple_effects'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_user_input_img_path = Blockly.Python.valueToCode(block, 'user_input_img_path', Blockly.Python.ORDER_ATOMIC);
  var value_name_required_on_image = Blockly.Python.valueToCode(block, 'name_required_on_image', Blockly.Python.ORDER_ATOMIC);
  var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.art_simple_effects(user_input_img_path=${value_user_input_img_path}, name_required_on_image=${value_name_required_on_image}, output_folder=${value_output_folder})\n`;
  return code;
};

Blockly.Python['art_neural_effects'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_input_image_folder_path = Blockly.Python.valueToCode(block, 'input_image_folder_path', Blockly.Python.ORDER_ATOMIC);
  var value_style_image_folder_path = Blockly.Python.valueToCode(block, 'style_image_folder_path', Blockly.Python.ORDER_ATOMIC);
  var value_output_image_folder_path = Blockly.Python.valueToCode(block, 'output_image_folder_path', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.art_neural_effects(input_image_folder_path=${value_input_image_folder_path}, style_image_folder_path=${value_style_image_folder_path}, output_image_folder_path=${value_output_image_folder_path})\n`;
  return code;
};

Blockly.Python['ar_facecam'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_left_eye_image = Blockly.Python.valueToCode(block, 'left_eye_image', Blockly.Python.ORDER_ATOMIC);
  var value_right_eye_image = Blockly.Python.valueToCode(block, 'right_eye_image', Blockly.Python.ORDER_ATOMIC);
  var value_mouth_animation = Blockly.Python.valueToCode(block, 'mouth_animation', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.ar_facecam(left_eye_image=${value_left_eye_image}, right_eye_image=${value_right_eye_image}, mouth_animation=${value_mouth_animation})\n`;
  return code;
};

Blockly.Python['ar_trackhands'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.ar_trackhands()\n`;
  return code;
};

Blockly.Python['ar_facemesh'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.ar_facemesh()\n`;
  return code;
};