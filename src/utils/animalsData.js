export const animalsData = [
    {
        animal: 'dog',
        api: 'https://random.dog/woof.json',
        cors: true, 
        urlKeys: ['data', 'url']
    },
    {
        animal: 'cat',
        api: 'https://api.thecatapi.com/v1/images/search',
        cors: true, 
        urlKeys: ['data', 0, 'url']
    },
    {
        animal: 'axolotl',
        api: 'https://axoltlapi.herokuapp.com/',
        cors: false, 
        urlKeys: ['data', 'url']
    }
]