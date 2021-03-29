import Post from './models/Post.js'
import '@/styles/styles.css'
import '@/styles/less.less'
import '@/styles/sass.sass'
import '@/babel.js'
import WebpackLogo from './assets/webpack-logo.png'

const post = new Post('Webpack Post Title', WebpackLogo)
console.log('Post to string', post.toString())