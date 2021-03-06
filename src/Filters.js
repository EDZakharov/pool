
import style from "./Components/Content/ContentComponent.module.scss";


export let convertTimestamp = (timestamp) => {
    let d = new Date(timestamp * 1000),
        yyyy = d.getFullYear().toString().slice(-2),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),
        dd = ('0' + d.getDate()).slice(-2),
        hh = ('0' + d.getHours()).slice(-2),
        min = ('0' + d.getMinutes()).slice(-2),
        time;

    time = dd + '.' + mm + '.' + yyyy + '  ' + hh + ':' + min
    return time;

}

export let dateFilter = (date) => {
    Date.prototype.daysInMonth = function () {
        return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
    };
    if (date === null) {
        return 'еще не найден'
    }
    if (date === undefined) {
        return 0
    }
    if (date && date.toString().length < 13) {
        date = date * 1000
    }

    let currentDate = new Date().getTime()
    let sec = (currentDate - date) / 1000
    let min = sec / 60
    let hour = min / 60
    let day = hour / 24
    let diffTimes = (currentDate - date) / 1000

    if (diffTimes <= 60) {
        // return `${Math.floor(sec)} сек. назад`
        return `меньше мин. назад`
    }
    if (diffTimes <= 3600) {
        return `${Math.floor(min)} мин. назад`
    }
    if (diffTimes <= 86400) {
        return `${Math.floor(hour)} час. назад`
    }
    if (diffTimes > 86400) {
        return `${Math.floor(day)} дн. назад`
    }
    if (diffTimes >= 2592000) {
        return 'больше месяца назад'
    }
}

export let txChecker = (tx, pool) => {
    if (pool === 'eth') {
        return `https://etherscan.io//tx/${tx}`
    }
    if (pool === 'eth-solo') {
        return `https://etherscan.io//tx/${tx}`
    }
    if (pool === 'etc') {
        return `https://etc.tokenview.com/en/tx/${tx}`
    }
    if (pool === 'etc-solo') {
        return `https://etc.tokenview.com/en/tx/${tx}`
    } else {
        return '#'
    }
}

export let getTruncatedName = (source, type) => {
    let skippedStringEnd = source.trimEnd();

    if (type === 'wallet') {
        if (skippedStringEnd.length > 90) {
            return skippedStringEnd.substring(0, 5) + '...' + skippedStringEnd.substring(90, skippedStringEnd.length);
        }
        if (skippedStringEnd.length > 13) {
            return skippedStringEnd.substring(0, 7) + '...' + skippedStringEnd.substring(35, skippedStringEnd.length);
        } else {
            return source;
        }
    }
    if (type === 'tx') {
        if (skippedStringEnd.length > 13) {
            return skippedStringEnd.substring(0, 13) + '...';
        } else {
            return source;
        }
    }

}

export let poolChecker = (pool) => {
    if (pool === 'etc' || pool === 'etc-solo') {
        return 'etc'
    }
    if (pool === 'eth') {
        return 'eth'
    }
    if (pool === 'eth-solo') {
        return 'eth'
    }
    if (pool === 'keva') {
        return 'keva'
    }
    if (pool === 'evox-prop' || pool === 'evox-solo') {
        return 'evox'
    }
    return 'Coin'
}

export let blockHashChecker = (blochHash, pool) => {
    if (pool === 'eth') {
        return `https://etherscan.io/block/${blochHash}`
    }
    if (pool === 'eth-solo') {
        return `https://etherscan.io/block/${blochHash}`
    }
    if (pool === 'etc') {
        return `https://etc.tokenview.com/en/block/${blochHash}`
    }
    if (pool === 'etc-solo') {
        return `https://etc.tokenview.com/en/block/${blochHash}`
    } else {
        return '#'
    }
}

export let hashFilter = (data) => {
    if (data !== undefined) {
        if (typeof data !== 'string') {
            if (data === 0) {
                return {hashrate: 0, unit: ' H/s'}
            }
            let stringDataLength = data.toString().length

            if (stringDataLength <= 3) {
                return {hashrate: Number(data.toFixed(2)), unit: ' H/s'}
            }
            if (stringDataLength > 3 && stringDataLength <= 6) {
                let x = data / 1000
                return {hashrate: Number(x.toFixed(0)), unit: ' kH/s'}
            }
            if (stringDataLength > 6 && stringDataLength <= 9) {
                let x = data / 1000000
                return {hashrate: Number(x.toFixed(0)), unit: ' MH/s'}
            }
            if (stringDataLength > 9 && stringDataLength <= 12) {
                let x = data / 1000000000
                return {hashrate: Number(x.toFixed(2)), unit: ' GH/s'}
            }
            if (stringDataLength > 12 && stringDataLength <= 15) {
                let x = data / 1000000000
                return {hashrate: Number(x.toFixed(0)), unit: ' GH/s'}
            }
        } else return {hashrate: 'n/a', unit: ' '}
    } else return {hashrate: 'n/a', unit: ' '}

}



