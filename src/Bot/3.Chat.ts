import Base from './2.Fetch'

/** Chat Methods */
export default class Chat extends Base {

    /**
     * Chat with the bot
     * @param {options} options Chat options
     * @returns {response} response 
     */
    chat = async (options: options) => {
        const url = encodeURI(`${this.endpoint}?message=${options.message}&bot=${this.name}&user=${options.user}`)
        const { message } = await this.fetch(url)
        return { messsage: options.message, response: message }
    }
}

interface options {
    /** Message to pass to the bot */
    message: string,
    /** User ID of the person who is texting the bot */
    user: string
}

interface response {
    /** Message passed to the bot */
    message: string,
    /** Response given by the bot */
    response: string
}