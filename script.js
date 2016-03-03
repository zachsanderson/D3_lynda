var bardata = [];

for (var i=0; i < 100; i++) {
	bardata.push(Math.random()*30);
}

var height = 400,
	width = 600,
	barWidth = 50,
	barOffset = 5;

var yScale = d3.scale.linear()
		.domain([0, d3.max(bardata)])
		.range([0, height])

var xScale = d3.scale.ordinal()
		.domain(d3.range(0, bardata.length))
		.rangeBands([0, width])

var colors = d3.scale.linear()
		.domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
		.range(['#FFB832', '#C61C6F', '#268BD2', '#85992C'])

d3.select('#chart').append('svg')
	.attr('width', width)
	.attr('height', height)
	.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill', function(d,i) {
			return colors(i);
		})
		.attr('width', xScale.rangeBand())
		.attr('height', function(d) {
			return yScale(d);
		})
		.attr('x', function(d,i) {
			return xScale(i);
		})
		.attr('y', function(d) {
			return height - yScale(d);
		})