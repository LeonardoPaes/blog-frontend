import { Header } from "./components/Header/Header"
import { Post, PostType } from "./components/Post/Post"
import { Sidebar } from './components/Sidebar/Sidebar';

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/LeonardoPaes.png",
      name: "Leonardo Paes",
      role: "CTO Ubicua"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "👉 jane.design/doctorcare"},
      {type: "link", content: "#novoprojeto #nlw #rocketseat"},
    ],
    publishedAt: new Date("2023-04-07 10:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Diego3g.png",
      name: "Diego Fernandez",
      role: "CTO Rockeseat"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "👉 jane.design/doctorcare"},
      {type: "link", content: "#novoprojeto #nlw #rocketseat"},
    ],
    publishedAt: new Date("2023-04-05 14:44:00")
  }
]

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post key={post.id} post={post}/>
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
