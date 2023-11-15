import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/ext-language_tools'

interface CodeIDEProps {
    code: string
    setCode: React.Dispatch<React.SetStateAction<string>>
}

export default function CodeIDE({ code, setCode }: CodeIDEProps) {
    return (
        <AceEditor
            mode="javascript"
            theme="monokai"
            name="MAGIC_NUMBER_01"
            fontSize={14}
            width="755px"
            height="500px"
            highlightActiveLine={true}
            value={code}
            onChange={newCode => setCode(newCode)}
            editorProps={{ $blockScrolling: true }}
            setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: true,
                enableSnippets: false,
              }}
        />
    )
}
