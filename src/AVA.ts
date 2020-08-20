import {AVMKeyChain, AVMAPI} from "avalanche/dist/apis/avm";
import {InfoAPI} from "avalanche/dist/apis/info";
import Avalanche from "avalanche";
import BinTools from "avalanche/dist/utils/bintools";



// Connect to TestNet by default
// Doesn't really matter how we initialize, it will get changed by the network module later
let ip: string = "bootstrap.ava.network";
let port: number = 21000;
let protocol: string = "https";
let network_id: number = 2;
let chain_id: string = "X";
let bintools: BinTools = BinTools.getInstance();
let ava: Avalanche = new Avalanche(ip, port, protocol, network_id, chain_id);
let avm: AVMAPI = ava.XChain();
let infoApi: InfoAPI = ava.Info();
let keyChain: AVMKeyChain = avm.keyChain();

function isValidAddress(addr:string){
    try{
        let res = bintools.stringToAddress(addr);
        return true;
    }catch(err){
        return false;
    }
}

export { ava, avm, infoApi, bintools, isValidAddress, keyChain};
