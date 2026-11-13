import React, { useEffect, useRef } from "react";

export default function AccessibleModal({ open, onClose, onSave }) {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      triggerRef.current = document.activeElement;
      dialog.showModal();
      dialog.querySelector("textarea")?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
      triggerRef.current?.focus();
    }
  }, [open]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const note = String(data.get("note") || "").trim();
    if (!note) return;
    onSave(note);
    form.reset();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <form onSubmit={handleSubmit}>
        <header>
          <h2 id="dialog-title">Add dashboard note</h2>
          <button type="button" className="icon-button" aria-label="Close dialog" onClick={onClose}>
            <span aria-hidden="true">×</span>
          </button>
        </header>
        <p id="dialog-description">Add a short note for the current dashboard review.</p>
        <label htmlFor="note">Note</label>
        <textarea id="note" name="note" rows="4" required maxLength="300" />
        <footer>
          <button type="button" className="button-secondary" onClick={onClose}>Cancel</button>
          <button type="submit">Save note</button>
        </footer>
      </form>
    </dialog>
  );
}
