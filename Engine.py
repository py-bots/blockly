# mouse
import my_autopylot.mouse39 as mouse
# keyboard
import my_autopylot.keyboard39 as keyboard
# voice
import my_autopylot.voice39 as voice
# chrome
import my_autopylot.chrome39 as chrome
# folder
import my_autopylot.folder39 as folder
# string
import my_autopylot.string39 as string
# windows
import my_autopylot.windows39 as windows
# screen_scraping
import my_autopylot.screen_scraping39 as screen_scraping
# citrix
import my_autopylot.citrix39 as citrix
# excel
import my_autopylot.excel39 as excel
# utility
import my_autopylot.utility39 as utility
# datascience
import my_autopylot.datascience39 as datascience
# messages
import my_autopylot.message39 as messages
# images
import my_autopylot.images39 as images
# converters
import my_autopylot.converters39 as converters
# mail
import my_autopylot.mail39 as mail
# pdf
import my_autopylot.pdf39 as pdf
# artworks
import my_autopylot.artworks39 as artworks
# scheduler
import my_autopylot.scheduler39 as scheduler
# clipboard
import my_autopylot.clipboard39 as clipboard
# arvr
import my_autopylot.arvr39 as ar_vr
# ---------  Template Functions ---------


# ---------  Template Functions Ends ---------

# ---------  AR & VR Functions ---------

def ar_facecam(left_eye_image='', right_eye_image='', mouth_animation=''):
    """
    Description:
        Starts AR session.
    Args:
        left_eye_image (str, optional): [description]. Defaults to "".
        right_eye_image (str, optional): [description]. Defaults to "".
        mouth_animation (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status].
    """
    return ar_vr.start_ar(left_eye_image, right_eye_image, mouth_animation)
# [status]


def ar_trackhands():
    """
    Description:
        Tracks the hands of the user.
    Returns:
        [bool]: [status].
    """
    return ar_vr.trackhands()
# [status]


def ar_facemesh():
    """
    Description:
        Starts face mesh.
    Returns:
        [bool]: [status].
    """
    return ar_vr.face_mesh()
# [status]

# ---------  AR & VR Functions Ends ---------


# --------- Utility Functions ---------

def pause_program(seconds="5"):
    """
    Stops the program for given seconds
    Args:
        seconds (str, optional): [description]. Defaults to "5".
    Returns:
        [status]
    """
    return utility.pause_program(seconds)
# [status]


def clear_output():
    """
    Clears Python Interpreter Terminal Window Screen
    Returns: [status]
    """
    return utility.clear_output()
# [status]


def install_module(module_name=""):
    """
    Installs the module
    Returns: [status]
    """
    return utility.install_module(module_name)
# [status]


def uninstall_module(module_name=""):
    """
    Uninstalls the module
    Returns: [status]
    """
    return utility.uninstall_module(module_name)
# [status]


def api_request(url: str, method='GET', body: dict = None, headers: dict = None):
    """

    This function is used to make API request.
    Args:
        url (str): _description_
        method (str, optional): _description_. Defaults to 'GET'.
        data (dict, optional): _description_. Defaults to None.
        headers (dict, optional): _description_. Defaults to None.

    Returns:
        [status, response]
    """
    return utility.api_request(url, method, body, headers)
# [status, data]


def clipboard_get_data():
    """
    Description:
        Get data from clipboard
    Returns:
        [status, data]
    """
    return clipboard.clipboard_get_data()
# [status, data]


def clipboard_set_data(data):
    """
    Description:
        Set data to clipboard
    Args:
        data: data to be set to clipboard
        format_id: format of data
    Returns:
        [status]
    """
    return clipboard.clipboard_set_data(data)
# [status]

# --------- Utility Functions Ends ---------


# ---------  Artwords Functions ---------

def art_simple_effects(user_input_img_path="", name_required_on_image="", output_folder=""):
    """
    Description:
        Apply simple effects on the given image provided by default.

    Args:
        user_input_img_path (str): [description]. Defaults to "".
        name_required_on_image (str, optional): [description]. Defaults to "".
        output_folder (str, optional): [description]. Defaults to "".
    
    Returns:
        [status]
    """
    return artworks.art_simple_effects(user_input_img_path, name_required_on_image, output_folder)
# [status]


def art_neural_effects(input_image_folder_path="", style_image_folder_path="", output_image_folder_path=""):
    """
    Description:
        Apply neural effects on the given image provided by default or specified by User.

    Args:
        input_image_folder_path (str, optional): [description]. Defaults to "".
        style_image_folder_path (str, optional): [description]. Defaults to "".
        output_image_folder_path (str, optional): [description]. Defaults to "".
    
    Returns:
        [status]

    """
    return artworks.art_neural_effects(input_image_folder_path, style_image_folder_path, output_image_folder_path)
