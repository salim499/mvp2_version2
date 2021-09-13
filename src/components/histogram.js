// Import from react
import React, {useEffect, useRef} from 'react'

// Import from libraries
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

am4core.useTheme(am4themes_animated);

function Histogram() {

    // useRef
    const chart=useRef()
    const chartDiv=useRef()


    useEffect(()=>{

        // Source data
        var data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3];
        
        var maxCols =300;

        function getHistogramData(source) {
        
        // Init
        var data = [];
        var min = Math.min.apply(null, source);
        var max = Math.max.apply(null, source);
        var range = max - min;
        var step = range / maxCols;
        
        // Create items
        for(var i = 0; i < maxCols; i++) {
            var from = min + i * step;
            var to = min + (i + 1) * step;
            data.push({
            from: from,
            to: to,
            count: 0
            });
        }
        
        // Calculate range of the values
        for(var i = 0; i < source.length; i++) {
            var value = source[i];
            var item = data.find(function(el) {
            return (value >= el.from) && (value <= el.to);
            });
            item.count++;
        }
        return data;
        }
        
        // Create chart instance
        chart.current = am4core.create(chartDiv.current, am4charts.XYChart);
        
        // Add data
        chart.current.data = getHistogramData(data);
        
        // Create axes
        var categoryAxis = chart.current.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "from";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        
        var valueAxis = chart.current.yAxes.push(new am4charts.ValueAxis());
        
        // Create series
        var series = chart.current.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "count";
        series.dataFields.categoryX = "from";
        series.columns.template.tooltipText = "{from} - {to}\n[bold]Count: {count}[/]";
    },[])

    return (
        <div ref={chartDiv} style={{height:'130px'}}>
            
        </div>
    )
}

export default Histogram
