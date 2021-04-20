import axios from 'axios'
import Base from './1.Init' 

/** Fetch Methods */
export default class Fetch extends Base {

    /** Fetches URL */
    fetch = async (url: string) => (await axios.get(url)).data

}