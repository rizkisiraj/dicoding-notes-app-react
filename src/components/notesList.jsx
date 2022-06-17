import { showFormattedDate } from "../data"

const NotesList = ({onDeleteHandler, onArchivedHandler, datas, searchField}) => {
    const unarchivedDatas = datas.filter(data => !data.archived && data.title.toLowerCase().includes(searchField.toLowerCase()));
    const archivedDatas = datas.filter(data => data.archived && data.title.toLowerCase().includes(searchField.toLowerCase()));

    return (
        <>
        <h2>Catatan Aktif</h2>
        <section className={unarchivedDatas.length > 0 ? 'notes-list' : 'notes-list__empty-message'}>
            {
                unarchivedDatas.length > 0 ? 
                unarchivedDatas.map(data => {
                    return (
                    <Note key={data.id} onDeleteHandler={onDeleteHandler} onArchivedHandler={onArchivedHandler} data={data} />
                    )
                }) :
                <span>Tidak ada catatan</span>
            }
        </section>
        <h2>Arsip</h2>
        <section className={archivedDatas.length > 0 ? 'notes-list' : 'notes-list__empty-message'}>
        
            {
                archivedDatas.length > 0 ? 
                archivedDatas.map(data => {
                    return (
                    <Note key={data.id} onDeleteHandler={onDeleteHandler} onArchivedHandler={onArchivedHandler} data={data} />
                    )
                }) :
                <span>Tidak ada catatan</span>
            }
        </section>
        </>
    )
}

const Note = ({onDeleteHandler, onArchivedHandler, data}) => {

    const { id,title,body, createdAt } = data;

    return(
                <div className="note-item" key={id}>
                    <div className="note-item__content">
                    <h4 className="note-item__title">{title}</h4>
                    <span className="note-item__date">{showFormattedDate(createdAt)}</span>
                    <p className="note-item__body">{body}</p>
                    </div>
                    <div className="note-item__action">
                      <button className="note-item__archive-button" onClick={() => onArchivedHandler(id)}>Archived</button>
                      <button className="note-item__delete-button" onClick={() => onDeleteHandler(id)}>Delete</button>
                    </div>
                </div>        
    )
}

export default NotesList;