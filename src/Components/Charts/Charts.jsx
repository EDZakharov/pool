import React from 'react'
import Highcharts from 'highcharts'
import './Charts.css'
import HighchartsReact from 'highcharts-react-official'


let setupOptions = (props) => {

    if(props.charts === 'n/a'){
        return 0
    }

    let hashesData = 'Hs'
    let showHashes = (hashrate) => {
        if (hashrate === 1) {
            hashesData = ' Hs'
        }
        if (hashrate === 2) {
            hashesData = ' kHs'
        }
        if (hashrate === 3) {
            hashesData = ' MHs'
        }
        if (hashrate === 4) {
            hashesData = ' GHs'
        }
    }

    let minutesFlor = (minutes) => {
        if (minutes < 10) {
            return '0' + minutes
        } else {
            return minutes
        }
    }

    let arr1 = props.charts.map(el => {
        if (el !== undefined) {
            if (el.hr.toString().length < 4) {
                showHashes(1)
                let x = el.hr
                return Number(x.toFixed(2))
            }
            if (el.hr.toString().length >= 4 && el.hr.toString().length < 9) {
                showHashes(2)
                let x = el.hr / 1000
                return Number(x.toFixed(0))
            }
            if (el.hr.toString().length >= 9 && el.hr <= 2000000000) {
                showHashes(3)
                let x = el.hr / 1000000
                return Number(x.toFixed(0))
            }
            if (el.hr.toString().length >= 10 && el.hr > 2000000000) {
                showHashes(4)
                let x = el.hr / 1000000000
                return Number(x.toFixed(2))
            }
        } else return 0
    })
    let arr2 = arr1.filter((item, index)=>!((index+1)%3));
    let arr3 = props.charts.map(el => {
        return new Date(el.timestamp * 1000).getHours() + ':' + minutesFlor(new Date(el.timestamp * 1000).getMinutes())
    })
    let arr4 = arr3.filter((item, index)=>!((index+1)%3));

    return {
        title: {
            text: `${props.text}`,
            style: {color: '#fff', fontSize: '26px'}
        },

        plotOptions: {
            series: {
                label: {style: {color: 'black'}},
            },
            area:{
                marker:{
                    enabled:false
                }
            }
        },
        chart: {
            type: 'spline',
            backgroundColor: '#554d4d',
        },
        series: [{
            showInLegend: false,
            type: 'spline',
            name: hashesData,
            data: [...arr2],
            color: '#e5bf36',
            dataLabels: {
                style: {
                    color: '#ffffff'
                }
            }

        }],
        accessibility: {
            enabled: false,
        },
        xAxis: {
            categories: [...arr4],

            labels: {
                style: {
                    color: '#fff',
                }
            },

        },
        yAxis: [{
            gridLineColor: '#747474',
            title: {
                text: hashesData,
                style: {color: '#fff', fontSize:'20px'}
            },
            alternateGridColor: 'rgba(101,70,70,0.07)',
            labels: {
                style: {
                    color: '#fff',
                }
            },
        }]
    }
}
const Charts = (props) => {
    if(props.charts){
        return <div className='Charts'>{props.charts !== 'n/a' ? <HighchartsReact
            highcharts={Highcharts}
            options={setupOptions(props)}
        />:''}

        </div>
    }
}

export default Charts