PYTHON_CATEGORY_COLOUR = "#FDB827";
PYTHON_CATEGORY_ICON = "pythonIcon lab la-python";

LOGIC_CATEGORY_COLOUR = "#52057B";
LOGIC_CATEGORY_ICON = "customIcon las la-arrows-alt";

LOOP_CATEGORY_COLOUR = "#03045E";
LOOP_CATEGORY_ICON = "customIcon las la-recycle";

TEXT_CATEGORY_COLOUR = "#1E5128";
TEXT_CATEGORY_ICON = "customIcon las la-spell-check";

LIST_CATEGORY_COLOUR = "#800480";
LIST_CATEGORY_ICON = "customIcon las la-list";

VARIABLE_CATEGORY_COLOUR = "#A05344";
VARIABLE_CATEGORY_ICON = "customIcon las la-at";

MATH_CATEGORY_COLOUR = "#4C0027";
MATH_CATEGORY_ICON = "customIcon las la-superscript";

COLOR_CATEGORY_COLOUR = "#153B44";
COLOR_CATEGORY_ICON = "customIcon las la-palette";

PROCEDURE_CATEGORY_COLOUR = "#C62A88";
PROCEDURE_CATEGORY_ICON = "customIcon las la-stream";

CONVERT_CATEGORY_COLOUR = "#0C00B8";
CONVERT_CATEGORY_ICON = "customIcon las la-exchange-alt";

MOUSE_CATEGORY_COLOUR = "#011830";
MOUSE_CATEGORY_ICON = "customIcon las la-mouse";

KEYBOARD_CATEGORY_COLOUR = "#511B73";
KEYBOARD_CATEGORY_ICON = "customIcon las la-keyboard";

EXCEL_CATEGORY_COLOUR = "#12641D";
EXCEL_CATEGORY_ICON = "customIcon las la-file-excel";

WINDOWS_CATEGORY_COLOUR = "#a56e5b";
WINDOWS_CATEGORY_ICON = "customIcon lab la-windows";

CHROME_CATEGORY_COLOUR = "#611BD1";
CHROME_CATEGORY_ICON = "customIcon lab la-chrome";

FOLDER_CATEGORY_COLOUR = "#800080";
FOLDER_CATEGORY_ICON = "customIcon las la-folder";

SCRAPING_CATEGORY_COLOUR = "#730E0E";
SCRAPING_CATEGORY_ICON = "customIcon las la-clipboard-check";

STRING_CATEGORY_COLOUR = "#025451";
STRING_CATEGORY_ICON = "customIcon las la-font";

EXTRAS_CATEGORY_COLOUR = "#003658";
EXTRAS_CATEGORY_ICON = "customIcon las la-tools";

