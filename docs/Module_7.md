# Module 7: Charts and Reports

This module focuses on the "Output" phase of the information system. After data is captured and processed, **Module 7** allows developers to transform raw MariaDB rows into high-level business intelligence and professional financial documents.

---

### **7.1 `<up-chart>`**

A powerful data visualization component that renders interactive charts. It is designed to sit at the top of dashboards to provide an immediate overview of financial health.

- **Key Attributes:**
  
  - `type`: The visual format (`"bar"`, `"line"`, `"pie"`, `"doughnut"`).
  
  - `api`: The backend endpoint that returns a JSON array of labels and values.
  
  - `colors`: (Optional) A comma-separated list of hex codes to override the theme.

- **Developer Recipe (Emmet):**
  
  Emmet code
  
  ```
  // A bar chart showing monthly sales from the ledger
  up-chart#salesChart[type="bar" api="acc_ledger:monthly_summary"]
  ```

---

### **7.2 `<up-report>` / `<up-reportf>`**

These elements are the "Print Engine" of Unicorn P. While grids are for editing, `<up-report>` is for generating **A4-ready, printable documents** like Invoices, Balance Sheets, and Profit & Loss statements.

- **`<up-report>`**: The main container that handles pagination, headers, and footers.

- **`<up-reportf>`**: (Report Field) A specialized cell within a report that handles specific formatting (e.g., forcing a negative number to appear in red or in parentheses).

- **Key Attributes:**
  
  - `template`: The name of the `sys_object` containing the report's HTML/Emmet structure.
  
  - `export`: (Boolean) Enables "Export to PDF" and "Export to Excel" buttons.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  // Generating a printable Invoice
  up-report#inv_print[object="acc_invoice" template="invoice_template" export]
  ```

---

### **7.3 `<up-display>` / `<up-celldisplay>`**

Used for high-density, read-only information displays. They are more efficient than input fields when the user only needs to view data.

- **`<up-display>`**: Used for standalone values (e.g., a "Total Balance" badge at the top of a screen).

- **`<up-celldisplay>`**: Used inside grids or lists to format data based on its type (e.g., turning a `0/1` into a `Yes/No` badge or formatting a currency).

- **Key Attributes:**
  
  - `type`: (`"currency"`, `"date"`, `"status"`, `"badge"`)
  
  - `value`: The raw data to be formatted.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  // A currency display for the total amount
  up-display#total_amount[type="currency" value="1500.50"]
  ```

---

### **Architect's Tip for Module 7:**

For **"Money & Gain,"** always offer your clients an "Export to Excel" option on every report. In your Backend JS API, when a user triggers an `<up-report>`, you can use the `sys_log` to track which reports are most used, helping you decide which features to charge more for in the future.

**Ready to move to Module 8: Workflow & Business Process (BPMN)?**
