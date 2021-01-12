export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getTopRated = () => {
    return fetch(
      '/api/movies/top-rated',{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getUpcomingMovies = () => {
    return fetch(
      '/api/movies/upcoming',{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getFavourites = username => {
    return fetch(
      '/api/users/'+username+'/favourites',{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const postFavourite = (username,id) => {
    return fetch('/api/users/'+username+'/favourites', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({'id': id})
  }).then(res => res.json())
  };