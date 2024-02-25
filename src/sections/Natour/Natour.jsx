import styled from "./natour.module.scss";

function Natour() {
  return (
    <section id="natour" className="container">
      <div className={styled.natour}>
        <img
          src="/img/natours/top.jpg"
          alt="natour"
          className={styled.natour__img_top}
        />
        <img
          src="/img/natours/left.jpg"
          alt="natour"
          className={styled.natour__img_left}
        />
        <img
          src="/img/natours/right.jpg"
          alt="natour"
          className={styled.natour__img_right}
        />

        <div className={styled.natour__block_top}></div>
        <div className={styled.natour__block_buttom}></div>

        <div className={styled.natour__desc}>
          Казань, богатая не только историей и культурой, но и захватывающей
          природой, предлагает уникальное сочетание урбанистической среды и
          природных красот. Город величственно утоплен в зелени островов, парков
          и набережных, предлагая своим жителям и посетителям возможность
          насладиться природными чудесами.
          <span className={styled.span__one}>
            Величественая Волга, живописные лесопарки, уютные скверы и
            удивительные озера создаютнеповторимую атмосферу идеальную для
            отдыха и релаксации в сердце города.
          </span>
        </div>

        <h2 className={styled.natour__title}>
          Природные краски <br />
          Казанской флоры
        </h2>

        <p className={styled.natour__subtitle}>
          Природные <br />
          чудеса Казани: <br />
          зеленый оазис <br />
          спокойствия
        </p>
      </div>
    </section>
  );
}

export default Natour;
