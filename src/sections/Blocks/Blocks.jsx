import styled from './blocks.module.scss';


function Blocks() {
  return (
    <section id="blocks" className='container'>
        <div className={styled.blocks}>
            <div className={styled.blocks__item}>
                <div className={styled.blocks__item__cyrcl}>
                    <img src="/icons/Kyl.svg" alt="kyl" className={styled.blocks__item__img}/>
                </div>

                <h2 className={styled.blocks__item__title}>Уникальные
достопримечатьности</h2>

                <p className={styled.blocks__item__desc}>Познакомьтесь с удивительными достопримечательностями Казани, раскройте для себя всю красоту и богатство истории этого города</p>
            </div>

            <div className={styled.blocks__item}>
                <div className={styled.blocks__item__cyrcl}>
                    <img src="/icons/muslin.svg" alt="muslin" className={styled.blocks__item__img}/>
                </div>

                <h2 className={styled.blocks__item__title}>Культурные
                <br />
богатсва</h2>

                <p className={styled.blocks__item__desc}>Откройте для себя уникальные места и культурные достопримечательности культурной столицы Татарстана с нами</p>
            </div>


            <div className={styled.blocks__item}>
                <div className={styled.blocks__item__cyrcl}>
                    <img src="/icons/person.svg" alt="person" className={styled.blocks__item__img}/>
                </div>

                <h2 className={styled.blocks__item__title}>Беззаботное <br />
знакомство</h2>

                <p className={styled.blocks__item__desc}>Будьте уверены, что с нашей помощью вы сможете насладиться всем многоообразием и красотой Казани без лишних хлопот и забот</p>
            </div>
        </div>
    </section>
  )
}

export default Blocks