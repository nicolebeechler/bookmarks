import styles from './Bookmark.module.scss'


export default function Bookmark({ bookmark, updateAction, deleteAction, updateButtonText, deleteButtonText }) {
    return (
      <div className={styles.bookmark}>
        <a className={styles.bookmarkBtn} target="_blank" href={bookmark.url}>{bookmark.title}</a>
        {/* <button
          className={styles.button}
          onClick={() => updateAction(bookmark._id)}
        >
          {updateButtonText}
        </button> */}
        <button
          className={styles.button}
          onClick={() => deleteAction(bookmark._id)}
        >
          {deleteButtonText}
        </button>
      </div>
    )
}