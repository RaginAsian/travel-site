var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("Awsome! This works.");

});

gulp.task('html', function(){

	console.log("Imagine something being done here.");

});

gulp.task('watch' function() {

	watch('./app/index.html', function() {
		gulp.start('html');

	});

});