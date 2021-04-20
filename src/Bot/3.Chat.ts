import Base from './2.Fetch'

export default class Chat extends Base {

    chat = async (options: options) => {
        const url = encodeURI(`${this.endpoint}?message=${options.message}&bot=${this.name}&user=${options.user}`)
        const { message } = await this.fetch(url)
        return { messsage: options.message, response: message }
    }
}

interface options {
    message: string,
    user: string
}