import React,{useEffect, useRef, useState} from 'react'
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

import '../css/testChart.css'

// import components 
import Loader from './loader'

am4core.useTheme(am4themes_animated)

//const behaviours = ["zoomX", "zoomY", "zoomXY", "panX", "panY", "panXY", "selectX", "selectY", "selectXY", "none"]
const behaviours = ["zoomXY", "panX", "selectX"]

function TestChart(props) {

    // useRef
    const chart=useRef()
    const chartDiv=useRef()

    // useState
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
  if(props.lineChartData[0] && props.lineChartData[0]!=null){
    chart.current = am4core.create(chartDiv.current, am4charts.XYChart);
    /* Add data */
     chart.current.data=props.lineChartData
      
    /* Create axis */
    var categoryAxis = chart.current.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "date";

    /* Create value axis */
     var valueAxis = chart.current.yAxes.push(new am4charts.ValueAxis());

    /* Create series */
      Object.keys(props.lineChartData[0])
      .filter(line=>line!="date")
      .forEach(line=>{

          var series1 = chart.current.series.push(new am4charts.LineSeries());
          series1.dataFields.valueY = line;
          series1.dataFields.categoryX = "date";
          series1.name = line;
          series1.strokeWidth = 10;
          //series1.tensionX = 0.7;
          series1.strokeOpacity = 1;
          
      })

    /* Add legend */
    chart.current.legend = new am4charts.Legend();
    
    /* Create a cursor */
    chart.current.cursor = new am4charts.XYCursor();

    //scrollbars
    //chart.scrollbarX = new am4core.Scrollbar();
    //chart.scrollbarY = new am4core.Scrollbar();
    
    chart.current.cursor.behavior = "selectX";
    chart.current.cursor.events.on("selectended", function(event) {

      var range = event.target.xRange;
      var axis = event.target.chart.xAxes.getIndex(0);
      if(range && axis){
        var from = axis.getPositionLabel(axis.toAxisPosition(range.start));
        var to = axis.getPositionLabel(axis.toAxisPosition(range.end));
        props.handleSetDatesInterval(from,to)
        console.log("Selected from " + from + " to " + to);
      }
    })
    setLoader(false)
  }
    },[props.lineChartData])
    
    
        return (
          <>
          {loader&&<div style={{top:'200px',left:'47.5%', position: 'relative'}}><Loader/></div>}
            <div id="chartdiv" ref={chartDiv}>
            </div>
          </>
        )
    }
    
    export default TestChart