toolbox_xml = `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
<category name="Python" css-icon="${PYTHON_CATEGORY_ICON}" colour="${PYTHON_CATEGORY_COLOUR}">
  
  <category name="Logic" css-icon="${LOGIC_CATEGORY_ICON}" colour="${LOGIC_CATEGORY_COLOUR}">
    <block type="controls_if"></block>
    <block type="logic_compare">
      <field name="OP">EQ</field>
    </block>
    <block type="logic_operation">
      <field name="OP">AND</field>
    </block>
    <block type="logic_negate"></block>
    <block type="logic_boolean">
      <field name="BOOL">TRUE</field>
    </block>
    <block type="logic_null"></block>
    <block type="logic_ternary"></block>
  </category>
  <category name="CONVERT" css-icon="${CONVERT_CATEGORY_ICON}" colour="${CONVERT_CATEGORY_COLOUR}">
  <block type="convert_to_string"></block>
    <block type="convert_to_int"></block>
    <block type="convert_to_float"></block>
    <block type="convert_to_list"></block>
    <block type="convert_to_tuple"></block>
    <block type="convert_to_set"></block>
  </category>
  <category name="Loops" css-icon="${LOOP_CATEGORY_ICON}" colour="${LOOP_CATEGORY_COLOUR}">
    <block type="controls_repeat_ext">
      <value name="TIMES">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="controls_whileUntil">
      <field name="MODE">WHILE</field>
    </block>
    <block type="controls_for">
      <field name="VAR" id="qoJ?{*TfEi0Ih%wOf|]n">i</field>
      <value name="FROM">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
      <value name="BY">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="controls_forEach">
      <field name="VAR" id="t{1q;_Q,8k@xCqy~aed=">j</field>
    </block>
    <block type="controls_flow_statements">
      <field name="FLOW">BREAK</field>
    </block>
  </category>
  <category name="Math" css-icon="${MATH_CATEGORY_ICON}" colour="${MATH_CATEGORY_COLOUR}">
    <block type="math_number">
      <field name="NUM">0</field>
    </block>
    <block type="math_arithmetic">
      <field name="OP">ADD</field>
      <value name="A">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="B">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="math_single">
      <field name="OP">ROOT</field>
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">9</field>
        </shadow>
      </value>
    </block>
    <block type="math_trig">
      <field name="OP">SIN</field>
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">45</field>
        </shadow>
      </value>
    </block>
    <block type="math_constant">
      <field name="CONSTANT">PI</field>
    </block>
    <block type="math_number_property">
      <mutation divisor_input="false"></mutation>
      <field name="PROPERTY">EVEN</field>
      <value name="NUMBER_TO_CHECK">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="math_round">
      <field name="OP">ROUND</field>
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">3.1</field>
        </shadow>
      </value>
    </block>
    <block type="math_on_list">
      <mutation op="SUM"></mutation>
      <field name="OP">SUM</field>
    </block>
    <block type="math_modulo">
      <value name="DIVIDEND">
        <shadow type="math_number">
          <field name="NUM">64</field>
        </shadow>
      </value>
      <value name="DIVISOR">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="math_constrain">
      <value name="VALUE">
        <shadow type="math_number">
          <field name="NUM">50</field>
        </shadow>
      </value>
      <value name="LOW">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="HIGH">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="math_random_int">
      <value name="FROM">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="math_random_float"></block>
  </category>
  <category name="Text" css-icon="${TEXT_CATEGORY_ICON}" colour="${TEXT_CATEGORY_COLOUR}">
    <block type="text">
      <field name="TEXT"></field>
    </block>
    <block type="text_join">
      <mutation items="2"></mutation>
    </block>
    <block type="text_append">
      <field name="VAR" id="nxCmLAMDZttm*0VIwPod">item</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="text_length">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_isEmpty">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="text_indexOf">
      <field name="END">FIRST</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="a7+}Z-ROm?HQm$PLp7j">text</field>
        </block>
      </value>
      <value name="FIND">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_charAt">
      <mutation at="true"></mutation>
      <field name="WHERE">FROM_START</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="a7+}Z-ROm?HQm$PLp7j">text</field>
        </block>
      </value>
    </block>
    <block type="text_getSubstring">
      <mutation at1="true" at2="true"></mutation>
      <field name="WHERE1">FROM_START</field>
      <field name="WHERE2">FROM_START</field>
      <value name="STRING">
        <block type="variables_get">
          <field name="VAR" id="a7+}Z-ROm?HQm$PLp7j">text</field>
        </block>
      </value>
    </block>
    <block type="text_changeCase">
      <field name="CASE">UPPERCASE</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_trim">
      <field name="MODE">BOTH</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_print">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_prompt_ext">
      <mutation type="TEXT"></mutation>
      <field name="TYPE">TEXT</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
  </category>
  <category name="Lists" css-icon="${LIST_CATEGORY_ICON}" colour="${LIST_CATEGORY_COLOUR}">
    <block type="lists_create_with">
      <mutation items="0"></mutation>
    </block>
    <block type="lists_create_with">
      <mutation items="3"></mutation>
    </block>
    <block type="lists_repeat">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">5</field>
        </shadow>
      </value>
    </block>
    <block type="lists_length"></block>
    <block type="lists_isEmpty"></block>
    <block type="lists_indexOf">
      <field name="END">FIRST</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="^NJv4Do)0]:J7ks)PYxU">list</field>
        </block>
      </value>
    </block>
    <block type="lists_getIndex">
      <mutation statement="false" at="true"></mutation>
      <field name="MODE">GET</field>
      <field name="WHERE">FROM_START</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="^NJv4Do)0]:J7ks)PYxU">list</field>
        </block>
      </value>
    </block>
    <block type="lists_setIndex">
      <mutation at="true"></mutation>
      <field name="MODE">SET</field>
      <field name="WHERE">FROM_START</field>
      <value name="LIST">
        <block type="variables_get">
          <field name="VAR" id="^NJv4Do)0]:J7ks)PYxU">list</field>
        </block>
      </value>
    </block>
    <block type="lists_getSublist">
      <mutation at1="true" at2="true"></mutation>
      <field name="WHERE1">FROM_START</field>
      <field name="WHERE2">FROM_START</field>
      <value name="LIST">
        <block type="variables_get">
          <field name="VAR" id="^NJv4Do)0]:J7ks)PYxU">list</field>
        </block>
      </value>
    </block>
    <block type="lists_split">
      <mutation mode="SPLIT"></mutation>
      <field name="MODE">SPLIT</field>
      <value name="DELIM">
        <shadow type="text">
          <field name="TEXT">,</field>
        </shadow>
      </value>
    </block>
    <block type="lists_sort">
      <field name="TYPE">NUMERIC</field>
      <field name="DIRECTION">1</field>
    </block>
  </category>
  <sep></sep>
  <category name="Variables" css-icon="${VARIABLE_CATEGORY_ICON}" colour="${VARIABLE_CATEGORY_COLOUR}" custom="VARIABLE"></category>
  <category name="Functions" css-icon="${PROCEDURE_CATEGORY_ICON}" colour="${PROCEDURE_CATEGORY_COLOUR}" custom="PROCEDURE"></category>
  </category>
  <sep></sep>
  <category name="Mouse" css-icon="${MOUSE_CATEGORY_ICON}" colour="${MOUSE_CATEGORY_COLOUR}">
  <block type="status"> 
  <value name="status_variable"> 
  <block type="variables_get"> 
  <field name="VAR" id="ciu+qP-%pI6-se/HC$!1">status</field> 
  </block> 
  </value> 
  <value name="function_variable"> 
  <block type="mouse_click"> 
  <field name="left_or_right">left</field> 
  <field name="no_of_clicks">1</field> 
  <value name="x"> 
  <block type="math_number"> 
  <field name="NUM">1</field> 
  </block> 
  </value> <value name="y"> <block type="math_number"> <field name="NUM">1</field> </block> </value> </block> </value> </block>
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="ciu+qP-%pI6-se/HC$!1">status</field> </block> </value>  <value name="function_variable"> <block type="mouse_move"> <value name="x"> <block type="math_number"> <field name="NUM">1</field> </block> </value> <value name="y"> <block type="math_number"> <field name="NUM">1</field> </block> </value> </block> </value> </block>
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="ciu+qP-%pI6-se/HC$!1">status</field> </block> </value>  <value name="function_variable"> <block type="mouse_drag_from_to"> <field name="delay">0.5</field> <value name="x1"> <block type="math_number"> <field name="NUM">1</field> </block> </value> <value name="y1"> <block type="math_number"> <field name="NUM">1</field> </block> </value> <value name="x2"> <block type="math_number"> <field name="NUM">10</field> </block> </value> <value name="y2"> <block type="math_number"> <field name="NUM">10</field> </block> </value> </block> </value> </block>  
  <block type="status_data"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="ciu+qP-%pI6-se/HC$!1">status</field> </block> </value> <value name="data_variable"> <block type="variables_get"> <field name="VAR" id="ylq=+26B2bS=xju,/flY">data</field> </block> </value> <value name="function_variable"> <block type="mouse_search_snip_return_coordinates_x_y"> <value name="img"> 
  <block type="get_path" > </block>
  </value> </block> </value> </block>
  </category>
  <category name="Keyboard" css-icon="${KEYBOARD_CATEGORY_ICON}" colour="${KEYBOARD_CATEGORY_COLOUR}">
  <block type="status"> 
  <value name="status_variable"> 
  <block type="variables_get"> 
  <field name="VAR" id="ciu+qP-%pI6-se/HC$!1">status</field> 
  </block> 
  </value> 
  <value name="function_variable"> 
  <block type="key_press"> 
  <value name="write_to_window"> 
  <block type="text"> <field name="TEXT"></field> 
  </block> 
  </value> 
  </block> 
  </value> 
  </block>
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="ciu+qP-%pI6-se/HC$!1">status</field> </block> </value> <value name="function_variable"> <block type="key_write_enter"> <field name="delay_after_typing">1</field> <field name="key">e</field> <value name="text_to_write"> <block type="text"> <field name="TEXT">MyAutoPylot</field> </block> </value> <value name="write_to_window"> <block type="text"> <field name="TEXT"></field> </block> </value> </block> </value> </block>
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="ciu+qP-%pI6-se/HC$!1">status</field> </block> </value> <value name="function_variable"> <block type="key_hit_enter"> <value name="write_to_window"> <block type="text"> <field name="TEXT"></field> </block> </value> </block> </value> </block>
  </category>
  <category name="Excel" css-icon="${EXCEL_CATEGORY_ICON}" colour="${EXCEL_CATEGORY_COLOUR}">

  <block type="excel_create_excel_file_in_given_folder">
      <value name="fullPathToTheFolder">
        <block type="text">
          <field name="TEXT">C:/MyAutoPylot</field>
        </block>
      </value>
      <value name="excelFileName">
        <block type="text">
          <field name="TEXT">Name.xlsx</field>
        </block>
      </value>
      <value name="sheet_name">
        <block type="text">
          <field name="TEXT">Sheet1</field>
        </block>
      </value>
    </block>


    <block type="excel_set_single_cell">
      <value name="excel_path">
        <block type="text">
          <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
        </block>
      </value>
      <value name="sheet_name">
        <block type="text">
          <field name="TEXT">Sheet1</field>
        </block>
      </value>
      <value name="header">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
      <value name="columnName">
        <block type="text">
          <field name="TEXT">Email</field>
        </block>
      </value>
      <value name="cellNumber">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
      <value name="setText">
        <block type="text">
          <field name="TEXT">mayur@pybots.ai</field>
        </block>
      </value>
    </block>


    <block type="excel_get_single_cell">
    <value name="excel_path">
      <block type="text">
        <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
      </block>
    </value>
    <value name="sheet_name">
      <block type="text">
        <field name="TEXT">Sheet1</field>
      </block>
    </value>
    <value name="header">
      <block type="math_number">
        <field name="NUM">0</field>
      </block>
    </value>
    <value name="columnName">
      <block type="text">
        <field name="TEXT">Mobile Number</field>
      </block>
    </value>
    <value name="cellNumber">
      <block type="math_number">
        <field name="NUM">0</field>
      </block>
    </value>
  </block>


  <block type="excel_get_all_header_columns">
  <value name="excel_path">
    <block type="text">
      <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
    </block>
  </value>
  <value name="sheet_name">
    <block type="text">
      <field name="TEXT">Sheet1</field>
    </block>
  </value>
  <value name="header">
    <block type="math_number">
      <field name="NUM">0</field>
    </block>
  </value>
</block>

<block type="excel_get_all_sheet_names">
<value name="excelFilePath">
  <block type="text">
    <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
  </block>
</value>
</block>


<block type="excel_get_row_column_count">
<value name="excel_path">
  <block type="text">
    <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
  </block>
</value>
<value name="sheet_name">
  <block type="text">
    <field name="TEXT">Sheet1</field>
  </block>
</value>
<value name="header">
  <block type="math_number">
    <field name="NUM">0</field>
  </block>
</value>
</block>


<block type="excel_copy_range_from_sheet">
          <value name="excel_path">
            <block type="text">
              <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
            </block>
          </value>
          <value name="sheet_name">
            <block type="text">
              <field name="TEXT">Sheet1</field>
            </block>
          </value>
          <value name="startCol">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="startRow">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="endCol">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="endRow">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
        </block>


    <block type="excel_copy_paste_range_from_to_sheet">
      <value name="excel_path">
        <block type="text">
          <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
        </block>
      </value>
      <value name="sheet_name">
        <block type="text">
          <field name="TEXT">Sheet1</field>
        </block>
      </value>
      <value name="startCol">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
      <value name="startRow">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
      <value name="endCol">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
      <value name="endRow">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
      <value name="copiedData">
        <block type="variables_get">
          <field name="VAR" id="EQ_fE3mQz1*mmxc(N}1N">excel_details</field>
        </block>
      </value>
    </block>


    <block type="excel_split_by_column">
      <value name="excel_path">
        <block type="text">
          <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
        </block>
      </value>
      <value name="sheet_name">
        <block type="text">
          <field name="TEXT">Sheet1</field>
        </block>
      </value>
      <value name="header">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
      <value name="columnName">
        <block type="text">
          <field name="TEXT">Mobile Number</field>
        </block>
      </value>
    </block>


    <block type="excel_merge_all_files">
      <value name="input_folder_path">
        <block type="text">
          <field name="TEXT">C:/MyAutoPylot/input</field>
        </block>
      </value>
      <value name="output_folder_path">
        <block type="text">
          <field name="TEXT">C:/MyAutoPylot/output</field>
        </block>
      </value>
    </block>


    <block type="excel_drop_columns">
      <value name="excel_path">
        <block type="text">
          <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
        </block>
      </value>
      <value name="sheet_name">
        <block type="text">
          <field name="TEXT">Sheet1</field>
        </block>
      </value>
      <value name="header">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
      <value name="columnsToBeDropped">
        <block type="lists_create_with">
          <mutation items="2"></mutation>
          <value name="ADD0">
            <block type="text">
              <field name="TEXT">S.no</field>
            </block>
          </value>
          <value name="ADD1">
            <block type="text">
              <field name="TEXT">Remarks</field>
            </block>
          </value>
        </block>
      </value>
    </block>


    <block type="excel_clear_sheet">
      <value name="excel_path">
        <block type="text">
          <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
        </block>
      </value>
      <value name="sheet_name">
        <block type="text">
          <field name="TEXT">Sheet1</field>
        </block>
      </value>
      <value name="header">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
    </block>

    <block type="excel_remove_duplicates">
    <field name="which_one_to_keep">'first'</field>
    <field name="saveResultsInSameExcel">FALSE</field>
    <value name="excel_path">
      <block type="text">
        <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
      </block>
    </value>
    <value name="sheet_name">
      <block type="text">
        <field name="TEXT">Sheet1</field>
      </block>
    </value>
    <value name="header">
      <block type="math_number">
        <field name="NUM">0</field>
      </block>
    </value>
    <value name="columnName">
      <block type="text">
        <field name="TEXT">Mobile Number</field>
      </block>
    </value>
  </block>


  <block type="excel_describe_data">
  <value name="excel_path">
    <block type="text">
      <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
    </block>
  </value>
  <value name="sheet_name">
    <block type="text">
      <field name="TEXT">Sheet1</field>
    </block>
  </value>
  <value name="header">
    <block type="math_number">
      <field name="NUM">0</field>
    </block>
  </value>
</block>

<block type="excel_if_value_exists">
          <value name="excel_path">
            <block type="text">
              <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
            </block>
          </value>
          <value name="sheet_name">
            <block type="text">
              <field name="TEXT">Sheet1</field>
            </block>
          </value>
          <value name="header">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="usecols">
            <block type="lists_create_with">
              <mutation items="2"></mutation>
              <value name="ADD0">
                <block type="text">
                  <field name="TEXT">S.no</field>
                </block>
              </value>
              <value name="ADD1">
                <block type="text">
                  <field name="TEXT">Remarks</field>
                </block>
              </value>
            </block>
          </value>
          <value name="value">
            <block type="text">
              <field name="TEXT">Transaction Completed.</field>
            </block>
          </value>
        </block>

    <block type="controls_if">
      <value name="IF0">
        <block type="excel_if_value_exists">
          <value name="excel_path">
            <block type="text">
              <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
            </block>
          </value>
          <value name="sheet_name">
            <block type="text">
              <field name="TEXT">Sheet1</field>
            </block>
          </value>
          <value name="header">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="usecols">
            <block type="lists_create_with">
              <mutation items="2"></mutation>
              <value name="ADD0">
                <block type="text">
                  <field name="TEXT">Status</field>
                </block>
              </value>
              <value name="ADD1">
                <block type="text">
                  <field name="TEXT">ID</field>
                </block>
              </value>
            </block>
          </value>
          <value name="value">
            <block type="text">
              <field name="TEXT">Transaction Completed.</field>
            </block>
          </value>
        </block>
      </value>
      <statement name="DO0">
        <block type="excel_set_single_cell">
          <value name="excel_path">
            <block type="text">
              <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
            </block>
          </value>
          <value name="sheet_name">
            <block type="text">
              <field name="TEXT">Sheet1</field>
            </block>
          </value>
          <value name="header">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="columnName">
            <block type="text">
              <field name="TEXT">Remarks</field>
            </block>
          </value>
          <value name="cellNumber">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="setText">
            <block type="text">
              <field name="TEXT">Success</field>
            </block>
          </value>
        </block>
      </statement>
    </block>


    <block type="excel_to_colored_html">
      <value name="formatted_excel_path">
        <block type="text">
          <field name="TEXT">C:/MyAutoPylot/name.xlsx</field>
        </block>
      </value>
    </block>


    <block type="isnan">
    <value name="formatted_excel_path">
      <block type="text">
        <field name="TEXT">Anything</field>
      </block>
    </value>
  </block>
  </category>
  <category name="Window" css-icon="${WINDOWS_CATEGORY_ICON}" colour="${WINDOWS_CATEGORY_COLOUR}">
  <block type="status_data"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="0Ub0zY8JTs}~ussX%,-J">status</field> </block> </value> <value name="data_variable"> <block type="variables_get"> <field name="VAR" id="vr5=uCk%s24,OQ$aA00T">data</field> </block> </value> <value name="function_variable">  <block type="window_get_all_opened_titles_windows"></block> </value> </block>

  <block type="status">
  <value name="status_variable">
    <block type="variables_get">
      <field name="VAR" id="EV/Gw}Bxj$#rCpn4Gcgm">status</field>
    </block>
  </value>
  <value name="function_variable">
  <block type="window_activate_and_maximize_windows"> <value name="windowName"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>

  </value>
</block>


<block type="status">
<value name="status_variable">
  <block type="variables_get">
    <field name="VAR" id="EV/Gw}Bxj$#rCpn4Gcgm">status</field>
  </block>
</value>
<value name="function_variable">
<block type="window_minimize_windows"> <value name="windowName"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>

</value>
</block>

<block type="status">
<value name="status_variable">
  <block type="variables_get">
    <field name="VAR" id="EV/Gw}Bxj$#rCpn4Gcgm">status</field>
  </block>
</value>
<value name="function_variable">
  <block type="window_show_desktop"></block>
</value>
</block>

<block type="status">
<value name="status_variable">
  <block type="variables_get">
    <field name="VAR" id="EV/Gw}Bxj$#rCpn4Gcgm">status</field>
  </block>
</value>
<value name="function_variable">
<block type="window_close_windows"> <value name="windowName"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>

</value>
</block>

<block type="status">
<value name="status_variable">
  <block type="variables_get">
    <field name="VAR" id="EV/Gw}Bxj$#rCpn4Gcgm">status</field>
  </block>
</value>
<value name="function_variable">
<block type="launch_any_exe_bat_application"> <value name="windowName"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>

</value>
</block>


  <block type="status">
  <value name="status_variable">
    <block type="variables_get">
      <field name="VAR" id="EV/Gw}Bxj$#rCpn4Gcgm">status</field>
    </block>
  </value>
  <value name="function_variable">
    <block type="window_show_desktop"></block>
  </value>
</block>
<block type="status">
  <value name="status_variable">
    <block type="variables_get">
      <field name="VAR" id="EV/Gw}Bxj$#rCpn4Gcgm">status</field>
    </block>
  </value>
  <value name="function_variable">
    <block type="window_restore_windows">
      <value name="NAME">
        <block type="text">
          <field name="TEXT"></field>
        </block>
      </value>
    </block>
  </value>
</block>
<block type="status_data">
  <value name="status_variable">
    <block type="variables_get">
      <field name="VAR" id="EV/Gw}Bxj$#rCpn4Gcgm">status</field>
    </block>
  </value>
  <value name="data_variable">
    <block type="variables_get">
      <field name="VAR" id="+s^@u,R^NR,1+6*$9c[;">data</field>
    </block>
  </value>
  <value name="function_variable">
    <block type="window_get_active_window"></block>
  </value>
</block>

  </category>
  <category name="Chrome" css-icon="${CHROME_CATEGORY_ICON}" colour="${CHROME_CATEGORY_COLOUR}">
  <block type="chrome_instance">
      <value name="chrome_driver">
        <block type="variables_get">
          <field name="VAR" id="7E3|[}%GmC#yBWq|b$=r">chrome_driver</field>
        </block>
      </value>
    </block>
  
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> </block> </value> <value name="function_variable"> <block type="chrome_navigate"> <value name="NAME"> <block type="text"> <field name="TEXT">pybots.ai</field> </block> </value> <value name="navigate"> <block type="variables_get"> <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field> </block> </value> </block> </value> </block>
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> </block> </value> <value name="function_variable"> <block type="chrome_write"> <value name="text"> <block type="text"> <field name="TEXT">MyAutoPylot is awesome</field> </block> </value> <value name="user_visible_text_element"> <block type="text"> <field name="TEXT">search</field> </block> </value> <value name="navigate"> <block type="variables_get"> <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field> </block> </value> </block> </value> </block>
  
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> </block> </value> <value name="function_variable"> 
  
  <block type="chrome_mouse_click">
  <field name="action_type">single</field>
  <field name="value_type">text</field>
  <value name="value">
    <block type="text">
      <field name="TEXT">Sign in</field>
    </block>
  </value>
</block>
   
   </value> </block>
  
  
  
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> </block> </value> <value name="function_variable"> <block type="chrome_scroll"> <field name="direction">down</field> <field name="weight">300</field> <value name="navigate"> <block type="variables_get"> <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field> </block> </value> </block> </value> </block>
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> </block> </value> <value name="function_variable"> <block type="chrome_key_press"> <field name="key_1">OPTIONNAME</field> <field name="key_2">OPTIONNAME</field> <value name="navigate"> <block type="variables_get"> <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field> </block> </value> </block> </value> </block>
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> </block> </value> <value name="function_variable"> <block type="chrome_hit_enter"> <value name="navigate"> <block type="variables_get"> <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field> </block> </value> </block> </value> </block>
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> </block> </value> <value name="function_variable"> <block type="chrome_wait_until"> <field name="element">t</field> <value name="text"> <block type="text"> <field name="TEXT">MyAutoPylot is awesome</field> </block> </value> <value name="navigate"> <block type="variables_get"> <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field> </block> </value> </block> </value> </block>
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> </block> </value> <value name="function_variable"> <block type="chrome_refresh_page"> <value name="navigate"> <block type="variables_get"> <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field> </block> </value> </block> </value> </block>
  <block type="status"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> </block> </value> <value name="function_variable"> <block type="chrome_set_waiting_time"> <value name="element"> <block type="math_number"> <field name="NUM">10</field> </block> </value> <value name="navigate"> <block type="variables_get"> <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field> </block> </value> </block> </value> </block>
  <block type="status_data">
  <value name="status_variable">
    <block type="variables_get">
      <field name="VAR" id="EV/Gw}Bxj$#rCpn4Gcgm">status</field>
    </block>
  </value>
  <value name="data_variable">
    <block type="variables_get">
      <field name="VAR" id="+s^@u,R^NR,1+6*$9c[;">data</field>
    </block>
  </value>
  <value name="function_variable">
    <block type="get_text">
      <value name="get_element_image">
        <block type="text">
          <field name="TEXT"></field>
        </block>
      </value>
    </block>
  </value>
</block>


<block type="status_data">
  <value name="status_variable">
    <block type="variables_get">
      <field name="VAR" id="EV/Gw}Bxj$#rCpn4Gcgm">status</field>
    </block>
  </value>
  <value name="data_variable">
    <block type="variables_get">
      <field name="VAR" id="TSmlgrRk^^b{8$tj5KF9">image_path</field>
    </block>
  </value>
  <value name="function_variable">
    <block type="get_element_image">
      <field name="base64_image">FALSE</field>
      <value name="get_element_image">
        <block type="text">
          <field name="TEXT"></field>
        </block>
      </value>
      <value name="image_name">
        <block type="text">
          <field name="TEXT">captcha</field>
        </block>
      </value>
    </block>
  </value>
</block>

  </category>
  <category name="Folder" css-icon="${FOLDER_CATEGORY_ICON}" colour="${FOLDER_CATEGORY_COLOUR}">
  <block type="status_data"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="0Ub0zY8JTs}~ussX%,-J">status</field> </block> </value> <value name="data_variable"> <block type="variables_get"> <field name="VAR" id="vr5=uCk%s24,OQ$aA00T">data</field> </block> </value> <value name="function_variable"> <block type="folder_read_text_file"> <value name="txt_file_path"> <block type="text"> <field name="TEXT">C:/MyAutoPylot/File.txt</field> </block> </value> </block> </value> </block>
  <block type="status_data"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="0Ub0zY8JTs}~ussX%,-J">status</field> </block> </value> <value name="data_variable"> <block type="variables_get"> <field name="VAR" id="vr5=uCk%s24,OQ$aA00T">data</field> </block> </value> <value name="function_variable"> <block type="folder_get_all_filenames_as_list"><field name="extension">all</field> <value name="strFolderPath"> <block type="text"> <field name="TEXT">C:/MyAutoPylot</field> </block> </value> </block> </value> </block>
  <block type="status_data"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="0Ub0zY8JTs}~ussX%,-J">status</field> </block> </value> <value name="data_variable"> <block type="variables_get"> <field name="VAR" id="vr5=uCk%s24,OQ$aA00T">data</field> </block> </value> <value name="function_variable"> <block type="file_get_json_details"> <value name="path_of_json_file"> <block type="text"> <field name="TEXT">C:/MyAutoPylot/Data.json</field> </block> </value> <value name="section"> <block type="text"> <field name="TEXT">key</field> </block> </value> </block> </value> </block>
  
  <block type="status"> 
  <value name="status_variable"> 
      <block type="variables_get"> 
          <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> 
      </block> 
  </value> 
  <value name="function_variable"> 
  <block type="file_rename"> <field name="file_extension_without_dot">TRUE</field> <value name="old_file_path"> <block type="text"> <field name="TEXT">C:/MyAutoPylot/old.txt</field> </block> </value> <value name="new_file_name"> <block type="text"> <field name="TEXT">C:/MyAutoPylot/new.txt</field> </block> </value> </block>
      
  </value> 
</block>
<block type="status"> 
<value name="status_variable"> 
    <block type="variables_get"> 
        <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> 
    </block> 
</value> 
<value name="function_variable"> 
  <block type="folder_delete_all_files"> <field name="file_extension_without_dot">all</field> <value name="fullPathOfTheFolder"> <block type="text"> <field name="TEXT">C:/MyAutoPylot</field> </block> </value> </block>
    
</value> 
</block>
<block type="status"> 
<value name="status_variable"> 
    <block type="variables_get"> 
        <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> 
    </block> 
</value> 
<value name="function_variable"> 
  <block type="folder_create"> <value name="strFolderPath"> <block type="text"> <field name="TEXT">C:/MyAutoPylot</field> </block> </value> </block>
    
</value> 
</block>
<block type="status"> 
<value name="status_variable"> 
    <block type="variables_get"> 
        <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> 
    </block> 
</value> 
<value name="function_variable"> 
  <block type="folder_write_text_file"> <value name="txt_file_path"> <block type="text"> <field name="TEXT">C:/MyAutoPylot/File.txt</field> </block> </value> <value name="contents"> <block type="text"> <field name="TEXT">MyAutoPylot is Awesome</field> </block> </value> </block>
    
</value> 
</block>


  </category>
  <category name="Scraping" css-icon="${SCRAPING_CATEGORY_ICON}" colour="${SCRAPING_CATEGORY_COLOUR}">
  <block type="status_data">
  <value name="status_variable">
    <block type="variables_get">
      <field name="VAR" id="ciu+qP-%pI6-se/HC$!1">status</field>
    </block>
  </value>
  <value name="data_variable">
    <block type="variables_get">
      <field name="VAR" id="ylq=+26B2bS=xju,/flY">data</field>
    </block>
  </value>
  <value name="function_variable">
  <block type="scrape_save_contents_to_notepad"> <value name="folderPathToSaveTheNotepad"> <block type="text"> <field name="TEXT">C:/MyAutoPylot</field> </block> </value> <value name="X"> <block type="math_number"> <field name="NUM">1</field> </block> </value> <value name="Y"> <block type="math_number"> <field name="NUM">1</field> </block> </value> </block>
  
  </value>
</block>

<block type="status"> 
    <value name="status_variable"> 
        <block type="variables_get"> 
            <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> 
        </block> 
    </value> 
    <value name="function_variable"> 
  <block type="screen_clear_search"> <value name="highlightText"> <block type="math_number"> <field name="NUM">0.2</field> </block> </value> </block>
        
    </value> 
</block>

  </category>
  <category name="String" css-icon="${STRING_CATEGORY_ICON}" colour="${STRING_CATEGORY_COLOUR}">
  <block type="status_data"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="0Ub0zY8JTs}~ussX%,-J">status</field> </block> </value> <value name="data_variable"> <block type="variables_get"> <field name="VAR" id="vr5=uCk%s24,OQ$aA00T">data</field> </block> </value> <value name="function_variable"> <block type="string_extract_only_alphabets"> <value name="inputString"> <block type="text"> <field name="TEXT">M0Y-A1U2T3O4P5Y6L7O8T9</field> </block> </value> </block> </value> </block>
  <block type="status_data"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="0Ub0zY8JTs}~ussX%,-J">status</field> </block> </value> <value name="data_variable"> <block type="variables_get"> <field name="VAR" id="vr5=uCk%s24,OQ$aA00T">data</field> </block> </value> <value name="function_variable"> <block type="string_extract_only_numbers"> <value name="inputString"> <block type="text"> <field name="TEXT">M0Y-A1U2T3O4P5Y6L7O8T9</field> </block> </value> </block> </value> </block>
  <block type="status_data"> <value name="status_variable"> <block type="variables_get"> <field name="VAR" id="0Ub0zY8JTs}~ussX%,-J">status</field> </block> </value> <value name="data_variable"> <block type="variables_get"> <field name="VAR" id="vr5=uCk%s24,OQ$aA00T">data</field> </block> </value> <value name="function_variable"> <block type="string_remove_special_characters"> <value name="inputStr"> <block type="text"> <field name="TEXT">M!Y[]A.U/T?O;P5Y*'L)O*T-</field> </block> </value> </block> </value> </block>
  
  
  </category>
  <category name="Extras" css-icon="${EXTRAS_CATEGORY_ICON}" colour="${EXTRAS_CATEGORY_COLOUR}">
  <block type="get_path" > </block>

  <block type="text_print">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>

  <block type="status_data">
      <value name="status_variable">
        <block type="variables_get">
          <field name="VAR" id="ciu+qP-%pI6-se/HC$!1">status</field>
        </block>
      </value>
      <value name="data_variable">
        <block type="variables_get">
          <field name="VAR" id="ylq=+26B2bS=xju,/flY">data</field>
        </block>
      </value>
      <value name="function_variable">
      
      </value>
    </block>

    <block type="status"> 
        <value name="status_variable"> 
            <block type="variables_get"> 
                <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> 
            </block> 
        </value> 
        <value name="function_variable"> 
            
        </value> 
    </block>
  
    <block type="status_data">
    <value name="status_variable">
      <block type="variables_get">
        <field name="VAR" id="ciu+qP-%pI6-se/HC$!1">status</field>
      </block>
    </value>
    <value name="data_variable">
      <block type="variables_get">
        <field name="VAR" id="ylq=+26B2bS=xju,/flY">data</field>
      </block>
    </value>
    <value name="function_variable">
    <block type="api_request"></block>
    </value>
  </block>

  <block type="status"> 
  <value name="status_variable"> 
      <block type="variables_get"> 
          <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> 
      </block> 
  </value> 
  <value name="function_variable"> 
<block type="text_to_speech"> <field name="show">TRUE</field> <field name="rate">170</field> <value name="audio"> <block type="text"> <field name="TEXT">MyAutoPylot is Awesome.</field> </block> </value> </block>
      
  </value> 
</block>

    <block type="status_data">
    <value name="status_variable">
      <block type="variables_get">
        <field name="VAR" id="ciu+qP-%pI6-se/HC$!1">status</field>
      </block>
    </value>
    <value name="data_variable">
      <block type="variables_get">
        <field name="VAR" id="ylq=+26B2bS=xju,/flY">data</field>
      </block>
    </value>
    <value name="function_variable">
    <block type="speech_to_text"></block>
    </value>
  </block>

    
  <block type="status"> 
  <value name="status_variable"> 
      <block type="variables_get"> 
          <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field> 
      </block> 
  </value> 
  <value name="function_variable"> 
<block type="pause_program"> <value name="seconds"> <block type="math_number"> <field name="NUM">5</field> </block> </value> </block>
      
  </value> 
</block>
    <block type="status_data">
    <value name="status_variable">
      <block type="variables_get">
        <field name="VAR" id="EV/Gw}Bxj$#rCpn4Gcgm">status</field>
      </block>
    </value>
    <value name="data_variable">
      <block type="variables_get">
        <field name="VAR" id="9{_sm1OHTa4^WQG%%N.i">text</field>
      </block>
    </value>
    <value name="function_variable">
      <block type="image_to_text">
        <value name="image_path">
          <block type="variables_get">
            <field name="VAR" id="TSmlgrRk^^b{8$tj5KF9">image_path</field>
          </block>
        </value>
      </block>
    </value>
  </block>
  </category>
  <category name="Variables" css-icon="${VARIABLE_CATEGORY_ICON}" colour="${VARIABLE_CATEGORY_COLOUR}" custom="VARIABLE"></category>
  <category name="Functions" css-icon="${PROCEDURE_CATEGORY_ICON}" colour="${PROCEDURE_CATEGORY_COLOUR}" custom="PROCEDURE"></category>
  
  
</xml>
`;

