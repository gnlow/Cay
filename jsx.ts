export declare namespace JSX {
    interface IntrinsicElements {
        [el: string]: unknown
    }
    interface ElementAttributesProperty {
        props: 1
    }
    type Element = string

    type Factory =
    (
        tag: Element,
        att: {
            children: Element
        },
    ) => Element
}


const jsx: JSX.Factory =
(tag, att) => {
    console.log({tag, att})
    return tag
}

export {
    jsx,
    jsx as jsxs,
    // jsx as Fragment,
}