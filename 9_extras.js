Blockly.Blocks["text_to_speech"] = {
  init: function () {
    this.appendValueInput("audio")
      .appendField(
        new Blockly.FieldImage("./images/crown.png", 30, 30, {
          alt: "*",
          flipRtl: "FALSE",
        })
      )
      .setCheck("String")
      .appendField("Text To Speech |")
      .appendField("Text :");
    this.appendDummyInput()
      .appendField("Print text :")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "show");
    this.appendDummyInput()
      .appendField("Rate :")
      .appendField(new Blockly.FieldNumber(170, 100, 300), "rate");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#003658");
    this.setTooltip("Text to Speech using Google's Generic API.");
    this.setHelpUrl("");
  },
};

Blockly.Python["text_to_speech"] = function (block) {
  var value_audio = Blockly.Python.valueToCode(
    block,
    "audio",
    Blockly.Python.ORDER_ATOMIC
  );
  var checkbox_show = block.getFieldValue("show") == "TRUE";
  var number_rate = block.getFieldValue("rate");
  // TODO: Assemble Python into code variable.
  var code = `ap.text_to_speech(audio=${value_audio}, show=${capitalize(
    checkbox_show.toString()
  )}, rate=${number_rate})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["speech_to_text"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./images/crown.png", 30, 30, {
          alt: "*",
          flipRtl: "FALSE",
        })
      )
      .appendField("Speech To Text");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#003658");
    this.setTooltip("Speech to Text using Google's Generic API.");
    this.setHelpUrl("");
  },
};

Blockly.Python["speech_to_text"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "ap.speech_to_text()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["pause_program"] = {
  init: function () {
    this.appendValueInput("seconds")
      .setCheck("Number")
      .appendField("Pause Program | Seconds :");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#003658");
    this.setTooltip("Stops the program for given seconds");
    this.setHelpUrl("");
  },
};

Blockly.Python["pause_program"] = function (block) {
  var value_seconds = Blockly.Python.valueToCode(
    block,
    "seconds",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.pause_program(seconds=${value_seconds})\n`;
  return code;
};

Blockly.Blocks["download_this_file"] = {
  init: function () {
    this.appendValueInput("url")
      .appendField(
        new Blockly.FieldImage("./images/crown.png", 30, 30, {
          alt: "*",
          flipRtl: "FALSE",
        })
      )
      .setCheck("String")
      .appendField("Download File | URL :");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#003658");
    this.setTooltip(
      "Downloads a given url file to BOT output folder or Browser's Download folder"
    );
    this.setHelpUrl("");
  },
};

Blockly.Python["download_this_file"] = function (block) {
  var value_url = Blockly.Python.valueToCode(
    block,
    "url",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.download_this_file(url=${value_url})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["get_path"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Filepath :")
      .appendField(new Blockly.FieldTextInput("default"), "filename")
      .appendField(
        new Blockly.FieldImage(
          "./images/upload_white.png",
          20,
          20,
          "*",
          function () {
            window.chrome.webview.postMessage({
              type: "set_field_name",
              message: "get_filepath",
              field_id: "filename",
              block_id: this.sourceBlock_.id,
            });
          }
        )
      );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#003658");
    this.setTooltip("Converts the string to OS Path.");
    this.setHelpUrl("");
  },
};

Blockly.Python["get_path"] = function (block) {
  Blockly.Python.definitions_["Path"] = "from pathlib import Path";
  var text_filename = block.getFieldValue("filename");
  // TODO: Assemble Python into code variable.
  var code = `Path(r'${text_filename}')`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["status_data"] = {
  init: function () {
    this.appendValueInput("status_variable")
      .setCheck(null)
      .appendField("Status ||");
    this.appendValueInput("data_variable")
      .setCheck(null)
      .appendField("Data ||");
    this.appendValueInput("function_variable").setCheck(null).appendField("=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["status_data"] = function (block) {
  var value_status = Blockly.Python.valueToCode(
    block,
    "status_variable",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_data = Blockly.Python.valueToCode(
    block,
    "data_variable",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_name = Blockly.Python.valueToCode(
    block,
    "function_variable",
    Blockly.Python.ORDER_NONE
  );
  // TODO: Assemble Python into code variable.
  var code = `[ ${value_status}, ${value_data}] = ${value_name}`;
  return code;
};

Blockly.Blocks["status"] = {
  init: function () {
    this.appendValueInput("status_variable")
      .setCheck(null)
      .appendField("Status ||");
    this.appendValueInput("function_variable").setCheck(null).appendField("=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("120");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["status"] = function (block) {
  var value_status_variable = Blockly.Python.valueToCode(
    block,
    "status_variable",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_function_variable = Blockly.Python.valueToCode(
    block,
    "function_variable",
    Blockly.Python.ORDER_NONE
  );
  // TODO: Assemble Python into code variable.
  var code = `[ ${value_status_variable} ] = ${value_function_variable}`;
  return code;
};

Blockly.Blocks["image_to_text"] = {
  init: function () {
    this.appendValueInput("image_path")
      .setCheck(null)
      .appendField("Image to Text |")
      .appendField("Image File");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#003658");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["image_to_text"] = function (block) {
  var value_image_path = Blockly.Python.valueToCode(
    block,
    "image_path",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.image_to_text(img_path=${value_image_path})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['api_request'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("API ||")
      .appendField(new Blockly.FieldDropdown([["GET", "GET"], ["POST", "POST"], ["PUT", "PUT"], ["DELETE", "DELETE"]]), "method");
    this.appendDummyInput()
      .appendField("URL ||")
      .appendField(new Blockly.FieldTextInput("default"), "url");
    this.appendDummyInput()
      .appendField("Headers ||")
      .appendField(new Blockly.FieldTextInput('{"charset": "utf-8", "Content-Type": "application/json"}'), "headers");
    this.appendDummyInput()
      .appendField("Data ||")
      .appendField(new Blockly.FieldTextInput("None"), "data");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python['api_request'] = function (block) {
  var dropdown_method = block.getFieldValue('method');
  var text_url = block.getFieldValue('url');
  var text_headers = block.getFieldValue('headers');
  var text_data = block.getFieldValue('data');
  // TODO: Assemble Python into code variable.
  var code = `api_request(url='${text_url}', method=${dropdown_method}, headers= ${text_headers}, body=${text_data})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
