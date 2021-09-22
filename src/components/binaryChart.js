import React,{useEffect, useRef} from 'react'
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

import '../css/testChart.css'

am4core.useTheme(am4themes_animated)

function BinaryChart() {

    const chart=useRef()
    const chartDiv=useRef()

    useEffect(()=>{
        /**
         * ---------------------------------------
         * This demo was created using amCharts 4.
         *
         * For more information visit:
         * https://www.amcharts.com/
         *
         * Documentation is available at:
         * https://www.amcharts.com/docs/v4/
         * ---------------------------------------
         */

        /* Create chart */
        chart.current = am4core.create(chartDiv.current, am4charts.TreeMap);
        chart.current.data = [
        {name: "Low",value:70}, 
        {name: "High",value:30}
    ];

        chart.current.maxLevels = 1;

        /* Set color step */
        chart.current.colors.step = 2;

        /* Define data fields */
        chart.current.dataFields.value = "value";
        chart.current.dataFields.name = "name";

        var level1 = chart.current.seriesTemplates.create("0");
        var level1_bullet = level1.bullets.push(new am4charts.LabelBullet());
        level1_bullet.locationY = 0.5;
        level1_bullet.locationX = 0.5;
        level1_bullet.label.text = "{name}";
        level1_bullet.label.fill = am4core.color("#fff");
        console.log(level1_bullet);
    },[])

    return (
        <div ref={chartDiv}>
            
        </div>
    )
}

export default BinaryChart
