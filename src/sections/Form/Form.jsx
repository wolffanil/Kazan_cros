import styled from './form.module.scss';


function Form() {
  return (
    <section id="form">
        <div className={styled.form}>
            <form className={styled.form__call}>
                <h2 className={styled.form__call__title}>Связаться с нами</h2>

                <p className={styled.form__call__subtitle}>Получите дополнительную консультацию</p>

                <input type="text" 
                    className={styled.form__call__input}
                />

                <input type="text" 
                    className={styled.form__call__input}
                />

                <div className={styled.form__call__wrapper}>
                    <input type="checkbox" />
                    <p className={styled.form__call__checktext}>Согласие на обработку персональных данных</p>
                </div>

                <button type='submit'
                    className={styled.form__call__button}
                >Отправить</button>
            </form>

            <video src="" className={styled.form__vidoe}></video>
        </div>
    </section>
  )
}

export default Form;