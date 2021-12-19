import { Editor, convertFromRaw, EditorState } from 'draft-js';

function RichTextViewer({ data }) {
    const content = EditorState.createWithContent(convertFromRaw(JSON.parse(data)))
    return <Editor readOnly={true} editorState={content} />
}

export default RichTextViewer;