import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
    return( 
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/58514700?v=4'/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Carlos Eduardo (você)</strong>
                            <time title="09 de fevereiro às 8:39" dateTime="2024-02-09 08:40:21">Cerca de 2h atrás</time> 
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>

                    </header>
                      
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}