import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'

import photoProfile from '../assets/Rectangle 4234.svg'

export function Post(){

    return (
        <article className= {styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={photoProfile}/>
                    <div className={styles.authorInfo}>
                        <strong>Jane Cooper</strong>
                        <span>Dev Front-End</span>  
                    </div>
                </div>
                <time title="08 de fevereiro às 15:00" dateTime="2024-02-08 14:58:00"> Públicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> 👉{' '} <a href="#">jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>    
    )
}