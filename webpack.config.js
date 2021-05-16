const path = require('path');
module.exports = {
    mode:'production', //dev mode production | development
    watch:true, //enable watching for chnages and re-compile
    devtool: "source-map",  //for deubg ts and tsx files in the browser   
    entry:{
        app:'./app/app.tsx' //entry point
    },
    output:{
        path: path.join(__dirname, "./dist"),
        filename: "[name].js"
    },
    resolve:{
        extensions: [".js", ".json", ".jsx", ".css",".tsx",".ts"] // extensions that are used
    },
    module:{
        rules: [            
           {
            test: /\.tsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
              }
            }
          }
        ]
    }
}