var bardata = [];

for (var i = 0; i <50; i++){
	bardata.push(Math.random())
}bardata.unshift("data1");

var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [ bardata ]
    },
    zoom: {
  enabled: true
}
});

console.log(chart)
function doSomething(){
	chart.transform('bar');
}


var chart2 = c3.generate({
    data: {
        // iris data from R
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});