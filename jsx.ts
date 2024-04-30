export declare namespace JSX {
    interface IntrinsicElements {
        [el: string]: unknown
    }
    interface ElementAttributesProperty {
        props: 1
    }
    type Element = string & { _: "Element" }
    type Output = string & { _: "Output" }

    type Attr = {
        children: Output | Output[]
    }
    type NAttr = {
        children: Output[]
    }
    type Factory =
    (
        tag: Element,
        att: Attr,
    ) => Output
}

const childrenNormalize =
(children: JSX.Output | JSX.Output[]): JSX.Output[] =>
    [children].flat()

const jsx: JSX.Factory =
(tag, att) => {
    console.log({tag, att})
    const children = childrenNormalize(att.children)
    if (typeof tag == "string") {
        const props =
            Object.entries(att)
                .filter(([k]) => k != "children")
                .map(([k, v]) => `${k}="${v}"`)
                .join(" ")
        return (""
            + `<${tag} ${props}>`
            + children.join("")
            + `</${tag}>`
        ) as JSX.Output
    }
    throw 0
}

export {
    jsx,
    jsx as jsxs,
    // jsx as Fragment,
}