const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function openai_image(input){
    const response = await openai.createImage({
        prompt: input,
        n: 1,
        size: "256x256",
    })
    
    return response.data.data[0].url
}

module.exports = openai_image;
