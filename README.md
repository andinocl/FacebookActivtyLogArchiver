# FacebookActivtyLogArchiver
JavaScript functions to automate bulk archive of Facebook activity log

## Use
1. Navigate to the Facebook Activity Log page (Settings -> Privacy -> Activity Log)
2. Take top item and hit the three dots to the right of it.  A menu will appear, inspect the element for the "Move to archive" option.
3. Find the class of the <i> tag above the <div>.  Paste that into the var archiveButton declaration
4. Run fbArchive(loops).  

FB loads 25 records at a time. This was a little more set it and forget it than archiving 25 at a time. Would crash around 400, though.
