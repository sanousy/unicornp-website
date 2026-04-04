# Module 1: Layout & Structural Containers.

---

### **1.1 `<up-div>`**

The primary building block of the Unicorn P UI. Unlike a standard `div`, it is optimized for the platform's flex-grid and automatic spacing.

- **Key Attributes:**
  
  - `id`: The unique identifier (used as a variable in the `api` or `expression`).
  
  - `fill`: (Boolean) Forces the div to take up 100% height of its parent.
  
  - `row/col`: Used to trigger flex-box alignment within the layout.

- **Developer Recipe (Emmet):**
  
  Emmet code
  
  ```
  // A vertical stack with 20px padding
  up-div.p20(up-text#name+up-text#email)
  ```

---

### **1.2 `<up-frame>`**

Creates an isolated container, often used for dashboard cards or grouping related data views into a "sub-window."

- **Key Attributes:**
  
  - `label`: Adds a title or header text to the top of the frame.
  
  - `border`: (Boolean) Toggles the visibility of the frame's perimeter.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  up-frame[label="User Security Settings"](up-password#p1+up-password#p2)
  ```

---

### **1.3 `<up-resizer>`**

A functional handle that allows the end-user to drag and resize adjacent panels. Essential for creating IDE-style interfaces (like your `sys_query` editor).

- **Behavior:** Place it between two `up-div` elements. It detects the `previousElementSibling` and `nextElementSibling` to adjust their widths/heights.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  up-div#sidebar+up-resizer+up-div#main-content.fill
  ```

---

### **1.4 `<up-tab>`**

A high-level navigation container that manages multiple views. It automatically handles the "active" state and visibility of children.

- **Key Attributes:**
  
  - `tabs`: A comma-separated list of titles for the tab headers.
  
  - `active`: The index (starting at 0) of the tab to show by default.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  up-tab[tabs="Profile,Permissions,Activity"](
    up-div#tab0(up-text#name)
    +up-div#tab1(up-checklist#perms)
    +up-div#tab2(up-fullgrid#logs)
  )
  ```

---

### **1.5 `<up-page-slider>` / `<up-slider>`**

Used for horizontal navigation. `<up-page-slider>` is typically used for full-page wizards, while `<up-slider>` is for smaller content carousels.

- **Key Attributes:**
  
  - `index`: Controls the current visible slide.
  
  - `loop`: (Boolean) If true, returns to start after the last slide.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  up-page-slider#wizard[index="0"](
    up-div(up-heading[label="Step 1: Account Info"])
    +up-div(up-heading[label="Step 2: Confirm"])
  )
  ```

---

### **1.6 `<up-br>`**

Not just a line break. This is a "Thematic Spacer" that maintains the vertical rhythm of the Unicorn P grid system.

- **Behavior:** Use it to force a new row in Emmet layouts or to add standardized vertical margin between frames.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  up-text#field1+up-br+up-text#field2
  ```

---

### **1.7 `<up-include>`**

The most powerful layout tool. It allows for "Component-Based" architecture by pulling in other objects or files.

- **Key Attributes:**
  
  - `src`: The name of the `sys_object` or path to the `.emmet` file to be rendered inside this container.
  
  - `params`: A JSON string of data to pass into the included object.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  // Injects the standard 'Header' object at the top of the page
  up-include[src="sys_header_toolbar"]+up-div.content(...)
  ```
