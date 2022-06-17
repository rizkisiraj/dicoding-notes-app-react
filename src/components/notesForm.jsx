import React from "react";
import swal from "sweetalert";

class NotesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            length: 50
        }

        
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

    onTitleHandler = (e) => {
        if(this.state.length === 0 || e.target.value.length >= 50) {
            swal("Input tidak boleh lebih dari 50")
            .then((value) => {
              this.setState(prevState => {
                return {
                    ...prevState,
                    title: '',
                    length: 50
                }
              });
            })
            return;
        }
        const textInput = e.target.value;
        console.log(e);
        const textLength = textInput.length;
        console.log(textInput);
        
            this.setState(prevState => {
                return {
                    ...prevState,
                    title: textInput,
                    length: 50 - textLength
                }
    
            })

        
    }

    onTextHandler = (e) => {
        const textInput = e.target.value;
        this.setState(prevState => {
            return {
                ...prevState,
                text: textInput
            }

        })
    }

    render() {
        const addNotes = this.props.addNotes;
        return (
            
            <form className="note-input" onSubmit={(e) => {
                e.preventDefault();
                if(this.state.title === '' || this.state.text === '') {
                    swal("Inputan tidak boleh lebih kosong")
                    return;
                };
                addNotes(this.makeNote(this.state.title,this.state.text))
                this.setState(prevState => {
                  return {
                    title: '',
                    text: '',
                    length: 50
                  }
                })
              }}>
                <h2>Buat Catatan</h2>
                <span className="note-input__title__char-limit">{`Sisa Karakter: ${this.state.length}`}</span>
                <input autocomplete="off" placeholder="Judul" className="note-input__title" value={this.state.title} id='titleInput' onChange={this.onTitleHandler}></input>
                <textarea placeholder="Isi Catatan" className="note-input__body" value={this.state.text} onChange={this.onTextHandler}>
                </textarea>
                <button type="submit">Tambah</button>
              </form>
        )
    }
}

export default NotesForm;