# [status]

# ---------  Artwords Functions Ends ---------


# ---------  Scheduler Functions ---------

def schedule_py_file(filepath, bot_name, weekly_or_daily, week_day, time_24_hrs):
    """
    Description:
        Schedules the given .py file using Windows Task Scheduler.
    Args:
        filepath (str): [description].
        bot_name (str): [description].
        weekly_or_daily (str): [description].
        week_day (str): [description].
        time_24_hrs (str): [description].
    Returns:
        [bool]: [status].
    """
    return scheduler.schedule_py_file(filepath, bot_name, weekly_or_daily, week_day, time_24_hrs)
# [status]


def schedule_code(code, bot_name, weekly_or_daily, week_day, time_24_hrs):
    """
    Description:
        Schedules the given python code using Windows Task Scheduler.
    Args:
        code (str): [description].
        bot_name (str): [description].
        weekly_or_daily (str): [description].
        week_day (str): [description].
        time_24_hrs (str): [description].
    Returns:
        [bool]: [status].
    """
    return scheduler.schedule_code(code, bot_name, weekly_or_daily, week_day, time_24_hrs)
# [status]


def schedule_delete_task(bot_name=""):
    """
    Description:
        Deletes already scheduled task. Asks user to supply task_name used during scheduling the task. You can also perform this action from Windows Task Scheduler.
    Args:
        bot_name (str): [description]. Defaults to "".
    Returns:
        [bool]: [status].
    """
    return scheduler.schedule_delete_task(bot_name)
# [status]

# ---------  Scheduler Functions Ends ---------


# ---------  PDF Functions ---------

def pdf_extract_all_tables(pdf_file_path="", output_folder="", output_file_name=""):
    """
    Extract all tables from a pdf file and save them to a text file.
    Args:
        pdf_file_path (str): [description]. Defaults to "".
        output_folder (str, optional): [description]. Defaults to "".
        output_file_name (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status].
    """
    return pdf.pdf_extract_all_tables(pdf_file_path, output_folder, output_file_name)
# [status]

# ---------  PDF Functions Ends ---------


# ---------  Mail Functions ---------

def mail_send_via_desktop_outlook(to_email_id="", subject="", message="", attachment_path=""):
    """
    Send email using Outlook from Desktop email application
    Args:
        to_email_id (str): [description]. Defaults to "".
        subject (str): [description]. Defaults to "".
        message (str): [description]. Defaults to "".
        attachment_path (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]
    """
    return mail.email_send_via_desktop_outlook(to_email_id, subject, message, attachment_path)
# [status]


def mail_send_gmail_with_app_password(gmail_username="", gmail_app_password="", to_email_id="", subject="", message="", attachment_path=""):
    """
    Send email using Gmail with App Password
    Args:
        gmail_username (str): [description]. Defaults to "".
        gmail_app_password (str): [description]. Defaults to "".
        to_email_id (str): [description]. Defaults to "".
        subject (str): [description]. Defaults to "".
        message (str): [description]. Defaults to "".
        attachment_path (str, optional): [description]. Defaults to "".

    Returns:
        [bool]: [status]
    """
    return mail.send_gmail_using_app_password(gmail_username, gmail_app_password, to_email_id, subject, message, attachment_path)
# [status]

# ---------  Mail Functions Ends ---------


# ---------  Converters Functions ---------

def convert_change_corrupt_xls_to_xlsx(input_file='', input_sheetname='', output_folder='', output_filename=''):
    '''
        Repair corrupt file to regular file and then convert it to xlsx.
        Args:
            input_file (str): [description]. Defaults to "".
            input_sheetname (str): [description]. Defaults to "".
            output_folder (str, optional): [description]. Defaults to "".
            output_filename (str, optional): [description]. Defaults to "".
        Returns:
            [bool]: [status]
    '''
    return converters.excel_change_corrupt_xls_to_xlsx(input_file, input_sheetname, output_folder, output_filename)
# [status]


def convert_base64_to_img(imgBase64Str="", img_folder_path="", img_file_name=""):
    """
    Convert base64 string to image and save it to the given folder path.
    Args:
        imgFileName (str, optional): [description]. Defaults to "".
        imgBase64Str (str, optional): [description]. Defaults to "".
        img_folder_path (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]
    """
    return converters.get_image_from_base64(imgBase64Str, img_folder_path, img_file_name)
# [status]


