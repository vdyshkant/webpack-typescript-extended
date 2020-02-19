import Post from '@models/Post'
import Logo from '@/assets/logo.png'
import React from 'react'
import {render} from 'react-dom'
import './babel'
import './styles/index.scss'
import Contact from "./sections/Contact";
import ModalWindow from "@components/ModalWindow";

const post = new Post('Webpack Post Title', Logo)

console.log('Post to String:', post.toString())

const App = () => {
  return (
    <main>

      <ModalWindow />

      <Contact />

      <div className="container  container--sample">
        <h1>Webpack conf init</h1>

        <hr/>

        <div className="logo" />

        <div className="card">
          <h2>SCSS</h2>
        </div>
      </div>
    </main>
  )
}

render(
  <App />,
  document.getElementById('app')
)