import Post from '@models/Post'
import Logo from '@/assets/logo.png'
import './styles/styles.css'
import './styles/scss.scss'

const post = new Post('Webpack Post Title', Logo)

console.log('Post to String:', post.toString())