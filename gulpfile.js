var gulp = require ("gulp");
var sass = require ("gulp-ruby-sass");
var watch = require ("gulp-watch");

//task sass
gulp.task("sass", function(){
	return sass ("sass/**/*.sass").pipe(gulp.dest("css"))
});

//gulp 
gulp.task("watch", function (){
	gulp.watch("sass/**/*.sass", ["sass"]);
});

//gulp default
gulp.task("default", ["sass", "watch"]);