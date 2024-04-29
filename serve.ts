const [ path ] = Deno.args

/*

import { walk } from "https://deno.land/std@0.224.0/fs/walk.ts"

for await (const entry of walk(path)) {
    if (entry.isFile) {
        const path = "./" + entry.path.replaceAll("\\", "/")
    }
}

*/

const { default: v } = await import("./example/basic/index.tsx")

console.log(v)

Deno.serve(req => {
    console.log(new URL(req.url).pathname)
    return new Response("Hello, World!")
})