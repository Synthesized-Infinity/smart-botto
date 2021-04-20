import axios from 'axios'
import Base from './1.Init' 

export default class Fetch extends Base {

    fetch = async (url: string) => (await axios.get(url)).data
    
}