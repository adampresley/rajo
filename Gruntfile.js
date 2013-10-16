module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		jshint: {
			files: [
				"rajo/**/*.js"
			]
		},
		requirejs: {
			compile: {
				options: {
					/*paths: {
						"app": "app"
					},*/
					baseUrl: ".",
					name: "rajo/rajo",
					mainConfigFile: "config.js",
					out: "dist/rajo.js"
				}
			}
		},
		clean: ["dist/docs/html"],
		mkdir: {
			all: {
				options: {
					create: ["dist", "dist/docs/html"]
				}
			}
		},
		natural_docs: {
			options: {
				bin: "/usr/bin/naturaldocs"
			},
			main: {
				src: ".",
				project: "dist/docs/project",
				inputs: ["rajo"],
				output: "dist/docs/html",
				excludes: [
					"/dist",
					"/node_modules"
				]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-requirejs");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-natural-docs");
	grunt.loadNpmTasks("grunt-mkdir");

	grunt.registerTask("lint", ["jshint"]);
	grunt.registerTask("default", ["clean", "mkdir", "jshint", "requirejs", "natural_docs"]);
};
