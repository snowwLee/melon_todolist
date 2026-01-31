import './Editor.css'
import { useState, useRef} from 'react';

const Editor = ({onCreate}) => {

    const [content,setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) =>{
        setContent(e.target.value);
    };

    const onkeydown = (e) => {
        if(e.key === "Enter"){
            onSubmit();
        }
    };

    const onSubmit =()=>{
        // input에 빈 문자열일 때 return 시키고 포커스를 주기 위함
        if (content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    return(
    <div className="Editor">
        <input
            ref={contentRef}
            value={content}
            onKeyDown={onkeydown}
            onChange={onChangeContent}
            placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
    </div>
    );
};

export default Editor;