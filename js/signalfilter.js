$(document).ready(function(){
    $(".chartContainer").CanvasJSChart({
		title: {
			text: "SuperHeterodyne Chart"
		},
		axisY: {
			title: "Amplitude",
			includeZero: true
		},
		axisX: {
            title: "Frequency",
		},
		data: [
		{
			// type: "line", //try changing to column, area
			// toolTipContent: "{label}: {x} mm:  {y} mm ",
			animationEnabled: false,  //change to false
	
			type: "column",
			dataPoints: [
				{ x: 180, y: 14 }
			]
		}
		]
    });
    
				// { label: "March",y: 6.55 },
				// { label: "April",y: 4.81 },
				// { label: "May",  y: 2.37 },
				// { label: "June", y: 2.33 },
				// { label: "July", y: 3.06 },
				// { label: "Aug",  y: 2.94 },
				// { label: "Sep",  y: 5.41 },
				// { label: "Oct",  y: 2.17 },
				// { label: "Nov",  y: 2.17 },
				// { label: "Dec",  y: 2.80 }
	
});