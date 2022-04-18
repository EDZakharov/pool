import ethLogo from "./img/eth.png";
import etcLogo from "./img/etc.png";
import burstLogo from "./img/burst.png";
import kevaLogo from "./img/keva-prop.png";
import evoxLogo from "./img/evox-prop.png";
import ergoLogo from "./img/ergo.png";
import siteLogo from "./img/logol.png";


export const images = {ethLogo,etcLogo,burstLogo,kevaLogo,evoxLogo,ergoLogo,siteLogo}

export const hashFilter = (data) => {
    if(data){
        if (data <= 1000) {
            return Math.ceil(data) + ' Hs'
        } else if(data > 1000 && data <= 1000000){
            return Math.ceil(data / 1000) + ' kHs'
        } else if(data > 1000000 && data <= 1000000000){
            return Math.ceil(data / 1000000) + ' MHs'
        } else if (data > 1000000000) {
            return Math.ceil(data / 1000000000)+ ' GHs'
        }
    } else return 0

}


export const coinNamesFilter = (data) => {
    switch (data) {
        case 'eth':
            return 'Etherium'
        case 'etc':
            return 'Etherium Classic'
        case 'etc-solo':
            return 'Etc-solo'
        case 'burst':
            return 'Burst'
        case 'keva-prop':
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
        case 'keva-prop':
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