MathJax = {
    tex: {
        packages: ['base'],        // extensions to use
        inlineMath: [              // start/end delimiter pairs for in-line math
            ['$', '$']
        ],
        displayMath: [             // start/end delimiter pairs for display math
            ['$$', '$$']
        ],
        processEscapes: true,      // use \$ to produce a literal dollar sign
        processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
    },
    options: {
        skipHtmlTags: [            //  HTML tags that won't be searched for math
        ],
        includeHtmlTags: {         //  HTML tags that can appear within math
            br: '\n', wbr: '', '#comment': ''
        },
        ignoreHtmlClass: 'tex2jax_ignore',    //  class that marks tags not to search
        processHtmlClass: 'tex2jax_process',  //  class that marks tags that should be searched
        compileError: function (doc, math, err) { doc.compileError(math, err) },
        typesetError: function (doc, math, err) { doc.typesetError(math, err) }
    }
};