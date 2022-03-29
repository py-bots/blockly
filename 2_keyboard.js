Blockly.Python["key_press"] = function (block) {
  var dropdown_key_1 = block.getFieldValue("key_1");
  var dropdown_key_2 = block.getFieldValue("key_2");
  var dropdown_key_3 = block.getFieldValue("key_3");
  var value_write_to_window = Blockly.Python.valueToCode(
    block,
    "write_to_window",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.key_press(key_1=${dropdown_key_1}, key_2=${dropdown_key_2}, key_3=${dropdown_key_3}, write_to_window=${value_write_to_window})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["key_press"] = {
  init: function () {
    this.appendDummyInput().appendField("Keyboard Press |");
    this.appendDummyInput()
      .appendField("Key 1 :")
      .appendField(
        new Blockly.FieldDropdown([
          ["", "''"],
          ["WINDOWS", "'{RWIN}'"],
          ["ALT", "'{VK_MENU}'"],
          ["BACKSPACE", "'{BACKSPACE}'"],
          ["CONTROL", "'{VK_CONTROL}'"],
          ["DELETE", "'{DELETE}'"],
          ["SHIFT", "'{VK_SHIFT}'"],
          ["SPACE", "'{SPACE}'"],
          ["TAB", "'{TAB}'"],
          ["HOME", "'{HOME}'"],
          ["INSERT", "'{INSERT}'"],
          ["END", "'{END}'"],
          ["ENTER", "'{ENTER}'"],
          ["ESCAPE", "'{VK_ESCAPE}'"],
          ["PAGE_DOWN", "'{PGDN}'"],
          ["PAGE_UP", "'{PGUP}'"],
          ["a", "'a'"],
          ["b", "'b'"],
          ["c", "'c'"],
          ["d", "'d'"],
          ["e", "'e'"],
          ["f", "'f'"],
          ["g", "'g'"],
          ["h", "'h'"],
          ["i", "'i'"],
          ["j", "'j'"],
          ["k", "'k'"],
          ["l", "'l'"],
          ["m", "'m'"],
          ["n", "'n'"],
          ["o", "'o'"],
          ["p", "'p'"],
          ["q", "'q'"],
          ["r", "'r'"],
          ["s", "'s'"],
          ["t", "'t'"],
          ["u", "'u'"],
          ["v", "'v'"],
          ["w", "'w'"],
          ["x", "'x'"],
          ["y", "'y'"],
          ["z", "'z'"],
          ["A", "'A'"],
          ["B", "'B'"],
          ["C", "'C'"],
          ["D", "'D'"],
          ["E", "'E'"],
          ["F", "'F'"],
          ["G", "'G'"],
          ["H", "'H'"],
          ["I", "'I'"],
          ["J", "'J'"],
          ["K", "'K'"],
          ["L", "'L'"],
          ["M", "'M'"],
          ["N", "'N'"],
          ["O", "'O'"],
          ["P", "'P'"],
          ["Q", "'Q'"],
          ["R", "'R'"],
          ["S", "'S'"],
          ["T", "'T'"],
          ["U", "'U'"],
          ["V", "'V'"],
          ["W", "'W'"],
          ["X", "'X'"],
          ["Y", "'Y'"],
          ["Z", "'Z'"],
          ["1", "'1'"],
          ["2", "'2'"],
          ["3", "'3'"],
          ["4", "'4'"],
          ["5", "'5'"],
          ["6", "'6'"],
          ["7", "'7'"],
          ["8", "'8'"],
          ["9", "'9'"],
          ["0", "'0'"],
          ["ADD", "'{VK_ADD}'"],
          ["DIVIDE", "'{VK_DIVIDE}'"],
          ["EQUALS", "'{VK_RETURN}'"],
          ["MULTIPLY", "'{VK_MULTIPLY}'"],
          ["SUBTRACT", "'{VK_SUBTRACT}'"],
          ["ARROW_DOWN", "'{VK_DOWN}'"],
          ["ARROW_LEFT", "'{LEFT}'"],
          ["ARROW_RIGHT", "'{RIGHT}'"],
          ["ARROW_UP", "'{UP}'"],
          ["F1", "'{F1}'"],
          ["F2", "'{F2}'"],
          ["F3", "'{F3}'"],
          ["F4", "'{F4}'"],
          ["F5", "'{F5}'"],
          ["F6", "'{F6}'"],
          ["F7", "'{F7}'"],
          ["F8", "'{F8}'"],
          ["F9", "'{F9}'"],
          ["F10", "'{F2}'"],
          ["F11", "'{F11}'"],
          ["F12", "'{F12}'"],

        ]),
        "key_1"
      )
      .appendField("Key 2 :")
      .appendField(
        new Blockly.FieldDropdown([
          ["", "''"],
          ["WINDOWS", "'{RWIN}'"],
          ["ALT", "'{VK_MENU}'"],
          ["BACKSPACE", "'{BACKSPACE}'"],
          ["CONTROL", "'{VK_CONTROL}'"],
          ["DELETE", "'{DELETE}'"],
          ["SHIFT", "'{VK_SHIFT}'"],
          ["SPACE", "'{SPACE}'"],
          ["TAB", "'{TAB}'"],
          ["HOME", "'{HOME}'"],
          ["INSERT", "'{INSERT}'"],
          ["END", "'{END}'"],
          ["ENTER", "'{ENTER}'"],
          ["ESCAPE", "'{VK_ESCAPE}'"],
          ["PAGE_DOWN", "'{PGDN}'"],
          ["PAGE_UP", "'{PGUP}'"],
          ["a", "'a'"],
          ["b", "'b'"],
          ["c", "'c'"],
          ["d", "'d'"],
          ["e", "'e'"],
          ["f", "'f'"],
          ["g", "'g'"],
          ["h", "'h'"],
          ["i", "'i'"],
          ["j", "'j'"],
          ["k", "'k'"],
          ["l", "'l'"],
          ["m", "'m'"],
          ["n", "'n'"],
          ["o", "'o'"],
          ["p", "'p'"],
          ["q", "'q'"],
          ["r", "'r'"],
          ["s", "'s'"],
          ["t", "'t'"],
          ["u", "'u'"],
          ["v", "'v'"],
          ["w", "'w'"],
          ["x", "'x'"],
          ["y", "'y'"],
          ["z", "'z'"],
          ["A", "'A'"],
          ["B", "'B'"],
          ["C", "'C'"],
          ["D", "'D'"],
          ["E", "'E'"],
          ["F", "'F'"],
          ["G", "'G'"],
          ["H", "'H'"],
          ["I", "'I'"],
          ["J", "'J'"],
          ["K", "'K'"],
          ["L", "'L'"],
          ["M", "'M'"],
          ["N", "'N'"],
          ["O", "'O'"],
          ["P", "'P'"],
          ["Q", "'Q'"],
          ["R", "'R'"],
          ["S", "'S'"],
          ["T", "'T'"],
          ["U", "'U'"],
          ["V", "'V'"],
          ["W", "'W'"],
          ["X", "'X'"],
          ["Y", "'Y'"],
          ["Z", "'Z'"],
          ["1", "'1'"],
          ["2", "'2'"],
          ["3", "'3'"],
          ["4", "'4'"],
          ["5", "'5'"],
          ["6", "'6'"],
          ["7", "'7'"],
          ["8", "'8'"],
          ["9", "'9'"],
          ["0", "'0'"],
          ["ADD", "'{VK_ADD}'"],
          ["DIVIDE", "'{VK_DIVIDE}'"],
          ["EQUALS", "'{VK_RETURN}'"],
          ["MULTIPLY", "'{VK_MULTIPLY}'"],
          ["SUBTRACT", "'{VK_SUBTRACT}'"],
          ["ARROW_DOWN", "'{VK_DOWN}'"],
          ["ARROW_LEFT", "'{LEFT}'"],
          ["ARROW_RIGHT", "'{RIGHT}'"],
          ["ARROW_UP", "'{UP}'"],
          ["F1", "'{F1}'"],
          ["F2", "'{F2}'"],
          ["F3", "'{F3}'"],
          ["F4", "'{F4}'"],
          ["F5", "'{F5}'"],
          ["F6", "'{F6}'"],
          ["F7", "'{F7}'"],
          ["F8", "'{F8}'"],
          ["F9", "'{F9}'"],
          ["F10", "'{F2}'"],
          ["F11", "'{F11}'"],
          ["F12", "'{F12}'"],
        ]),
        "key_2"
      )
      .appendField("Key 3 :")
      .appendField(
        new Blockly.FieldDropdown([
          ["", "''"],
          ["WINDOWS", "'{RWIN}'"],
          ["ALT", "'{VK_MENU}'"],
          ["BACKSPACE", "'{BACKSPACE}'"],
          ["CONTROL", "'{VK_CONTROL}'"],
          ["DELETE", "'{DELETE}'"],
          ["SHIFT", "'{VK_SHIFT}'"],
          ["SPACE", "'{SPACE}'"],
          ["TAB", "'{TAB}'"],
          ["HOME", "'{HOME}'"],
          ["INSERT", "'{INSERT}'"],
          ["END", "'{END}'"],
          ["ENTER", "'{ENTER}'"],
          ["ESCAPE", "'{VK_ESCAPE}'"],
          ["PAGE_DOWN", "'{PGDN}'"],
          ["PAGE_UP", "'{PGUP}'"],
          ["a", "'a'"],
          ["b", "'b'"],
          ["c", "'c'"],
          ["d", "'d'"],
          ["e", "'e'"],
          ["f", "'f'"],
          ["g", "'g'"],
          ["h", "'h'"],
          ["i", "'i'"],
          ["j", "'j'"],
          ["k", "'k'"],
          ["l", "'l'"],
          ["m", "'m'"],
          ["n", "'n'"],
          ["o", "'o'"],
          ["p", "'p'"],
          ["q", "'q'"],
          ["r", "'r'"],
          ["s", "'s'"],
          ["t", "'t'"],
          ["u", "'u'"],
          ["v", "'v'"],
          ["w", "'w'"],
          ["x", "'x'"],
          ["y", "'y'"],
          ["z", "'z'"],
          ["A", "'A'"],
          ["B", "'B'"],
          ["C", "'C'"],
          ["D", "'D'"],
          ["E", "'E'"],
          ["F", "'F'"],
          ["G", "'G'"],
          ["H", "'H'"],
          ["I", "'I'"],
          ["J", "'J'"],
          ["K", "'K'"],
          ["L", "'L'"],
          ["M", "'M'"],
          ["N", "'N'"],
          ["O", "'O'"],
          ["P", "'P'"],
          ["Q", "'Q'"],
          ["R", "'R'"],
          ["S", "'S'"],
          ["T", "'T'"],
          ["U", "'U'"],
          ["V", "'V'"],
          ["W", "'W'"],
          ["X", "'X'"],
          ["Y", "'Y'"],
          ["Z", "'Z'"],
          ["1", "'1'"],
          ["2", "'2'"],
          ["3", "'3'"],
          ["4", "'4'"],
          ["5", "'5'"],
          ["6", "'6'"],
          ["7", "'7'"],
          ["8", "'8'"],
          ["9", "'9'"],
          ["0", "'0'"],
          ["ADD", "'{VK_ADD}'"],
          ["DIVIDE", "'{VK_DIVIDE}'"],
          ["EQUALS", "'{VK_RETURN}'"],
          ["MULTIPLY", "'{VK_MULTIPLY}'"],
          ["SUBTRACT", "'{VK_SUBTRACT}'"],
          ["ARROW_DOWN", "'{VK_DOWN}'"],
          ["ARROW_LEFT", "'{LEFT}'"],
          ["ARROW_RIGHT", "'{RIGHT}'"],
          ["ARROW_UP", "'{UP}'"],
          ["F1", "'{F1}'"],
          ["F2", "'{F2}'"],
          ["F3", "'{F3}'"],
          ["F4", "'{F4}'"],
          ["F5", "'{F5}'"],
          ["F6", "'{F6}'"],
          ["F7", "'{F7}'"],
          ["F8", "'{F8}'"],
          ["F9", "'{F9}'"],
          ["F10", "'{F2}'"],
          ["F11", "'{F11}'"],
          ["F12", "'{F12}'"],

        ]),
        "key_3"
      );
    this.appendValueInput("write_to_window")
      .setCheck("String")
      .appendField("Window to write :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#511B73");
    this.setTooltip("Emulates the given keystrokes.");
    this.setHelpUrl("");
  },
};

Blockly.Python["key_write_enter"] = function (block) {
  var value_text_to_write = Blockly.Python.valueToCode(
    block,
    "text_to_write",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_write_to_window = Blockly.Python.valueToCode(
    block,
    "write_to_window",
    Blockly.Python.ORDER_ATOMIC
  );
  var number_delay_after_typing = block.getFieldValue("delay_after_typing");
  var dropdown_key = block.getFieldValue("key");
  // TODO: Assemble Python into code variable.
  var code = `ap.key_write_enter(text_to_write=${value_text_to_write}, write_to_window=${value_write_to_window}, delay_after_typing=${number_delay_after_typing}, key='${dropdown_key}')\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["key_write_enter"] = {
  init: function () {
    this.appendDummyInput().appendField("Keyboard Write |");
    this.appendValueInput("text_to_write")
      .setCheck("String")
      .appendField("Text :");
    this.appendValueInput("write_to_window")
      .setCheck("String")
      .appendField("Window to write :");
    this.appendDummyInput()
      .appendField("Delay :")
      .appendField(new Blockly.FieldNumber(0, 1), "delay_after_typing")
      .appendField("Last :")
      .appendField(
        new Blockly.FieldDropdown([
          ["ENTER", "e"],
          ["TAB", "t"],
        ]),
        "key"
      );
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#511B73");
    this.setTooltip("Writes/Types the given text.");
    this.setHelpUrl("");
  },
};

Blockly.Python["key_hit_enter"] = function (block) {
  var value_write_to_window = Blockly.Python.valueToCode(
    block,
    "write_to_window",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.key_hit_enter(write_to_window=${value_write_to_window})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["key_hit_enter"] = {
  init: function () {
    this.appendDummyInput().appendField("Keyboard hit ENTER |");
    this.appendValueInput("write_to_window")
      .setCheck("String")
      .appendField("Window to write :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, "Array");
    this.setColour("#511B73");
    this.setTooltip("Enter key will be pressed once.");
    this.setHelpUrl("");
  },
};
