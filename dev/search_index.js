var documenterSearchIndex = {"docs":
[{"location":"library/#Library","page":"Library","title":"Library","text":"","category":"section"},{"location":"library/","page":"Library","title":"Library","text":"","category":"page"},{"location":"library/","page":"Library","title":"Library","text":"Modules = [LiteQTL]","category":"page"},{"location":"library/#LiteQTL.cpurun-Tuple{AbstractArray{var\"#s24\",2} where var\"#s24\"<:Real,AbstractArray{var\"#s23\",2} where var\"#s23\"<:Real,Int64,Bool}","page":"Library","title":"LiteQTL.cpurun","text":"cpurun(Y, G, n, export_matrix)\n\n\nArguments:\n\nY : a matrix of phenotypes\nG : a matrix of genotypes\nn : the number of individuals\nexport_matrix : a boolean value that determines whether the result should be the maximum value of LOD score of each phenotype and its corresponding index, or the whole LOD score matrix. \n\nOutput:\n\nreturns the maximum LOD (Log of odds) score if export_matrix is false, or LOD score matrix otherwise.\n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.get_geno_data-Tuple{Any,Any}","page":"Library","title":"LiteQTL.get_geno_data","text":"get_geno_data(file, datatype)\n\n\nreturns the genotype data. Will skip every other column because genotype probability is duplicated. \n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.get_pheno_data-Tuple{Any,Any}","page":"Library","title":"LiteQTL.get_pheno_data","text":"get_pheno_data(file, datatype; transposed)\n\n\nreturns the phenotype data. If transposed=true, then the data will be transposed. \n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.gpurun-Tuple{Array{var\"#s101\",2} where var\"#s101\"<:Real,Array{var\"#s102\",2} where var\"#s102\"<:Real,Any}","page":"Library","title":"LiteQTL.gpurun","text":"gpurun(Y, G, n)\n\n\nArguments:\n\nY : a matrix of phenotypes\nG : a matrix of genotypes\nn : the number of individuals\n\nOutput:\n\nreturns the maximum LOD (Log of odds) score \n\n\n\n\n\n","category":"method"},{"location":"#LiteQTL.jl-Documentation","page":"Home","title":"LiteQTL.jl Documentation","text":"","category":"section"},{"location":"#Package-information","page":"Home","title":"Package information","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"LiteQTL is a package that runs whole genome QTL scans near real-time, utilizing the computation power of GPU. ","category":"page"},{"location":"#Features","page":"Home","title":"Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Near real time computation for whole genome scan using Linear Model\nGenome scan with covairates\nCPU parallelization and GPU acceleration\nInput data can be of different precisions (Float32, or Float64)","category":"page"},{"location":"#Input-and-Output","page":"Home","title":"Input and Output","text":"","category":"section"},{"location":"#Input-(all-with-no-missing-data)","page":"Home","title":"Input (all with no missing data)","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Genotype probability \nPhenotype\nCovariates (Optional)","category":"page"},{"location":"#Output","page":"Home","title":"Output","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Default) Maximum LOD (Log of Odds) score, and the index of the maximum\nLOD (Log of Odds) matrix","category":"page"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"See example/spleen_analysis.ipynb","category":"page"},{"location":"#Auxilary-Github-Repositories","page":"Home","title":"Auxilary Github Repositories","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"LiteQTL.jl Binary Compilation","category":"page"},{"location":"","page":"Home","title":"Home","text":"This repo contais scripts to compile the LiteQTL package to remove the compilation time of Julia (the extra time in the first run in Julia REPL).","category":"page"},{"location":"","page":"Home","title":"Home","text":"LiteQTL.jl G3 Journal Supplemental Materials","category":"page"},{"location":"","page":"Home","title":"Home","text":"It is an effort to make our research reproducible. All code related to experiment reuslt, from dowloading data, cleaning data, to running LiteQTL and creating figure are found in this repository. You can recreate the results in our paper Speeding up eQTL scans in the BXD population using GPUs using the scripts in this repository.","category":"page"}]
}