def convert_csv_to_excel(csv_path="", sep=",", excel_output_folder_path="", excel_file_name=""):
    """
    Convert csv file to excel file.
    Args:
        csv_path (str): [description]. Defaults to "".
        sep (str): [description]. Defaults to "".
        excel_output_folder_path (str, optional): [description]. Defaults to "".
        excel_file_name (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]
    """
    return converters.convert_csv_to_excel(csv_path, sep, excel_output_folder_path, excel_file_name)
# [status]


def convert_xls_to_xlsx(input_file='', output_folder='', output_filename=''):
    """
    Converts given XLS file to XLSX
    Args:
        input_file (str, optional): [description]. Defaults to "".
        output_folder (str, optional): [description]. Defaults to "".
        output_filename (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]
    """
    return converters.excel_convert_xls_to_xlsx(input_file, output_folder, output_filename)
# [status]


def convert_jpg_to_png(input_image_path="", output_folder_path=""):

    # Description:
    """
   Convert the image from jpg to png

    Args:
        input_image_path (str): The path of the input image
        output_folder_path (str): The path of the output folder

    Returns:
        [bool]: Whether the function is successful or failed.
    """
    return converters.convert_image_jpg_to_png(input_image_path, output_folder_path)
# [status]


def convert_png_to_jpg(input_image_path="", output_folder_path=""):

    # Description:
    """
   Convert the image from png to jpg

    Args:
        input_image_path (str): The path of the input image
        output_folder_path (str): The path of the output folder

    Returns:
        [bool]: Whether the function is successful or failed.
    """
    return converters.convert_image_png_to_jpg(input_image_path, output_folder_path)
# [status]


def convert_excel_to_colored_html(input_filepath="", output_folder="", output_filename=""):

    # Description:
    """
    Converts given Excel to HTML preserving the Excel format and saves in same folder as .html
    Args:
        input_filepath (str): The path of the input Excel file
        output_folder (str): The path of the output folder
        output_filename (str): The name of the output file
    Returns:
        [bool]: Whether the function is successful or failed.
    """
    return converters.excel_to_colored_html(input_filepath, output_folder, output_filename)
# [status]


def convert_image_to_base64(input_file=""):
    """
    Description:
        Convert image to base64 string.
    Args:
        input_file (str, optional): [description]. Defaults to "".
    Returns:
        [bool, str]: [status, base64_string]

    """
    return converters.convert_image_to_base64(input_file)
# [status, data]

# ---------  Converters Functions Ends ---------


# ---------  Images Functions ---------

def img_camera_capture(folder_path="", file_name=""):
    """
    Capture an image from the camera and save it to the given folder path.
    Args:
        folder_path (str): The folder path to save the image.
        file_name (str): The file name to save the image.
    Returns:
        str: The full path of the image.
    """
    return images.camera_capture_image(folder_path, file_name)
# [status]

# ---------  Images Functions Ends ---------


# ---------  Messages Functions ---------

def msg_box_info(msg_for_user=""):
    """
    Message box to show info to the user.
    Args:
        msg_for_user (str): [description]

    Returns:
        [bool]: [status]
    """
    return messages.msg_box_info(msg_for_user)
# [status]


def msg_box_ask_yes_no(msg_for_user=""):
    """
    Message box to ask user to confirm something.
    Args:
        msg_for_user (str): [description]
    Returns:
        [bool]: [response] Whether the user has clicked yes(True) or no(False).
    """
    return messages.msg_box_ask_yes_no(msg_for_user)
# [status]


def msg_count_down(msg_for_user="", default_time=5):
    """
    Message box to show a countdown timer.
    Args:
        msg_for_user (str): [description]
        default_time (int, optional): [description]. Defaults to 5.
    Returns:
        [bool]: [status] 
    """
    return messages.msg_count_down(msg_for_user, default_time)
# [status]

# ---------  Messages Functions Ends ---------


# --------- Data Science Functions ---------

def ds_html_table_from_website(website_url="", output_folder=""):
    """
    Web Scrape HTML Tables : Gets Website Table Data Easily as an Excel using Pandas. Just pass the URL of Website having HTML Tables.
    Args:
        website_url (str): URL of the website.
        output_folder (str): Folder path to save the Excel file.
    Returns:
        [bool]: [status]
    """
    return datascience.browser_get_html_tabular_data_from_website(website_url, output_folder)
# [status]


def ds_describe_excel_data(input_filepath="", input_sheetname='Sheet1', header=0):
    """
    Describe statistical data for the given excel
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str, optional): [description]. Defaults to "Sheet1".
        header (int, optional): [description]. Defaults to 0.
    Returns:
        [bool]: [status]
    """
    return datascience.excel_describe_data(input_filepath, input_sheetname, header)
