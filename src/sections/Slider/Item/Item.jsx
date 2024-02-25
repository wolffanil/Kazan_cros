import styled from './item.module.scss';


function Item({ title, img, desc}) {
  return (
    <>
    
    
    <div className={styled.item}>
    <div className={styled.item__block_top}/>
        <img src={img} alt="img" className={styled.item__img} />
        <div className={styled.item__block_wrapper}>
            <h2 className={styled.item__title}>{title}</h2>
            <p className={styled.item__desc}>{desc}</p>

            <button className={styled.item__button}>Узнать больше</button>
        </div>

       
    </div>
    
    </>
  )
}

export default Item