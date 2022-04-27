Blockly.Blocks['key_press'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Press Keys")
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Key 1")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["", "''"],
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
            ["F12", "'{F12}'"]]), "key_1");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Key 1")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["", "''"],
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
            ["F12", "'{F12}'"]]), "key_2");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Key 1")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["", "''"],
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
            ["F12", "'{F12}'"]]), "key_3");
        this.appendValueInput("write_to_window")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Window Name")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['key_write_enter'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Write Text")
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("text_to_write")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Text")
            .appendField("=");
        this.appendValueInput("write_to_window")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Window Name")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("At End")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["Enter", "e"], ["Tab", "t"]]), "key");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['key_hit_enter'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Press Enter")
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("write_to_window")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Window Name")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};