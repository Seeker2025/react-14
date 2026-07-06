import css from './Header.module.css'

const Header = ({ showModal }) => {
return (
    <nav className={css.navbar}>
        <div className={css.containerFluid}>
            <span className="novbar-brand">
                Navbar
            </span>
            <button className={css.btn} onClick={showModal}>Open Modal</button>
        </div>
    </nav>
)
}

export default Header;