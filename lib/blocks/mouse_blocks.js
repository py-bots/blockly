Blockly.Blocks['print_ap'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("      PRINT")
            .appendField(new Blockly.FieldVariable("STATUS"), "status");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mouse_click'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Mouse Click")
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("x")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X Pos")
            .appendField("=");
        this.appendValueInput("y")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y Pos")
            .appendField("=");
        this.appendValueInput("no_of_clicks")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("No of Clicks")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Button")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "left_or_right");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Type =")
            .appendField(new Blockly.FieldDropdown([["Absolute", "abs"], ["Relative", "rel"]]), "type_of_movement");
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

Blockly.Blocks['mouse_move'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Mouse Move")
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("x")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X Pos")
            .appendField("=");
        this.appendValueInput("y")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y Pos")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Type =")
            .appendField(new Blockly.FieldDropdown([["Absolute", "abs"], ["Relative", "rel"]]), "type_of_movement");
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

Blockly.Blocks['mouse_drag_from_to'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Mouse Drag")
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("x1")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Start X Pos")
            .appendField("=");
        this.appendValueInput("y1")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Start Y Pos")
            .appendField("=");
        this.appendValueInput("x2")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Final X Pos")
            .appendField("=");
        this.appendValueInput("y2")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Final Y Pos")
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

Blockly.Blocks['mouse_search_snip_return_coordinates_x_y'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Image Position")
            .appendField(new Blockly.FieldImage("https://raw.githubusercontent.com/py-bots/media-pyles/main/autopylot/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("img")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Image Path")
            .appendField("=");
        this.appendValueInput("wait")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Wait (If not found)")
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
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("] ");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("[x,y]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};