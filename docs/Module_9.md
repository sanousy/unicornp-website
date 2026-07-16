# Module 9: Advanced Controls ( Pro)

This final module covers the "Peripherals" and specialized vertical logic of the **Unicorn P** platform. These elements allow you to bridge the digital system with physical locations, hardware (scanners), and complex educational logic like the **hfzb** exam engine.

---

### **9.1 `<up-leaflet-map>`**

Integrates a high-performance geographic mapping engine based on Leaflet. It is essential for logistics, branch management, or field service tracking.

- **Key Attributes:**
  
  - `lat` / `lng`: The center coordinates of the map.
  
  - `zoom`: Initial zoom level (e.g., `13`).
  
  - `api`: Endpoint returning a JSON array of markers (expects `lat`, `lng`, `popup_text`).

- **Developer Recipe (Emmet):**
  
  Emmet code
  
  ```
  // A map showing all company warehouse locations
  up-leaflet-map#main_map[lat="31.94" lng="35.92" zoom="12" api="sys_branch:map_data"]
  ```

---

### **9.2 `<up-exam>`**

The flagship engine for the **hfzb** system. This is a high-stakes component that handles question delivery, timers, and cheating prevention logic.

- **Key Attributes:**
  
  - `exam-id`: The ID of the exam defined in the `hfzb_exam` table.
  
  - `duration`: Time limit in minutes.
  
  - `oncomplete`: JS hook to trigger when the student submits the exam.

- **Behavior:** It manages the state of the student's session and communicates with your `hfzb_exam_question` table to ensure randomized delivery.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  // Starting a professional certification exam
  up-exam#exam_engine[exam-id="2024_FIN_01" duration="60" oncomplete="calculate_result"]
  ```

---

### **9.3 `<up-scanner>`**

Provides hardware-level integration for Barcode and QR code scanning. It uses the device's camera or an attached USB scanner to input data directly into the active field.

- **Key Attributes:**
  
  - `target`: The ID of the input field (e.g., `#item_code`) where the scanned value should be placed.
  
  - `beep`: (Boolean) Triggers an audio confirmation on a successful scan.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  // A scan-to-inventory tool
  up-text#item_code[label="Item Code"]+up-scanner[target="item_code" beep="true"]
  ```

---

### **9.4 `<up-tooltip>`**

Enhances the user experience by providing non-intrusive, contextual help. In complex accounting screens, this explains what specific fields mean.

- **Key Attributes:**
  
  - `text`: The message to display.
  
  - `position`: (`"top"`, `"bottom"`, `"left"`, `"right"`).

- **Behavior:** Wrap this around any label or icon to create a hover-triggered help bubble.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  up-label[value="VAT Amount"](up-tooltip[text="Calculated as 16% of the net total"])
  ```

---

### **9.5 `<up-errors>`**

A centralized hub for form validation. Instead of cluttering the UI with individual error messages, this element gathers all `required` and `regex` failures into one professional list.

- **Key Attributes:**
  
  - `form`: The ID of the container/div to monitor for errors.

- **Behavior:** It stays hidden until a user attempts to "Save" or "Post" with invalid data, then it reveals the specific reasons for the failure.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  // A validation summary at the top of a form
  up-errors#form_validation_summary[form="user_entry_form"]
  ```

---

### **Architect's Summary of the Unicorn P Library**

With these **9 Modules** and **70+ Elements**, developers are provided with a complete toolkit. They no longer need to worry about the "How" of web development (CSS, HTML, Event Listeners). They only need to focus on the **"What"** (The Business Logic).
