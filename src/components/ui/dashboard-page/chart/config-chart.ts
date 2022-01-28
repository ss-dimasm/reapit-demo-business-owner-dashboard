import { ApexOptions } from 'apexcharts'

export const LINE_CHART_CONFIG: ApexOptions = {
  chart: {
    height: 10,
    background: 'transparent',
    stacked: false,
    zoom: {
      enabled: true,
    },
    animations: {
      enabled: true,
      easing: 'linear',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 300,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 150,
      },
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: false,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: false,
      },
      autoSelected: 'zoom',
    },
  },
  xaxis: {
    type: 'datetime',
  },
  colors: ['var(--intent-secondary)'],
  dataLabels: {
    enabled: true,
    style: {
      colors: ['var(--color-blue-dark2)'],
    },
    background: {
      enabled: true,
      foreColor: '#fff',
      padding: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: '#000000',
      opacity: 0.9,
      dropShadow: {
        enabled: false,
      },
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    width: 2,
    dashArray: 10,
  },
}

export const COLUMN_CHART_CONFIG: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  yaxis: {
    title: {
      text: 'Properties On Sale',
    },
  },
  fill: {
    opacity: 1,
  },
}

export const DONUT_PIE_CHART_CONFIG: ApexOptions = {
  chart: {
    type: 'donut',
    width: 1000,
  },
  responsive: [
    {
      options: {
        chart: {
          width: 500,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
}
