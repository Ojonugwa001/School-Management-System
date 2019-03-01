$(document).ready(function() {
	var ctx = $("#mycanvas").get(0).getContext("2d");

	var data = [
		{
			value: 70,
			color: "#27A9F8",
			highlight: "#0492e8",
			label: "Distinction"
		},
		{
			value: 30,
			color: "#F0F0F0",
			highlight: "#e2dede",
			label: "Average"
		},
	];

	var options = {
        percentageInnerCutout: 80
    };

	var chart = new Chart(ctx).Doughnut(data, options);
});

