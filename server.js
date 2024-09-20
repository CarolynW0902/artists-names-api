const express = require('express')
const app = express()
const PORT = 8000

const artists = {
  '21 Savage': {
    'age': 28,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthdate': '22 October 1992'
  },

  'Chance the Rapper': {
    'age': 28,
    'birthName': 'Chancelor Jonathan Bennett',
    'birthdate': 'April 16, 1993'
  },

  'Alicia Keys': {
    'age': 43,
    'birthName': 'Alicia Augello Cook',
    'birthdate': 'January 25, 1981'
  },

  'Beyonce': {
    'age': 43,
    'birthName': 'Beyoncé Giselle Knowles-Carter',
    'birthdate': 'September 4, 1981'
  },

  'J. Cole': {
    'age': 39,
    'birthName': 'Jermaine Lamarr Cole',
    'birthDate': 'January 28, 1985'
  },

  'Adele': {
    'age': 36,
    'birthName': 'Adele Laurie Blue Adkins',
    'birthdate': 'May 5, 1988'
  },

  'Kendrick Lamar': {
    'age': 37,
    'birthName': 'Kendrick Lamar Duckworth',
    'birthdate': 'June 17, 1987'
  },

  'Drake': {
    'age': 37,
    'birthName': 'Aubrey Drake Graham',
    'birthdate': 'October 24, 1986'
  },

  'unknown':{
    'age': 'unknown',
    'birthName': 'unknown',
    'birthdate': 'unknown'
  }  

} 

app.get('/', (request,response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request,response) => {
  response.json(artists)
})

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}! You better go catch it`)
})