# [status, data]


def ds_pivot_excel_table(input_filepath="", input_sheetname='Sheet1', header=0, rows=[], cols=[]):
    """
    Pivot the given excel table

    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        rows (list): [description]. Defaults to [].
        cols (list): [description]. Defaults to [].
    Returns:
        [bool]: [status]
    """
    return datascience.excel_drag_drop_pivot_table(input_filepath, input_sheetname, header, rows, cols)
# [status]


def ds_draw_charts_from_excel(input_filepath="", input_sheetname='Sheet1', header=0, x_col="", y_col="", chart_type='bar', title='PyBOTs Chart'):
    """
    Interactive data visualization function, which accepts excel file, X & Y column. 
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
        [bool]: [status]
    """
    return datascience.excel_draw_charts(input_filepath, input_sheetname, header, x_col, y_col, chart_type, title)
# [status]

# --------- Data Science Functions Ends ---------


# --------- Citrix Functions ---------

def citrix_window_clear_search():
    """
    Clears previously found text (ctrl+f highlight)
    Returns: [status]
    """
    return citrix.citrix_window_clear_search()
# [status]


def citrix_scrape_contents_by_search_copy_paste(highlight_text=""):
    """
    Scrapes the contents of the highlighted text.
    Parameters:
        highlight_text  (str) : text to be highlighted.
    Returns: [status,data]
        data (str) : scraped text.
    """
    return citrix.citrix_scrape_contents_by_search_copy_paste(highlight_text)
# [status,data]

# --------- Citrix Functions Ends ---------


# ---------  Excel Functions ---------


def excel_copy_range_from_sheet(input_filepath="", input_sheetname='Sheet1', start_col=1, start_row=1, end_col=1, end_row=1):

    # Description:
    """
    Copies the specific range from the provided excel sheet and returns copied data as a list
    Parameters:
        input_filepath :"Full path of the excel file with double slashes"
        input_sheetname     :"Source sheet name from where contents are to be copied"
        start_col          :"Starting column number (index starts from 1) from where copying starts"
        start_row          :"Starting row number (index starts from 1) from where copying starts"
        end_col            :"Ending column number ex:4 upto where cells to be copied"
        end_row            :"Ending column number ex:5 upto where cells to be copied"

    Returns:
        [status,data]
        data (list) : copied data as a list

    """
    return excel.excel_copy_range_from_sheet(input_filepath, input_sheetname, start_col, start_row, end_col, end_row)
# [status, data]
# data = [['A1', 'B1', 'C1'], ['A2', 'B2', 'C2'], ['A3', 'B3', 'C3']]


def excel_get_single_cell(input_filepath="", input_sheetname="Sheet1", header=0, column_name="", cell_number=0):
    """
    Description:
    Gets the text from the desired column/cell number of the given excel file
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        column_name (str): [description]. Defaults to "".
        cell_number (int): [description]. Defaults to 0.
    Returns:
        [status, data]
        data (str): Data from the given cell.


    """
    return excel.excel_get_single_cell(input_filepath, input_sheetname, header, column_name, cell_number)
# [status, data]
# data = 'text'


def excel_paste_range_to_sheet(input_filepath="", input_sheetname='Sheet1', start_col=0, start_row=0, copied_data=[]):

    # Description:
    """
    Pastes the copied data in specific range of the given excel sheet.
    """
    return excel.excel_paste_range_to_sheet(input_filepath, input_sheetname, start_col, start_row, copied_data)
# [status]


def excel_set_single_cell(input_filepath="", input_sheetname="Sheet1", header=0, column_name="", cell_number=1, text=""):
    """
    Description:
        Writes the given text to the desired column/cell number for the given excel file
    Args:
        input_filepath (str) : Complete path to the excel file.
        input_sheetname (str) : Sheet name of the excel file.
        header (int)         : Row number of the header.
        column_name (str)    : Column name of the excel file.
        cell_number (int)    : Cell number of the excel file.
        text (str)           : Text to be written in the excel file.
    Returns:
        bool : [status] Whether the operation is successful or not.
    """
    return excel.excel_set_single_cell(input_filepath, input_sheetname, header, column_name, cell_number, text)
# [status]


def excel_get_all_header_columns(input_filepath="", input_sheetname="Sheet1", header=0):

    # Description:
    """
    Gives you all column header names of the given excel sheet.
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
    Returns:
        [status, data]
        data (list) : List of all column header names.
    """
    return excel.excel_get_all_header_columns(input_filepath, input_sheetname, header)
# [status, data]
# data = ['column1', 'column2', 'column3']