export let checkEnd = (setEnd) => {
    switch (setEnd) {
        case '0':
            return 'д'
        case '1':
            return 'ду'
        case '2':
            return 'ды'
        case '3':
            return 'ды'
        case '4':
            return 'ды'
        case '5':
            return 'д'
        case '6':
            return 'д'
        case '7':
            return 'д'
        case '8':
            return 'д'
        case '9':
            return 'д'
        default:
            return 'д'

    }

}


export const coinNamesFilter = (data) => {
    switch (data) {
        case 'eth':
            return 'ETH'
        case 'eth-solo':
            return 'ETH'
        case 'etc':
            return 'ETC'
        case 'etc-solo':
            return 'ETC'
        case 'burst':
            return 'Burst'
        case 'keva':
            return 'Keva'
        case 'evox-solo':
            return 'Evox'
        case 'evox-prop':
            return 'Evox'
        case 'ergo':
            return 'Ergo'
    }
}


export const imgFilter = (data) => {
    return `${process.env.PUBLIC_URL}/${data}.png`
}


export const showDate = (data) => {
    if (data === undefined) {
        return 0
    } else {
        let date = new Date(+data * 1000)
        let setEnd = date.getSeconds().toString().slice(-2)
        let checkEnd = (setEnd) => {
            switch (setEnd) {
                case '0':
                    return 'д'
                case '1':
                    return 'ду'
                case '2':
                    return 'ды'
                case '3':
                    return 'ды'
                case '4':
                    return 'ды'
                case '5':
                    return 'д'
                case '6':
                    return 'д'
                case '7':
                    return 'д'
                case '8':
                    return 'д'
                case '9':
                    return 'д'
                case '10':
                    return 'д'
                case '11':
                    return 'д'
                case '12':
                    return 'д'
                case '13':
                    return 'д'
                case '14':
                    return 'д'
                case '15':
                    return 'д'
                case '16':
                    return 'д'
                case '17':
                    return 'д'
                case '18':
                    return 'д'
                case '19':
                    return 'д'
                case '20':
                    return 'д'
                case '21':
                    return 'ду'
                case '22':
                    return 'ды'
                case '23':
                    return 'ды'
                case '24':
                    return 'ды'
                case '25':
                    return 'д'
                case '26':
                    return 'д'
                case '27':
                    return 'д'
                case '28':
                    return 'д'
                case '29':
                    return 'д'
                case '30':
                    return 'д'
                case '31':
                    return 'ду'
                case '32':
                    return 'ды'
                case '33':
                    return 'ды'
                case '34':
                    return 'ды'
                case '35':
                    return 'д'
                case '36':
                    return 'д'
                case '37':
                    return 'д'
                case '38':
                    return 'д'
                case '39':
                    return 'д'
                case '40':
                    return 'д'
                case '41':
                    return 'ду'
                case '42':
                    return 'ды'
                case '43':
                    return 'ды'
                case '44':
                    return 'ды'
                case '45':
                    return 'д'
                case '46':
                    return 'д'
                case '47':
                    return 'д'
                case '48':
                    return 'д'
                case '49':
                    return 'д'
                case '50':
                    return 'д'
                case '51':
                    return 'ду'
                case '52':
                    return 'ды'
                case '53':
                    return 'ды'
                case '54':
                    return 'ды'
                case '55':
                    return 'д'
                case '56':
                    return 'д'
                case '57':
                    return 'д'
                case '58':
                    return 'д'
                case '59':
                    return 'д'
                case '60':
                    return 'д'
                case '61':
                    return 'ду'
                case '62':
                    return 'ды'
                case '63':
                    return 'ды'
                case '64':
                    return 'ды'
                case '65':
                    return 'д'
                case '66':
                    return 'д'
                case '67':
                    return 'д'
                case '68':
                    return 'д'
                case '69':
                    return 'д'
                case '70':
                    return 'д'
                case '71':
                    return 'ду'
                case '72':
                    return 'ды'
                case '73':
                    return 'ды'
                case '74':
                    return 'ды'
                case '75':
                    return 'д'
                case '76':
                    return 'д'
                case '77':
                    return 'д'
                case '78':
                    return 'д'
                case '79':
                    return 'д'
                case '80':
                    return 'д'
                case '81':
                    return 'ду'
                case '82':
                    return 'ды'
                case '83':
                    return 'ды'
                case '84':
                    return 'ды'
                case '85':
                    return 'д'
                case '86':
                    return 'д'
                case '87':
                    return 'д'
                case '88':
                    return 'д'
                case '89':
                    return 'д'
                case '90':
                    return 'д'
                case '91':
                    return 'ду'
                case '92':
                    return 'ды'
                case '93':
                    return 'ды'
                case '94':
                    return 'ды'
                case '95':
                    return 'д'
                case '96':
                    return 'д'
                case '97':
                    return 'д'
                case '98':
                    return 'д'
                case '99':
                    return 'д'
                default:
                    return 'д'

            }

        }

        return `${date.getSeconds()} секун${checkEnd(setEnd)} назад`
    }
}


export let showRandomBgcStyle = () => {
    let x = Math.ceil(Math.random() * 10)

    function random(x) {
        if (x <= 3) {
            return style.coin
        }
        if (x <= 7) {
            return style.coin2
        }
        if (x <= 10) {
            return style.coin3
        }
    }

    let result = random(x)
    localStorage.setItem('showRandomBgcStyle', result)
}

