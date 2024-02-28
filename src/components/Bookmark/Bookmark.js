import styles from './Bookmark.module.scss'

export default function Bookmark({ 
  bookmark, 
  updateAction, 
  deleteAction, 
  updateButtonText, 
  deleteButtonText
}) {
  return (
    <div className={styles.bookmarkContainer}>
    <div className={styles.bookmark}>
      
        <a className={styles.bookmarkLink} target="_blank" href={bookmark.url}>
          <img 
            className={styles.bookmarkImg}
            src={`https://www.google.com/s2/favicons?domain=${bookmark.url}&sz=24`} 
            alt={bookmark.title} 
          />
        </a>
        {/* <div className={styles.bookmarkLink}><a className={styles.bookmarkLink} target="_blank" href={bookmark.url}>{bookmark.title}</a></div> */}
      
      <label className={styles.dropDown}>
        <select onChange={(e) => {
          const action = e.target.value
          if (action === "Update") {
            updateAction(bookmark._id)
          } else if (action === "Delete") {
            deleteAction(bookmark._id)
          } else if (action === "Visit") {
            window.open(bookmark.url, '_blank')
          }
        }}>
          <option value="Bookmark" className={styles.dropDown}>{bookmark.title}</option>
          <option value="Visit" className={styles.dropDown}>
            <a target="_blank" href={bookmark.url}>
              Launch
            </a>
          </option>
          <option value="Update" className={styles.dropDown}>{updateButtonText}</option>
          <option value="Delete" className={styles.dropDown}>{deleteButtonText}</option>
        </select>
      </label>
    </div>
    </div>
  )
}
