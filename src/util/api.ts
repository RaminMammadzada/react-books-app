const googleApiUrl = 'https://www.googleapis.com/books/v1/volumes?q='
const bookmarksApi = 'http://localhost:4000'

const getBooks = async(query: any) => {
    const response = await fetch(
        `${googleApiUrl}${query}`,
        {
            method: 'GET'
        }
    );
    return response.json()
};

const getAllBookmarks = async() => {
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

const saveBook = async(data: any) => {
    const response = await fetch(
        `${bookmarksApi}`,
        {
            method: 'POST',
            body: JSON.stringify(data)
        }
    );
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
    getBooks,
    saveBook,
    getAllBookmarks
};

