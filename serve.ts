const [ dir ] = Deno.args

let boilerplate = await Deno.readTextFile("boilerplate.html")

const boilerplateReload = async () => boilerplate = await Deno.readTextFile("boilerplate.html")

const template =
(body: string) =>
    boilerplate.replace("{body}", body)

Deno.serve(async req => {
    await boilerplateReload()
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