Darker = Blockly.Theme.defineTheme("Darker", {
  base: Blockly.Themes.Classic,

  fontStyle: {
    family: "Roboto, serif",
    weight: "bold",
    size: 12,
  },

  blockStyles: {
    logic_blocks: {
      colourPrimary: LOGIC_CATEGORY_COLOUR,
    },
    loop_blocks: {
      colourPrimary: LOOP_CATEGORY_COLOUR,
    },
    text_blocks: {
      colourPrimary: TEXT_CATEGORY_COLOUR,
    },
    math_blocks: {
      colourPrimary: MATH_CATEGORY_COLOUR,
    },
    list_blocks: {
      colourPrimary: LIST_CATEGORY_COLOUR,
    },
    colour_blocks: {
      colourPrimary: COLOR_CATEGORY_COLOUR,
    },

    variable_blocks: {
      colourPrimary: VARIABLE_CATEGORY_COLOUR,
    },
    procedure_blocks: {
      colourPrimary: PROCEDURE_CATEGORY_COLOUR,
    },
  },

  componentStyles: {
    workspaceBackgroundColour: "#222831",
    toolboxBackgroundColour: "#151515",
    toolboxForegroundColour: "#fff",
    flyoutBackgroundColour: "#330A2A",
    flyoutForegroundColour: "#ccc",
    flyoutOpacity: 1,
    scrollbarColour: "#263238",
    insertionMarkerColour: "#fff",
    insertionMarkerOpacity: 0.3,
    scrollbarOpacity: 0.8,
    cursorColour: "#d0d0d0",
    blackBackground: "#333",
  },
});
