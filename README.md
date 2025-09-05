<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Processing API</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            color: #2d3748;
            line-height: 1.6;
            padding: 40px 20px;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        header {
            background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        
        h1 {
            font-size: 48px;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .subtitle {
            font-size: 22px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .content {
            padding: 40px;
        }
        
        h2 {
            font-size: 36px;
            color: #2b6cb0;
            margin: 40px 0 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid #4b6cb7;
        }
        
        h2:first-child {
            margin-top: 0;
        }
        
        p {
            font-size: 18px;
            margin-bottom: 20px;
            line-height: 1.6;
        }
        
        .structure {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            font-size: 17px;
            line-height: 1.8;
            overflow-x: auto;
            margin: 25px 0;
            border-left: 5px solid #4b6cb7;
        }
        
        .folder {
            color: #2b6cb0;
            font-weight: bold;
        }
        
        .file {
            color: #38a169;
        }
        
        .config {
            color: #d69e2e;
        }
        
        .comment {
            color: #718096;
            font-style: italic;
        }
        
        .indent-1 {
            margin-left: 20px;
        }
        
        .indent-2 {
            margin-left: 40px;
        }
        
        .indent-3 {
            margin-left: 60px;
        }
        
        footer {
            text-align: center;
            padding: 30px;
            background: #f8f9fa;
            color: #4a5568;
            font-size: 16px;
            border-top: 1px solid #e2e8f0;
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 36px;
            }
            
            h2 {
                font-size: 28px;
            }
            
            .subtitle {
                font-size: 18px;
            }
            
            .content {
                padding: 25px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Image Processing API</h1>
            <p class="subtitle">This project is a simple Image Processing API that lets you resize images dynamically through URL parameters.</p>
        </header>
        
        <div class="content">
            <h2>Project Structure</h2>
            
            <div class="structure">
                <div class="folder">project-root</div>
                <div class="folder indent-1">dist <span class="comment"># Compiled output directory</span></div>
                <div class="folder indent-1">images <span class="comment"># Image assets</span></div>
                <div class="folder indent-1">node_modules <span class="comment"># Node.js dependencies (auto-generated)</span></div>
                <div class="folder indent-1">Spec</div>
                <div class="folder indent-2">Support</div>
                <div class="file indent-3">jasmine.json <span class="comment"># Jasmine configuration</span></div>
                <div class="folder indent-1">src</div>
                <div class="folder indent-2">MyApi <span class="comment"># TypeScript source code</span></div>
                <div class="folder indent-1">test <span class="comment"># Test files</span></div>
                <div class="folder indent-1">helpers <span class="comment"># Helper/utility functions</span></div>
                <div class="folder indent-1">TS reporters <span class="comment"># TypeScript test reporters</span></div>
                <div class="folder indent-1">TS APIspects <span class="comment"># API specifications</span></div>
                <div class="folder indent-1">TS APIs <span class="comment"># API implementations</span></div>
                <div class="config indent-1">.prettierrc <span class="comment"># Prettier configuration</span></div>
                <div class="config indent-1">eslint.config.mjs <span class="comment"># ESLint configuration</span></div>
                <div class="file indent-1">package-lock.json <span class="comment"># NPN dependency lockfile</span></div>
                <div class="file indent-1">package.json <span class="comment"># Project dependencies and scripts</span></div>
                <div class="config indent-1">tsconfig.json <span class="comment"># TypeScript configuration</span></div>
            </div>
        </div>
        
        <footer>
            <p>Image Processing API Documentation</p>
        </footer>
    </div>
</body>
</html>
