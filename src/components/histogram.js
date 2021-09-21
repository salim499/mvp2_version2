// Import from react
import React, {useEffect, useRef} from 'react'

// Import from libraries
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

am4core.useTheme(am4themes_animated);

function Histogram(props) {

    // useRef
    const chart=useRef()
    const chartDiv=useRef()


    useEffect(()=>{

        console.log(props)
        
        // Create chart instance
        chart.current = am4core.create(chartDiv.current, am4charts.XYChart);
        
        // Add data
        chart.current.data = props.histogram;
        
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
        <div ref={chartDiv} style={{height:props.height?props.height:'130px'}}>
            
        </div>
    )
}

export default Histogram
