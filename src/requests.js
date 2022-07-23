const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch the country')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=1a11bd55cc8f9c')

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to get the current location')
    }
}

export { getPuzzle as default }

/* const getPuzzle = async function (wordCount) {//Converting a regular function into an Async function using await
  //const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`) was written to get it worked on Netlify to deploy the localhostage website documents
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error(`Unable to fetch puzzle`)
  }
}
//https://fatihgurbuz.netlify.app/

export { getPuzzle as default } */