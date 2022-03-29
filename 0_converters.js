Blockly.Blocks["convert_to_string"] = {
  init: function () {
    this.appendValueInput("value").setCheck(null).appendField("str  (");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#0C00B8");
    this.setTooltip("String Converter Python.");
    this.setHelpUrl("");
  },
};

Blockly.Python["convert_to_string"] = function (block) {
  var value_value = Blockly.Python.valueToCode(
    block,
    "value",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `str(${value_value})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["convert_to_int"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(["Number", "Boolean"])
      .appendField("int  (");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#0C00B8");
    this.setTooltip("Interger Converter Python.");
    this.setHelpUrl("");
  },
};

Blockly.Python["convert_to_int"] = function (block) {
  var value_value = Blockly.Python.valueToCode(
    block,
    "value",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `int(${value_value})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["convert_to_float"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(["Number", "Boolean"])
      .appendField("float  (");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#0C00B8");
    this.setTooltip("Float Converter Python.");
    this.setHelpUrl("");
  },
};

Blockly.Python["convert_to_float"] = function (block) {
  var value_value = Blockly.Python.valueToCode(
    block,
    "value",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `float(${value_value})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["convert_to_list"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(["Array", "String"])
      .appendField("list  (");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#0C00B8");
    this.setTooltip("List Converter Python.");
    this.setHelpUrl("");
  },
};

Blockly.Python["convert_to_list"] = function (block) {
  var value_value = Blockly.Python.valueToCode(
    block,
    "value",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `list(${value_value})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["convert_to_tuple"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(["String", "Array"])
      .appendField("tuple  (");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#0C00B8");
    this.setTooltip("Tuple Converter Python.");
    this.setHelpUrl("");
  },
};

Blockly.Python["convert_to_tuple"] = function (block) {
  var value_value = Blockly.Python.valueToCode(
    block,
    "value",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `tuple(${value_value})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["convert_to_set"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(["String", "Array"])
      .appendField("set  (");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#0C00B8");
    this.setTooltip("Set Converter Python.");
    this.setHelpUrl("");
  },
};

Blockly.Python["convert_to_set"] = function (block) {
  var value_value = Blockly.Python.valueToCode(
    block,
    "value",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `set(${value_value})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
