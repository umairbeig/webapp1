import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the editor's CSS
import './RichTextEditor.css'; // Optional: Add custom styles for your editor

const RichTextEditor = () => {
  // State to store the editor content
  const [editorValue, setEditorValue] = useState('');

  // Load initial data from localStorage (if any)
  useEffect(() => {
    const savedData = localStorage.getItem('richTextData');
    if (savedData) {
      setEditorValue(savedData);
    }
  }, []);

  // Function to handle the change in editor
  const handleChange = (value) => {
    setEditorValue(value);
    // Save content to localStorage for persistence
    localStorage.setItem('richTextData', value);
  };

  // Set up the toolbar options (bold, italic, underline, lists)
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ 'align': [] }],
      ['link'],
      [{ 'color': [] }, { 'background': [] }],
      ['blockquote', 'code-block'],
    ],
  };

  return (
    <div className="rich-text-editor">
      <h2>Rich Text Editor</h2>
      <ReactQuill
        value={editorValue}
        onChange={handleChange}
        modules={modules}
        placeholder="Start typing..."
      />
      <div className="editor-output">
        <h3>Editor Output:</h3>
        <div dangerouslySetInnerHTML={{ __html: editorValue }} />
      </div>
    </div>
  );
};

export default RichTextEditor;
