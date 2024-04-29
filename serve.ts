const [ dir ] = Deno.args

const boilerplate = await Deno.readTextFile("boilerplate.html")

const template =
(body: string) =>
    boilerplate.replace("{body}", body)

Deno.serve(async req => {
    const path = "./"
        + dir
        + "/"
        + (new URL(req.url).pathname.substring(1) || "index")
        + ".tsx"
        + "?cache-bust="
        + Math.random()
    console.log(path)
    const { default: page } = await import(path)
    return new Response(
        template(page),
        {
            headers: {
                "content-type": "text/html",
            }
        }
    )
})