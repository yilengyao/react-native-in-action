import uuid from 'react-native-uuid';
import { ADD_BOOK, REMOVE_BOOK } from '../actions';

const initialState = {
  books: [{ name: 'East of Eden', author: 'John Steinbeck', is: uuid.v4() }]
}

const bookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.book]
      }
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book: any) => book.id !== action.book.id)
      }
    default:
      return state;
  }
}

export default bookReducer;
