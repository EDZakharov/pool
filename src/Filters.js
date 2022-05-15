import ethLogo from "./img/eth.png";
import etcLogo from "./img/etc.png";
import burstLogo from "./img/burst.png";
import kevaLogo from "./img/keva-prop.png";
import evoxLogo from "./img/evox-prop.png";
import ergoLogo from "./img/ergo.png";
import siteLogo from "./img/logo56.png";
import style from "./Components/Content/ContentComponent.module.scss";

export const images = {ethLogo, etcLogo, burstLogo, kevaLogo, evoxLogo, ergoLogo, siteLogo}


export let convertTimestamp = (timestamp) => {
    let d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
        hh = ('0' + d.getHours()).slice(-2),
        min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
        time;

    time = hh + ':' + min + ', ' + dd + '-' + mm + '-' + yyyy
    return time;

}


export let getLastBeat = (lastBeat) => {
    console.log(lastBeat)
    let d = new Date(lastBeat * 1000),
        h = d.getUTCHours(),
        min = d.getUTCMinutes(),
        time;
    time = h + ':' + min

    return time

    // let currentDate = Date.now()
    // let date = new Date(currentDate)
    // let dateObj = new Date(lastBeat * 1000);
    // let hours = Math.abs(Math.abs(date.getUTCHours()) - Math.abs(dateObj.getUTCHours()))
    // let minutes = Math.abs(Math.abs(date.getUTCMinutes()) - Math.abs(dateObj.getUTCMinutes()))
    // let seconds = Math.abs(Math.abs(date.getUTCSeconds()) - Math.abs(dateObj.getUTCSeconds()))
    //
    // let result = hours + ':' + minutes + ':' + seconds


    // let date = new Date(lastBeat).getTime(); // заданная дата в Unix-epoch в мс
    // let currentDate =  new Date().getTime(); // текущая дата в Unix-epoch в мс
    //
    // let sec = (currentDate - date)/1000
    // let min = sec/60
    // let hours = min/60
    //
    // let formattedTime = hours.toString().padStart(2, '0') + ':' +
    //     minutes.toString().padStart(2, '0') + ':' +
    //     seconds.toString().padStart(2, '0');
    //
    //
    // return hours.toFixed(0) + ':' + min.toFixed(0) + ':' + sec.toFixed(2)
}


export let hashFilter = (data) => {
    if (data !== undefined) {
        if (data.toString().length <= 3) {
            return {hashrate: Number(data.toFixed(2)), unit: ' H/s'}
        }
        if (data.toString().length > 3 && data.toString().length <= 6) {
            let x = data / 1000
            return {hashrate: Number(x.toFixed(0)), unit: ' kH/s'}
        }
        if (data.toString().length > 6 && data.toString().length <= 9) {
            let x = data / 1000000
            return {hashrate: Number(x.toFixed(0)), unit: ' MH/s'}
        }
        if (data.toString().length > 9 && data.toString().length < 12) {
            let x = data / 1000000000
            return {hashrate: Number(x.toFixed(2)), unit: ' GH/s'}
        }
        if (data.toString().length > 12 && data.toString().length <= 15) {
            let x = data / 1000000000
            return {hashrate: Number(x.toFixed(0)), unit: ' GH/s'}
        }

    } else return 0

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
            return 'Ethereum'
        case 'etc':
            return 'Ethereum Classic'
        case 'etc-solo':
            return 'Etc-solo'
        case 'burst':
            return 'Burst'
        case 'keva':
            return 'Keva-prop'
        case 'evox-solo':
            return 'Evox-solo'
        case 'evox-prop':
            return 'Evox-prop'
        case 'ergo':
            return 'Ergo'
    }
}


export const imgFilter = (data => {
    switch (data) {
        case 'eth':
            return images.ethLogo
        case 'etc':
            return images.etcLogo
        case 'etc-solo':
            return images.etcLogo
        case 'burst':
            return images.burstLogo
        case 'keva':
            return images.kevaLogo
        case 'evox-solo':
            return images.evoxLogo
        case 'evox-prop':
            return images.evoxLogo
        case 'ergo':
            return images.ergoLogo
        case 'logo':
            return images.siteLogo
        default:
            return images.siteLogo
    }
})


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

