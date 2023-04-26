var gulp = require("gulp");

// Requires the gulp-sass plugin
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");

gulp.task("browserSync", function () {
  browserSync.init({
    server: {
      baseDir: "app",
    },
  });
});

gulp.task("sass", function () {
  return gulp
    .src("assets/styles/**/*.scss") // Gets all files ending with .scss in app/scss
    .pipe(sass().on("error", sass.logError))
    .pipe(
      cleanCSS({
        compatibility: "ie8",
      })
    )
    .pipe(gulp.dest("assets/styles"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  browserSync.init({
    open: true,
    server: "",
  });
  gulp.watch("assets/styles/**/*.scss", gulp.series(["sass"]));
  gulp.watch("*.html").on("change", browserSync.reload);
});
