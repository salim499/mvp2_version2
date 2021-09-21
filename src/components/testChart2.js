import React,{useEffect, useRef} from 'react'
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

import '../css/testChart.css'

am4core.useTheme(am4themes_animated)

//const behaviours = ["zoomX", "zoomY", "zoomXY", "panX", "panY", "panXY", "selectX", "selectY", "selectXY", "none"]
const behaviours = ["zoomXY", "panX", "selectX"]
const dataFromBackend =[
  {
      "date": "23.07.2007",
      "US Treasuries": 75.9375,
      "US High Yield": 140.1308,
      "US Equities": 1365.45,
    },
    {
      "US Treasuries": 76.0625,
      "US High Yield": 139.1285,
      "US Equities": 1342.09,
    },
    {
      "US Treasuries": 76.234375,
      "US High Yield": 138.0593,
      "US Equities": 1344.03,
    },
    {

      "US Treasuries": 76.90625,
      "US High Yield": 137.1479,
      "US Equities": 1311.59,
    },
    {
      "US Treasuries": 76.8125,
      "US High Yield": 137.1906,
      "US Equities": 1285.23,
    },
    {
      "US Treasuries": 76.6875,
      "US High Yield": 136.824,
      "US Equities": 1305.24,
    },
    {
      "US Treasuries": 76.828125,
      "US High Yield": 135.3339,
      "US Equities": 1288.67,
    },
    {
      "date": "01.08.2007",
      "US Treasuries": 76.859375,
      "US High Yield": 135.7713,
      "US Equities": 1295.72,
    },
    {
      "US Treasuries": 76.859375,
      "US High Yield": 135.7568,
      "US Equities": 1306.12,
    },
    {
      "date": "03.08.2007",
      "US Treasuries": 77.15625,
      "US High Yield": 136.5559,
      "US Equities": 1272.01,
    },
    {
      "US Treasuries": 77.015625,
      "US High Yield": 136.6757,
      "US Equities": 1293.78,
    },
    {
      "date": "07.08.2007",
      "US Treasuries": 76.9375,
      "US High Yield": 136.8472,
      "US Equities": 1306.74,
    },
    {
      "date": "09.08.2007",
      "US Treasuries": 76.796875,
      "US High Yield": 138.2235,
      "US Equities": 1285.14,
    },
    {
      "date": "10.08.2007",
      "US Treasuries": 76.875,
      "US High Yield": 138.3298,
      "US Equities": 1279.06,
    },
    {
      "date": "13.08.2007",
      "US Treasuries": 76.90625,
      "US High Yield": 138.468,
      "US Equities": 1282.68,
    },
    {
      "date": "14.08.2007",
      "US Treasuries": 77.15625,
      "US High Yield": 138.8395,
      "US Equities": 1264.34,
    },
    {
      "date": "15.08.2007",
      "US Treasuries": 77.375,
      "US High Yield": 138.8794,
      "US Equities": 1246.8,
    },
    {
      "date": "17.08.2007",
      "US Treasuries": 77.671875,
      "US High Yield": 138.0627,
      "US Equities": 1278.09,
    },
    {
      "date": "20.08.2007",
      "US Treasuries": 77.796875,
      "US High Yield": 138.1764,
      "US Equities": 1277.39,
    },
    {
      "date": "21.08.2007",
      "US Treasuries": 78.015625,
      "US High Yield": 138.1962,
      "US Equities": 1278.45,
    },
    {
      "US Treasuries": 77.84375,
      "US High Yield": 138.8875,
      "US Equities": 1294.66,
    },
    {
      "US Treasuries": 77.828125,
      "US High Yield": 139.3422,
      "US Equities": 1292.64,
    },
  ]
function TestChart(props) {

    const chart=useRef()
    const chartDiv=useRef()

    useEffect(()=>{
      console.log(props.lineChartData)
      chart.current = am4core.create(chartDiv.current, am4charts.XYChart);
      /* Add data */
       chart.current.data=props.lineChartData
        
      /* Create axis */
      var categoryAxis = chart.current.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Date";
  
      /* Create value axis */
       var valueAxis = chart.current.yAxes.push(new am4charts.ValueAxis());
  
      /* Create series */
      props.lineChartData[0]&&props.lineChartData[0]!=null&&
          Object.keys(props.lineChartData[0])
          .filter(line=>line!="Date")
          .forEach(line=>{

              console.log(line)
              var series1 = chart.current.series.push(new am4charts.LineSeries());
              series1.dataFields.valueY = line;
              series1.dataFields.categoryX = "Date";
              series1.name = line;
              series1.strokeWidth = 10;
              //series1.tensionX = 0.7;
              series1.strokeOpacity = 1;
              
              var bullet =series1.bullets.push(new am4charts.CircleBullet());
              bullet.properties.visible=false
              bullet.properties.scale=0.5
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
    },[props.lineChartData])
    
    
        return (
          <>
            <div id="chartdiv" ref={chartDiv}>
            </div>
          </>
        )
    }
    
    export default TestChart
    