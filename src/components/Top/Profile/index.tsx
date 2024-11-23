import styles from './index.module.scss'

export const Profile = () => {
  return (
    <div className={styles['profile']}>
      <p className={styles['profile-name']}>作ってるひと</p>
      <div className={styles['profile-main']}>
        <img
          className={styles['profile-main-image']}
          src="img/face.jpeg"
          alt="作者のSNSアイコン"
        />
        <div className={styles['profile-main-info']}>
          <ul className={styles['profile-main-info-description-list']}>
            <li className={styles['profile-main-info-description']}>
              Name: まる
            </li>
            <li className={styles['profile-main-info-description']}>
              フロントエンドエンジニア
            </li>
            <li className={styles['profile-main-info-description']}>
              音ゲーが好き
            </li>
            <li className={styles['profile-main-info-description']}>
              英語教えてくれ
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
