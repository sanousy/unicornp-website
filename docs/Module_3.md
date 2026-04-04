# Module 3: Form input fields

This module covers the "Frontline" of data entry. In the **Unicorn P** ecosystem, every input field is more than just an HTML tag; it is a state-aware component that automatically maps its value to the `req` object in your Backend JS API.

All elements in this module support the standard `.upff` class for enterprise styling and the `icon` attribute for visual cues.

---

### **3.1 Text & Security**

#### **`<up-text>`**

The standard single-line input for alphanumeric data.

- **Key Attributes:** `label`, `placeholder`, `icon`, `required`, `maxlength`.

- **Recipe:** `up-text#username[label="Username" icon="user" required]`

#### **`<up-password>`**

A secure input field that masks characters and includes a built-in "eye" icon to toggle visibility.

- **Key Attributes:** `label`, `icon`.

- **Recipe:** `up-password#pwd[label="Password"]`

#### **`<up-textarea>`**

For multi-line text, such as notes, descriptions, or addresses.

- **Key Attributes:** `rows` (default is 3), `label`.

- **Recipe:** `up-textarea#notes[label="Internal Remarks" rows="5"]`

---

### **3.2 Numeric & Range**

#### **`<up-number>`**

A precise numeric input. It automatically prevents non-numeric characters and handles decimal precision.

- **Key Attributes:** `min`, `max`, `step` (e.g., `0.01` for currency), `label`.

- **Recipe:** `up-number#amount[label="Transaction Amount" step="0.001"]`

#### **`<up-range>`**

A horizontal slider for selecting a value within a specific bound.

- **Key Attributes:** `min`, `max`, `value`.

- **Recipe:** `up-range#priority[min="1" max="10" value="5"]`

---

### **3.3 Contact Info**

#### **`<up-phone>`**

An input specialized for phone numbers, often including automatic formatting or country code selection.

- **Key Attributes:** `label`, `icon="phone"`.

- **Recipe:** `up-phone#mobile[label="Mobile Number"]`

#### **`<up-email>`**

Includes built-in regex validation to ensure the input follows a standard email format before the form can be submitted.

- **Key Attributes:** `label`, `icon="envelope"`.

- **Recipe:** `up-email#contact[label="Email Address"]`

---

### **3.4 Selection & Toggles**

#### **`<up-lov>` (List of Values)**

The most important selection tool. It links directly to a database-driven list.

- **Key Attributes:** * `api`: The table/endpoint to fetch from (e.g., `sys_status:lov`).
  
  - `display`: The column to show the user.
  
  - `value`: The column to store in the DB.

- **Recipe:** `up-lov#status_id[label="Status" api="acc_status_lov:lov" display="name" value="id"]`

#### **`<up-select>`**

A standard dropdown for static or hardcoded options.

- **Recipe:** `up-select#gender[options="Male,Female,Other"]`

#### **`<up-checkbox>` / `<up-chkbox>`**

Standard boolean toggles. Use `up-chkbox` for a more compact version in grids.

- **Recipe:** `up-checkbox#is_active[label="Active User"]`

#### **`<up-toggle>`**

A modern "Switch" style checkbox.

- **Recipe:** `up-toggle#dark_mode[label="Enable Dark Theme"]`

#### **`<up-radiobutton>`**

Used when a user must select exactly one option from a visible list.

- **Recipe:** `up-radiobutton#pay_method[options="Cash,Card,Transfer"]`

#### **`<up-checklist>`**

Renders a list of checkboxes. It returns an **array** of selected values to the backend.

- **Recipe:** `up-checklist#permissions[api="sys_perm:lov"]`

#### **`<up-tagbox>`**

A sophisticated multi-select field where selected items appear as "tags" (pills) that can be removed.

- **Recipe:** `up-tagbox#categories[label="Project Tags" api="sys_tags:lov"]`

---

### **Architect's Tip for Module 3:**

For **"Money & Gain"** efficiency, always use the `id` as the database column name. If your table column is `customer_name`, name your element `up-text#customer_name`. The Unicorn P engine will then automatically map the value during `prepInsert` or `prepUpdate` without any extra code.

**Shall we move to Module 4: Date, Time & Scheduling?**
