import React,{useEffect, useRef} from 'react'
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

import '../css/testChart.css'

am4core.useTheme(am4themes_animated)

const behaviours = ["zoomXY", "panX", "selectXY"]

function TestChart(props) {

    const chart=useRef()
    const chartDiv=useRef()

    useEffect(()=>{
         chart.current = am4core.create(chartDiv.current, am4charts.XYChart);
         /* Add data */
        const data=[]
        props.columns.forEach(element => {
          data.push({"country":element, "visits":Math.floor(Math.random() * 3000) + 1})
        });
        chart.current.data = [...data]

        /* Create axes */
        var categoryAxis = chart.current.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 3;

        categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
          if (target.dataItem && target.dataItem.index & 2 == 2) {
            return dy + 1005;
          }
          return dy;
        });

        var valueAxis = chart.current.yAxes.push(new am4charts.ValueAxis());

        // Create series
        var series = chart.current.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.name = "Visits";
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;

        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;

        /* Create a cursor */
        chart.current.cursor = new am4charts.XYCursor();
        // events
        chart.current.cursor.behavior = "selectX";
        chart.current.cursor.events.on("selectended", function(event) {
        var range = event.target.xRange;
        var axis = event.target.chart.xAxes.getIndex(0);
        if(range && axis){
          var from = axis.getPositionLabel(axis.toAxisPosition(range.start));
          var to = axis.getPositionLabel(axis.toAxisPosition(range.end));
          props.handleSetDatesInterval(from,to)
        }
        });
},[])


  return (
    <>
      <div id="chartdiv" ref={chartDiv}>
      </div>
      <div style={{position:"flex"}}>
      {
        behaviours.map((val,index)=>(
          <button onClick={(e)=>{
            chart.current.cursor.behavior=val;
            e.target.style.background="green"
          }}>{val}</button>
        ))
      }
      </div>
    </>
  )
}

export default React.memo(TestChart)
/*

 
*/ 