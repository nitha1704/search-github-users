// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const MostPopularReposChart = ({ data }) => {
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "100%", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Top 5 Repositories",
        captionFontSize: 20,
        captionPadding: 30,    
        yAxisName: "Stars",
        yAxisNameFontSize: 20,
        yAxisNameColor: "#000000",
        xAxisName: "Repos",
        xAxisNameFontSize: 20,
        baseFont: "Arial",
        baseFontSize: 15,
        baseFontColor: "#000000",
        bgColor: "#FFFFFF",
        bgAlpha: "100",
        pieRadius: "45%",
        paletteColors:
          "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
        showBorder: 0,
        use3DLighting: 0,
        showShadow: 0,
        showPlotBorder: 0,
        valuePadding: "0",
        showCanvasBorder: 0,
        showAlternateHGridColor: 0,
        usePlotGradientColor: 0,
        //theme: "fusion",
      },
      // Chart Data
      data: data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default MostPopularReposChart;
