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
        if(this.state.length === -1 || e.target.value.length >= 51) {
            swal("Input tidak boleh lebih dari 50");
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
            
            <form className="note-input my-0 mx-auto max-w-lg mb-12" onSubmit={(e) => {
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
                <h2 className="text-blue-500 my-4 mx-0 text-3xl">Buat Catatan</h2>
                <span className="block text-sm text-right text-blue-500">{`Sisa Karakter: ${this.state.length}`}</span>
                <input autoComplete="off" placeholder="Judul" className="w-full block p-3 my-3 mx-0 text-blue-500 border-2 border-blue-500 outline-none focus:border-blue-700 rounded-md bg-white placeholder-blue-500" value={this.state.title} id='titleInput' onChange={this.onTitleHandler}></input>
                <textarea placeholder="Isi Catatan" className="w-full block p-3 my-3 mx-0 text-blue-500 border-2 border-blue-500 outline-none focus:border-blue-700 rounded-md bg-white placeholder-blue-500 min-h-[175px]" value={this.state.text} onChange={this.onTextHandler}>
                </textarea>
                <button className="block w-full p-2 bg-blue-500 text-white rounded-md cursor-pointerr" type="submit">Tambah</button>
              </form>
        )
    }
}

export default NotesForm;

