export declare namespace JSX {
    interface IntrinsicElements {
        [el: string]: unknown
    }
    interface ElementAttributesProperty {
        props: 1
    }
    type Element = string

    type Attr = {
        children: Element | Element[]
    }
    type NAttr = {
        children: Element[]
    }
    type Factory =
    (
        tag: Element,
        att: Attr,
    ) => Element
}

const childrenNormalize =
(children: JSX.Element | JSX.Element[]): JSX.Element[] =>
    [children].flat()

const intrinsic: Record<string, (att: JSX.NAttr) => JSX.Element> = {
    v: ({children}) => `<v>${children.join("")}</v>`,
    h: ({children}) => `<h>${children.join("")}</h>`,
}

const jsx: JSX.Factory =
(tag, att) => {
    console.log({tag, att})
    return (
        typeof tag == "string"
            ? intrinsic[tag]
            : tag
        )({
        ...att,
        children: childrenNormalize(att.children),
    })
}

export {
    jsx,
    jsx as jsxs,
    // jsx as Fragment,
}