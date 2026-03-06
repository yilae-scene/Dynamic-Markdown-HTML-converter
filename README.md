# 📝 Markdown to HTML Live Converter

![JavaScript](<img width="500" height="500" alt="javascript" src="https://github.com/user-attachments/assets/4396535d-8d5e-41f2-bd68-ece9ffaa1973" />
)
![HTML5](<img width="500" height="500" alt="html" src="https://github.com/user-attachments/assets/69f2477c-dcfd-4398-98ba-a558c9dbf625" />
)
![CSS3](<img width="500" height="500" alt="css" src="https://github.com/user-attachments/assets/7eec58e4-73e8-42c4-acfb-afe9e5bfd72b" />
)

A sleek, **real-time Markdown parser** built with Vanilla JavaScript and Regular Expressions. This tool allows users to type Markdown and instantly see both the **Rendered Preview** and the **Raw HTML code**.

---

## 🚀 Features

*   ⚡ **Instant Conversion**: Updates as you type using the `input` event listener.
*   🔍 **Dual Output**: View the visual preview and the raw HTML string simultaneously.
*   📱 **Responsive Design**: Uses CSS Flexbox and Media Queries for a seamless experience on desktop and mobile.
*   🛠 **Regex-Powered**: Custom-built regular expressions for precision parsing.

---

## 🛠 Supported Syntax


| Element | Markdown | HTML Output |
| :--- | :--- | :--- |
| **Headings** | `# Level 1` to `###### Level 6` | `<h1>` to `<h6>` |
| **Bold** | `**text**` or `__text__` | `<strong>text</strong>` |
| **Italic** | `*text*` or `_text_` | `<em>text</em>` |
| **Quotes** | `> This is a quote` | `<blockquote>quote</blockquote>` |
| **Links** | `[Link Text](url)` | `<a href="url">Link Text</a>` |
| **Images** | `![Alt Text](image-url)` | `<img src="url" alt="alt">` |

---

## 📂 Project Structure

text
├── index.html   # Semantic UI structure
├── styles.css   # Flexbox layout & responsive styling
└── script.js    # Regex logic & DOM manipulation

#previews
<img width="1828" height="874" alt="screen_shot1" src="https://github.com/user-attachments/assets/3923fedb-3686-450d-a83e-2a9ab1f1c8fd" />

💡 How It Works
The converter uses a chaining method within the convertMarkdown() function. Each Markdown element is identified by a specific Regular Expression and replaced with its corresponding HTML tag:
javascript
// Example: Heading Regex
// Matches 1-6 '#' characters at the start of a line
let headingReg = /^[ \t]*(#{1,6})[ \t]+(.*)$/gm;

Capture: The regex groups the hashes (#) and the text content.
Calculate: The number of hashes determines the heading level (h1 through h6).
Render: Returns a fully formatted HTML string to the UI.

🤝 Contributing
Contributions are welcome! If you have ideas for new features (like code blocks, tables, or lists), feel free to:
Fork the Project.
Create a Feature Branch.
Open a Pull Request.
Developed with ❤️ by [Yilikal Ayalew]

