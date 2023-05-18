import gulp from "gulp";
// const sass = require("gulp-sass")(require("sass"));
// const merge = require("merge2");

gulp.task("copy:style", function () {
  return gulp
    .src("./src/runtime/myle/style/**/*")
    .pipe(gulp.dest("dist/runtime/myle/style"));
});
