import styles from './Bookmark.module.scss'


export default function Bookmark({ 
  bookmark, 
  updateAction, 
  deleteAction, 
  updateButtonText, 
  deleteButtonText
}) {
    return (
      <div className={styles.bookmark}>
        <div className={styles.row}>
          <a className={styles.bookmarkLink} target="_blank" href={bookmark.url}>
            <img 
              className={styles.bookmarkImg}
              src={`https://www.google.com/s2/favicons?domain=${bookmark.url}&sz=24`} 
              alt={bookmark.title} 
              className={styles.bookmarkImage} 
              />
          </a>
        </div>
        <div className={styles.row}>
          <a className={styles.bookmarkLink} target="_blank" href={bookmark.url}>{bookmark.title}</a>
        </div>
        <div className={styles.row}>
          <button
            className={styles.button}
            onClick={() => updateAction(bookmark._id)}
          >
            {updateButtonText}
          </button>
          <button
            className={styles.button}
            onClick={() => deleteAction(bookmark._id)}
          >
            {deleteButtonText}
          </button>
        </div>
      </div>
    )
}