var gulp = require ("gulp");
var sass = require ("gulp-sass");
var watch = require ("gulp-watch");

//task sass
gulp.task("sass", function(){
	return gulp.src("sass/**/*.sass")
		.pipe(sass({outputStyle: "compressed"}).on ("error",sass.logError))
		.pipe(gulp.dest("css"));
});

//gulp 
gulp.task("watch", function (){
	gulp.watch("sass/**/*.sass", ["sass"]);
});

//gulp default
gulp.task("default", ["sass", "watch"]);