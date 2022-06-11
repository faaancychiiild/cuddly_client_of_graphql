import './header.css'

const Header = () => {
  return (
    <main className="header">
      <a className='menu-item' href='/tech'>
        technologies
      </a>
      <a className='menu-item' href='/work'>
        work
      </a>
      <a className='menu-item'>
        about
      </a>
    </main>
  )
}

export default Header