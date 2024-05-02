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
    return await import(path)
        .then(x => {
            console.log(x)
            return x
        })
        .then(({ default: page }) => new Response(
            template(page),
            {
                headers: {
                    "content-type": "text/html",
                },
            }
        ))
        .catch(() => new Response(
            "404 Not Found",
            {
                status: 404,
            }
        ))
})