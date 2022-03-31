Blockly.Blocks["string_extract_only_alphabets"] = {
  init: function () {
    this.appendValueInput("inputString")
      .setCheck("String")
      .appendField("Extract Only Alphabets");
    this.setOutput(true, "String");
    this.setColour("#025451");
    this.setTooltip("Returns only alphabets from given input string");
    this.setHelpUrl("");
  },
};

Blockly.Python["string_extract_only_alphabets"] = function (block) {
  var value_inputstring = Blockly.Python.valueToCode(
    block,
    "inputString",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.string_extract_only_alphabets(inputString=${value_inputstring})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["string_extract_only_numbers"] = {
  init: function () {
    this.appendValueInput("inputString")
      .setCheck("String")
      .appendField("Extract Only Numbers");
    this.setOutput(true, "String");
    this.setColour("#025451");
    this.setTooltip("Returns only numbers from given input string");
    this.setHelpUrl("");
  },
};

Blockly.Python["string_extract_only_numbers"] = function (block) {
  var value_inputstring = Blockly.Python.valueToCode(
    block,
    "inputString",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.string_extract_only_numbers(inputString=${value_inputstring})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["string_remove_special_characters"] = {
  init: function () {
    this.appendValueInput("inputStr")
      .setCheck("String")
      .appendField("Remove Special Characters");
    this.setOutput(true, "String");
    this.setColour("#025451");
    this.setTooltip("Removes all the special character.");
    this.setHelpUrl("");
  },
};

Blockly.Python["string_remove_special_characters"] = function (block) {
  var value_inputstring = Blockly.Python.valueToCode(
    block,
    "inputStr",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.string_remove_special_characters(inputStr=${value_inputstring})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
