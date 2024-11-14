import uuid from 'react-native-uuid';
export const ADD_BOOK = 'ADD_BOOK';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export function fetchBooks() {
  return {
    type: FETCH_BOOKS
  }
}

export function addBook(book: any) {
  return {
    type: ADD_BOOK,
    book: {
      ...book,
      id: uuid.v4()
    }
  }
}

export function removeBook(book: any) {
  return {
    type: REMOVE_BOOK,
    book
  }
}
