# Accessibility implementation notes

## Document structure

The dashboard uses a single top-level page heading, named navigation landmarks, a skip link, and a main landmark. Content is divided into labelled sections and articles. The separate Services and Reports documents follow the same landmark structure.

## Keyboard access

All controls are native HTML controls or buttons. The skip link becomes visible on focus. Focus indicators are visible for links, buttons, form fields, and select controls. The modal uses the native HTML `dialog` element and `showModal()`, which provides modal focus handling and Escape-key dismissal in modern browsers. Focus is returned to the control that opened the modal when it closes.

## Forms

Every field has an explicit label. Related controls are grouped using `fieldset` and `legend`. Search and date controls use native input types. The sample filter provides a polite status announcement when the result count changes.

## Data table

The service table has a caption, column headers with `scope="col"`, and row headers with `scope="row"`. A scrollable wrapper remains keyboard-focusable for horizontal overflow.

## Status and feedback

The modal's saved-note response is announced through a polite live region. Status is also represented by text, not color alone.

## Validation limits

The W3C Nu checker validates the static HTML entry pages. React component markup is rendered by the browser and is not covered by this static validation script. This project has not been independently certified as WCAG-conformant; conduct manual keyboard, screen-reader, contrast, zoom/reflow, and assistive-technology testing before production use.
