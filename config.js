require.config({
	baseUrl: "rajo",
	paths: {
		"persona": "//login.persona.org/include.js",
		"jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",
		"bootstrap": "//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js",
		"rajo.dom": "rajo/rajo.dom",
		"rajo.identity.persona": "rajo/rajo.identity.persona",
		"rajo.pubsub": "rajo/rajo.pubsub",
		"rajo.service": "rajo/rajo.service",
		"rajo.singlepage": "rajo/rajo.singlepage",
		"rajo.ui.bootstrapmodal": "rajo/rajo.ui.bootstrapmodal",
		"rajo.util": "rajo/rajo.util"
	},
	shim: {
		"bootstrap": { deps: ["jquery"] }
	}
});
