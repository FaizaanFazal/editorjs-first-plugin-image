
// interface DataOfImage {
//     url: string;
//     caption: string;
//     alt: string;
//     withBorder: boolean | undefined;
//     withBackground: boolean | undefined;
//     stretched: boolean | undefined;
    
// }

// interface ImageConfig {
//     placeholder: string;
// }

// interface Api {
//     styles: any;
//     blocks: any;
//     i18n: {
//         t: (text: string) => string;
//     };
// }




// const SimpleImageTool = ({ data, api, config }: { data: DataOfImage, api: Api, config: ImageConfig }) => {
//     let wrapper: HTMLElement | undefined;
//     const settings: { name: string; icon: string; }[] = [
//         {
//             name: 'withBorder',
//             icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>`
//         },
//         {
//             name: 'stretched',
//             icon: `<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>`
//         },
//         {
//             name: 'withBackground',
//             icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>`
//         }
//     ];

//     const render = () => {
//         wrapper = document.createElement('div');
//         wrapper.classList.add('simple-image');

//         if (data && data.url) {
//             _createImage(data.url, data.caption, data.alt);
//             return wrapper;
//         }

//         const input = document.createElement('input');
//         input.placeholder = 'Paste an image URL...';
//         input.placeholder = api.i18n.t(config.placeholder || 'Paste an image URL...');
//         input.value = data && data.url ? data.url : '';

//         input.addEventListener('paste', (event: ClipboardEvent) => {
//             const clipboardData = event.clipboardData;
            
//             if (clipboardData) {
//                 if(validate(clipboardData.getData('text'))){
//                     _createImage(clipboardData.getData('text'));
//                 }
//             }
//         });
//         wrapper.appendChild(input);
//         return wrapper;
//     };

//     const _createImage = (url: string, captionText?: string, altText?: string) => {
//         const image = document.createElement('img');
//         const caption = document.createElement('div');
//         const alt = document.createElement('input');
//         alt.id = 'altId';
//         caption.id = 'captionId';

//         image.src = url;
//         caption.contentEditable = "true";
//         caption.innerHTML = captionText ? captionText : 'Enter Caption';
//         alt.placeholder = 'Enter Image alt text for seo...';
//         alt.value = altText || '';

//         wrapper!.innerHTML = '';
//         wrapper!.classList.add('flex')
//         wrapper!.appendChild(image);
//         wrapper!.appendChild(caption);
//         wrapper!.appendChild(alt);
//         _acceptTuneView();
//     };

//     const _toggleTune = (tune: keyof DataOfImage) => {
//         data[tune] = !data[tune];
//         _acceptTuneView(); 
//     };

//     const _acceptTuneView = () => {
        
//         settings.forEach(tune => {
//             if (wrapper) {
//                 wrapper.classList.toggle(tune.name, !!data[tune.name]);
//             }

//             if (tune.name === 'stretched') {
//                 api.blocks.stretchBlock(api.blocks.getCurrentBlockIndex(), !!data.stretched);
//             }
            
//         });
//     };

//     const validate =(savedData: string)=> {
//         if (!savedData.trim()) {
//             return false;
//         }
//         return true;
//     }
//     return { render, _toggleTune };
// };

