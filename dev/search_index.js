var documenterSearchIndex = {"docs":
[{"location":"library/#Library-1","page":"Library","title":"Library","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"","category":"page"},{"location":"library/#","page":"Library","title":"Library","text":"Modules = [LiteQTL]","category":"page"},{"location":"library/#LiteQTL.get_geno_data-Tuple{Any,Any}","page":"Library","title":"LiteQTL.get_geno_data","text":"get_geno_data(file, datatype)\n\n\nreturns the genotype data. Will skip every other column because genotype probability is duplicated. \n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.get_pheno_data-Tuple{Any,Any}","page":"Library","title":"LiteQTL.get_pheno_data","text":"get_pheno_data(file, datatype; transposed)\n\n\nreturns the phenotype data. If transposed=true, then the data will be transposed. \n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.scan-Tuple{AbstractArray{var\"#s28\",2} where var\"#s28\"<:Real,AbstractArray{var\"#s12\",2} where var\"#s12\"<:Real,AbstractArray{var\"#s144\",2} where var\"#s144\"<:Real,Int64}","page":"Library","title":"LiteQTL.scan","text":"scan(Y, G, X, n; export_matrix, usegpu, desiredoutput)\n\n\nThis scan function will run \n\nArguments:\n\nY : a matrix of phenotypes\nG : a matrix of genotypes\nX : a matrix of covariates\nn : the number of individuals\nexport_matrix : a boolean value that determines whether the result should be the maximum value of LOD score of each phenotype and its corresponding index, or the whole LOD score matrix. \nusegpu : a boolean value that indicates whether to run scan function on GPU or CPU. Default is false, which runs scan on CPU. \n\nOutput:\n\nreturns the maximum LOD (Log of odds) score if export_matrix is false, or LOD score matrix otherwise.\n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.scan-Tuple{AbstractArray{var\"#s31\",2} where var\"#s31\"<:Real,AbstractArray{var\"#s30\",2} where var\"#s30\"<:Real,Int64}","page":"Library","title":"LiteQTL.scan","text":"scan(Y, G, n; export_matrix, usegpu, desiredoutput)\n\n\nThis function will run genome scan without covariates.\n\nArguments:\n\nY : a matrix of phenotypes\nG : a matrix of genotypes\nn : the number of individuals\nexport_matrix : a boolean value that determines whether the result should be the maximum value of LOD score of each phenotype and its corresponding index, or the whole LOD score matrix. \nusegpu : a boolean value that indicates whether to run scan function on GPU or CPU. Default is false, which runs scan on CPU. \n\nOutput:\n\ncalls cpurun function if usegpu=false, otherwise, calls gpurun\n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.cpurun","page":"Library","title":"LiteQTL.cpurun","text":"cpurun(Y, G, X, n, export_matrix, desiredoutput)\ncpurun(Y, G, X, n, export_matrix, desiredoutput, debug)\n\n\nArguments:\n\nY : a matrix of phenotypes\nG : a matrix of genotypes\nX : a matrix of covariates\nn : the number of individuals\nexport_matrix : a boolean value that determines whether the result should be the maximum value of LOD score of each phenotype and its corresponding index, or the whole LOD score matrix. \n\nOutput:\n\nreturns the maximum LOD (Log of odds) score if export_matrix is false, or LOD score matrix otherwise.\n\n\n\n\n\n","category":"function"},{"location":"library/#LiteQTL.cpurun","page":"Library","title":"LiteQTL.cpurun","text":"cpurun(Y, G, n, export_matrix, desiredoutput)\ncpurun(Y, G, n, export_matrix, desiredoutput, debug)\n\n\nArguments:\n\nY : a matrix of phenotypes\nG : a matrix of genotypes\nn : the number of individuals\nexport_matrix : a boolean value that determines whether the result should be the maximum value of LOD score of each phenotype and its corresponding index, or the whole LOD score matrix. \n\nOutput:\n\nreturns the maximum LOD (Log of odds) score if export_matrix is false, or LOD score matrix otherwise.\n\n\n\n\n\n","category":"function"},{"location":"library/#LiteQTL.gpurun-Tuple{Array{var\"#s89\",2} where var\"#s89\"<:Real,Array{var\"#s35\",2} where var\"#s35\"<:Real,Any}","page":"Library","title":"LiteQTL.gpurun","text":"gpurun(Y, G, n)\n\n\nArguments:\n\nY : a matrix of phenotypes\nG : a matrix of genotypes\nn : the number of individuals\n\nOutput:\n\nreturns the maximum LOD (Log of odds) score \n\n\n\n\n\n","category":"method"},{"location":"#LiteQTL.jl-Documentation-1","page":"Home","title":"LiteQTL.jl Documentation","text":"","category":"section"},{"location":"#Package-information-1","page":"Home","title":"Package information","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"LiteQTL is a package that runs whole genome QTL scans near real-time, utilizing the computation power of GPU. ","category":"page"},{"location":"#Features-1","page":"Home","title":"Features","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Near real time computation for whole genome scan using Linear Model\nGenome scan with covairates\nCPU parallelization and GPU acceleration\nInput data can be of different precisions (Float32, or Float64)","category":"page"},{"location":"#Input-and-Output-1","page":"Home","title":"Input and Output","text":"","category":"section"},{"location":"#Input-(all-with-no-missing-data)-1","page":"Home","title":"Input (all with no missing data)","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Genotype probability \nPhenotype\nCovariates (Optional)","category":"page"},{"location":"#Output-1","page":"Home","title":"Output","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"(Default) Maximum LOD (Log of Odds) score, and the index of the maximum\nLOD (Log of Odds) matrix","category":"page"},{"location":"#Example-1","page":"Home","title":"Example","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"See example/spleen_analysis.ipynb","category":"page"},{"location":"#Auxilary-Github-Repositories-1","page":"Home","title":"Auxilary Github Repositories","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"LiteQTL.jl Binary Compilation","category":"page"},{"location":"#","page":"Home","title":"Home","text":"This repo contais scripts to compile the LiteQTL package to remove the compilation time of Julia (the extra time in the first run in Julia REPL).","category":"page"},{"location":"#","page":"Home","title":"Home","text":"LiteQTL.jl G3 Journal Supplemental Materials","category":"page"},{"location":"#","page":"Home","title":"Home","text":"It is an effort to make our research reproducible. All code related to experiment reuslt, from dowloading data, cleaning data, to running LiteQTL and creating figure are found in this repository. You can recreate the results in our paper Speeding up eQTL scans in the BXD population using GPUs using the scripts in this repository.","category":"page"}]
}
