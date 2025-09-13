# LinkedIn Details Chrome Extension

## Installation Instructions

### Prerequisites
- Git installed on your system
- Google Chrome browser

### Clone the Repository

1. **Open Terminal/Command Prompt**
   - On Windows: Use Command Prompt, PowerShell, or Git Bash
   - On Mac/Linux: Use Terminal

2. **Navigate to your desired directory**
cd /path/to/your/projects

text

3. **Clone the repository**
git clone https://github.com/vijaychaurasia007/Linkedin_details.git

text

4. **Navigate into the cloned directory**
cd Linkedin_details

text

5. **Verify files are present**
Ensure the folder contains `manifest.json` and other extension files

### Load as Chrome Extension

1. **Open Chrome Extensions page**
- Type `chrome://extensions` in your browser's address bar and press Enter
- Or go to Chrome menu → More Tools → Extensions

2. **Enable Developer Mode**
- Toggle the "Developer mode" switch in the top-right corner

3. **Load the extension**
- Click "Load unpacked" button
- Select the `Linkedin_details` folder you just cloned
- Make sure to select the folder containing `manifest.json`

4. **Confirm installation**
- The extension should appear in your extensions list
- Pin it to your toolbar for easy access

### Usage

After installation, the Chrome extension will be ready to use. Click on the extension icon in your browser toolbar to access its features.

### Development

If you make changes to the extension code:
1. Go to `chrome://extensions`
2. Click the circular reload icon next to the extension
3. The changes will be applied immediately

### Troubleshooting

- **"Could not load manifest" error**: Ensure `manifest.json` exists in the selected folder root
- **Can't select folder**: Make sure you're selecting the top-level directory containing `manifest.json`
- **Repository not found**: Double-check the repository URL spelling

## Tech Stack

- JavaScript (87.7%)
- HTML (7.3%)
- CSS (5.0%)



### Now you just have to visit any linked in profile and click on the extension and than click on Fetch Details and you get the details if they exist in hunter.io database
