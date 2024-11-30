# Sequence Diagram for the user creates a new note

```mermaid

sequenceDiagram
    participant browser
    participant server

    Note right of browser: The User enters some text data in the input field and press Save button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTML document
    deactivate server

```