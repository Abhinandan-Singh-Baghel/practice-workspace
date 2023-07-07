// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDi0LGnP9RUjgtjyKtsHPgS52ybRSYka0GFyH9nup7PoxgxMIoxeHcxp5I-LSGPOxcQSf2htkphQ9b2TTZIzEZPU2dfb9WeXhMTeodcjqmzY1nl-VPBVzZg22I5bh4oDC2TGqOKSXbuTlHVhIxlUGj5zbQxbX9sbQWTILutahfXme13xgeQ-bDbU2mlJMFRI3q3rK-62yKCtM7RbpRZA8uKIwQPsKEE7VX1BR7fdksDMTdWxmnj0A0-SrRcJovhgp0CS1wgcCscV1GilQxAo7N4';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);