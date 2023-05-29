//import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
//import { nord } from '@uiw/codemirror-theme-nord';

interface EditorProps {
  value: string;
  onChange: (value: string, viewUpdate: any) => void
}

const Editor = ({ value, onChange }: EditorProps) => {

  return (
    <CodeMirror
      value={value}
      height="100%"
      theme="dark"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}

export default Editor