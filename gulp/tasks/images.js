import webp from "gulp-webp";

export const images = () => {
  return app.gulp
    .src(app.path.src.images, { encoding: false })
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(webp({ quality: 75 }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
