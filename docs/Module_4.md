# Module 4: Specialized Date and Time and Calendar Controls

In professional enterprise systems, time is a critical data dimension. **Module 4** provides specialized controls to ensure that dates and schedules are captured accurately and consistently, preventing the common "formatting headaches" found in standard web development.

All elements in this module automatically interface with the **Golang backend** using standard ISO strings, ensuring your MariaDB `DATE` and `DATETIME` columns remain perfectly synced.

---

### **4.1 `<up-date>`**

The standard enterprise-grade date picker. It features a clean UI and supports keyboard shortcuts for rapid entry.

- **Key Attributes:**
  
  - `label`: Header text.
  
  - `icon`: Defaults to a calendar icon.
  
  - `value`: The initial date (YYYY-MM-DD).
  
  - `required`: Prevents form submission if empty.

- **Developer Recipe (Emmet):**
  
  JavaScript
  
  ```
  up-date#invoice_date[label="Invoice Date" value="now" required]
  ```

---

### **4.2 `<up-month>` / `<up-year>`**

Specialized pickers for accounting periods, financial reporting, or credit card expirations where specific days are irrelevant.

- **`<up-month>`**: Returns a `YYYY-MM` format.

- **`<up-year>`**: Returns a `YYYY` format.

- **Developer Recipe:**
  
  JavaScript
  
  ```
  // For a Financial Report Filter
  up-month#report_period[label="Fiscal Month"]
  +up-year#fiscal_year[label="Fiscal Year"]
  ```

---

### **4.3 `<up-time>`**

A precise time picker for tracking shifts, log entries, or appointment starts.

- **Key Attributes:**
  
  - `format`: Support for 12h or 24h display.
  
  - `step`: Controls the minute increments (e.g., `15` for quarter-hour slots).

- **Developer Recipe:**
  
  JavaScript
  
  ```
  up-time#check_in[label="Entry Time" step="5"]
  ```

---

### **4.4 `<up-calendar>` / `<up-event-calendar>`**

High-level views for visualizing data over a timeline.

- **`<up-calendar>`**: A standard interactive month/week view.

- **`<up-event-calendar>`**: Connects to an API to display "Events" (like your `hfzb_exam_center_schedule`).

- **Key Attributes:**
  
  - `api`: The endpoint providing the event JSON (expects `start`, `end`, `title`).
  
  - `view`: Default view mode (`month`, `week`, `day`).

- **Developer Recipe:**
  
  JavaScript
  
  ```
  // Visualizing the exam schedule
  up-event-calendar#schedule[api="hfzb_exam:get_schedule" view="month"]
  ```

---

### **Architect's Tip for Module 4:**

In your Backend JS API, remember that the platform treats these values as strings.

- Use `req.invoice_date` directly in your SQL `WHERE` clauses.

- For the **Accounting Module**, use `<up-month>` for "Closing Periods" to prevent users from accidentally selecting a specific day that doesn't align with your month-end logic.

**Ready to move to Module 5: Media & Visual Content?**
