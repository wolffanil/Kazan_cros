import styled from './main.module.scss';

function Main() {
  return (
    <div className={styled.main}>
        <div className='container'>
        <header>
            <nav className={styled.nav}>
                <div className={styled.nav__logo}>
                    <img src="/icons/logo.svg" alt="logo" className={styled.nav__logo} />
                </div>

                <ul className={styled.nav__wrapper}>
                    <li className={styled.nav__wrapper__item}>Вдохновения</li>
                    <li className={styled.nav__wrapper__item}>Видео</li>
                    <li className={styled.nav__wrapper__item}>Панорама</li>
                </ul>

                <div className={styled.nav__menu}>
                    <img src="/icons/menu.svg" alt="menu" />
                </div>
            </nav>
        </header>

        <h1 className={styled.main__title}>Погрузитесь в атмосферу <br /> Казани</h1>
        </div>

    </div>
  )
}

export default Main