import React from "react";
import { getInitialData } from './data'
import NotesForm from "./components/notesForm";
import Header from "./components/header";
import NotesList from "./components/notesList";

// import './App.css'

import { Fragment } from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data : getInitialData,
      searchField : '',
      title: '',
      text: ''
    }

    this.addNotes = this.addNotes.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onArchivedHandler = this.onArchivedHandler.bind(this)
  }

  onDeleteHandler(id) {
    const datas = this.state.data;
    const newDatas = datas.filter(data => data.id !== id);
    this.setState(prevState => {
        return {
          ...prevState,
          data : newDatas
        }
    })
    
  }

  onArchivedHandler(id) {
    const datas = this.state.data;
    const newDatas = datas.map(data => {
      return data.id === id ? {...data, archived: !data.archived} : {...data};
    });
    this.setState(prevState => {
      return {
        ...prevState,
        data: newDatas
      }
    })
  }


  onSearchInput = (event) => {
    const textInput = event.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        searchField: textInput
      }
    })
  }

  makeNote = (title, text) => {
    return {
      id: +new Date(),
      title,
      body: text,
      createdAt: new Date().toString(),
      archived: false
    }
  }

  addNotes = (note) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        data: [...prevState.data, note]
      }
    })
  }

  
  render() {
    
    
    return (
      <>
      <Header searchField={this.state.searchField} id='searchInput' onSearchHandler={this.onSearchInput}/>
      <main className="max-w-5xl my-4 mx-auto p-3">
      <NotesForm addNotes={this.addNotes} />
      <NotesList onDeleteHandler={this.onDeleteHandler} onArchivedHandler={this.onArchivedHandler} datas={this.state.data} searchField={this.state.searchField} /> 
      </main>
      </>
    )
  }
}

export default App;
