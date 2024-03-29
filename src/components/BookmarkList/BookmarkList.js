import styles from './BookmarkList.module.scss'
import Bookmark from '../Bookmark/Bookmark'
 
export default function BookmarkList ({ 
    newBookmark, 
    createBookmark, 
    setNewBookmark, 
    allBookmarks,
    deleteBookmark,
    updateBookmark
}){
    return(
        <div className={styles.bookmarklist}>
            <h5>Add New Bookmark:</h5>
            <div className={styles.inputs}>
            <input 
            className={styles.input}
            id="bookmark-title-input"
            type="text" 
            value={newBookmark.title}
            placeholder="website"
            onChange={(e) => {
                setNewBookmark({...newBookmark, title: e.target.value, url: document.getElementById("bookmark-url-input").value})
            }}
            />
            <input
            className={styles.input}
            id="bookmark-url-input"
            type="text"
            value={newBookmark.url}
            placeholder="http://"
            onChange={(e) => {
                setNewBookmark({...newBookmark, title: document.getElementById("bookmark-title-input").value, url: e.target.value})
              }}
            />
            <button 
            className={styles.button}
                onClick={() => {
                createBookmark()
            }} 
            >Add
            </button>
            </div>
            
        {allBookmarks.map(bookmark => (
            <Bookmark 
                key={bookmark._id} 
                bookmark={bookmark}
                updateAction={(id) => updateBookmark(id, newBookmark)} 
                updateButtonText={`Edit`}
                deleteAction={deleteBookmark}
                deleteButtonText={`Delete`}
            />
        ))}
        </div>
    )
}