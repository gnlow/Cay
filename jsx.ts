export declare namespace JSX {
    interface IntrinsicElements {
        [el: string]: unknown
    }
    interface ElementAttributesProperty {
        props: 1
    }
    type Element = string
}

type Factory<T> =
(
    tag: T | string,
    att: {
        [ key: string ]: any
    }
) => T | string

const jsx: Factory<any> =
(tag, att) => {
    console.log({tag, att})
    return tag
}

export {
    jsx,
    jsx as jsxs,
    // jsx as Fragment,
}