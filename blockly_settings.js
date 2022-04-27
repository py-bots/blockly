
toolbox_xml2 =
    `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
<category name="ARTWORKS" colour="#5ba58c">
  <block type="controls_if">
    <mutation else="1"></mutation>
    <value name="IF0">
      <block type="logic_compare">
        <field name="OP">EQ</field>
        <value name="A">
          <block type="variables_get">
            <field name="VAR" id=":ulA-E6LLi-c7ikn!(%">STATUS</field>
          </block>
        </value>
        <value name="B">
          <block type="logic_boolean">
            <field name="BOOL">TRUE</field>
          </block>
        </value>
      </block>
    </value>
    <statement name="DO0">
      <block type="print_ap">
        <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field>
      </block>
    </statement>
    <statement name="ELSE">
      <block type="print_ap">
        <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field>
      </block>
    </statement>
  </block>
  <block type="print_ap">
    <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field>
  </block>
  <block type="art_simple_effects">
    <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field>
    <value name="user_input_img_path">
      <block type="text">
        <field name="TEXT"></field>
      </block>
    </value>
    <value name="name_required_on_image">
      <block type="text">
        <field name="TEXT"></field>
      </block>
    </value>
    <value name="output_folder">
      <block type="text">
        <field name="TEXT"></field>
      </block>
    </value>
  </block>
  <block type="art_neural_effects">
    <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field>
    <value name="input_image_folder_path">
      <block type="text">
        <field name="TEXT"></field>
      </block>
    </value>
    <value name="style_image_folder_path">
      <block type="text">
        <field name="TEXT"></field>
      </block>
    </value>
    <value name="output_image_folder_path">
      <block type="text">
        <field name="TEXT"></field>
      </block>
    </value>
  </block>
</category>
<category name="Variables" colour="#a55b80" custom="VARIABLE"></category>
</xml>
`

Darker = Blockly.Theme.defineTheme("Darker", {
    base: Blockly.Themes.Zelos,
    // base: Blockly.Themes.Classic,

    // Set default font colours


    fontStyle: {
        family: "Roboto, serif",
        // weight: "bold",
        size: 12,
    },

    // blockStyles: {
    //   logic_blocks: {
    //     colourPrimary: LOGIC_CATEGORY_COLOUR,
    //   },
    //   loop_blocks: {
    //     colourPrimary: LOOP_CATEGORY_COLOUR,
    //   },
    //   text_blocks: {
    //     colourPrimary: TEXT_CATEGORY_COLOUR,
    //   },
    //   math_blocks: {
    //     colourPrimary: MATH_CATEGORY_COLOUR,
    //   },
    //   list_blocks: {
    //     colourPrimary: LIST_CATEGORY_COLOUR,
    //   },
    //   colour_blocks: {
    //     colourPrimary: COLOR_CATEGORY_COLOUR,
    //   },

    //   variable_blocks: {
    //     colourPrimary: VARIABLE_CATEGORY_COLOUR,
    //   },
    //   procedure_blocks: {
    //     colourPrimary: PROCEDURE_CATEGORY_COLOUR,
    //   },
    // },

    componentStyles: {
        workspaceBackgroundColour: "#0C0C32",
        toolboxBackgroundColour: "#0C0C32",
        toolboxForegroundColour: "#fff",
        flyoutBackgroundColour: "#0C0C32",
        flyoutForegroundColour: "#0C0C32",
        flyoutOpacity: 0.6,
        scrollbarColour: "#229DDB",
        scrollbarOpacity: 0.2,
        insertionMarkerColour: "#fff",
        insertionMarkerOpacity: 0.3,
        cursorColour: "#0C0C32",
        // blackBackground: "#333",
    },
}).setBlockStyle("hat_blocks", {
    colourPrimary: "#1551A4", colourSecondary: "#4280D7", colourTertiary: "#3373CC",
    hat: "cap",
}).setStartHats(startHats);