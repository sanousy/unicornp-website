# Module 8: Workflow & Business Process (BPMN)

This module represents the "Control Room" of your enterprise logic. These elements are designed to visualize and enforce the **Document State Machine** yo. Instead of hardcoding "if-else" statements, these components allow a developer to manage business rules visually and chronologically.

---

### **8.1 `<up-bpmn>`**

Integrates a professional Business Process Model and Notation (BPMN) viewer and modeler. It allows developers and business analysts to see the logical flow of a document (e.g., from "Draft" to "Approved" to "Posted").

- **Key Attributes:**
  
  - `src`: The URL or API endpoint returning the `.bpmn` (XML) file.
  
  - `mode`: (`"view"` or `"edit"`) Allows users to either just see the process or modify the nodes.
  
  - `current-step`: Highlights the active node in the process based on the document's current state.

- **Developer Recipe (Emmet):**
  
  Emmet code
  
  ```
  // Visualizing the Approval Cycle for an Invoice
  up-bpmn#workflow_map[src="/api/wf/acc_invoice" current-step="pending_approval"]
  ```

---

### **8.2 `<up-wf>`**

The "Action Bridge" for your workflow engine. This element automatically renders the buttons and transitions defined in your `sys_wf_step` and `sys_wf_step_action` tables.

- **Key Attributes:**
  
  - `object`: The name of the `sys_object` being tracked.
  
  - `record-id`: The specific ID of the row (e.g., `invoice_id`).
  
  - `onaction`: A JS hook that triggers when a workflow button is clicked (e.g., to refresh a grid after approval).

- **Behavior:** It queries the backend to see which actions are available for the *current user* at the *current step* and renders the appropriate "Approve," "Reject," or "Forward" buttons.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  // Toolbar for document transitions
  up-wf#wf_actions[object="acc_invoice" record-id="1001" onaction="refresh_ui"]
  ```

---

### **8.3 `<up-gantt>`**

A high-level project management component. It transforms your data into a chronological timeline, showing dependencies and progress bars.

- **Key Attributes:**
  
  - `api`: The endpoint returning the task list (expects `id`, `text`, `start_date`, `duration`, `parent`).
  
  - `scale`: (`"day"`, `"week"`, `"month"`) Sets the zoom level of the timeline.
  
  - `readonly`: (Boolean) Toggles whether users can drag bars to change dates.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  // Visualizing an Audit or Project Timeline
  up-gantt#project_timeline[api="sys_project:get_tasks" scale="week"]
  ```

---

### **Architect's Tip for Module 8:**

This is the "Enterprise Secret." When selling to high-end clients, don't just show them a data table—show them the **`<up-bpmn>`** map of their company's logic. By using **`<up-wf>`**, you ensure that a "Junior Accountant" can never click a "Post" button unless the "Senior Accountant" has moved the document to the correct step. This built-in security is a major selling point for the **BYD Server**.

**Ready to finish with Module 9: Specialized Modules (Maps, Exams, Scanners)?**
