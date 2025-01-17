using Documenter, LiteQTL

const src = "https://github.com/senresearch/LiteQTL.jl"
const dst = "https://senresearch.github.io/LiteQTL.jl/stable"

function main()
    ci = get(ENV, "CI", "") == "true"
    @info "Generating Documenter.jl site"
    DocMeta.setdocmeta!(LiteQTL, :DocTestSetup, :(using LiteQTL); recursive=true)

    makedocs(
        # Must have the following args: 
        sitename = "LiteQTL.jl",
        authors = "Chelsea Trotter, Saunak Sen",
        repo = "$src/blob/{commit}{path}#{line}",
        format = Documenter.HTML(
            # Use clean URLs on CI
            prettyurls = ci,
            canonical = dst,
            analytics = "UA-154489943-2",
        ),
        modules = [LiteQTL],
        pages = Any[
            "Home" => "index.md",
            "Library" => "library.md"
        ],

        # Additional, not must-haves. 
        doctest = ("doctest=only" in ARGS) ? :only : true,
        strict = !("strict=false" in ARGS),
    )

    if ci
        @info "Deploying to GitHub"
        deploydocs(
            # Must have the following args: 
            repo = "github.com/senresearch/LiteQTL.jl.git",
            devurl = "dev",
            versions = ["stable" => "v^", "v#.#"],
            push_preview = true
        )
    end

end

isinteractive() || main()

# makedocs(;
#     modules=[LiteQTL],
#     format=Documenter.HTML(),
#     pages=[
#         "Home" => "index.md",
#     ],
#     repo="/blob/{commit}{path}#L{line}",
#     sitename="LiteQTL.jl",
#     authors="Chelsea Trotter, Sen Research",
#     assets=String[],
# )

# deploydocs(;
#     repo="github.com/senresearch/LiteQTL.jl.git",
#     devurl = "dev",
#     versions = ["stable" => "v^", "v#.#"],
# )
