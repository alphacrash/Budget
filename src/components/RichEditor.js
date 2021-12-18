import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import axios from 'axios';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function RichEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleSubmit = async () => {
    const contentState = editorState.getCurrentContent();
    const rawState = JSON.stringify(convertToRaw(contentState));
    await axios.post('http://localhost:3001/api/rte', {
      rawState
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RichEditor;
