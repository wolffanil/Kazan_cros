import styled from './main.module.scss';

function Main() {
  return (
    <div className={styled.main}>
        <div className='container'>
        <header>
            <nav className={styled.nav}>
                <div className={styled.nav__logo}>
                    <img src="/icons/logo.svg" alt="logo" />
                </div>

                <ul className={styled.nav__wrapper}>
                    <li className={styled.nav__wrapper__item}>Вдохновения</li>
                    <li className={styled.nav__wrapper__item}>Видео</li>
                    <li className={styled.nav__wrapper__item}>Панорама</li>
                </ul>
            </nav>
        </header>

        <h1 className={styled.main__title}>Погрузитесь в атмосферу <br /> Казани</h1>
        </div>

    </div>
  )
}

export default Main