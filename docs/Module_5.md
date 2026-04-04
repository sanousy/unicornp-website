# Module 5: Paperwork Bridge controls

In an enterprise environment, handling physical documentation—such as receipts, identity cards, and signed contracts—is essential. **Module 5** provides the tools to bridge the gap between physical paper and your MariaDB database.

These elements are designed to work with your **Golang WebDAV** and file-handling logic, ensuring that high-resolution media doesn't slow down your application's performance.

---

### **5.1 `<up-image>`**

A smart image container that handles loading states and aspect ratio consistency across different screen sizes.

- **Key Attributes:**
  
  - `src`: The URL or API endpoint for the image.
  
  - `ratio`: (e.g., `"1:1"`, `"16:9"`, `"4:3"`) Forces the image to maintain a specific shape.
  
  - `fit`: (`"cover"`, `"contain"`) Determines how the image fills the area.

- **Developer Recipe (Emmet):**
  
  Emmet code
  
  ```
  // A profile picture circle
  up-image#avatar[src="/api/user/photo" ratio="1:1" fit="cover"].circle
  ```

---

### **5.2 `<up-lightbox>`**

A high-end visual overlay. When a user clicks a thumbnail, this element creates a focused, full-screen view for detailed inspection.

- **Key Attributes:**
  
  - `group`: Allows users to "swipe" through a collection of related images.
  
  - `caption`: Displays a title or description at the bottom of the overlay.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  up-lightbox[group="receipts" caption="March Office Rent"](up-image[src="rent_thumb.jpg"])
  ```

---

### **5.3 `<up-attachments>`**

The primary file-management component. It provides a "Drag and Drop" zone for uploading multiple files and manages the list of existing attachments.

- **Key Attributes:**
  
  - `object`: Links the files to a specific record in your database.
  
  - `max-size`: Limits file size (e.g., `"5MB"`).
  
  - `accept`: Defines allowed file types (e.g., `".pdf,.jpg,.png"`).

- **Behavior:** It automatically interfaces with your `sys_attachments` logic to track file ownership.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  up-attachments#files[label="Supporting Documents" accept=".pdf" max-size="10MB"]
  ```

---

### **5.4 `<up-viewer>`**

A multi-format document previewer. It allows users to read PDFs or view documents directly within the Unicorn P interface without downloading them.

- **Key Attributes:**
  
  - `src`: Path to the document.
  
  - `toolbar`: (Boolean) Shows/hides zoom and print controls.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  // Previewing a PDF contract
  up-viewer#contract_view[src="/files/contracts/101.pdf" toolbar="true"]
  ```

---

### **5.5 `<up-cropper>`**

A client-side utility for preparing images before they hit your server. This is vital for maintaining clean, uniform data (like employee badges).

- **Key Attributes:**
  
  - `target`: The ID of the image element to be cropped.
  
  - `aspect-ratio`: Locks the crop tool to a specific shape.

- **Behavior:** It generates a base64 or blob result that can be sent to the Backend JS API for saving.

- **Developer Recipe:**
  
  Emmet code
  
  ```
  up-image#raw_photo+up-cropper[target="raw_photo" aspect-ratio="1"]
  ```

---

### **Architect's Tip for Module 5:**

When building an **Accounting Module**, use `<up-attachments>` on every Journal Entry. This allows consultants to attach a scan of the physical invoice, providing a perfect audit trail. In your Backend JS, you can use the `count("sys_attachments", ...)` function to verify if a file was uploaded before allowing the user to "Post" the transaction.

**Shall we move to the most advanced module—Module 6: Specialized Logic & Programming?**
