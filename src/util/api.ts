const googleApiUrl = 'https://www.googleapis.com/books/v1/volumes?q='
const bookmarksApi = 'http://localhost:4000'

const getBooksAsync = async(query: any) => {
    const response = await fetch(
        `${googleApiUrl}${query}`,
        {
            method: 'GET'
        }
    );
    return response.json()
};

const getAllBookmarksAsync = async() => {
    const response = await fetch(
        `${bookmarksApi}/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.json();
};

const addBookmarkAsync = async(data: any) => {
    console.log('iside addBookmarkAsync: ', JSON.stringify(data));
    const response = await fetch(
        `${bookmarksApi}/books`,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    console.log('just response: ', response);
    return response.json()
};

// const API = {
//     getBooks: async (query: any) => {
//       return await fetch(`${url}${query}`,);
//     },
  
//     deleteBook: (id: number) => {
//       return axios.delete("/api/books/" + id);
//     },
  
//     saveBook: (bookData: any) => {
//       return axios.post("/api/books", bookData);
//     },
  
//     getSavedBooks: () => {
//       return axios.get("/api/books");
//     },
//   };
  
export {
    getBooksAsync,
    addBookmarkAsync,
    getAllBookmarksAsync
};

