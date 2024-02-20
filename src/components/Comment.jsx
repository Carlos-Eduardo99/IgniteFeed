import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0); //iniciar o estado com alguma informação que seja do mesmo tipo da informação a ser armazenada
    
    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state)=>{
            return state +1
        });
    }

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

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>

                    </header>
                      
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp onClick={handleLikeComment} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}