import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

//JSX = JavaScript + XML

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/58514700?v=4',
      name: 'Carlos Eduardo',
      role: 'Engenheiro de Computação'

    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-02-15 8:54:00'),
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/58514700?v=4',
      name: 'Paulo Henrique',
      role: 'Analista de Sistema'

    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-02-16 17:14:00'),
  },
];

export function App() {
  
  return (
    <div>
      <Header />

      <div className={ styles.wrapper }>
          <Sidebar />
          <main>
                {posts.map(post =>{
                  return( 
                    <Post
                      key={post.id}
                      author={post.author}
                      content={post.content}
                      publishedAt={post.publishedAt}
                    />
                )
                })}              
          </main>
      </div>  
    </div>
  )
}