		<link rel="import" href="index.html">
		<link rel="import" href="./d3/d3.min.js">

		var w = 500;
		var h = 200;
		var barPadding = 1;

		//Array of data
		var dataset = {"food" : 21, "Other" : 12, "sports" : 15}


		//Creating an SVG element
		var svg = d3.select("Instagram table")
					.append("svg")
					.attr("width", w)
					.attr("height", h);
		

		svg.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.attr("x", 0)
			.attr("y", 0)
			.attr("width", 20)
			.attr("height", 100)
			.attr("x", function(d,i) {
				return i * (w / dataset.length);
			})
			.attr ("y", function (d){
				return h - (d * 4);
			})
			.attr ("width", w / dataset.length - barPadding)
			.attr ("height", function(d) {
				return d * 4;
			})
			.attr ("fill", function(d) {
				return "rgb(20, 240, " + (d * 10) + ")";
			});

		svg.selectAll("text")
			.data(dataset)
			.enter()
			.append("text")

		.text(function(d){
			return d;
		})

		.attr("x", function(d, i) {
			return i * (w /dataset.length) + 5;
		})
		.attr("y", function(d) {
			return h - (d * 4) + 15;
		})
		.attr("font-family", "sans-serif")
	   	.attr("font-size", "11px")
	   	.attr("fill", "white");

