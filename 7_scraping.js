Blockly.Blocks["scrape_save_contents_to_notepad"] = {
  init: function () {
    this.appendValueInput("folderPathToSaveTheNotepad")
      .appendField(
        new Blockly.FieldImage("./images/crown.png", 30, 30, {
          alt: "*",
          flipRtl: "FALSE",
        })
      )
      .setCheck("String")
      .appendField("Scrape Contents to Notepad |")
      .appendField("Folder Path :");
    this.appendValueInput("X").setCheck("Number").appendField("X :");
    this.appendValueInput("Y").setCheck("Number").appendField("Y :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, null);
    this.setColour("#730E0E");
    this.setTooltip(
      "Copy pastes all the available text on the screen to notepad and saves it."
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["scrape_get_contents_by_search_copy_paste"] = {
  init: function () {
    this.appendValueInput("highlightText")
      .setCheck("String")
      .appendField("Scrape Contents Copy Paste |")
      .appendField("Highlight Text :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, null);
    this.setColour("#730E0E");
    this.setTooltip(
      "Gets the focus on the screen by searching given text using crtl+f and performs copy/paste of all data. Useful in Citrix applications."
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["screen_clear_search"] = {
  init: function () {
    this.appendValueInput("highlightText")
      .setCheck("Number")
      .appendField("Screen clear search |")
      .appendField("Delay :");
    this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, null);
    this.setColour("#730E0E");
    this.setTooltip("Clears previously found text (crtl+f highlight)");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["search_highlight_tab_enter_open"] = {
  init: function () {
    this.appendValueInput("searchText")
      .setCheck("String")
      .appendField("Search text Tab Enter Open |")
      .appendField("Text :");
    this.appendDummyInput()
      .appendField("Hit Enter :")
      .appendField(
        new Blockly.FieldDropdown([
          ["Yes", "Yes"],
          ["No", "No"],
        ]),
        "hitEnterKey"
      );
    this.appendDummyInput()
      .appendField("Shift Tab:")
      .appendField(
        new Blockly.FieldDropdown([
          ["Yes", "Yes"],
          ["No", "No"],
        ]),
        "shift_tab"
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#730E0E");
    this.setTooltip(
      "Searches for a text on screen using crtl+f and hits enter. This function is useful in Citrix environment"
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["find_text_on_screen"] = {
  init: function () {
    this.appendValueInput("searchText")
      .appendField(
        new Blockly.FieldImage("./images/crown.png", 30, 30, {
          alt: "*",
          flipRtl: "FALSE",
        })
      )
      .setCheck("String")
      .appendField("Find Text on Screen |")
      .appendField("Text :");
    this.appendValueInput("delay").setCheck("Number").appendField("Delay :");
    this.appendValueInput("occurance")
      .setCheck("Number")
      .appendField("Occurance :");
    this.appendDummyInput()
      .appendField("Clear Search :")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "isSearchToBeCleared");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#730E0E");
    this.setTooltip(
      "Searches for a text on screen using crtl+f and hits enter. This function is useful in Citrix environment"
    );
    this.setHelpUrl("");
  },
};

Blockly.Python["scrape_save_contents_to_notepad"] = function (block) {
  var value_folderpathtosavethenotepad = Blockly.Python.valueToCode(
    block,
    "folderPathToSaveTheNotepad",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_x = Blockly.Python.valueToCode(
    block,
    "X",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_y = Blockly.Python.valueToCode(
    block,
    "Y",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.scrape_save_contents_to_notepad(folderPathToSaveTheNotepad=${value_folderpathtosavethenotepad}, X=${value_x}, Y=${value_y})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["scrape_get_contents_by_search_copy_paste"] = function (block) {
  var value_highlighttext = Blockly.Python.valueToCode(
    block,
    "highlightText",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.scrape_get_contents_by_search_copy_paste(highlightText=${value_highlighttext})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["screen_clear_search"] = function (block) {
  var value_highlighttext = Blockly.Python.valueToCode(
    block,
    "highlightText",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `ap.screen_clear_search(delay=${value_highlighttext})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["search_highlight_tab_enter_open"] = function (block) {
  var value_searchtext = Blockly.Python.valueToCode(
    block,
    "searchText",
    Blockly.Python.ORDER_ATOMIC
  );
  var dropdown_hitenterkey = block.getFieldValue("hitEnterKey");
  var dropdown_shift_tab = block.getFieldValue("shift_tab");
  // TODO: Assemble Python into code variable.
  var code = `ap.search_highlight_tab_enter_open(searchText=${value_searchtext}, hitEnterKey='${dropdown_hitenterkey}', shift_tab='${dropdown_shift_tab}')\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["find_text_on_screen"] = function (block) {
  var value_searchtext = Blockly.Python.valueToCode(
    block,
    "searchText",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_delay = Blockly.Python.valueToCode(
    block,
    "delay",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_occurance = Blockly.Python.valueToCode(
    block,
    "occurance",
    Blockly.Python.ORDER_ATOMIC
  );
  var checkbox_issearchtobecleared =
    block.getFieldValue("isSearchToBeCleared") == "TRUE";
  // TODO: Assemble Python into code variable.
  var code = `ap.find_text_on_screen(searchText=${value_searchtext}, delay=${value_delay}, occurance=${value_occurance}, isSearchToBeCleared=${capitalize(
    checkbox_issearchtobecleared.toString()
  )})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};
