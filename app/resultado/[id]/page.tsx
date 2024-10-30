import styles from "../../../styles/Page.module.scss";
import respelogos from '../../../public/respelogos.png';
import trabajo from '../../../public/trabajo.png';
import Image from "next/image";
/* 23 17 60*/

/*17 60 23*/

export default function Home() {
  return (
    <div className={styles.page}>

      <div className={styles.pageHeader}>
        <Image
          src={respelogos}
          alt={'Imagen Land Page'}
          priority
          quality={100}
          layout="intrinsic"
        />
      </div>

      <div className={styles.pageTopbar}>
        <div className={styles.pageTopbar__imagen}>
          <Image
            src={trabajo}
            alt={'Imagen Land Page'}
            priority
            quality={100}
            layout="intrinsic"
          />
        </div>

        <div className={styles.pageTopbar__title}>
          <div className={styles.titlecontent}>

            <h4>Determinación de solicitud de registro</h4>
          </div>

        </div>
      </div>

      <div className={styles.pageContent}>
        <div className={styles.pageContent__left}>
          <div className={styles.item}>
            <p className={styles.label}>Razón social</p>
            <p>MARIZA HERNÁNDEZ LUCIO</p>
          </div>

          <div className={styles.item}>
            <p className={styles.label}>Fecha de respuesta:</p>
            <p>2024-08-02</p>
          </div>

          <div className={styles.item}>
            <p className={styles.label}>Formato:</p>
            <p>STPS/UTD/DGIFT/ARR/17819/2024</p>
          </div>
        </div>

        <div className={styles.pageContent__right}>
          <br></br>
          <div className={styles.title}>
            <p>AVISO DE RENOVACIóN DE REGISTRO</p>
          </div>
          <div className={styles.content}>
            <p  className={styles.contentlabel}>Fundamento de la respuesta:</p>
            <p className={styles.contenttext}>DÉCIMO, DÉCIMO SEGUNDO, DÉCIMO TERCERO, DÉCIMO QUINTO-B, DÉCIMO QUINTO-C y DÉCIMO NOVENO del ACUERDO POR EL QUE SE DAN A CONOCER LAS DISPOSIONES DE CARÁCTER GENERAL PARA EL REGISTRO DE PERSONAS FÍSICAS O MORALES QUE PRESTEN SERVICIOS ESPECIALIZADOS O EJECUTEN OBRAS ESPECIALIZADAS A QUE SE REFIERE EL ARTICULO 15 DE LA LEY FEDERAL DEL TRABAJO, publicado en el Diario Oficial de la Federación el 24 de mayo de 2021y sus respectivos Acuerdos Modificatorios de fecha 03 de febrero de 2023 y 21 de febrero de 2024.</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <table>
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Folio</th>
              <th>Actividades Complementarias prestadas únicamente a empresas de su mismo grupo empresarial</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>35707033-4185-4e12-a8aa-93dd67694155</td>
              <td>Administración y supervisión de construcción de otras obras de ingeniería civil u obra pesada</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
