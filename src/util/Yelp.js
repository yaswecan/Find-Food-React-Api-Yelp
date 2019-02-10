let apiKey = "3A8rfa9iEy4Bx5B423W6aJPQMF8qK-XCxtyVq6pZJbqX9BoTdWIiUdZw99qSJAmy_GAiM4W20ImqVrI3q8DQU9QoeJWt0PghCEF8RElPYGsX7xuQEAjhBnT0KV1gXHYx";


/* This object will store the functionality needed to interact with the Yelp API.*/

let Yelp = {
    /* This is the method we'll use to retrieve search results from the Yelp API. */

 searchYelp(term, location, sortBy){
    /* which will return a promise that will ultimately resolve to our list of businesses */

    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: { 
            Authorization : `Bearer ${apiKey}` }
        }
    /* We will need to convert the returned response to JSON for us to be able to
     effectively utilize our list of businesses.*/    
        ).then(response => {
            return response.json();
        }).then(jsonResponse =>{
            if(jsonResponse.businesses){
    /* If this key does exists in the JSON response,
     we should return an array that has all of the business' properties */            
                return jsonResponse.businesses.map(((business) => {
                    /* 
À l'intérieur de la fonction de rappel, on retourne un objet.
Cet objet sera long et devrait inclure tous les attributs nécessaires
 pour afficher une entreprise dans Ravenous.*/
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc : business.image_url,
                        name : business.name,
                        address : business.location.address1,
                        city : business.location.city,
                        state: business.location.state,
                        zipCode : business.location.zipCode,
                        category: business.categories[0].title,
                        rating : business.rating,
                        review_count : business.review_count

                    };
                }));
            }
        });
}
};

 

export default Yelp;