import React, {useEffect} from 'react'
import Highcharts from 'highcharts'
import './Charts.css'
import HighchartsReact from 'highcharts-react-official'


let setupOptions = (props) => {

    if(props.charts === 'n/a'){
        return 0
    }

    let minutesFlor = (minutes) => {
        if (minutes < 10) {
            return '0' + minutes
        } else {
            return minutes
        }
    }

    let hashesData = 'Hs'
    let showHashes = (hashrate) => {
        if (hashrate === 1) {
            hashesData = ' H/s'
        }
        if (hashrate === 2) {
            hashesData = ' kH/s'
        }
        if (hashrate === 3) {
            hashesData = ' MH/s'
        }
        if (hashrate === 4) {
            hashesData = ' GH/s'
        }
        if (hashrate === 5) {
            hashesData = ' TH/s'
        }
    }

    let arr1 = props.charts.map(el => {
        if (el !== undefined) {
            if (el.hr.toString().length <= 3) {
                showHashes(1)
                let x = el.hr
                return Number(x.toFixed(2))
            }
            if (el.hr.toString().length > 3 && el.hr.toString().length <= 6) {
                let x = el.hr;
                if(el.hr > 2000){
                    x = el.hr / 1000
                    showHashes(2)
                    return Number(x.toFixed(0))
                }
                showHashes(1)
                return Number(x.toFixed(0))
            }
            if (el.hr.toString().length > 6 && el.hr.toString().length <= 9) {
                let x = el.hr / 1000
                if(el.hr > 2000000){
                    x = el.hr / 1000000
                    showHashes(3)
                    return Number(x.toFixed(2))
                }
                showHashes(2)
                return Number(x.toFixed(1))
            }
            if (el.hr.toString().length > 9 && el.hr.toString().length <= 12) {
                let x = el.hr / 1000000

                if(el.hr > 2000000000){
                    x = el.hr / 1000000000
                    showHashes(4)
                    return Number(x.toFixed(2))
                }
                showHashes(3)
                return Number(x.toFixed(1))
            }
            if (el.hr.toString().length > 12 && el.hr.toString().length <= 15) {
                let x = el.hr / 1000000000
                if(el.hr > 2000000000000){
                    x = el.hr / 1000000000000
                    showHashes(5)
                    return Number(x.toFixed(2))
                }
                showHashes(4)
                return Number(x.toFixed(0))
            }
        } else return 0
    })

    const cutOffLastElem = (array,cut) => {
        const [first, ...rest] = array;
        return rest.slice(cut);
    }


    let arr2 = props.charts.map(el => {
        return new Date(el.timestamp * 1000).getHours() + ':' + minutesFlor(new Date(el.timestamp * 1000).getMinutes())
    })

    arr1 = cutOffLastElem(arr1,-96)
    arr2 = cutOffLastElem(arr2,-96)


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
            backgroundColor: 'rgba(85,77,77,0.56)',
            height:'300px'
        },
        series: [{
            showInLegend: false,
            type: 'spline',
            name: hashesData,
            data: [...arr1],
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
            categories: [...arr2],

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