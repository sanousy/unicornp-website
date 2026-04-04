# **Module 6: Specialized Logic & Programming**

reflects the high-stakes architectural realities . This is the most critical module for a developer because it bridges the gap between a "UI Designer" and a "System Engineer."

---

### **Module 6: Specialized Logic & Programming (Technical Deep-Dive)**

This module defines the execution environment of the **Unicorn P** platform. Unlike standard HTML, these elements interact with the core engine's state locks and global variables.

#### **6.1 `<up-monaco>`**

The integrated code editor.

- **Precision Note:** It automatically inherits the `TOPWINDOW_LEVEL` (1000) when popped into a modal, ensuring the code completion dropdowns are never hidden behind other UI layers.

- **Attributes:** `language` (sql, javascript, json), `theme`.

#### **6.2 `<up-query>` / `<up-api>`**

These are the data-fetching workhorses.

- **The Dependency Engine:** When using `basedon`, the engine collects values from the specified IDs and sends them to the backend `QUERY` constant (`sys_query:api`).

- **State Management:** These elements respect the `global_mutex`. If `global_mutex` is `true`, the engine may delay execution to prevent data corruption.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  // Fetching data only when 'branch_id' changes
  up-query#fetcher[api="acc_ledger:get" basedon="branch_id"]
  ```

#### **6.3 `<up-onload>`**

Executes logic immediately after the component is mounted.

- **Core Interaction:** This is the ideal place to set initial states before the `load_mutex` is released.

- **Recipe:** `up-onload[action="init_dashboard"]`

#### **6.4 `<up-value>`**

The reactive expression engine.

- **Precision Note:** It uses the internal `getFieldValue` logic. If a field is not yet "ready" (e.g., waiting for a report or query), it uses a recursive `setTimeout` (100ms) to wait until the data is available.

- **Recipe:** `up-value#total[expression="price * qty"]`

---

### **Critical "Under the Hood" Documentation**

To prevent developers from breaking the system, the following **Global Constraints** must be documented:

#### **A. The Mutex System (State Protection)**

Developers must be aware of the following internal flags managed by `up-core.js`:

- **`global_mutex`**: When `true`, the UI is in a "Critical Section." Do not trigger manual DOM manipulations.

- **`upwindow_mutex`**: Prevents multiple modal windows from fighting for focus.

- **`load_mutex`**: True during the initial boot sequence of an object.

#### **B. Pathing & The `root` Variable**

The engine defines a constant `root = "/"`.

- **Rule:** All `api` and `src` paths in tags are relative to this `root`. Developers should **never** hardcode absolute URLs (e.g., `http://localhost/api...`), as this will break the Cloudflare Tunneling and production VPS routing.

#### **C. RTL/LTR Directionality**

The system uses the `DIR` variable (`RTL` or `LTR`).

- **Swipe Logic:** The core `handleTouchMove` function automatically flips swipe directions based on the `DIR` setting. If you are building for a Middle Eastern client, the "Slide to Next" logic will automatically move from left-to-right.

#### **D. Automatic Validation (`ASTERISK`)**

The platform manages visual "Required" cues automatically.

- **Mechanism:** If an input has the `required` attribute, the core appends the `ASTERISK` constant (`color:red {*}`) to the associated label.

- **Benefit:** Consistent UI across all modules without manual Emmet styling.

---

### **Architect's Precision Checklist**

Before a consultant marks a screen as "Production Ready," they must verify:

1. **Z-Index Integrity:** No custom CSS exceeds a Z-index of `500` (to stay below `NONTOPWINDOW`).

2. **ID Uniqueness:** All IDs used in `basedon` or `expressions` are unique within the current `up-include` scope.

3. **Mutex Safety:** No long-running synchronous JS functions are blocking the `global_mutex`.
