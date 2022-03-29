Blockly.Blocks["window_show_desktop"] = {
  init: function () {
    this.appendDummyInput().appendField("Windows | Show Desktop");
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#A5805B");
    this.setTooltip("Minimizes all the applications and shows Desktop.");
    this.setHelpUrl("");
  },
};

Blockly.Python["window_show_desktop"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "ap.window_show_desktop()\n";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["window_get_all_opened_titles_windows"] = {
  init: function () {
    this.appendDummyInput().appendField(
      "Windows | Get Titles of All Opened Windows"
    );
    this.setOutput(true, "Array");
    this.setColour("#A5805B");
    this.setTooltip("Gives the title of all the existing (open) windows.");
    this.setHelpUrl("");
  },
};

Blockly.Python["window_get_all_opened_titles_windows"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "ap.window_get_all_opened_titles_windows()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["window_activate_and_maximize_windows"] = {
  init: function () {
    this.appendValueInput("windowName")
      .setCheck("String")
      .appendField("Windows Activate and Maximize |")
      .appendField("Window Name :");
    this.appendDummyInput();
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#A5805B");
    this.setTooltip("Activates and maximizes the desired window.");
    this.setHelpUrl("");
  },
};

Blockly.Python["window_activate_and_maximize_windows"] = function (block) {
  var value_windowname = Blockly.Python.valueToCode(
    block,
    "windowName",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.window_activate_and_maximize_windows(windowName=${value_windowname})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["window_minimize_windows"] = {
  init: function () {
    this.appendValueInput("windowName")
      .setCheck("String")
      .appendField("Windows Minimize |")
      .appendField("Window Name :");
    this.appendDummyInput();
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#A5805B");
    this.setTooltip("Activates and minimizes the desired window.");
    this.setHelpUrl("");
  },
};

Blockly.Python["window_minimize_windows"] = function (block) {
  var value_windowname = Blockly.Python.valueToCode(
    block,
    "windowName",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.window_minimize_windows(windowName=${value_windowname})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["window_close_windows"] = {
  init: function () {
    this.appendValueInput("windowName")
      .setCheck("String")
      .appendField("Windows Close Window |")
      .appendField("Window Name :");
    this.appendDummyInput();
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#A5805B");
    this.setTooltip("Close the desired window.");
    this.setHelpUrl("");
  },
};

Blockly.Python["window_close_windows"] = function (block) {
  var value_windowname = Blockly.Python.valueToCode(
    block,
    "windowName",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.window_close_windows(windowName=${value_windowname})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["launch_any_exe_bat_application"] = {
  init: function () {
    this.appendValueInput("windowName")
      .setCheck("String")
      .appendField("Windows Launch App |")
      .appendField("Path :");
    this.appendDummyInput();
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#A5805B");
    this.setTooltip("Launches any exe or batch file or excel file etc.");
    this.setHelpUrl("");
  },
};

Blockly.Python["launch_any_exe_bat_application"] = function (block) {
  var value_windowname = Blockly.Python.valueToCode(
    block,
    "windowName",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.windows_launch_app(pathOfExeFile=${value_windowname})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["window_show_desktop"] = {
  init: function () {
    this.appendDummyInput().appendField("Show Desktop");
    this.setOutput(true, null);
    this.setColour("#A5805B");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["window_get_active_window"] = {
  init: function () {
    this.appendDummyInput().appendField("Get title of Active Window");
    this.setOutput(true, null);
    this.setColour("#A5805B");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["window_restore_windows"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("Restore Window | Window Name:")
      .appendField("");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#A5805B");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Python["window_show_desktop"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "ap.windows_show_desktop()\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["window_get_active_window"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = `ap.window_get_active_window()\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["window_restore_windows"] = function (block) {
  var value_name = Blockly.Python.valueToCode(
    block,
    "NAME",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.window_restore_windows(windowName=${value_name})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
