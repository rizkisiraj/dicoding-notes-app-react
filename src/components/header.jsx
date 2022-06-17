const Header = ({searchField, onSearchHandler, id}) => {
    return (
        <header className="note-app__header">
        <h1>Notes</h1>
        <input placeholder="Cari catatan..." type="text" id={id} value={searchField} onChange={onSearchHandler} />
        </header>
    )
}

export default Header;