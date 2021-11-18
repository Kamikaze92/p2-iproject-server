const axios = require('axios')
class QuoteController {
    static async getQuote (req,res,next){
        try {
            const tags = ['famous-quotes', 'life', 'inspirational', 'future', 'success']
            const random = Math.floor(Math.random()*tags.length)
            const tag = tags[random];
            const response = await axios({
                method: 'GET',
                url: `https://api.quotable.io/random?tags=${tag}`,
            })
            const author = response.data.author
            const content = response.data.content
            const quote = content.concat(' -', author)
            res.status(200).json(quote)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

module.exports = QuoteController