# **Module 2: Advanced Data & Grid Engines**.

This is the "Engine Room" of the **Unicorn P** platform. These elements are not just visual tables; they are state-managed proxies for your MariaDB tables. They handle data fetching, pagination, and sorting automatically.

---

### **2.1 `<up-fullgrid>` / `<up-grid>`**

The most powerful data manipulation engine in the library. It bridges a `sys_object` definition to a high-performance interactive table.

- **Key Attributes:**
  
  - `object`: The name of the `sys_object` providing the data logic.
  
  - `basedon`: A list of IDs (e.g., `search_input, branch_select`). The grid auto-refreshes whenever these elements change value.
  
  - `crud`: Permission string. `C`=Create, `R`=Read, `U`=Update, `D`=Delete (e.g., `crud="CRUD"` or `crud="_R__"`).
  
  - `select`: (Boolean) Adds a checkbox column for bulk operations.
  
  - `fill`: (Boolean) Forces the grid to expand to the bottom of the screen.

- **Developer Recipe (Emmet):**
  
  JavaScript
  
  ```
  // A searchable ledger grid that fills the screen
  up-text#search[placeholder="Search..."]
  +up-fullgrid#ledger[object="acc_ledger" basedon="search" fill select crud="CRUD"]
  ```

---

### **2.2 `<up-spreadsheet>`**

An Excel-like data entry interface. Unlike the standard grid, this is optimized for **high-speed keyboard entry** and multi-cell manipulation.

- **Key Attributes:**
  
  - `columns`: Definition of column types (text, number, date) and their bindings.
  
  - `onchange`: JS hook to run calculations (like tax or totals) when a cell value changes.

- **Behavior:** It creates a temporary data buffer. When the user hits "Save," it sends the entire data array to the backend `api` as a JSON payload.

- **Developer Recipe:**
  
  JavaScript
  
  ```
  // A grid for manual journal entries
  up-spreadsheet#journal[columns="account_id,debit,credit,memo"]
  ```

---

### **2.3 `<up-tree>` / `<up-fulltree>`**

Visualizes recursive or hierarchical data structures. `up-fulltree` includes expanded state management and "drag-and-drop" capabilities for reorganizing nodes.

- **Key Attributes:**
  
  - `api`: The endpoint returning the recursive JSON (e.g., `id, parent_id, label`).
  
  - `icons`: (Boolean) Displays folder/file icons based on node type.

- **Usage:** Perfect for the **Chart of Accounts** or **File Directories**.

- **Developer Recipe:**
  
  JavaScript
  
  ```
  up-fulltree#accountChart[api="acc_chart:tree_data" label="Company Accounts"]
  ```

---

### **2.4 `<up-gridlov>`**

A sophisticated hybrid. To the user, it looks like a dropdown or text box. When clicked, it opens a **searchable modal grid**.

- **Key Attributes:**
  
  - `object`: The grid object to show in the popup.
  
  - `display`: Which field from the selected row to show in the text box.
  
  - `value`: Which field to use as the ID (stored in the background).

- **Behavior:** It solves the "Too many options" problem. If you have 5,000 customers, a standard dropdown is too slow; `up-gridlov` allows the user to search the grid and "pick" a customer.

- **Developer Recipe:**
  
  JavaScript
  
  ```
  up-gridlov#customer_id[object="sys_party" display="name" value="id" label="Select Customer"]
  ```

---

### **2.5 `<up-listing>`**

A mobile-optimized alternative to the grid. Instead of rows and columns, it renders data as a vertical stack of "cards."

- **Key Attributes:**
  
  - `template`: The Emmet or HTML snippet used to render each card.
  
  - `api`: The data source.

- **Usage:** Use this for **mobile views** or "Recent Activity" sidebars where a full table would be too cramped.

- **Developer Recipe:**
  
  JavaScript
  
  ```
  // A card-based list of recent invoices
  up-listing#recentInvoices[api="acc_invoice:recent" template="(div.card>up-label[value='@inv_no']+up-label[value='@total'])"]
  ```

---

### **Architect's Tip for Module 2:**

Remind developers that **`basedon` is the "Secret Sauce."** It eliminates the need for manual `addEventListener('change', ...)` calls. By simply naming the filter IDs in the `basedon` attribute, the platform handles all data synchronization automatically.

**Ready to proceed to Module 3: Enterprise Form Fields (Inputs)?**
