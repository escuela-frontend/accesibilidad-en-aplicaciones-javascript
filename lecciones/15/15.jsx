import './15.css';
import * as React from 'react';
import pics from './lib/pics';

/*
  Ejercicio 15 鈾匡笍

  1.1 Reemplaza el div con la clase "gallery__list" por un elemento ul. 馃煛
  1.2 Agrega la propiedad aria-label col el valor picture.alt en el pseudo-bot贸n
    con la clase "gallery__button". 馃煝
  1.3 Agrega la propiedad alt con el valor picture.alt en la imagen
    con la clase "gallery__pic". 馃煝

  2. Agrega la propiedad tabIndex={0} para el pseudo-bot贸n con la clase
    "gallery__button".

  3.1 Habilita el evento de onKeyDown validando que sea bajo un Espace o Enter. 馃煝
  3.2 Puedes optar por no hacer lo anterior y usar algo m谩s valido como reemplazar
    el pseudo-bot贸n por uno real y de pas贸 eliminar lo hecho en el paso 2.

  4.1 Crea una referencia a la modal usando React.useRef y asign谩la al contenedor
    en cuesti贸n. 馃煝
  4.2 Aseg煤rate de que cada que la modal se renderice, sea enfocada de inmediato,
    puedes usar el snippet dentro del componente <Modal />. 馃煛
*/

function App() {
  return <Gallery pictures={pics} />;
}

function Gallery(props) {
  const { pictures } = props;
  const [modal, setModal] = React.useState(null);

  return (
    <section className="gallery">
      <div className="gallery__list">
        {pictures.map((picture) => (
          <li className="gallery__item" key={picture.alt}>
            <div
              className="gallery__button"
              data-testid="focusable"
              onClick={() => setModal(picture)}
            >
              <img className="gallery__pic" src={picture.src} />
            </div>
          </li>
        ))}
      </div>
      {modal && (
        <Modal {...modal} onModalClose={() => setModal(null)} />
      )}
    </section>
  );
}

function Modal(props) {
  const { onModalClose, src, alt, copyright } = props;
  const modalRef = React.useRef(null);

  // >>>> Descom茅ntame che 馃 <<<<
  // React.useEffect(() => {
  //   modalRef.current.focus();
  // }, []);

  return (
    <div
      ref={modalRef}
      className="gallery__modal"
      data-testid="modal"
      tabIndex={0}
    >
      <button
        className="gallery__modal-button"
        onClick={onModalClose}
      >
        &#10799;
      </button>
      <img className="gallery__modal-pic" src={src} alt={alt} />
      <div
        className="gallery__modal-copyright"
        dangerouslySetInnerHTML={{ __html: copyright }}
      />
    </div>
  );
}

export default App;