def excel_get_row_column_count(input_filepath="", input_sheetname="Sheet1", header=0):

    # Description:
    """
    Gets the row and column count of the provided excel sheet.

    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
    Returns:
        [status, data]
        data (list) : [row_count, column_count]
    """
    return excel.excel_get_row_column_count(input_filepath, input_sheetname, header)
# [status, data]
# data = [row, col]


def excel_get_all_sheet_names(input_filepath=""):
    # Description:
    """
    Gives you all names of the sheets in the given excel sheet.

    Args:
        input_filepath  (str) : Full path to the excel file with slashes.
    Returns:
        [status, data]
        data (list) : List of all sheet names.
    """
    return excel.excel_get_all_sheet_names(input_filepath)
# [status, data]
# data = ['sheet1', 'sheet2', 'sheet3']


def excel_remove_duplicates(input_filepath="", input_sheetname="Sheet1", header=0, column_name="", same_file=True, output_folder="", output_filename=""):

    # Description:
    """
    Removes the duplicates from the given excel sheet.
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        column_name (str): [description]. Defaults to "".
        same_file (bool): [Whether to write the output to the same file or not]. Defaults to True.
        output_folder (str): [description]. Defaults to "".
        output_filename (str): [description]. Defaults to "".
    Returns:
        [status]
    """
    return excel.excel_remove_duplicates(input_filepath, input_sheetname, header, column_name, same_file, output_folder, output_filename)
# [status]


def excel_group_by_column_values_n_split(input_filepath="", input_sheetname='Sheet1', header=0, column_name="", output_folder="", output_filename=""):

    # Description:
    """
    Splits the excel file by Column Name
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        column_name (str): [description]. Defaults to "".
        output_folder (str): [description]. Defaults to "".
        output_filename (str): [description]. Defaults to "".
    Returns:
        [status]

    """
    return excel.excel_group_by_column_values_n_split(input_filepath, input_sheetname, header, column_name, output_folder, output_filename)
# [status]


def excel_drop_columns(input_filepath="", input_sheetname='Sheet1', header=0, cols=""):

    # Description:
    """
    Drops the desired column from the given excel file
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        cols (str): [description]. Defaults to "".
    Returns:
        [status]
    """
    return excel.excel_drop_columns(input_filepath, input_sheetname, header, cols)
# [status]


def excel_clear_sheet(input_filepath="", input_sheetname="Sheet1", header=0):

    # Description:
    """
    Clears the contents of given excel files keeping header row intact
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
    Returns:
        [status]
    """
    return excel.excel_clear_sheet(input_filepath, input_sheetname, header)
# [status]


def excel_if_value_exists(input_filepath="", input_sheetname='Sheet1', header=0, cols="", value=""):

    # Description:
    """
    Check if a given value exists in given excel.
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        cols (str): [description]. Defaults to "".
        value (str): [description]. Defaults to "".
    Returns:
        [status]
    """
    return excel.excel_if_value_exists(input_filepath, input_sheetname, header, cols, value)
# [status]


def excel_create_file(output_folder="", output_filename="", output_sheetname="Sheet1"):
    """
    Create a Excel file in output_folder with filename.
    Args:
        output_folder (str): [description]. Defaults to "".
        output_filename (str): [description]. Defaults to "".
        output_sheetname (str): [description]. Defaults to "Sheet1".
    Returns:
        [status]
    """
    excel.excel_create_file(output_folder, output_filename, output_sheetname)
# [status]


def excel_merge_all_files(input_folder_path="", output_folder="", output_filename=""):

    # Description:
    """
    Merges all the excel files in the given folder
    Args:
        input_folder_path (str): [description]. Defaults to "".
        output_folder (str): [description]. Defaults to "".
        output_filename (str): [description]. Defaults to "".
    Returns:
        [status]
    """
    return excel.excel_merge_all_files(input_folder_path, output_folder, output_filename)
# [status]


def isNaN(value=""):

    # Description:
    """
    Returns TRUE if a given value is NaN False otherwise
    Args:
        value (str): [description]. Defaults to "".
    Returns:
        [status]
    """
    return excel.isNaN(value)
# [status]


def excel_apply_format_as_table(input_filepath="", input_sheetname='Sheet1'):
    '''
        Applies table format to the used range of the given excel.
        Args:
            input_filepath (str): [description]. Defaults to "".
            input_sheetname (str): [description]. Defaults to "Sheet1"
        Returns:
            [status] - True if successful, False otherwise  
     '''
    return excel.excel_apply_format_as_table(input_filepath, input_sheetname)
# [status]


