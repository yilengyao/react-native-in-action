import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { addBook } from './actions';
import { removeBook } from './actions';
import { connect } from 'react-redux';

interface BooksProps {
  books: any[];
  dispatchAddBook: (book: any) => void;
  dispatchRemoveBook: (book: any) => void;
}

const initialState = {
  name: '',
  author: ''
}

class Books extends Component<BooksProps> {

  state = initialState;

  updateInput = (key: any, value: any) => {
    this.setState({
      ...this.state,
      [key]: value
    })
  }

  addBook = () => {
    this.props.dispatchAddBook(this.state);
    this.setState(initialState);
  }

  deleteBook = (book: any) => {
    this.props.dispatchRemoveBook(book);
    this.setState(initialState);
  }

  render() {
    console.log('Books props:', this.props);
    console.log('Books state:', this.state);
    const { books } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Books</Text>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.booksContainer}>
          {
            books.map((book: any, index: number) => (
              <View style={styles.book} key={index}>
                <Text style={styles.name}>{book.name}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <TouchableOpacity onPress={() => this.deleteBook(book)}>
                  <Text>Remove</Text>
                </TouchableOpacity>
              </View>
            ))
          }
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              value={this.state.name}
              onChangeText={value => this.updateInput('name', value)}
              style={styles.input}
              placeholder='Book name'
            />
            <TextInput
              value={this.state.author}
              onChangeText={value => this.updateInput('author', value)}
              style={styles.input}
              placeholder='Author name'
            />
            <TouchableOpacity onPress={this.addBook}>
              <View style={styles.addButtonContainer}>
                <Text style={styles.addButton}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 200
  },
  inputWrapper: {
    flex: 1
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5
  },
  addButton: {
    fontSize: 28,
    lineHeight: 28
  },
  addButtonContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ededed',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  container: {
    flex: 1
  },
  booksContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flex: 1
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  book: {
    padding: 20
  },
  name: {
    fontSize: 18
  },
  author: {
    fontSize: 14,
    color: '#999'
  }
})

const mapStateToProps = (state: any) => ({
  books: state.bookReducer.books
});

const mapDispatchToProps = {
  dispatchAddBook: (book: any) => addBook(book),
  dispatchRemoveBook: (book: any) => removeBook(book)
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
