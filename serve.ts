const [ dir ] = Deno.args

Deno.serve(async req => {
    const path = "./"
        + dir
        + "/"
        + (new URL(req.url).pathname.substring(1) || "index")
        + ".tsx"
    console.log(path)
    const { default: page } = await import(path)
    return new Response(page)
})