def excel_apply_template_format(input_filepath='', input_sheetname='Sheet1', input_template_filepath='', input_template_sheetname="Sheet1", same_file=True, output_folder="", output_filename=""):
    """
    Applies the format of the given template excel to the given excel.
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        input_template_filepath (str): [description]. Defaults to "".
        input_template_sheetname (str): [description]. Defaults to "Sheet1".
        same_file (bool): [Whether to write the output to the same file or not]. Defaults to True.
        output_folder (str): [description]. Defaults to "".
        output_filename (str): [description]. Defaults to "".
    Returns:
        [status]
    """
    return excel.excel_apply_template_format(input_filepath, input_sheetname, input_template_filepath, input_template_sheetname, same_file, output_folder, output_filename)
# [status]


# ---------  Excel Functions Ends ---------


# ---------  Mouse Functions ---------


def mouse_click(x='5', y='5', left_or_right="left", no_of_clicks=1, type_of_movement="abs"):
    """Clicks at the given X Y Co-ordinates on the screen using single / double / triple click(s). Default clicks on current position.
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
        bool: Whether the function is successful or failed.
    """
    return mouse.mouse_click(x, y, left_or_right, no_of_clicks, type_of_movement)


def mouse_move(x="5", y="5", type_of_movement="abs"):
    """Moves the cursor to the given X Y Co-ordinates.
    Args:
        x (int): x-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        y (int): y-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        type_of_movement (str, optional): Type of movement.
    Returns: [status]
        bool: Whether the function is successful or failed.
    """
    return mouse.mouse_move(x, y, type_of_movement)


def mouse_drag_from_to(x1="5", y1="5", x2="10", y2="10"):
    """Clicks and drags from x1 y1 co-ordinates to x2 y2 Co-ordinates on the screen
    Args:
        x1 or x2 (int): x-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        y1 or y2 (int): y-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        delay (float, optional): Seconds to wait while performing action. 
        Eg: 1 or 0.5, Defaults to 0.5.
    Returns: [status]
        bool: Whether the function is successful or failed.
    """
    return mouse.mouse_drag_from_to(x1, y1, x2, y2)


def mouse_search_snip_return_coordinates_x_y(img="", wait=180):
    """Searches the given image on the screen and returns its center of X Y co-ordinates.
    Args:
        img (str, optional): Path of the image. 
        Eg: D:\Files\Image.png, Defaults to "".
        wait (int, optional): Time you want to wait while program searches for image repeatably.
        Eg: 10 or 100 Defaults to 180.
    Returns: [status,data]
        bool: If function is failed returns False.
        tuple (x, y): Image Center co-ordinates.
    """
    return mouse.mouse_search_snip_return_coordinates_x_y(img, wait)


# ---------  Mouse Functions Ends ---------


# ---------  Keyboard Functions ---------

def key_press(key_1='', key_2='', key_3='', write_to_window=""):
    """Emulates the given keystrokes.
    Args:
        key_1 (str, optional): Enter the 1st key 
        Eg: ctrl or shift. Defaults to ''.
        key_2 (str, optional): Enter the 2nd key in combination. 
        Eg: alt or A. Defaults to ''.
        key_3 (str, optional): Enter the 3rd key in combination. 
        Eg: del or tab. Defaults to ''.
        write_to_window (str, optional): (Only in Windows) Name of Window you want to activate. Defaults to "".
    Returns: [status]
        bool: Whether the function is successful or failed.
    """
    return keyboard.key_press(key_1, key_2, key_3, write_to_window)


def key_write_enter(text_to_write="Clointfusion is awesome", write_to_window="", delay_after_typing=1, key="e"):
    """Writes/Types the given text.
    Args:
        text_to_write (str, optional): Text you wanted to type
        Eg: ClointFusion is awesone. Defaults to "".
        write_to_window (str, optional): (Only in Windows) Name of Window you want to activate
        Eg: Notepad. Defaults to "".
        delay_after_typing (int, optional): Seconds in time to wait after entering the text
        Eg: 5. Defaults to 1.
        key (str, optional): Press Enter key after typing.
        Eg: t for tab. Defaults to e
    Returns: [status]
        bool: Whether the function is successful or failed.
    """
    return keyboard.key_write_enter(text_to_write, write_to_window, delay_after_typing, key)


def key_hit_enter(write_to_window=""):
    """Enter key will be pressed once.
    Args:
        write_to_window (str, optional): (Only in Windows)Name of Window you want to activate.
        Eg: Notepad. Defaults to "".
    Returns:[status]
        bool: Whether the function is successful or failed.
    """
    return keyboard.key_hit_enter(write_to_window)


# --------- Keyboard Functions Ends ---------


