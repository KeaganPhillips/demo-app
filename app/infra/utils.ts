import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import type { VNode } from "preact";
import { twMerge } from "tailwind-merge";
//import QRCode, { type QRCodeToDataURLOptions } from 'qrcode'


export const cn = (...inputs: ClassValue[]) => 
    twMerge(clsx(inputs));


export const isVNode = (child: any): child is VNode<any> =>
    typeof child === 'object' && 'type' in child && 'props' in child;


export const getChildVNodesRecursive = (parent: any): VNode<any>[] => {
    if(!isVNode(parent))
        return [];

    if(parent.props.children)
        return [parent, ...parent.props.children.map(getChildVNodesRecursive).flat()];

    return [parent];
};


// export const qrStringAsBase64 = async (qrString: string, darkMode: bool): Promise<string> => {

//     var opts: QRCodeToDataURLOptions = {
//         errorCorrectionLevel: 'H',
//         type: 'image/jpeg',    
//         margin: 1,    
//         color: {
//           dark: darkMode ? "#fafafa" : '#1f2937',
//           light: darkMode ? "#1f2937" : '#fafafa',
//         }
//     };
    

//     return await QRCode.toDataURL(qrString, opts);
    
// }

