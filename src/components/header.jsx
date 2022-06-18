const Header = ({searchField, onSearchHandler, id}) => {
    return (
        <header className="bg-blue-500 w-full flex items-center justify-center py-1 px-4 shadow-md note-app__header">
        <h1 className="text-3xl text-white my-2 mx-0 flex-1">Notes</h1>
        <input className="w-72 font-semibold p-3 my-3 mx-0 bg-transparent text-white border-2 border-gray-50 rounded-md placeholder-inherit" placeholder="Cari catatan..." type="text" id={id} value={searchField} onChange={onSearchHandler} />
        </header>
    )
}

export default Header;