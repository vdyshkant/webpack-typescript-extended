import Post from '@models/Post'
import './styles/styles.css'
import Logo from '@/assets/logo.png'

const post = new Post('Webpack Post Title', Logo)

console.log('Post to String:', post.toString())