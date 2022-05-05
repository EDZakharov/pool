import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


let setupOptions = (props) => {

    let arr = [];

    props.charts.map(el => {
        // console.log(el)
        let index = arr.findIndex(elem => elem.timestamp === el.timestamp)
        if (index === -1) {
            arr.push(el);
        } else {
            arr[index] = el;
        }
    })


    let arrFilter = [
        arr[arr.length - 24],
        arr[arr.length - 23],
        arr[arr.length - 22],
        arr[arr.length - 21],
        arr[arr.length - 20],
        arr[arr.length - 19],
        arr[arr.length - 18],
        arr[arr.length - 17],
        arr[arr.length - 16],
        arr[arr.length - 15],
        arr[arr.length - 14],
        arr[arr.length - 13],
        arr[arr.length - 12],
        arr[arr.length - 11],
        arr[arr.length - 10],
        arr[arr.length - 9],
        arr[arr.length - 8],
        arr[arr.length - 7],
        arr[arr.length - 6],
        arr[arr.length - 5],
        arr[arr.length - 4],
        arr[arr.length - 3],
        arr[arr.length - 2],
        arr[arr.length - 1],
    ]
    // console.log(arrFilter)


    let minutesFlor = (minutes) => {
        if (minutes < 10) {
            return '0' + minutes
        } else {
            return minutes
        }
    }

    let obj = {...arrFilter}


    let hashesData = 'Hs'

    let arrFilterMap = arrFilter.map(el => {


        function showHashes(hashrate) {
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

        // evcFHWmjxt2Q8J1e1CsfsJPeyHtnyuAZedo8QbpoZxeyAYjNtrNouhw7QEXwQCkD8FfRsjFDSNYUg2c9qnd4QgKS6ogHdPafxg
        if (el.hr) {
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

            // if (el.hr <= 1000) {
            //     showHashes(1)
            //     let x = el.hr
            //     return Number(x.toFixed(2))
            // } else if(el.hr > 1000 && el.hr <= 1000000){
            //     showHashes(2)
            //     let x = el.hr / 1000
            //     return Number(x.toFixed(2))
            // } else if(el.hr > 1000000 && el.hr <= 1000000000){
            //     showHashes(3)
            //     let x = el.hr / 1000000
            //     return Number(x.toFixed(2))
            // } else if (el.hr > 1000000000) {
            //     showHashes(4)
            //     let x = el.hr / 1000000000
            //     return Number(x.toFixed(2))
            // }
        } else return 0
    })


    return {
        title: {
            text: `Account: ${props.account}`,
            style: {color: '#fff'}
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
            // width: 1600,



        },
        series: [{
            showInLegend: false,
            type: 'spline',
            name: hashesData,
            data: [...arrFilterMap],
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
            categories: [
                new Date(obj[0].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[0].timestamp * 1000).getMinutes()),
                new Date(obj[1].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[1].timestamp * 1000).getMinutes()),
                new Date(obj[2].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[2].timestamp * 1000).getMinutes()),
                new Date(obj[3].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[3].timestamp * 1000).getMinutes()),
                new Date(obj[4].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[4].timestamp * 1000).getMinutes()),
                new Date(obj[5].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[5].timestamp * 1000).getMinutes()),
                new Date(obj[6].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[6].timestamp * 1000).getMinutes()),
                new Date(obj[7].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[7].timestamp * 1000).getMinutes()),
                new Date(obj[8].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[8].timestamp * 1000).getMinutes()),
                new Date(obj[9].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[9].timestamp * 1000).getMinutes()),
                new Date(obj[10].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[10].timestamp * 1000).getMinutes()),
                new Date(obj[11].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[11].timestamp * 1000).getMinutes()),
                new Date(obj[12].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[12].timestamp * 1000).getMinutes()),
                new Date(obj[13].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[13].timestamp * 1000).getMinutes()),
                new Date(obj[14].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[14].timestamp * 1000).getMinutes()),
                new Date(obj[15].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[15].timestamp * 1000).getMinutes()),
                new Date(obj[16].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[16].timestamp * 1000).getMinutes()),
                new Date(obj[17].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[17].timestamp * 1000).getMinutes()),
                new Date(obj[18].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[18].timestamp * 1000).getMinutes()),
                new Date(obj[19].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[19].timestamp * 1000).getMinutes()),
                new Date(obj[20].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[20].timestamp * 1000).getMinutes()),
                new Date(obj[21].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[21].timestamp * 1000).getMinutes()),
                new Date(obj[22].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[22].timestamp * 1000).getMinutes()),
                new Date(obj[23].timestamp * 1000).getHours() + ':' + minutesFlor(new Date(obj[23].timestamp * 1000).getMinutes()),

            ],

            labels: {
                style: {
                    color: '#fff',
                    // font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },

        },


        yAxis: [{
            gridLineColor: '#747474',
            title: {
                text: 'Hashrate',
                style: {color: '#fff'}
            },
            alternateGridColor: 'rgba(101,70,70,0.07)',
            labels: {
                style: {
                    color: '#fff',
                    // font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
        }]
    }
}


// tickInterval: 7 * 24 * 3600 * 1000, // one week
//     tickWidth: 0,
//     gridLineWidth: 1,
//
//     title: {
//     text: 'hi'
// },
// labels: {
//     align: 'left',
//         x: 3,
//         y: -3
// }

const Charts = (props) => {
    return <div>
        <HighchartsReact
            highcharts={Highcharts}
            options={setupOptions(props)}
        />
    </div>
}

export default Charts