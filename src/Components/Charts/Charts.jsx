import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {hashFilter} from "../../Filters";

// A point click event that uses the Renderer to draw a label next to the point
// On subsequent clicks, move the existing label instead of creating a new one.
// Highcharts.addEvent(Highcharts.Point, 'click', function () {
//     if (this.series.options.className.indexOf('popup-on-click') !== -1) {
//         const chart = this.series.chart;
//         const date = Highcharts.dateFormat('%A, %b %e, %Y', this.x);
//         const text = `<b>${date}</b><br/>${this.y} ${this.series.name}`;
//
//         const anchorX = this.plotX + this.series.xAxis.pos;
//         const anchorY = this.plotY + this.series.yAxis.pos;
//         const align = anchorX < chart.chartWidth - 200 ? 'left' : 'right';
//         const x = align === 'left' ? anchorX + 10 : anchorX - 10;
//         const y = anchorY - 30;
//         if (!chart.sticky) {
//             chart.sticky = chart.renderer
//                 .label(text, x, y, 'callout',  anchorX, anchorY)
//                 .attr({
//                     align,
//                     fill: 'rgba(0, 0, 0, 0.75)',
//                     padding: 10,
//                     zIndex: 7 // Above series, below tooltip
//                 })
//                 .css({
//                     color: 'white'
//                 })
//                 .on('click', function () {
//                     chart.sticky = chart.sticky.destroy();
//                 })
//                 .add();
//         } else {
//             chart.sticky
//                 .attr({ align, text })
//                 .animate({ anchorX, anchorY, x, y }, { duration: 250 });
//         }
//     }
// });
//
//
// Highcharts.chart('container', {
//
//     chart: {
//         scrollablePlotArea: {
//             minWidth: 700
//         }
//     },
//
//     data: {
//         csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/analytics.csv',
//         beforeParse: function (csv) {
//             return csv.replace(/\n\n/g, '\n');
//         }
//     },
//
//     title: {
//         text: 'Daily sessions at www.highcharts.com'
//     },
//
//     subtitle: {
//         text: 'Source: Google Analytics'
//     },
//
//     xAxis: {
//         tickInterval: 7 * 24 * 3600 * 1000, // one week
//         tickWidth: 0,
//         gridLineWidth: 1,
//         labels: {
//             align: 'left',
//             x: 3,
//             y: -3
//         }
//     },
//
//     yAxis: [{ // left y axis
//         title: {
//             text: null
//         },
//         labels: {
//             align: 'left',
//             x: 3,
//             y: 16,
//             format: '{value:.,0f}'
//         },
//         showFirstLabel: false
//     }, { // right y axis
//         linkedTo: 0,
//         gridLineWidth: 0,
//         opposite: true,
//         title: {
//             text: null
//         },
//         labels: {
//             align: 'right',
//             x: -3,
//             y: 16,
//             format: '{value:.,0f}'
//         },
//         showFirstLabel: false
//     }],
//
//     legend: {
//         align: 'left',
//         verticalAlign: 'top',
//         borderWidth: 0
//     },
//
//     tooltip: {
//         shared: true,
//         crosshairs: true
//     },
//
//     plotOptions: {
//         series: {
//             cursor: 'pointer',
//             className: 'popup-on-click',
//             marker: {
//                 lineWidth: 1
//             }
//         }
//     },
//
//     series: [{
//         name: 'All sessions',
//         lineWidth: 4,
//         marker: {
//             radius: 4
//         }
//     }, {
//         name: 'New users'
//     }]
// });

//____________________________________________________________________




let setupOptions = (props) => {

    let arr = [];

    props.charts.map(el => {
        let index = arr.findIndex(elem => elem.timestamp === el.timestamp)
        if (index === -1){
            arr.push(el);
        }else {
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
        if (minutes < 10){
            return '0' + minutes
        } else {
            return minutes
        }
    }

    let obj = {...arrFilter}


    let hashesData = 'Hs'

    let arrFilterMap = arrFilter.map(el => {


        function showHashes(hashrate) {
            if(hashrate === 1){
                hashesData = ' Hs'
            }
            if(hashrate === 2){
                hashesData = ' kHs'
            }
            if(hashrate === 3){
                hashesData = ' MHs'
            }
            if(hashrate === 4){
                hashesData = ' GHs'
            }

        }

        if(el.hr){
            if (el.hr <= 1000) {
                showHashes(1)
                let x = el.hr
                return Number(x.toFixed(2))
            } else if(el.hr > 1000 && el.hr <= 1000000){
                showHashes(2)
                let x = el.hr / 1000
                return Number(x.toFixed(2))
            } else if(el.hr > 1000000 && el.hr <= 1000000000){
                showHashes(3)
                let x = el.hr / 1000000
                return Number(x.toFixed(2))
            } else if (el.hr > 1000000000) {
                showHashes(4)
                let x = el.hr / 1000000000
                return Number(x.toFixed(2))
            }
        } else return 0
    })


    return {
        title: {
            text: `Account: ${props.account}`
        },
        chart:{
          type: 'spline'
        },
        series: [{
            name: hashesData,
            data: [...arrFilterMap],

        }],
        accessibility: {
            enabled: false
        },
        xAxis: {
            categories:[
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
            ]
        },

        yAxis: [{
            title: {
                text: 'Hashrate Mh/s'
            }
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