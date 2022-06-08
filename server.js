//Countries
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const countries = {
    'usa':{
    'Capital': 'Washington,DC',
    'Largest City': 'New York City',
    'National language':'English',
    'Population': '2021 estimate 331,893,745',
    'City to Visit': 'New York',
    'image_link' :'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg',

    },
    
    'morocco':{
        'Capital': 'Rabat',
        'Largest City': 'Casablanca',
        'Spoken Languages':'Moroccan Arabic,Hassaniya Arabic,Berber,French',
        'Population':'2020 estimate 37,112,080', 
        'City to Visit': 'Marrakesh',
        'image_link' :'https://preview.redd.it/6xz41tegl6x71.jpg?auto=webp&s=f4086128acb3929ae8a8acd2a022519e051c393b',
    },
    
        'india':{
            'Capital': 'New Delhi',
            'Largest City': 'Mumbai',
            'Official Languages': 'Hindi,English',
            'Population':'• 2018 estimate Neutral increase 1,352,642,280',
            'City to Visit': 'Agra',
            'image_link' :'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/27/c4/2c.jpg',
        },

        'australia':{
            'Capital': 'Canberra',
            'Largest City':'Sydney',
            'National language':'English',
            'Population':'2022 estimate Neutral increase 26,008,700',
            'City to Visit':'Hobart',
            'image_link' :'https://upload.wikimedia.org/wikipedia/commons/7/7f/Franklin_Wharf_2015.jpg',
        },
    'unknown':{
        'Capital': 'Unknown',
        'Largest City':'Unknown',
        'Official Languages': 'Unknown',
        'National language':'Unknown',
        'Population':'Unknown',
        'City to Visit':'Unknown',
        'image_link' :'Unknown',
    }
    
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
 const name = request.params.name.toLowerCase()
    if(countries[name]){
        response.json(countries[name])
    }else{
        response.json(countries['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})