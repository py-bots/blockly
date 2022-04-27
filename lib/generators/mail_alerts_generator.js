Blockly.Python['mail_send_via_desktop_outlook'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_to_email_id = Blockly.Python.valueToCode(block, 'to_email_id', Blockly.Python.ORDER_ATOMIC);
  var value_subject = Blockly.Python.valueToCode(block, 'subject', Blockly.Python.ORDER_ATOMIC);
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  var value_attachment_path = Blockly.Python.valueToCode(block, 'attachment_path', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.mail_send_via_desktop_outlook(to_email_id=${value_to_email_id}, subject=${value_subject}, message=${value_message}, attachment_path=${value_attachment_path})\n`;
  return code;
};

Blockly.Python['mail_send_gmail_with_app_password'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_gmail_username = Blockly.Python.valueToCode(block, 'gmail_username', Blockly.Python.ORDER_ATOMIC);
  var value_gmail_app_password = Blockly.Python.valueToCode(block, 'gmail_app_password', Blockly.Python.ORDER_ATOMIC);
  var value_to_email_id = Blockly.Python.valueToCode(block, 'to_email_id', Blockly.Python.ORDER_ATOMIC);
  var value_subject = Blockly.Python.valueToCode(block, 'subject', Blockly.Python.ORDER_ATOMIC);
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  var value_attachment_path = Blockly.Python.valueToCode(block, 'attachment_path', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.mail_send_gmail_with_app_password(gmail_username=${value_gmail_username}, gmail_app_password=${value_gmail_app_password}, to_email_id=${value_to_email_id}, subject=${value_subject}, message=${value_message}, attachment_path=${value_attachment_path})\n`;
  return code;
};

Blockly.Python['msg_box_info'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_msg_for_user = Blockly.Python.valueToCode(block, 'msg_for_user', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.msg_box_info(msg_for_user=${value_msg_for_user})\n`;
  return code;
};

Blockly.Python['msg_box_ask_yes_no'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_msg_for_user = Blockly.Python.valueToCode(block, 'msg_for_user', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.msg_box_ask_yes_no(msg_for_user=${value_msg_for_user})\n`;
  return code;
};

Blockly.Python['msg_count_down'] = function (block) {
  Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
  var value_msg_for_user = Blockly.Python.valueToCode(block, 'msg_for_user', Blockly.Python.ORDER_ATOMIC);
  var value_default_time = Blockly.Python.valueToCode(block, 'default_time', Blockly.Python.ORDER_ATOMIC);
  var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `[${variable_status}] = ap.msg_count_down(msg_for_user=${value_msg_for_user}, default_time=${value_default_time})\n`;
  return code;
};
