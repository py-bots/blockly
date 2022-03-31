Blockly.Blocks["mouse_click"] = {
  init: function () {
    this.appendDummyInput().appendField("Mouse Click |");
    this.appendValueInput("x").setCheck("Number").appendField("x-pos :");
    this.appendValueInput("y").setCheck("Number").appendField("y-pos :");
    this.appendDummyInput()
      .appendField("Button")
      .appendField(
        new Blockly.FieldDropdown([
          ["Left", "left"],
          ["Right", "right"],
        ]),
        "left_or_right"
      )
      .appendField("Clicks:")
      .appendField(new Blockly.FieldNumber(1, 1, 3), "no_of_clicks")
      .appendField("Move")
      .appendField(
        new Blockly.FieldDropdown([
          ["Absolute", "abs"],
          ["Relative", "rel"],
        ]),
        "type_of_movement"
      );
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#011830");
    this.setTooltip(
      "Clicks at the given X Y Co-ordinates on the screen using single / double / triple click(s). Default clicks on current position."
    );
    this.setHelpUrl("");
  },
};

Blockly.Python["mouse_click"] = function (block) {
  var value_x = Blockly.Python.valueToCode(
    block,
    "x",
    Blockly.Python.ORDER_NONE
  );
  var value_y = Blockly.Python.valueToCode(
    block,
    "y",
    Blockly.Python.ORDER_NONE
  );
  var dropdown_left_or_right = block.getFieldValue("left_or_right");
  var number_no_of_clicks = block.getFieldValue("no_of_clicks");
  var dropdown_type_of_movement = block.getFieldValue("type_of_movement");
  // TODO: Assemble Python into code variable.
  var code = `ap.mouse_click(x=${value_x}, y=${value_y}, left_or_right='${dropdown_left_or_right}', no_of_clicks=${number_no_of_clicks}, type_of_movement='${dropdown_type_of_movement}')\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["mouse_move"] = {
  init: function () {
    this.appendDummyInput().appendField("Mouse Move |");
    this.appendValueInput("x").setCheck("Number").appendField("x-pos :");
    this.appendValueInput("y").setCheck("Number").appendField("y-pos :");
    this.appendDummyInput()
      .appendField("Move")
      .appendField(
        new Blockly.FieldDropdown([
          ["Absolute", "abs"],
          ["Relative", "rel"],
        ]),
        "type_of_movement"
      );
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#011830");
    this.setTooltip("Moves the cursor to the given X Y Co-ordinates.");
    this.setHelpUrl("");
  },
};

Blockly.Python["mouse_move"] = function (block) {
  var value_x = Blockly.Python.valueToCode(
    block,
    "x",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_y = Blockly.Python.valueToCode(
    block,
    "y",
    Blockly.Python.ORDER_ATOMIC
  );
  var dropdown_type_of_movement = block.getFieldValue("type_of_movement");
  // TODO: Assemble Python into code variable.
  var code = `ap.mouse_move(x=${value_x}, y=${value_y}, type_of_movement='${dropdown_type_of_movement}')\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["mouse_drag_from_to"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./images/crown.png", 30, 30, {
          alt: "*",
          flipRtl: "FALSE",
        })
      )
      .appendField("Mouse Drag |")
      .appendField("      | From |");
    this.appendValueInput("x1").setCheck("Number").appendField("x-pos :");
    this.appendValueInput("y1").setCheck("Number").appendField("y-pos :");
    this.appendValueInput("x2")
      .setCheck("Number")
      .appendField("      |")
      .appendField("To  |")
      .appendField("x-pos :");
    this.appendValueInput("y2").setCheck("Number").appendField("y-pos :");
    this.appendDummyInput()
      .appendField("Delay :")
      .appendField(new Blockly.FieldNumber(0.5, 0.5), "delay")
      .appendField("s");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    this.setOutput(true, "Array");
    // this.setNextStatement(true, null);
    this.setColour("#011830");
    this.setTooltip(
      "Clicks and drags from x1 y1 co-ordinates to x2 y2 Co-ordinates on the screen"
    );
    this.setHelpUrl("");
  },
};

Blockly.Python["mouse_drag_from_to"] = function (block) {
  var value_x1 = Blockly.Python.valueToCode(
    block,
    "x1",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_y1 = Blockly.Python.valueToCode(
    block,
    "y1",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_x2 = Blockly.Python.valueToCode(
    block,
    "x2",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_y2 = Blockly.Python.valueToCode(
    block,
    "y2",
    Blockly.Python.ORDER_ATOMIC
  );
  var number_delay = block.getFieldValue("delay");
  // TODO: Assemble Python into code variable.
  var code = `ap.mouse_drag_from_to(x1=${value_x1}, y1=${value_y1}, x2=${value_x2}, y2=${value_y2}, delay=${number_delay})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["mouse_search_snip_return_coordinates_x_y"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./images/crown.png", 30, 30, {
          alt: "*",
          flipRtl: "FALSE",
        })
      )
      .appendField("Get Image Position  |");
    this.appendValueInput("img").setCheck("String").appendField("Image Path :");
    this.appendDummyInput()
      .appendField("Wait :")
      .appendField(new Blockly.FieldNumber(5, 5, 600), "wait")
      .appendField("s");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#011830");
    this.setTooltip(
      "Searches the given image on the screen and returns its center of X Y co-ordinates."
    );
    this.setHelpUrl("");
  },
};

Blockly.Python["mouse_search_snip_return_coordinates_x_y"] = function (block) {
  var value_img = Blockly.Python.valueToCode(
    block,
    "img",
    Blockly.Python.ORDER_ATOMIC
  );
  var number_wait = block.getFieldValue("wait");
  // TODO: Assemble Python into code variable.
  var code = `ap.mouse_search_snip_return_coordinates_x_y(img=${value_img}, wait=${number_wait})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
