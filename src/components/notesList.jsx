import { showFormattedDate } from "../data"

const NotesList = ({onDeleteHandler, onArchivedHandler, datas, searchField}) => {
    const unarchivedDatas = datas.filter(data => !data.archived && data.title.toLowerCase().includes(searchField.toLowerCase()));
    const archivedDatas = datas.filter(data => data.archived && data.title.toLowerCase().includes(searchField.toLowerCase()));

    return (
        <>
        <h2 className="text-2xl text-blue-500 mb-4">Catatan Aktif</h2>
        <section className={unarchivedDatas.length > 0 ? 'grid lg:grid-cols-[repeat(4,_1fr)] grid-rows-[minmax(min-content,_max-content)] md:grid-cols-[repeat(2,1fr)] gap-x-2 gap-y-6 mb-12' : 'text-center text-blue-500 mb-12'}>
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
        <h2 className="text-2xl text-blue-500 mb-4">Arsip</h2>
        <section className={archivedDatas.length > 0 ? 'flex flex-wrap gap-x-4 gap-y-6 mb-12' : 'text-center text-blue-500 mb-12'}>
        
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
                <div className="md:basis-1/3 lg:basis-1/4 bg-white shadow-xl rounded-md flex overflow-hidden flex-col" key={id}>
                    <div className="flex-[1] p-3">
                    <h4 className="text-ellipsis overflow-hidden whitespace-nowrap mb-1 text-lg font-bold">{title}</h4>
                    <span className="block text-xs mb-2 text-gray-400">{showFormattedDate(createdAt)}</span>
                    <p className="text-[16px]">{body}</p>
                    </div>
                    <div className="flex">
                      <button className="block w-full bg-yellow-300 hover:bg-yellow-500 border-0 border-t border-gray-400 py-2 px-0 font-bold cursor-pointer border-r text-black" onClick={() => onArchivedHandler(id)}>Archived</button>
                      <button className="block w-full bg-red-300 hover:bg-red-500 border-0 border-t border-gray-400 py-2 px-0 font-bold cursor-pointer text-black" onClick={() => onDeleteHandler(id)}>Delete</button>
                    </div>
                </div>        
    )
}

export default NotesList;