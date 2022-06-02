import React, {useEffect} from 'react'
import Highcharts from 'highcharts'
import './Charts.css'
import HighchartsReact from 'highcharts-react-official'


let setupOptions = (props) => {

    if (props.charts === 'n/a') {
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
                if (el.hr > 2000) {
                    x = el.hr / 1000
                    showHashes(2)
                    return Number(x.toFixed(0))
                }
                showHashes(1)
                return Number(x.toFixed(0))
            }
            if (el.hr.toString().length > 6 && el.hr.toString().length <= 9) {
                let x = el.hr / 1000
                if (el.hr > 2000000) {
                    x = el.hr / 1000000
                    showHashes(3)
                    return Number(x.toFixed(2))
                }
                showHashes(2)
                return Number(x.toFixed(1))
            }
            if (el.hr.toString().length > 9 && el.hr.toString().length <= 12) {
                let x = el.hr / 1000000

                if (el.hr > 2000000000) {
                    x = el.hr / 1000000000
                    showHashes(4)
                    return Number(x.toFixed(2))
                }
                showHashes(3)
                return Number(x.toFixed(1))
            }
            if (el.hr.toString().length > 12 && el.hr.toString().length <= 15) {
                let x = el.hr / 1000000000
                if (el.hr > 2000000000000) {
                    x = el.hr / 1000000000000
                    showHashes(5)
                    return Number(x.toFixed(2))
                }
                showHashes(4)
                return Number(x.toFixed(0))
            }
        } else return 0
    })

    const cutOffLastElem = (array, cut) => {
        const [first, ...rest] = array;
        return rest.slice(cut);
    }


    let arr2 = props.charts.map(el => {
        return el.timestamp * 1000
    })


    arr1 = cutOffLastElem(arr1, -20)
    arr2 = cutOffLastElem(arr2, -20)


    let setGlobal = () => {
        Highcharts.setOptions({
            lang: {
                months: [
                    'января',
                    'февраля',
                    'марта',
                    'апреля',
                    'мая',
                    'июня',
                    'июля',
                    'августа',
                    'сентября',
                    'октября',
                    'ноября',
                    'декабря'
                ],
                shortMonths: [
                    'января',
                    'февраля',
                    'марта',
                    'апреля',
                    'мая',
                    'июня',
                    'июля',
                    'августа',
                    'сентября',
                    'октября',
                    'ноября',
                    'декабря'
                ],
                weekdays: [
                    "Воскресенье",
                    "Понедельник",
                    "Вторник",
                    "Среда",
                    "Четверг",
                    "Пятница",
                    "Суббота"
                ],
            },
        })
    }
    setGlobal()

    const screenWidth = window.screen.width
    let fontSizeChecker = (screenWidth) => {
        if (screenWidth <= 600) {
            return '8px'
        }
        if (screenWidth <= 1000) {
            return '14px'
        } else return '26px'
    }

    return {

        title: {
            text: `${props.text}`,
            style: {color: '#fff', fontSize: `${fontSizeChecker(screenWidth)}`}
        },
        time: {
            getTimezoneOffset: function (timestamp) {
                let d = new Date();
                let timezoneOffset = d.getTimezoneOffset()

                return timezoneOffset;
            }
        },

        plotOptions: {
            series: {
                label: {style: {color: 'black'}},
            },
            area: {
                marker: {
                    enabled: true
                }
            }
        },
        chart: {
            type: 'spline',
            backgroundColor: 'rgba(85,77,77,0.56)',
            height: `${screenWidth <= 2000 ? '300px' : '500px'}`,
        },
        series: [{
            showInLegend: false,
            type: 'spline',
            name: hashesData,
            data: [...arr1],
            color: '#e5bf36',
            dataLabels: {
                style: {
                    color: '#ffffff',

                }
            },
            tooltip: {
                pointFormat: '<span style="color:{point.color}">●</span> <b>{point.y} {series.name}</b>',
                xDateFormat: '%e %b %Y %H:%M',
                valuePrefix: '</br>',
                className: 'tooltip'

            },


        }],
        accessibility: {
            enabled: false,
        },
        xAxis: {
            type: 'datetime',
            categories: [...arr2],
            labels: {
                enabled: true,
                style: {color: '#fff', fontSize: `${screenWidth <= 2000 ? '15px' : '20px'}`},
                formatter: function () {
                    if (new Date(this.value).getHours() === 0) {
                        if (new Date(this.value).getMinutes() === 0) {
                            return `<span class="xData">
                                <span >${new Date(this.value).getHours() + ':'
                            + minutesFlor(new Date(this.value).getMinutes())}
                                </span></br>
                                <span>${('0' + new Date(this.value).getDate()).slice(-2) + '.'
                            + ('0' + (new Date(this.value).getMonth() + 1)).slice(-2)}
                                </span>
                                </span>`
                        }
                    }


                    return `<span class="xData">
                    <span >${new Date(this.value).getHours() + ':'
                    + minutesFlor(new Date(this.value).getMinutes())}
                    </span>
                    </span>`
                },
            },

        },
        yAxis: [{
            gridLineColor: '#747474',
            title: {
                text: hashesData,
                style: {color: '#fff'}
            },
            alternateGridColor: 'rgba(101,70,70,0.07)',
            labels: {
                style: {
                    color: '#fff',
                    fontSize: `${screenWidth <= 2000 ? '15px' : '20px'}`
                }
            },
        }]
    }
}


const Charts = (props) => {
    if (props.charts) {
        return <div className='Charts'>{props.charts !== 'n/a' ? <HighchartsReact
            highcharts={Highcharts}
            options={setupOptions(props)}
        /> : ''}
        </div>
    }
}

export default Charts