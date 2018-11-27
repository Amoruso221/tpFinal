import axios from 'axios'

export default {
    cardsBySet(setName){
      return new Promise((resolve) => {
        setTimeout(
          () => {
            axios
            .get(
              'https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/' + setName,
              {
                 headers: {
                  'X-Mashape-Key': 'DYjIuHtOX6msh1D27tHb6VkXK64ap1x2eN8jsnMifhVNq0CHp4',
                  'Content-Type': 'application/json',
                 }
              }
            )
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
              /* eslint-disable */ 
              console.log(error);
            })
          }, 5000)
      })
  },

  Names(){
    return new Promise((resolve) => {
      setTimeout(
        () => {
          axios
          .get(
            'https://omgvamp-hearthstone-v1.p.mashape.com/info',
            {
               headers: {
                'X-Mashape-Key': 'DYjIuHtOX6msh1D27tHb6VkXK64ap1x2eN8jsnMifhVNq0CHp4',
                'Content-Type': 'application/json',
               }
            }
          )
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            /* eslint-disable */ 
            console.log(error);
          })
        }, 5000)
    })
  },

  cardsByClass(className){
    return new Promise((resolve) => {
      setTimeout(
        () => {
          axios
          .get(
            'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/' + className,
            {
               headers: {
                'X-Mashape-Key': 'DYjIuHtOX6msh1D27tHb6VkXK64ap1x2eN8jsnMifhVNq0CHp4',
                'Content-Type': 'application/json',
               }
            }
          )
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            /* eslint-disable */ 
            console.log(error);
          })
        }, 5000)
    })
  },

  cardsByFaction(factionName){
    return new Promise((resolve) => {
      setTimeout(
        () => {
          axios
          .get(
            'https://omgvamp-hearthstone-v1.p.mashape.com/cards/factions/' + factionName,
            {
               headers: {
                'X-Mashape-Key': 'DYjIuHtOX6msh1D27tHb6VkXK64ap1x2eN8jsnMifhVNq0CHp4',
                'Content-Type': 'application/json',
               }
            }
          )
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            /* eslint-disable */ 
            console.log(error);
          })
        }, 5000)
    })
  },

  cardsByQuality(qualityName){
    return new Promise((resolve) => {
      setTimeout(
        () => {
          axios
          .get(
            'https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/' + qualityName,
            {
               headers: {
                'X-Mashape-Key': 'DYjIuHtOX6msh1D27tHb6VkXK64ap1x2eN8jsnMifhVNq0CHp4',
                'Content-Type': 'application/json',
               }
            }
          )
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            /* eslint-disable */ 
            console.log(error);
          })
        }, 5000)
    })
  },

  cardsByRace(raceName){
    return new Promise((resolve) => {
      setTimeout(
        () => {
          axios
          .get(
            'https://omgvamp-hearthstone-v1.p.mashape.com/cards/races/' + raceName,
            {
               headers: {
                'X-Mashape-Key': 'DYjIuHtOX6msh1D27tHb6VkXK64ap1x2eN8jsnMifhVNq0CHp4',
                'Content-Type': 'application/json',
               }
            }
          )
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            /* eslint-disable */ 
            console.log(error);
          })
        }, 5000)
    })
  },

  cardsByType(typeName){
    return new Promise((resolve) => {
      setTimeout(
        () => {
          axios
          .get(
            'https://omgvamp-hearthstone-v1.p.mashape.com/cards/types/' + typeName,
            {
               headers: {
                'X-Mashape-Key': 'DYjIuHtOX6msh1D27tHb6VkXK64ap1x2eN8jsnMifhVNq0CHp4',
                'Content-Type': 'application/json',
               }
            }
          )
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            /* eslint-disable */ 
            console.log(error);
          })
        }, 5000)
    })
  },

  cardsBacks(){
    return new Promise((resolve) => {
      setTimeout(
        () => {
          axios
          .get(
            'https://omgvamp-hearthstone-v1.p.mashape.com/cardbacks',
            {
               headers: {
                'X-Mashape-Key': 'DYjIuHtOX6msh1D27tHb6VkXK64ap1x2eN8jsnMifhVNq0CHp4',
                'Content-Type': 'application/json',
               }
            }
          )
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            /* eslint-disable */ 
            console.log(error);
          })
        }, 5000)
    })
  }
}