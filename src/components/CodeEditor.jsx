import Editor from "@monaco-editor/react";

export default function CodeEditor({ value, onChange }) {
  return (
    <div className="monaco-wrapper">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={value}
        onChange={(next) => onChange(next ?? "")}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
          padding: { top: 12 },
        }}
      />
    </div>
  );
}
