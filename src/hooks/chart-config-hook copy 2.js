

// useChartConfig.js
export const useChartConfig = (
  chartType,
  chartTitle = '',
  hAxisTitle = '',
  vAxisTitle = '',
  yAxisRange = { minValue: 0 },
  colors = ['#3366CC'],
  showLegend = true,
  showAxisLabels = true,
  showYAxisLabels = true,
  vAxisTicks = [] // Example tick intervals

) => {
  const defaultConfigs = {
    // -----------------------------------------------------------
    // BAR CHART
    // -----------------------------------------------------------
    BarChart: {
      title: chartTitle,
      // chartArea: { width: '80%', height: '50%' },
      hAxis: {
        title: hAxisTitle,
        direction: 1,
        textPosition: showAxisLabels ? 'out' : 'none'
      },

      vAxis: {
        title: vAxisTitle,
        textPosition: showYAxisLabels ? 'out' : 'none'

      },
      legend: { position: showLegend ? 'top' : 'none' },
      colors: colors,
    },
    // -----------------------------------------------------------
    // COLUMN CHART
    // -----------------------------------------------------------
    ColumnChart: {
      title: chartTitle,
      // chartArea: { width: '80%', height: '50%' },
      hAxis: {
        title: hAxisTitle,
        gridlines: { color: 'transparent' },
      },
      vAxis: {
        title: vAxisTitle,
        minValue: yAxisRange.minValue,
        maxValue: yAxisRange.maxValue,
      },
      legend: { position: showLegend ? 'top' : 'none' },
      colors: colors,
    },

    // -----------------------------------------------------------
    // LINE CHART
    // -----------------------------------------------------------
    LineChart: {
      title: chartTitle,
      // chartArea: { left: 100, top: 100, bottom: 100, right: 100 },
      legend: { position: showLegend ? 'top' : 'none' },


      // chartArea: { width: '80%', height: '80%' },

      hAxis: {
        title: hAxisTitle,
        gridlines: { color: 'transparent' },
        textPosition: showAxisLabels ? 'out' : 'none',
        format: 'MMM d, y',
      },

      vAxis: {
        title: vAxisTitle,
        gridlines: { color: 'transparent' },
        textPosition: showYAxisLabels ? 'out' : 'none',
        ticks: vAxisTicks || undefined,  // Use custom tick intervals
        viewWindow: {
          min: yAxisRange.minValue,  // Ensure viewWindow.min aligns with the ticks
          max: yAxisRange.maxValue,  // Ensure viewWindow.max aligns with the ticks
        },
      },
      curveType: 'function',
    },


    // -----------------------------------------------------------
    // AREA CHART
    // -----------------------------------------------------------
    AreaChart: {
      animation: {
        startup: true,
        duration: 1000,
        easing: 'out',
      },
      title: chartTitle,
      // chartArea: { left: 45, top: 10, bottom: 50, right: 25 },
      legend: { position: showLegend ? 'right' : 'none' },
      hAxis: {
        title: hAxisTitle,
        gridlines: { color: 'transparent' },
        textPosition: showAxisLabels ? 'out' : 'none',
        format: 'MMM d, y',
      },
      vAxis: {
        title: vAxisTitle,
        gridlines: { color: 'transparent' },
        textPosition: showYAxisLabels ? 'out' : 'none',
        ticks: vAxisTicks || undefined,  // Use custom tick intervals
        viewWindow: {
          min: yAxisRange.minValue,  // Ensure viewWindow.min aligns with the ticks
          max: yAxisRange.maxValue,  // Ensure viewWindow.max aligns with the ticks
        },
      },
      backgroundColor: 'transparent',
      colors: colors,
    },

    // -----------------------------------------------------------
    // PIE CHART
    // -----------------------------------------------------------

    PieChart: {

      title: chartTitle,
      chartArea: { width: '80%', height: '50%' },
      legend: { position: showLegend ? 'right' : 'none' },

      pieHole: 0.4,
    },

    // -----------------------------------------------------------
    // TABLE CHART
    // -----------------------------------------------------------
    TableChart: {
      title: chartTitle,
      showRowNumber: true, // Display row numbers
      width: '100%',
      height: '100%',
      allowHtml: true, // Enable HTML content in table cells
      sortColumn: 1, // Initial column to sort
      pageSize: 10,  // Number of rows per page
      page: 'enable', // Enable pagination
    },
  };

  const getConfig = () => defaultConfigs[chartType] || defaultConfigs.BarChart;

  return { config: getConfig() };
};

