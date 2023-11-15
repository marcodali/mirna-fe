import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-tomorrow'

interface CodeReadOnlyIDEProps {
    code: string
}

export default function CodeReadOnlyIDE({ code }: CodeReadOnlyIDEProps) {
    return (
        <AceEditor
            mode="javascript"
            theme="tomorrow"
            name="MAGIC_NUMBER_10"
            fontSize={14}
            showPrintMargin={false}
            showGutter={false}
            width="650px"
            height="500px"
            value={code}
            readOnly={true}
            editorProps={{ $blockScrolling: true }}
        />
    )
}
