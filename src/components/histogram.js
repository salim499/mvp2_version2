// Import from react
import React, {useEffect, useRef} from 'react'

// Import from libraries
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

am4core.useTheme(am4themes_animated);

function Histogram(props) {
  console.log(props)

    // useRef
    const chart=useRef()
    const chartDiv=useRef()


    useEffect(()=>{
        /*
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

    var seriesRange = categoryAxis.createSeriesRange(series);
    seriesRange.contents.strokeDasharray = "2,3";
    seriesRange.contents.stroke = chart.current.colors.getIndex(8);
    seriesRange.contents.strokeWidth = 1;

    var pattern = new am4core.LinePattern();
    pattern.rotation = -45;
    pattern.stroke = seriesRange.contents.stroke;
    pattern.width = 1000;
    pattern.height = 1000;
    pattern.gap = 6;
    seriesRange.contents.fill = pattern;
    seriesRange.contents.fillOpacity = 0.5;

    // add range
    var range = categoryAxis.axisRanges.push(new am4charts.CategoryAxisDataItem());
    range.grid.stroke = chart.current.colors.getIndex(0);
    range.grid.strokeOpacity = 1;
    range.bullet = new am4core.ResizeButton();
    range.bullet.background.fill = chart.current.colors.getIndex(0);
    range.bullet.background.states.copyFrom(chart.current.zoomOutButton.background.states);
    range.bullet.minX = 0;
    range.bullet.adapter.add("minY", function(minY, target) {
      target.maxY = chart.current.plotContainer.maxHeight;
      target.maxX = chart.current.plotContainer.maxWidth;
      return chart.current.plotContainer.maxHeight;
    })

    range.bullet.events.on("dragged", function() {
      console.log(range.bullet)
      //range.value = categoryAxis.xToValue(range.bullet.pixelX);
      //seriesRange.value = range.value;
    })*/
    
    

const datas =[
    {date:new Date(), visits:1000 },
    {date:new Date(), visits:1005 },
    {date:new Date(), visits:1500 },
    {date:new Date(), visits:1050 },
    {date:new Date(), visits:1050 },
    {date:new Date(), visits:1030 },
    {date:new Date(), visits:1030 },
    {date:new Date(), visits:1060 },
    {date:new Date(), visits:1001 },
    {date:new Date(), visits:900 },
    {date:new Date(), visits:1300 },
]
am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    chart.current = am4core.create(chartDiv.current, am4charts.XYChart);
    
    // Add data
    props.histogram&&props.histogram.forEach(element=>element.from="")
    chart.current.data = props.histogram;
    
    // Create axes
    var dateAxis = chart.current.xAxes.push(new am4charts.DateAxis());
    
    var valueAxis = chart.current.yAxes.push(new am4charts.ValueAxis());
    
    // Create series
    var series = chart.current.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "count";
    series.dataFields.dateX = "from";
    series.strokeWidth = 1;
    series.minBulletDistance = 10;
    series.tooltipText = "{valueY}";
    series.fillOpacity = 0.1;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.fillOpacity = 0.5;
    series.tooltip.label.padding(12, 12, 12, 12)
    
    var seriesRange = dateAxis.createSeriesRange(series);
    seriesRange.contents.strokeDasharray = "2,3";
    seriesRange.contents.stroke = chart.current.colors.getIndex(8);
    seriesRange.contents.strokeWidth = 1;
    
    var pattern = new am4core.LinePattern();
    pattern.rotation = -45;
    pattern.stroke = seriesRange.contents.stroke;
    pattern.width = 1000;
    pattern.height = 1000;
    pattern.gap = 6;
    seriesRange.contents.fill = pattern;
    seriesRange.contents.fillOpacity = 0.5;
      
    // add range
    var range = dateAxis.axisRanges.push(new am4charts.DateAxisDataItem());
    range.grid.stroke = chart.current.colors.getIndex(0);
    range.grid.strokeOpacity = 1;
    range.bullet = new am4core.ResizeButton();
    range.bullet.background.fill = chart.current.colors.getIndex(0);
    range.bullet.background.states.copyFrom(chart.current.zoomOutButton.background.states);
    range.bullet.minX = 0;
    range.bullet.adapter.add("minY", function(minY, target) {
      target.maxY = chart.current.plotContainer.maxHeight;
      target.maxX = chart.current.plotContainer.maxWidth;
      return chart.current.plotContainer.maxHeight;
    })
    
    range.bullet.events.on("dragged", function() {
      range.value = dateAxis.xToValue(range.bullet.pixelX);
      seriesRange.value = range.value;
    })
    
 
    
    }); 
    },[])

    return (
        <div ref={chartDiv} style={{height:props.height?props.height:'130px'}}>
            
        </div>
    )
}

export default Histogram
