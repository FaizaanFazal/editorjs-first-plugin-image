import EditorJS, { EditorConfig, OutputData, ToolConstructable } from '@editorjs/editorjs';
import './App.css';
import { LayoutBlockTool, LayoutBlockToolConfig } from 'editorjs-layout';
import { useEffect, useRef, useState } from 'react';
import { SimpleImage, toolbox } from './modules/SimpleImage';
import { json } from 'stream/consumers';
function App() {

  const editorRef = useRef<any>();
  const [data, setData]=useState<object>({});
  const [editorIsReady, setEditorIsReady]=useState<boolean | null>(null);

  const onEditorReady = async (editor: EditorJS) => {
    console.log('Check Editor.js is ready to work!')
    try {
      console.log('Check Editor.js is ready to work!');
      await editor.isReady;
      console.log('Editor.js is ready to work!');
      setEditorIsReady(true);
    } catch (reason) {
      console.log(`Editor.js initialization failed because of ${reason}`);
      setEditorIsReady(false);
    }
  }
  const initialEditorData={
    url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg",
    caption: 'Here is a caption field',
    alt: "this is alt field",
    withBorder: true,
    withBackground: true,
    stretched: false
  }

  useEffect(() => {
    //clearing localstorage before every use
    console.log(initialEditorData)
    localStorage.removeItem('editorContent');
    if (editorRef.current && editorRef.current instanceof HTMLElement) {
      const editorJSConfig: EditorConfig = {
        holder: editorRef.current,
        minHeight: 30,
        tools: {
          image: {
            class: SimpleImage as unknown as ToolConstructable,
            inlineToolbar: true,
            toolbox:toolbox,
            config: {
              placeholder: 'Paste image URL'
            }
          },
          },
          onChange: async () => {
            try {
              const outputData: any = await editor.save();
              setData(outputData);
            } catch (error) {
              console.log('Saving failed: ', error);
              setData({});
            }
  
          },
          
        }

      const editor = new EditorJS(editorJSConfig);
      console.log('Calling onEditorReady');
      onEditorReady(editor);
      editorRef.current = editor;

}
    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className='py-4 px-12 w-[100%]'>
      <div ref={editorRef} className={editorIsReady ? `editorTypographyStyling` : ''} style={{maxWidth: 'unset'}}>
        {editorIsReady === null ? <div className="text-center">Loading...</div> : null}
        {editorIsReady === false ? <div className="text-center">Unable to load editor...</div> : null} 
      </div>

      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
