import webpack from "webpack-stream";

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: true })
    .pipe(
      webpack({
        mode: "development",
        output: {
          filename: "main.min.js",
        },
        module: {
          rules: [
            {
              test: /\.js$/, 
              exclude: /node_modules/, 
              use: {
                loader: "babel-loader", 
                options: {
                  presets: ["@babel/preset-env"],
                },
              },
            },
          ],
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
