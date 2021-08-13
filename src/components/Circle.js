import React,{useEffect, useRef} from 'react'
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

function Circle() {

    const chart=useRef()
    const chartDiv=useRef()

    useEffect(()=>{
            chart.current = am4core.create(chartDiv.current, am4charts.PieChart)     
            // Add data
            chart.current.data = [ {
                "country": "Lithuania",
                "litres": 501.9
            }, {
                "country": "Czechia",
                "litres": 301.9
            } ];
     
            // Add and configure Series
            var pieSeries = chart.current.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "litres";
            pieSeries.dataFields.category = "country";
            pieSeries.slices.template.stroke = am4core.color("#fff");
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;
    
            // This creates initial animation
            pieSeries.hiddenState.properties.opacity = 1;
            pieSeries.hiddenState.properties.endAngle = -90;
            pieSeries.hiddenState.properties.startAngle = -90;        
    },[])

    return (
        <div id="chartdiv" ref={chartDiv} />
    )
}

export default Circle