# ---------  Browser Functions ---------

ChromeBrowser = chrome.ChromeBrowser

# ---------  Browser Functions Ends ---------


# ---------  Folder Functions Starts ---------

def folder_read_text_file(txt_file_path=""):
    """
    Reads from a given text file and returns entire contents as a single list
    Args:
        txt_file_path (str, optional): Path of the text file.
        Eg: D:\Files\Text.txt, Defaults to "".
    Returns: [status,data]
        bool: If function is failed returns False.
        list: Text file contents.
    """
    return folder.folder_read_text_file(txt_file_path)


def folder_write_text_file(txt_file_path="", contents=""):
    """
    Writes given contents to a text file
    Args:
        txt_file_path (str, optional): Path of the text file.
        Eg: D:\Files\Text.txt, Defaults to "".
        contents (str, optional): Text you want to write to the text file.
        Eg: ClointFusion is awesone. Defaults to "".
    Returns: [status]
        bool: Whether the function is successful or failed.
    """
    return folder.folder_write_text_file(txt_file_path, contents)


def folder_create(strFolderPath=""):
    """
    Creates a folder at the given path
    Args:
        strFolderPath (str, optional): Path of the folder.
        Eg: D:\Files\Text.txt, Defaults to "".
    Returns: [status]
        bool: Whether the function is successful or failed.
    """
    return folder.folder_create(strFolderPath)


def folder_create_text_file(textFolderPath="", txtFileName=""):
    """
    Creates a text file at the given path
    Args:
        textFolderPath (str, optional): Path of the folder.
        Eg: D:\Files\Text.txt, Defaults to "".
        txtFileName (str, optional): Name of the text file.
        Eg: Text.txt, Defaults to "".
    Returns: [status]
        bool: Whether the function is successful or failed.
    """
    return folder.folder_create_text_file(textFolderPath, txtFileName)


def folder_get_all_filenames_as_list(strFolderPath="", extension='all'):
    """
    Get all the files of the given folder in a list.
    Parameters:
        strFolderPath  (str) : Location of the folder.
        extension      (str) : extention of the file. by default all the files will be listed regardless of the extension.
    returns: [status,data]
        allFilesOfaFolderAsLst (List) : all the file names as a list.
    """
    return folder.folder_get_all_filenames_as_list(strFolderPath, extension)


def folder_delete_all_files(fullPathOfTheFolder="", file_extension_without_dot="all", print_status=True):
    """
    Deletes all the files of the given folder
    Parameters:
        fullPathOfTheFolder  (str) : Location of the folder.
        extension            (str) : extension of the file. by default all the files will be deleted inside the given folder
                                    regardless of the extension.
    returns:[status]
        bool: Whether the function is successful or failed.
    """
    return folder.folder_delete_all_files(fullPathOfTheFolder, file_extension_without_dot, print_status)


def file_rename(old_file_path='', new_file_name='', print_status=True):
    '''
    Renames the given file name to new file name with same extension
    Args:
        old_file_path (str, optional): Path of the file.
        Eg: D:\Files\Text.txt, Defaults to "".
        new_file_name (str, optional): New name of the file.
        Eg: Text.txt, Defaults to "".
        print_status (bool, optional): Whether to print the status of the function. Defaults to True.
    Returns: [status]
        bool: Whether the function is successful or failed.
    '''
    return folder.file_rename(old_file_path, new_file_name, print_status)


def file_get_json_details(path_of_json_file='', section=''):
    '''
    Returns all the details of the given section in a dictionary
    Args:
        path_of_json_file (str, optional): Path of the json file.
        Eg: D:\Files\Text.txt, Defaults to "".
        section (str, optional): Section of the json file.
        Eg: Text.txt, Defaults to "".
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: Data of the given section in a dictionary.
    '''
    return folder.file_get_json_details(path_of_json_file, section)

# ---------  Folder Functions Ends ---------


# ---------  Window Operations Functions ---------

def windows_show_desktop():
    """
    Minimizes all the applications and shows Desktop.
    Returns:
        bool: Whether the function is successful or failed.
    """
    return windows.window_show_desktop()


def windows_launch_app(pathOfExeFile=""):
    """Launches any exe or batch file or excel file etc.
    Args:
        pathOfExeFile (str, optional): Location of the file with extension
        Eg: Notepad, TextEdit. Defaults to "".
    Returns:
        bool: Whether the function is successful or failed.

    """
    return windows.launch_any_exe_bat_application(pathOfExeFile)


def window_get_active_window():
    """
    Returns the active window title.
    Returns : [status,data]
        status: Whether the function is successful or failed.
        data: Active window title.
    """
    return windows.window_get_active_window()


