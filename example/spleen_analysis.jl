using LMGPU


function main(args)
# function main()
    ## if no input args.
    # geno_file = joinpath(@__DIR__, "..", "data", "cleandata", "geno_prob.csv")
    # pheno_file = joinpath(@__DIR__, "..", "data", "cleandata", "imputed_pheno.csv")
    # export_matrix = false
    # output_file = "output.csv"

    ## if need to be compiled.
    # push!(ARGS, joinpath(@__DIR__, "..", "data", "cleandata", "geno_prob.csv"))
    # push!(ARGS, joinpath(@__DIR__, "..", "data", "cleandata", "imputed_pheno.csv"))
    # push!(ARGS, "false" )
    # push!(ARGS, "output.csv")


    geno_file = args[1]
    pheno_file = args[2]
    export_matrix = args[3] == "true"
    output_file = args[4]

    set_blas_threads(16);
    # Read in data.
    G = LMGPU.get_geno_data(geno_file)
    Y = LMGPU.get_pheno_data(pheno_file)
    # getting geno and pheno file size.
    n = size(Y,1)
    m = size(Y,2)
    p = size(G,2)
    println("******* Indivuduals n: $n, Traits m: $m, Markers p: $p ****************");
    # cpu_timing = benchmark(5, cpurun, Y, G,n,export_matrix);

    # running analysis.
    lod = cpurun(Y, G,n,export_matrix);

    # write output to file
    writedlm(joinpath(Base.@__DIR__, "..", "data", "results", output_file), lod, ',')

    # TODO: generate plot?
    return lod

end

Base.@ccallable function julia_main()::Cint
    main(ARGS);
    return 0
end