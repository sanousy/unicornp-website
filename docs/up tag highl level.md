Here is the structured documentation for the **Unicorn P (UP) Element Library**, organized into logical modules.

---

### **Module 1: Layout & structural Containers**

These elements define the skeleton of your application.

- **`<up-div>`**: A specialized wrapper that respects the platform's layout engine.

- **`<up-frame>`**: Used for containing distinct sub-sections or external views.

- **`<up-resizer>`**: Allows users to dynamically resize panels (crucial for IDE-like layouts).

- **`<up-tab>`**: Standard tabbed navigation container.

- **`<up-page-slider>` / `<up-slider>`**: Navigational elements for multi-step wizards or image galleries.

- **`<up-br>`**: A thematic break/spacer tailored for the UP grid system.

- **`<up-include>`**: Dynamically injects external content or other `sys_object` fragments.

---

### **Module 2: Advanced Data & Grid Engines**

The "Heavy Lifters" that connect directly to your MariaDB backend.

- **`<up-fullgrid>` / `<up-grid>`**: The primary engines for data manipulation. Support filtering via `basedon`.

- **`<up-spreadsheet>`**: An Excel-like interface for bulk data entry.

- **`<up-tree>` / `<up-fulltree>`**: Hierarchical data displays (e.g., for Account Charts or File Systems).

- **`<up-gridlov>`**: A hybrid element—a dropdown that opens a full searchable grid for selection.

- **`<up-listing>`**: A lighter version of the grid, optimized for mobile-friendly or card-based lists.

---

### **Module 3: Enterprise Form Fields (Inputs)**

All elements here support the `#id` variable system and automatic state binding.

- **Text & Security**:
  
  - **`<up-text>`**: Standard text.
  
  - **`<up-password>`**: Encrypted text entry with visibility toggle.
  
  - **`<up-textarea>`**: Multi-line input.

- **Numeric & Range**:
  
  - **`<up-number>`**: Precise numeric entry.
  
  - **`<up-range>`**: Slider-based numeric input.

- **Contact Info**:
  
  - **`<up-phone>`**: Formatted phone number input.
  
  - **`<up-email>`**: Email validation input.

- **Selection**:
  
  - **`<up-lov>`**: The "List of Values" dropdown (database-driven).
  
  - **`<up-select>`**: Standard selection dropdown.
  
  - **`<up-checkbox>` / `<up-chkbox>`**: Boolean toggles.
  
  - **`<up-toggle>`**: Switch-style boolean input.
  
  - **`<up-radiobutton>`**: Single-choice selection group.
  
  - **`<up-checklist>`**: Multiple-choice selection group.
  
  - **`<up-tagbox>`**: Tokenized multi-selection (tags).

---

### **Module 4: Date, Time & Scheduling**

Tailored for accounting and workflow tracking.

- **`<up-date>`**: Full date picker.

- **`<up-month>`**: Selection limited to Month/Year.

- **`<up-year>`**: Selection limited to Year.

- **`<up-time>`**: Time selection.

- **`<up-calendar>` / `<up-event-calendar>`**: Full-view calendars for scheduling and logs.

---

### **Module 5: Media & Visual Content**

Elements for handling files and visual data.

- **`<up-image>`**: Standard image display with aspect ratio control.

- **`<up-lightbox>`**: Full-screen image/document viewer overlay.

- **`<up-attachments>`**: File upload and management component.

- **`<up-viewer>`**: Document/PDF previewer.

- **`<up-cropper>`**: Client-side image cropping logic.

---

### **Module 6: Specialized Logic & Programming**

The elements that turn the platform into a "Developer's OS."

- **`<up-monaco>`**: The high-end VS Code editor for scripts.

- **`<up-code>`**: Syntax-highlighted code display for documentation.

- **`<up-xterm>` / `<up-term>`**: Terminal emulators for server communication or logs.

- **`<up-query>` / `<up-api>`**: Functional elements that trigger data fetches without visual UI.

- **`<up-onload>`**: A logic-only element that triggers JS actions when the object is ready.

- **`<up-emmet>`**: Dynamically renders UI strings on the fly.

- **`<up-value>`**: The expression engine (e.g., `price * qty`).

---

### **Module 7: Reporting, Charts & Analytics**

- **`<up-chart>`**: Data visualization (Lines, Bars, Pies).

- **`<up-report>` / `<up-reportf>`**: Specialized for generating printable/exportable accounting reports.

- **`<up-display>` / `<up-celldisplay>`**: Read-only formatted displays for specific data types.

---

### **Module 8: Workflow & Business Process (BPMN)**

Elements specifically for your "Workflow Engine."

- **`<up-bpmn>`**: Visualizes business process diagrams.

- **`<up-wf>`**: Connects the UI to the `sys_wf_step` logic.

- **`<up-gantt>`**: Visualizes project timelines and dependencies.

---

### **Module 9: Specialized Modules**

- **`<up-leaflet-map>`**: Integrated geographic mapping.

- **`<up-exam>`**: The specific engine for your **hfzb** Online Examination system.

- **`<up-scanner>`**: Barcode/QR code scanning integration.

- **`<up-tooltip>`**: Contextual help overlays.

- **`<up-errors>`**: Centralized validation error display for forms.
