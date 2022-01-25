import { ApexOptions } from 'apexcharts'
import React, { FC, ReactElement } from 'react'
import ReactApexChart from 'react-apexcharts'
import { ChartSpecificPropertiesProps } from './index-interfaces'

const ToLetChartProperties: FC<ChartSpecificPropertiesProps> = (props): ReactElement => {
  const { tabActive, tabMenuOfCategory, propertyData } = props

  const series = [76, 67, 61, 90]
  const options: ApexOptions = {
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  }
  console.log(propertyData)
  return (
    <>
      <div>Chart Properties: {tabMenuOfCategory[tabActive]}</div>
      <ReactApexChart options={options} series={series} type="radialBar" height={490} />
    </>
  )
}

export default ToLetChartProperties