def window_activate_window(window_title=''):
    """
    Activates the given window.
    Args:
        window_title (str, optional): Title of the window.
        Eg: Notepad, TextEdit. Defaults to "".
    Returns:
        bool: Whether the function is successful or failed.
    """

    return windows.window_activate_window(window_title)


def window_get_all_opened_titles_windows():
    """
    Gives the title of all the existing (open) windows.
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: List of all the opened windows titles.
    """
    return windows.window_get_all_opened_titles_windows()


def window_restore_windows(windowName=""):
    """
    Restores the given window.
    Args:
        windowName (str, optional): Name of the window you want to restore.
        Eg: Notepad. Defaults to "".
    Returns: [status]
    """
    return windows.window_restore_windows(windowName)


def window_activate_and_maximize_windows(windowName=""):
    """
    Activates and maximizes the desired window.
    Parameters:
        windowName  (str) : Name of the window to maximize.
    Returns: [status]
    """
    return windows.window_activate_and_maximize_windows(windowName)


def window_minimize_windows(windowName=""):
    """
    Activates and minimizes the desired window.
    Parameters:
        windowName  (str) : Name of the window to miniimize.
    Returns: [status]
    """
    return windows.window_minimize_windows(windowName)


def window_close_windows(windowName=""):
    """
    Close the desired window.
    Args:
        windowName (str, optional): Name of the window you want to close.
        Eg: Notepad. Defaults to "".
    Returns: [status]    
    """
    return windows.window_close_windows(windowName)


# ---------  Window Operations Functions Ends ---------


# ---------  String Functions ---------

def string_extract_only_alphabets(inputString=""):
    """
    Returns only alphabets from given input string
    Args:
        inputString (str, optional): Input string. Defaults to "".
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: Only alphabets from given input string.
    """
    return string.string_extract_only_alphabets(inputString)


def string_extract_only_numbers(inputString=""):
    """
    Returns only numbers from given input string
    Args:
        inputString (str, optional): Input string. Defaults to "".
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: Only numbers from given input string.
    """
    return string.string_extract_only_numbers(inputString)


def string_remove_special_characters(inputStr=""):
    """
    Removes all the special character.
    Parameters:
        inputStr  (str) : string for removing all the special character in it.
    Returns : [status,data]
        outputStr (str) : returns the alphanumeric string
    """

    return string.string_remove_special_characters(inputStr)

# ---------  String Functions Ends ---------


# --------- Screenscraping Functions ---------

# "Full path to the folder (with double slashes) where notepad is to be stored"
def scrape_save_contents_to_notepad(folderPathToSaveTheNotepad="", switch_to_window="", X=0, Y=0):
    """
    Copy pastes all the available text on the screen to notepad and saves it.
    Args:
        folderPathToSaveTheNotepad (str, optional): Full path to the folder (with double slashes) where notepad is to be stored.
        Eg: D:\Files\Text.txt, Defaults to "".
        switch_to_window (str, optional): Name of the window to switch to.
        Eg: Notepad. Defaults to "".
        X (int, optional): X coordinate of the mouse. Defaults to 0.
        Y (int, optional): Y coordinate of the mouse. Defaults to 0.
    Returns: [status]
        bool: Whether the function is successful or failed.
    """
    return screen_scraping.scrape_save_contents_to_notepad(folderPathToSaveTheNotepad, switch_to_window, X, Y)


def screen_clear_search(delay=0.2):
    """
    Clears previously found text (crtl+f highlight)
    Returns: [status]
    """
    return screen_scraping.screen_clear_search(delay)

# --------- Screenscraping Functions Ends ---------


# --------- Voice Interface ---------

def text_to_speech(audio, show=True):
    """
    Text to Speech using Google's Generic API
    Args:
        audio (str): Text to be converted to speech.
        show (bool, optional): Whether to show the audio. Defaults to True.
    Returns: [status]
        bool: Whether the function is successful or failed.
    """
    return voice.text_to_speech(audio, show)


def speech_to_text():
    """
    Speech to Text using Google's Generic API
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: Text converted from speech.
    """
    return voice.speech_to_text()

# --------- Voice Interface Ends ---------


# --------- API Functions ---------

#     ---- OCR Function ----

def image_to_text(img_path=""):
    """
    Reads the text from the image.
    Args:
        img_path (str, optional): Path of the image. 
        Eg: D:\Files\Image.png, Defaults to "".
    Returns: [status,data]
        bool: If function is failed returns False.
        str: Text from image.
    """
    return utility.image_to_text(img_path)

# --------- API Functions Ends ---------
