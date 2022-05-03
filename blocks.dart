// import 'package:flutter/material.dart';

// @immutable
class Block {
  const Block({
    required this.blockXml,
    required this.name,
    required this.keywords,
    required this.fullDescription,
    required this.shortDescription,
  });

  final String blockXml;
  final String name;
  final List<String> keywords;
  final String fullDescription;
  final String shortDescription;

  @override
  String toString() {
    return '$name, $blockXml';
  }

  @override
  bool operator ==(Object other) {
    if (other.runtimeType != runtimeType) {
      return false;
    }
    return other is Block &&
        other.name == name &&
        other.blockXml == blockXml &&
        other.keywords.any((k) => keywords.contains(k));
  }
}

const List<Block> _blockOptions = <Block>[
// Mouse Blocks 4
  Block(
    name: 'Mouse Click',
    blockXml:
        '<block type="mouse_click"><field name="left_or_right">left</field><field name="type_of_movement">abs</field> <field name="status" id="A3JH(F4iaa#67-C,*iE">STATUS</field> <value name="x"> <block type="math_number"> <field name="NUM">10</field> </block> </value> <value name="y"> <block type="math_number"> <field name="NUM">20</field> </block> </value> <value name="no_of_clicks"> <block type="math_number"> <field name="NUM">1</field> </block> </value> </block>',
    keywords: ['mouse', 'click'],
    shortDescription:
        'Clicks at the given X Y Co-ordinates on the screen using single / double / triple click(s). Default clicks on current position.',
    fullDescription:
        '''Clicks at the given X Y Co-ordinates on the screen using single / double / triple click(s). Default clicks on current position.
    Args:
        x (int): x-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        y (int): y-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        left_or_right (str, optional): Which mouse button.
        Eg: right or left, Defaults: left.
        no_of_click (int, optional): Number of times specified mouse button to be clicked.
        Eg: 1 or 2, Max 3. Defaults: 1.
        type_of_movement (str, optional): Type of movement.
    Returns: [status]
        bool: Whether the function is successful or failed.''',
  ),
  Block(
    name: 'Mouse Move',
    blockXml:
        '<block type="mouse_move"> <field name="type_of_movement">abs</field> <field name="status" id="A3JH(F4iaa#67-C,*iE">STATUS</field> <value name="x"> <block type="math_number"> <field name="NUM">10</field> </block> </value> <value name="y"> <block type="math_number"> <field name="NUM">20</field> </block> </value> </block>',
    keywords: ['mouse', 'move'],
    shortDescription: 'Moves the cursor to the given X Y Co-ordinates.',
    fullDescription: '''Moves the cursor to the given X Y Co-ordinates.
    Args:
        x (int): x-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        y (int): y-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        type_of_movement (str, optional): Type of movement.
    Returns: [status]
        bool: Whether the function is successful or failed.
''',
  ),
  Block(
    name: 'Mouse Drag',
    blockXml:
        '<block type="mouse_drag_from_to"> <field name="status" id="A3JH(F4iaa#67-C,*iE">STATUS</field> <value name="x1"> <block type="math_number"> <field name="NUM">10</field> </block> </value> <value name="y1"> <block type="math_number"> <field name="NUM">10</field> </block> </value> <value name="x2"> <block type="math_number"> <field name="NUM">500</field> </block> </value> <value name="y2"> <block type="math_number"> <field name="NUM">500</field> </block> </value> </block>',
    keywords: ['mouse', 'drag'],
    shortDescription: '',
    fullDescription:
        '''Clicks and drags from x1 y1 co-ordinates to x2 y2 Co-ordinates on the screen
    Args:
        x1 or x2 (int): x-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        y1 or y2 (int): y-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        delay (float, optional): Seconds to wait while performing action. 
        Eg: 1 or 0.5, Defaults to 0.5.
    Returns: [status]
        bool: Whether the function is successful or failed.
''',
  ),
  Block(
    name: 'Mouse Search',
    blockXml:
        '<block type="mouse_search_snip_return_coordinates_x_y"> <field name="status" id="A3JH(F4iaa#67-C,*iE">STATUS</field> <field name="data" id="OLR3)D%V_kq3v#a16Vn">DATA</field> <value name="img"> <block type="text"> <field name="TEXT">Path</field> </block> </value> <value name="wait"> <block type="math_number"> <field name="NUM">5</field> </block> </value> </block>',
    keywords: ['mouse', 'search', 'snip', 'points'],
    shortDescription:
        'Searches the given image on the screen and returns its center of X Y co-ordinates.',
    fullDescription: '''
Searches the given image on the screen and returns its center of X Y co-ordinates.
    Args:
        img (str, optional): Path of the image. 
        Eg: D:\\Files\\Image.png, Defaults to "".
        wait (int, optional): Time you want to wait while program searches for image repeatably.
        Eg: 10 or 100 Defaults to 180.
    Returns: [status,data]
        bool: If function is failed returns False.
        tuple (x, y): Image Center co-ordinates.
''',
  ),
// Keyboard Blocks 3
  Block(
    blockXml:
        '<block type="key_press"> <field name="key_1">a</field> <field name="key_2">a</field> <field name="key_3">a</field> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="write_to_window"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Keyboard Press',
    keywords: ['keyboard', 'key', 'press'],
    shortDescription: 'Emulates the given keystrokes.',
    fullDescription: '''Emulates the given keystrokes.
    Args:
        key_1 (str, optional): Enter the 1st key 
        Eg: ctrl or shift. Defaults to ''.
        key_2 (str, optional): Enter the 2nd key in combination. 
        Eg: alt or A. Defaults to ''.
        key_3 (str, optional): Enter the 3rd key in combination. 
        Eg: del or tab. Defaults to ''.
        write_to_window (str, optional): (Only in Windows) Name of Window you want to activate. Defaults to "".
    Returns: [status]
        bool: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="key_write_enter"> <field name="key">e</field> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="text_to_write"> <block type="text"> <field name="TEXT">My AutoPylot is awesome</field> </block> </value> <value name="write_to_window"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Keyboard Write',
    keywords: ['keyboard', 'key', 'write', 'type', 'text'],
    shortDescription: 'Writes/Types the given text.',
    fullDescription: '''Writes/Types the given text.
    Args:
        text_to_write (str, optional): Text you wanted to type
        Eg: ClointFusion is awesome. Defaults to "".
        write_to_window (str, optional): (Only in Windows) Name of Window you want to activate
        Eg: Notepad. Defaults to "".
        delay_after_typing (int, optional): Seconds in time to wait after entering the text
        Eg: 5. Defaults to 1.
        key (str, optional): Press Enter key after typing.
        Eg: t for tab. Defaults to e
    Returns: [status]
        bool: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="key_hit_enter"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="write_to_window"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Keyboard Hit Enter',
    keywords: ['keyboard', 'key', 'press', 'enter'],
    shortDescription: 'Enter key will be pressed once.',
    fullDescription: '''Enter key will be pressed once.
    Args:
        write_to_window (str, optional): (Only in Windows)Name of Window you want to activate.
        Eg: Notepad. Defaults to "".
    Returns:[status]
        bool: Whether the function is successful or failed.''',
  ),
// Folder Blocks 8
  Block(
    blockXml:
        '<block type="folder_read_text_file"> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <field name="data" id="!r=cbAny(v?V_m[/yjz4">DATA</field> <value name="txt_file_path"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Read Text File',
    keywords: ['folder', 'read', 'text', 'file'],
    shortDescription:
        'Reads from a given text file and returns entire contents as a single list.',
    fullDescription:
        '''Reads from a given text file and returns entire contents as a single list
    Args:
        txt_file_path (str, optional): Path of the text file.
        Eg: D:\\Files\\Text.txt, Defaults to "".
    Returns: [status,data]
        bool: If function is failed returns False.
        list: Text file contents.''',
  ),
  Block(
    blockXml:
        '<block type="folder_write_text_file"> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <value name="txt_file_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="contents"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Write Text File',
    keywords: ['folder', 'write', 'text', 'file'],
    shortDescription: 'Writes given contents to a text file',
    fullDescription: '''Writes given contents to a text file
    Args:
        txt_file_path (str, optional): Path of the text file.
        Eg: D:\\Files\\Text.txt, Defaults to "".
        contents (str, optional): Text you want to write to the text file.
        Eg: ClointFusion is awesone. Defaults to "".
    Returns: [status]
        bool: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="folder_create"> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <value name="strFolderPath"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Create Folder',
    keywords: ['folder', 'create'],
    shortDescription: 'Creates a folder at the given path',
    fullDescription: '''Creates a folder at the given path
    Args:
        strFolderPath (str, optional): Path of the folder.
        Eg: D:\\Files\\Text.txt, Defaults to "".
    Returns: [status]
        bool: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="folder_create_text_file"> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <value name="textFolderPath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="txtFileName"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Create Text File',
    keywords: ['folder', 'create', 'text', 'file'],
    shortDescription: 'Creates a text file at the given path',
    fullDescription: '''Creates a text file at the given path
    Args:
        textFolderPath (str, optional): Path of the folder.
        Eg: D:\\Files\\Text.txt, Defaults to "".
        txtFileName (str, optional): Name of the text file.
        Eg: Text.txt, Defaults to "".
    Returns: [status]
        bool: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="folder_get_all_filenames_as_list"> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <field name="data" id="!r=cbAny(v?V_m[/yjz4">DATA</field> <value name="strFolderPath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="extension"> <block type="text"> <field name="TEXT">all</field> </block> </value> </block>',
    name: 'Get Filenames in Folder',
    keywords: ['filenames', 'get', 'list'],
    shortDescription: 'Get all the files of the given folder in a list.',
    fullDescription: '''Get all the files of the given folder in a list.
    Parameters:
        strFolderPath  (str) : Location of the folder.
        extension      (str) : extension of the file. by default all the files will be listed regardless of the extension.
    returns: [status,data]
        allFilesOfaFolderAsLst (List) : all the file names as a list.''',
  ),
  Block(
    blockXml:
        '<block type="folder_delete_all_files"> <field name="print_status">TRUE</field> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <value name="fullPathOfTheFolder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="file_extension_without_dot"> <block type="text"> <field name="TEXT">all</field> </block> </value> </block>',
    name: 'Delete all files in folder',
    keywords: ['delete', 'folder', 'files'],
    shortDescription: 'Deletes all the files of the given folder',
    fullDescription: '''Deletes all the files of the given folder
    Parameters:
        fullPathOfTheFolder  (str) : Location of the folder.
        extension            (str) : extension of the file. by default all the files will be deleted inside the given folder
                                    regardless of the extension.
    returns:[status]
        bool: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="file_rename"> <field name="print_status">TRUE</field> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <value name="old_file_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="new_file_name"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Rename File',
    keywords: ['rename', 'file'],
    shortDescription:
        'Renames the given file name to new file name with same extension.',
    fullDescription:
        '''Renames the given file name to new file name with same extension
    Args:
        old_file_path (str, optional): Path of the file.
        Eg: D:\\Files\\Text.txt, Defaults to "".
        new_file_name (str, optional): New name of the file.
        Eg: Text.txt, Defaults to "".
        print_status (bool, optional): Whether to print the status of the function. Defaults to True.
    Returns: [status]
        bool: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="file_get_json_details"> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <field name="data" id="!r=cbAny(v?V_m[/yjz4">DATA</field> <value name="path_of_json_file"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="section"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Get JSON Data',
    keywords: ['json', 'get', 'data'],
    shortDescription:
        'Returns all the details of the given section in a dictionary',
    fullDescription:
        '''Returns all the details of the given section in a dictionary
    Args:
        path_of_json_file (str, optional): Path of the json file.
        Eg: D:\\Files\\Text.txt, Defaults to "".
        section (str, optional): Section of the json file.
        Eg: Text.txt, Defaults to "".
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: Data of the given section in a dictionary.''',
  ),
// Windows Blocks 9
  Block(
    blockXml:
        '<block type="windows_show_desktop"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> </block>',
    name: 'Show Desktop',
    keywords: ['show', 'desktop'],
    shortDescription: 'Shows the desktop',
    fullDescription: ''' Minimizes all the applications and shows Desktop.
    Returns:
        bool: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="windows_launch_app"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="pathOfExeFile"> <block type="text"> <field name="TEXT">Notepad</field> </block> </value> </block>',
    name: 'Launch App',
    keywords: ['launch', 'app'],
    shortDescription: 'Launches the given application',
    fullDescription: '''Launches any exe or batch file or excel file etc.
    Args:
        pathOfExeFile (str, optional): Location of the file with extension
        Eg: Notepad, TextEdit. Defaults to "".
    Returns:
        bool: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="window_activate_window"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="window_title"> <block type="text"> <field name="TEXT">Notepad</field> </block> </value> </block>',
    name: 'Activate Window',
    keywords: ['activate', 'window'],
    shortDescription: 'Activates the given window',
    fullDescription: '''Activates the given window.
    Args:
        window_title (str, optional): Title of the window.
        Eg: Notepad, TextEdit. Defaults to "".
    Returns:
        bool: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="window_restore_windows"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="windowName"> <block type="text"> <field name="TEXT">Notepad</field> </block> </value> </block>',
    name: 'Restore Window',
    keywords: ['restore', 'window'],
    shortDescription: 'Restores the given window',
    fullDescription: '''Restores the given window.
    Args:
        windowName (str, optional): Name of the window you want to restore.
        Eg: Notepad. Defaults to "".
    Returns: [status]''',
  ),
  Block(
    blockXml:
        '<block type="window_activate_and_maximize_windows"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="windowName"> <block type="text"> <field name="TEXT">Notepad</field> </block> </value> </block>',
    name: 'Activate and Maximize Window',
    keywords: ['activate', 'maximize', 'window'],
    shortDescription: 'Activates and Maximizes the given window',
    fullDescription: '''Activates and maximizes the desired window.
    Parameters:
        windowName  (str) : Name of the window to maximize.
    Returns: [status]''',
  ),
  Block(
    blockXml:
        '<block type="window_minimize_windows"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="windowName"> <block type="text"> <field name="TEXT">Notepad</field> </block> </value> </block>',
    name: 'Minimize Window',
    keywords: ['minimize', 'window'],
    shortDescription: 'Minimizes the given window',
    fullDescription: '''Activates and minimizes the desired window.
    Parameters:
        windowName  (str) : Name of the window to miniimize.
    Returns: [status]''',
  ),
  Block(
    blockXml:
        '<block type="window_close_windows"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="windowName"> <block type="text"> <field name="TEXT">Notepad</field> </block> </value> </block>',
    name: 'Close Window',
    keywords: ['close', 'window'],
    shortDescription: 'Closes the given window',
    fullDescription: '''Close the desired window.
    Args:
        windowName (str, optional): Name of the window you want to close.
        Eg: Notepad. Defaults to "".
    Returns: [status]''',
  ),
  Block(
    blockXml:
        '<block type="window_get_all_opened_titles_windows"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="YdnboV9d6Vt)7q.ejZ=]">DATA</field> </block>',
    name: 'Get All Opened Titles',
    keywords: ['get', 'opened', 'titles', 'windows'],
    shortDescription: 'Returns all the opened windows',
    fullDescription: '''Gives the title of all the existing (open) windows.
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: List of all the opened windows titles.''',
  ),
  Block(
    blockXml:
        '<block type="window_get_active_window"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="YdnboV9d6Vt)7q.ejZ=]">DATA</field> </block>',
    name: 'Get Active Window',
    keywords: ['get', 'active', 'window'],
    shortDescription: 'Returns the active window',
    fullDescription: '''Returns the active window title.
    Returns : [status,data]
        status: Whether the function is successful or failed.
        data: Active window title.''',
  ),
// String Blocks 3
  Block(
    blockXml:
        '<block type="string_extract_only_alphabets"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="H/Kebsqv]7?0xxje1=dQ">DATA</field> <value name="inputString"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Extract Only Alphabets',
    keywords: ['extract', 'alphabets'],
    shortDescription: 'Extracts only alphabets from the given string',
    fullDescription: '''Returns only alphabets from given input string
    Args:
        inputString (str, optional): Input string. Defaults to "".
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: Only alphabets from given input string.''',
  ),
  Block(
    blockXml:
        '<block type="string_extract_only_numbers"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="H/Kebsqv]7?0xxje1=dQ">DATA</field> <value name="inputString"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Extract Only Numbers',
    keywords: ['extract', 'numbers'],
    shortDescription: 'Extracts only numbers from the given string',
    fullDescription: '''Returns only numbers from given input string
    Args:
        inputString (str, optional): Input string. Defaults to "".
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: Only numbers from given input string.''',
  ),
  Block(
    blockXml:
        '<block type="string_remove_special_characters"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="H/Kebsqv]7?0xxje1=dQ">DATA</field> <value name="inputStr"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Remove Special Characters',
    keywords: ['remove', 'special', 'characters'],
    shortDescription: 'Removes special characters from the given string',
    fullDescription: '''Removes all the special character.
    Parameters:
        inputStr  (str) : string for removing all the special character in it.
    Returns : [status,data]
        outputStr (str) : returns the alphanumeric string''',
  ),
// Screen Scrap Blocks 2
  Block(
    blockXml:
        '<block type="citrix_scrape_contents_by_search_copy_paste"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="highlight_text"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Scrape Contents By Search Copy Paste',
    keywords: ['search', 'copy', 'paste', 'scrape'],
    shortDescription: 'Scrape Contents By Search Copy Paste',
    fullDescription: '''Scrapes the contents of the highlighted text.
    Parameters:
        highlight_text  (str) : text to be highlighted.
    Returns: [status,data]
        data (str) : scraped text.''',
  ),
  Block(
    blockXml:
        '<block type="citrix_window_clear_search"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> </block>',
    name: 'Clear Search',
    keywords: ['search', 'clear', 'window'],
    shortDescription: 'Clear Search',
    fullDescription: '''Clears previously found text (ctrl+f highlight)
    Returns: [status]''',
  ),
// Voice Blocks 2
  Block(
    blockXml:
        '<block type="text_to_speech"> <field name="show">FALSE</field> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="audio"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Text to Speech',
    keywords: ['text', 'speech', 'voice'],
    shortDescription: 'Text to Speech',
    fullDescription: '''Text to Speech using Google's Generic API
    Args:
        audio (str): Text to be converted to speech.
        show (bool, optional): Whether to show the audio. Defaults to True.
    Returns: [status]
        bool: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="speech_to_text"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="-#3/I+va-=*p3[jdPz0#">DATA</field> </block>',
    name: 'Speech to Text',
    keywords: ['speech', 'text', 'voice'],
    shortDescription: 'Speech to Text',
    fullDescription: '''Speech to Text using Google's Generic API
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: Text converted from speech.
    ''',
  ),
// Computer Vision Blocks 2
  Block(
    blockXml:
        '<block type="image_to_text"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="-#3/I+va-=*p3[jdPz0#">DATA</field> <value name="img_path"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Image to Text',
    keywords: ['image', 'text', 'ocr'],
    shortDescription: 'Image to Text',
    fullDescription: '''Reads the text from the image.
    Args:
        img_path (str, optional): Path of the image. 
        Eg: D:\\Files\\Image.png, Defaults to "".
    Returns: [status,data]
        bool: If function is failed returns False.
        str: Text from image.''',
  ),
// AR & VR Blocks 3
  Block(
    blockXml:
        '<block type="ar_facecam"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="left_eye_image"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="right_eye_image"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="mouth_animation"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'AR Facecam',
    keywords: ['ar', 'vr', 'facecam'],
    shortDescription: 'Starts AR session.',
    fullDescription: '''
        Starts AR session.
    Args:
        left_eye_image (str, optional): [description]. Defaults to "".
        right_eye_image (str, optional): [description]. Defaults to "".
        mouth_animation (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status].''',
  ),
  Block(
    blockXml:
        '<block type="ar_trackhands"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> </block>',
    name: 'AR Track Hands',
    keywords: ['ar', 'vr', 'track', 'hands'],
    shortDescription: 'Starts AR session for tracking hands.',
    fullDescription: '''
        Tracks the hands of the user.
    Returns:
        [bool]: [status].''',
  ),
  Block(
    blockXml:
        '<block type="ar_facemesh"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> </block>',
    name: 'AR Facemesh',
    keywords: ['ar', 'vr', 'facemesh'],
    shortDescription: 'Starts AR session for facemesh.',
    fullDescription: '''
        Starts face mesh.
    Returns:
        [bool]: [status].''',
  ),
// Utility Blocks 5
  Block(
    blockXml:
        '<block type="clipboard_get_data"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="Ky!2+OxBW3u1eN1+N]7m">DATA</field> </block>',
    name: 'Get Clipboard Data',
    keywords: ['clipboard', 'get', 'data'],
    shortDescription: 'Get Clipboard Data',
    fullDescription: '''Get data from clipboard
    Returns:
        [status, data]''',
  ),
  Block(
    blockXml:
        '<block type="clipboard_set_data"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="data"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Set Clipboard Data',
    keywords: ['clipboard', 'set', 'data'],
    shortDescription: 'Set Clipboard Data',
    fullDescription: '''Set data to clipboard
    Args:
        data: data to be set to clipboard
        format_id: format of data
    Returns:
        [status]''',
  ),
  Block(
    blockXml:
        'block type="pause_program"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="seconds"> <block type="math_number"> <field name="NUM">5</field> </block> </value> </block>',
    name: 'Pause Program',
    keywords: ['pause', 'program', 'sleep'],
    shortDescription: 'Pause Program for a given time',
    fullDescription: '''Stops the program for given seconds
    Args:
        seconds (str, optional): [description]. Defaults to "5".
    Returns:
        [status]''',
  ),
  Block(
    blockXml:
        '<block type="api_request"> <field name="method">get</field> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="-#3/I+va-=*p3[jdPz0#">DATA</field> <value name="url"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="headers"> <block type="text"> <field name="TEXT">{"charset": "utf-8", "Content-Type": "application/json"}</field> </block> </value> <value name="body"> <block type="text"> <field name="TEXT">{}</field> </block> </value> </block>',
    name: 'API Request',
    keywords: ['api', 'request'],
    shortDescription: 'API Request',
    fullDescription: '''This function is used to make API request.
    Args:
        url (str): _description_
        method (str, optional): _description_. Defaults to 'GET'.
        data (dict, optional): _description_. Defaults to None.
        headers (dict, optional): _description_. Defaults to None.

    Returns:
        [status, response]''',
  ),
// Artwork Blocks 2
  Block(
    blockXml:
        '<block type="art_simple_effects"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="user_input_img_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="name_required_on_image"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Simple Effects',
    keywords: ['art', 'simple', 'effects'],
    shortDescription: 'Simple Effects',
    fullDescription:
        '''Apply simple effects on the given image provided by default.

    Args:
        user_input_img_path (str): [description]. Defaults to "".
        name_required_on_image (str, optional): [description]. Defaults to "".
        output_folder (str, optional): [description]. Defaults to "".
    
    Returns:
        [status]''',
  ),
  Block(
    blockXml:
        '<block type="art_neural_effects"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_image_folder_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="style_image_folder_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_image_folder_path"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Neural Effects',
    keywords: ['art', 'neural', 'effects'],
    shortDescription: 'Neural Effects on the given images',
    fullDescription:
        '''Apply neural effects on the given image provided by default or specified by User.

    Args:
        input_image_folder_path (str, optional): [description]. Defaults to "".
        style_image_folder_path (str, optional): [description]. Defaults to "".
        output_image_folder_path (str, optional): [description]. Defaults to "".
    
    Returns:
        [status]''',
  ),
// PDF Blocks 1
  Block(
    blockXml:
        '<block type="pdf_extract_all_tables"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="pdf_file_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_file_name"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Extract All Tables from PDF',
    keywords: ['keywords'],
    shortDescription: 'Extract All Tables from PDF file',
    fullDescription:
        '''Extract all tables from a pdf file and save them to a text file.
    Args:
        pdf_file_path (str): [description]. Defaults to "".
        output_folder (str, optional): [description]. Defaults to "".
        output_file_name (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status].''',
  ),
// Mail Blocks 2
  Block(
    blockXml:
        '<block type="mail_send_via_desktop_outlook"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="to_email_id"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="subject"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="message"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="attachment_path"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Send Email via Desktop Outlook',
    keywords: ['mail', 'send', 'email'],
    shortDescription: 'Send Email via Desktop Outlook',
    fullDescription: '''Send email using Outlook from Desktop email application
    Args:
        to_email_id (str): [description]. Defaults to "".
        subject (str): [description]. Defaults to "".
        message (str): [description]. Defaults to "".
        attachment_path (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]''',
  ),
  Block(
    blockXml:
        '<block type="mail_send_gmail_with_app_password"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="gmail_username"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="gmail_app_password"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="to_email_id"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="subject"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="message"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="attachment_path"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Send Email via Gmail with App Password',
    keywords: ['mail', 'send', 'email'],
    shortDescription: 'Send Email via Gmail with App Password',
    fullDescription: '''Send email using Gmail with App Password
    Args:
        gmail_username (str): [description]. Defaults to "".
        gmail_app_password (str): [description]. Defaults to "".
        to_email_id (str): [description]. Defaults to "".
        subject (str): [description]. Defaults to "".
        message (str): [description]. Defaults to "".
        attachment_path (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]''',
  ),
// Converters Blocks 8
  Block(
    blockXml:
        '<block type="convert_image_to_base64"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="Dmyblwp+p99E[j[4[o1F">DATA</field> <value name="input_file"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Convert Image to Base64',
    keywords: ['convert', 'image', 'base64'],
    shortDescription: 'Convert Image to Base64',
    fullDescription: '''Description:
        Convert image to base64 string.
    Args:
        input_file (str, optional): [description]. Defaults to "".
    Returns:
        [bool, str]: [status, base64_string]''',
  ),
  Block(
    blockXml:
        '<block type="convert_excel_to_colored_html"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Convert Excel to Colored HTML',
    keywords: ['convert', 'excel', 'html'],
    shortDescription: 'Convert Excel to Colored HTML',
    fullDescription:
        '''Converts given Excel to HTML preserving the Excel format and saves in same folder as .html
    Args:
        input_filepath (str): The path of the input Excel file
        output_folder (str): The path of the output folder
        output_filename (str): The name of the output file
    Returns:
        [bool]: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="convert_png_to_jpg"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Convert PNG to JPG',
    keywords: ['convert', 'png', 'jpg'],
    shortDescription: 'Convert PNG to JPG',
    fullDescription: '''Convert the image from png to jpg

    Args:
        input_image_path (str): The path of the input image
        output_folder_path (str): The path of the output folder

    Returns:
        [bool]: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="convert_jpg_to_png"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Convert JPG to PNG',
    keywords: ['convert', 'jpg', 'png'],
    shortDescription: 'Convert JPG to PNG',
    fullDescription: '''Convert the image from jpg to png

    Args:
        input_image_path (str): The path of the input image
        output_folder_path (str): The path of the output folder

    Returns:
        [bool]: Whether the function is successful or failed.''',
  ),
  Block(
    blockXml:
        '<block type="convert_xls_to_xlsx"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_file"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Convert XLS to XLSX',
    keywords: ['convert', 'xls', 'xlsx'],
    shortDescription: 'Convert XLS to XLSX',
    fullDescription: '''Converts given XLS file to XLSX
    Args:
        input_file (str, optional): [description]. Defaults to "".
        output_folder (str, optional): [description]. Defaults to "".
        output_filename (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]''',
  ),
  Block(
    blockXml:
        '<block type="convert_csv_to_excel"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="csv_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="sep"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="excel_output_folder_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="excel_file_name"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Convert CSV to Excel',
    keywords: ['convert', 'csv', 'excel'],
    shortDescription: 'Convert CSV to Excel',
    fullDescription: '''Convert csv file to excel file.
    Args:
        csv_path (str): [description]. Defaults to "".
        sep (str): [description]. Defaults to "".
        excel_output_folder_path (str, optional): [description]. Defaults to "".
        excel_file_name (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]''',
  ),
  Block(
    blockXml:
        '<block type="convert_base64_to_img"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="imgBase64Str"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="img_folder_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="img_file_name"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Convert Base64 to Image',
    keywords: ['convert', 'base64', 'image'],
    shortDescription: 'Convert Base64 to Image',
    fullDescription:
        '''Convert base64 string to image and save it to the given folder path.
    Args:
        imgFileName (str, optional): [description]. Defaults to "".
        imgBase64Str (str, optional): [description]. Defaults to "".
        img_folder_path (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]''',
  ),
  Block(
    blockXml:
        '<block type="convert_change_corrupt_xls_to_xlsx"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_file"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Convert Change Corrupt XLS to XLSX',
    keywords: ['convert', 'change', 'corrupt', 'xls', 'xlsx'],
    shortDescription: 'Convert Change Corrupt XLS to XLSX',
    fullDescription:
        '''Repair corrupt file to regular file and then convert it to xlsx.
        Args:
            input_file (str): [description]. Defaults to "".
            input_sheetname (str): [description]. Defaults to "".
            output_folder (str, optional): [description]. Defaults to "".
            output_filename (str, optional): [description]. Defaults to "".
        Returns:
            [bool]: [status]''',
  ),
// Alerts Blocks 3
  Block(
    blockXml:
        '<block type="msg_box_info"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="msg_for_user"> <block type="text"> <field name="TEXT">My AutoPylot</field> </block> </value> </block>',
    name: 'Message Box Info',
    keywords: ['message', 'box', 'info'],
    shortDescription: 'Message Box Info',
    fullDescription: ''' Message box to show info to the user.
    Args:
        msg_for_user (str): [description]

    Returns:
        [bool]: [status]''',
  ),
  Block(
    blockXml:
        '<block type="msg_box_ask_yes_no"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="msg_for_user"> <block type="text"> <field name="TEXT">Is My AutoPylot Awesome ?</field> </block> </value> </block>',
    name: 'Message Box Ask Yes No',
    keywords: ['message', 'box', 'ask', 'yes', 'no'],
    shortDescription: 'Message Box Ask Yes No',
    fullDescription: '''Message box to ask user to confirm something.
    Args:
        msg_for_user (str): [description]
    Returns:
        [bool]: [response] Whether the user has clicked yes(True) or no(False).''',
  ),
  Block(
    blockXml:
        '<block type="msg_count_down"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="msg_for_user"> <block type="text"> <field name="TEXT">Starting in</field> </block> </value> <value name="default_time"> <block type="math_number"> <field name="NUM">5</field> </block> </value> </block>',
    name: 'Message Count Down',
    keywords: ['message', 'count', 'down'],
    shortDescription: 'Message Count Down',
    fullDescription: '''Message box to show a countdown timer.
    Args:
        msg_for_user (str): [description]
        default_time (int, optional): [description]. Defaults to 5.
    Returns:
        [bool]: [status] ''',
  ),
// DataScience Blocks 4
  Block(
    blockXml:
        '<block type="ds_html_table_from_website"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="website_url"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'HTML Table From Website',
    keywords: ['data', 'science', 'html', 'table', 'website'],
    shortDescription: 'HTML Table From Website',
    fullDescription:
        '''Web Scrape HTML Tables : Gets Website Table Data Easily as an Excel using Pandas. Just pass the URL of Website having HTML Tables.
    Args:
        website_url (str): URL of the website.
        output_folder (str): Folder path to save the Excel file.
    Returns:
        [bool]: [status]''',
  ),
  Block(
    blockXml:
        '<block type="ds_describe_excel_data"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="dp[(M(Q!DY(N!,gRhscs">DATA</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> </block>',
    name: 'Describe Excel Data',
    keywords: ['data', 'science', 'describe', 'excel'],
    shortDescription: 'Describe Excel Data',
    fullDescription: '''Describe statistical data for the given excel
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str, optional): [description]. Defaults to "Sheet1".
        header (int, optional): [description]. Defaults to 0.
    Returns:
        [bool]: [status]''',
  ),
  Block(
    blockXml:
        '<block type="ds_pivot_excel_table"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> <value name="rows"> <block type="lists_create_with"> <mutation items="1"></mutation> <value name="ADD0"> <block type="text"> <field name="TEXT"></field> </block> </value> </block> </value> <value name="cols"> <block type="lists_create_with"> <mutation items="1"></mutation> <value name="ADD0"> <block type="text"> <field name="TEXT"></field> </block> </value> </block> </value> </block>',
    name: 'Pivot Excel Table',
    keywords: ['data', 'science', 'pivot', 'excel'],
    shortDescription: 'Pivot Excel Table',
    fullDescription: '''Pivot the given excel table

    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        rows (list): [description]. Defaults to [].
        cols (list): [description]. Defaults to [].
    Returns:
        [bool]: [status]''',
  ),
  Block(
    blockXml:
        '<block type="ds_draw_charts_from_excel"> <field name="chart_type">bar</field> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> <value name="x_col"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="y_col"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="title"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Draw Charts From Excel',
    keywords: ['data', 'science', 'draw', 'charts', 'excel'],
    shortDescription: 'Draw Charts From Excel',
    fullDescription:
        '''Interactive data visualization function, which accepts excel file, X & Y column. 
    Chart types accepted are bar , scatter , pie , sun , histogram , box  , strip. 
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        x_col (str): [description]. Defaults to "".
        y_col (str): [description]. Defaults to "".
        chart_type (str, optional): [description]. Defaults to 'bar'.
        title (str, optional): [description]. Defaults to 'PyBOTs Chart'.
    Returns:
        [bool]: [status]''',
  ),
// Citrix Blocks 2
  Block(
    blockXml:
        '<block type="citrix_scrape_contents_by_search_copy_paste"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="highlight_text"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Citrix Contents By Search Copy Paste',
    keywords: ['citrix', 'scrape', 'contents', 'search', 'copy', 'paste'],
    shortDescription: 'Citrix Contents By Search Copy Paste',
    fullDescription: '''Scrapes the contents of the highlighted text.
    Parameters:
        highlight_text  (str) : text to be highlighted.
    Returns: [status,data]
        data (str) : scraped text.''',
  ),
  Block(
    blockXml:
        '<block type="citrix_window_clear_search"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> </block>',
    name: 'Citrix Window Clear Search',
    keywords: ['citrix', 'window', 'clear', 'search'],
    shortDescription: 'Citrix Window Clear Search',
    fullDescription: '''Clears previously found text (ctrl+f highlight)
    Returns: [status]''',
  ),
// Excel Blocks 16
  Block(
    blockXml:
        '<block type="excel_get_single_cell"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field> <value name="input_filepath"> <block type="text"> <field name="TEXT">Filepath</field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT">Filepath</field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> <value name="column_name"> <block type="text"> <field name="TEXT">Filepath</field> </block> </value> <value name="cell_number"> <block type="math_number"> <field name="NUM">1</field> </block> </value> </block>',
    name: 'Excel Get Single Cell',
    keywords: ['excel', 'get', 'single', 'cell'],
    shortDescription: 'Excel Get Single Cell',
    fullDescription:
        '''Gets the text from the desired column/cell number of the given excel file
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        column_name (str): [description]. Defaults to "".
        cell_number (int): [description]. Defaults to 0.
    Returns:
        [status, data]
        data (str): Data from the given cell.''',
  ),
  Block(
    blockXml:
        '<block type="excel_set_single_cell"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT">Filepath</field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT">Filepath</field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> <value name="column_name"> <block type="text"> <field name="TEXT">Filepath</field> </block> </value> <value name="cell_number"> <block type="math_number"> <field name="NUM">1</field> </block> </value> <value name="text"> <block type="text"> <field name="TEXT">Filepath</field> </block> </value> </block>',
    name: 'Excel Set Single Cell',
    keywords: ['excel', 'set', 'single', 'cell'],
    shortDescription: 'Excel Set Single Cell',
    fullDescription:
        '''Writes the given text to the desired column/cell number for the given excel file
    Args:
        input_filepath (str) : Complete path to the excel file.
        input_sheetname (str) : Sheet name of the excel file.
        header (int)         : Row number of the header.
        column_name (str)    : Column name of the excel file.
        cell_number (int)    : Cell number of the excel file.
        text (str)           : Text to be written in the excel file.
    Returns:
        bool : [status] Whether the operation is successful or not.''',
  ),
  Block(
    blockXml:
        '<block type="excel_copy_range_from_sheet"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="H@JeN;pf,Rpec+P9xU4">COPIED_DATA</field> <value name="input_filepath"> <block type="text"> <field name="TEXT">Filepath</field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT">Sheet 1</field> </block> </value> <value name="start_col"> <block type="math_number"> <field name="NUM">1</field> </block> </value> <value name="start_row"> <block type="math_number"> <field name="NUM">1</field> </block> </value> <value name="end_col"> <block type="math_number"> <field name="NUM">3</field> </block> </value> <value name="end_row"> <block type="math_number"> <field name="NUM">3</field> </block> </value> <next> <block type="excel_paste_range_to_sheet"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT">Filepath</field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT">Sheet 1</field> </block> </value> <value name="start_col"> <block type="math_number"> <field name="NUM">1</field> </block> </value> <value name="start_row"> <block type="math_number"> <field name="NUM">1</field> </block> </value> <value name="copied_data"> <block type="variables_get"> <field name="VAR" id="H@JeN;pf,Rpec+P9xU4">COPIED_DATA</field> </block> </value> </block> </next> </block>',
    name: 'Excel Copy Range From Sheet',
    keywords: ['excel', 'copy', 'range', 'from', 'sheet'],
    shortDescription: 'Excel Copy Range From Sheet',
    fullDescription:
        '''Copies the specific range from the provided excel sheet and returns copied data as a list
    Parameters:
        input_filepath :"Full path of the excel file with double slashes"
        input_sheetname     :"Source sheet name from where contents are to be copied"
        start_col          :"Starting column number (index starts from 1) from where copying starts"
        start_row          :"Starting row number (index starts from 1) from where copying starts"
        end_col            :"Ending column number ex:4 upto where cells to be copied"
        end_row            :"Ending column number ex:5 upto where cells to be copied"
    Returns:
        [status,data]
        data (list) : copied data as a list''',
  ),
  Block(
    blockXml:
        '<block type="excel_get_all_header_columns"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> </block>',
    name: 'Excel Get All Header Columns',
    keywords: ['excel', 'get', 'all', 'header', 'columns'],
    shortDescription: 'Excel Get All Header Columns',
    fullDescription:
        '''Gives you all column header names of the given excel sheet.
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
    Returns:
        [status, data]
        data (list) : List of all column header names.''',
  ),
  Block(
    blockXml:
        '<block type="excel_get_row_column_count"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> </block>',
    name: 'Excel Get Row Column Count',
    keywords: ['excel', 'get', 'row', 'column', 'count'],
    shortDescription: 'Excel Get Row Column Count',
    fullDescription:
        '''Gets the row and column count of the provided excel sheet.

    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
    Returns:
        [status, data]
        data (list) : [row_count, column_count]''',
  ),
  Block(
    blockXml:
        '<block type="excel_get_all_sheet_names"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Excel Get All Sheet Names',
    keywords: ['excel', 'get', 'all', 'sheet', 'names'],
    shortDescription: 'Excel Get All Sheet Names',
    fullDescription:
        '''Gives you all names of the sheets in the given excel sheet.

    Args:
        input_filepath  (str) : Full path to the excel file with slashes.
    Returns:
        [status, data]
        data (list) : List of all sheet names.''',
  ),
  Block(
    blockXml:
        '<block type="excel_remove_duplicates"> <field name="same_file">TRUE</field> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> <value name="column_name"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Excel Remove Duplicates',
    keywords: ['excel', 'remove', 'duplicates'],
    shortDescription: 'Excel Remove Duplicates',
    fullDescription: '''Removes the duplicates from the given excel sheet.
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        column_name (str): [description]. Defaults to "".
        same_file (bool): [Whether to write the output to the same file or not]. Defaults to True.
        output_folder (str): [description]. Defaults to "".
        output_filename (str): [description]. Defaults to "".
    Returns:
        [status]''',
  ),
  Block(
    blockXml:
        '<block type="excel_group_by_column_values_n_split"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> <value name="column_name"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Excel Group By Column Values and  Split',
    keywords: ['excel', 'group', 'by', 'column', 'values', 'n', 'split'],
    shortDescription: 'Excel Group By Column Values and Split',
    fullDescription: '''Splits the excel file by Column Name
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        column_name (str): [description]. Defaults to "".
        output_folder (str): [description]. Defaults to "".
        output_filename (str): [description]. Defaults to "".
    Returns:
        [status]''',
  ),
  Block(
    blockXml:
        '<block type="excel_drop_columns"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> <value name="cols"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Excel Drop Columns',
    keywords: ['excel', 'drop', 'columns'],
    shortDescription: 'Excel Drop Columns',
    fullDescription: '''Drops the desired column from the given excel file
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        cols (str): [description]. Defaults to "".
    Returns:
        [status]''',
  ),
  Block(
    blockXml:
        '<block type="excel_clear_sheet"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> </block>',
    name: 'Excel Clear Sheet',
    keywords: ['excel', 'clear', 'sheet'],
    shortDescription: 'Excel Clear Sheet',
    fullDescription:
        '''Clears the contents of given excel files keeping header row intact
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
    Returns:
        [status]''',
  ),
  Block(
    blockXml:
        '<block type="excel_if_value_exists"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> <value name="cols"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="value"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Excel If Value Exists',
    keywords: ['excel', 'if', 'value', 'exists'],
    shortDescription: 'Excel If Value Exists',
    fullDescription: '''Check if a given value exists in given excel.
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        cols (str): [description]. Defaults to "".
        value (str): [description]. Defaults to "".
    Returns:
        [status]''',
  ),
  Block(
    blockXml:
        '<block type="excel_create_file"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="output_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Excel Create File',
    keywords: ['excel', 'create', 'file'],
    shortDescription: 'Excel Create File',
    fullDescription: '''Create a Excel file in output_folder with filename.
    Args:
        output_folder (str): [description]. Defaults to "".
        output_filename (str): [description]. Defaults to "".
        output_sheetname (str): [description]. Defaults to "Sheet1".
    Returns:
        [status]''',
  ),
  Block(
    blockXml:
        '<block type="excel_merge_all_files"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Excel Merge All Files',
    keywords: ['excel', 'merge', 'all', 'files'],
    shortDescription: 'Excel Merge All Files',
    fullDescription: '''Merges all the excel files in the given folder
    Args:
        input_folder_path (str): [description]. Defaults to "".
        output_folder (str): [description]. Defaults to "".
        output_filename (str): [description]. Defaults to "".
    Returns:
        [status]''',
  ),
  Block(
    blockXml:
        '<block type="excel_apply_format_as_table"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Excel Apply Format As Table',
    keywords: ['excel', 'apply', 'format', 'as', 'table'],
    shortDescription: 'Excel Apply Format As Table',
    fullDescription:
        ''' Applies table format to the used range of the given excel.
        Args:
            input_filepath (str): [description]. Defaults to "".
            input_sheetname (str): [description]. Defaults to "Sheet1"
        Returns:
            [status] - True if successful, False otherwise''',
  ),
  Block(
    blockXml:
        '<block type="excel_apply_template_format"> <field name="same_file">TRUE</field> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_template_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_template_sheetname"> <block type="math_number"> <field name="NUM">0</field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
    name: 'Excel Apply Template Format',
    keywords: ['excel', 'apply', 'template', 'format'],
    shortDescription: 'Excel Apply Template Format',
    fullDescription:
        '''Applies the format of the given template excel to the given excel.
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        input_template_filepath (str): [description]. Defaults to "".
        input_template_sheetname (str): [description]. Defaults to "Sheet1".
        same_file (bool): [Whether to write the output to the same file or not]. Defaults to True.
        output_folder (str): [description]. Defaults to "".
        output_filename (str): [description]. Defaults to "".
    Returns:
        [status]''',
  ),
];
