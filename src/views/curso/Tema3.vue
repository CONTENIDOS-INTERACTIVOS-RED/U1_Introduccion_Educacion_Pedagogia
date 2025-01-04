<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'unidad 1: Introducción a la educación y pedagogía'" :subTitulo="'3. Corrientes filosóficas y pedagógicas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    #t_3_1.titulo-segundo
      div.d-flex
        span.me-3 3.1  
        h2 Filosofías clásicas en la educación

    .row.mb-5.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-rosa.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") A lo largo de la historia, la educación ha sido un tema central de reflexión para filósofos, cuyas ideas han contribuido a dar forma al sistema educativo contemporáneo. En este sentido, resulta fundamental explorar las filosofías clásicas que han influido en nuestra comprensión de la educación. Entre las más relevantes se encuentran el <strong>idealismo</strong>, el <strong>realismo</strong>, el <strong>pragmatismo</strong> y el <strong>constructivismo</strong>. Cada una de estas corrientes presenta perspectivas únicas sobre los objetivos y las metodologías de la enseñanza.

    .tarjeta.box-shadow.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/bg-icono-pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-3 Filosofías clásicas en la educación
              p.text-small Lo invitamos a leer el PDF  Filosofías clásicas en la educación, donde encontrará los elementos más representativos de cada corriente filosófica.
            .col-sm-auto
              a.download-btn.boton.bg-azul.text-white(:href="obtenerLink('/downloads/Anexos_Filosofías clásicas en la educación.pdf')" target="_blank")
                span.text-small Descargar
                i.fas.fa-arrow-right
    
    #t_3_2.titulo-segundo
      div.d-flex
        span.me-3 3.2  
        h2 Pedagogías clásicas: Montessori, Dewey, Piaget

    p.mb-4 En el contexto de las pedagogías clásicas, es esencial explorar las contribuciones de figuras destacadas como María Montessori, John Dewey y Jean Piaget, quienes han influido significativamente en el pensamiento educativo contemporáneo:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-3(x="64.8%" y="25.5%" numero="+")
        .h5.mb-2 María Montessori
        p Su enfoque educativo se fundamenta en el respeto por el niño como un ser activo en su proceso de aprendizaje. Montessori propuso que los ambientes de aprendizaje deben ser cuidadosamente preparados para fomentar la autonomía y la exploración. A través de su método, los educadores deben observar y guiar a los estudiantes, permitiendo que estos elijan actividades que se alineen con sus intereses. Este enfoque centrado en el estudiante, resalta la importancia del aprendizaje autodirigido y la responsabilidad en la educación (Montessori, 1912).
      .tarjeta.bg-white.p-3(x="79.4%" y="76%" numero="+")
        .h5.mb-2 John Dewey
        p Presentó una visión pragmática de la educación, enfatizando la experiencia como un componente clave en el aprendizaje. Dewey argumentó que la educación debe estar vinculada a la vida cotidiana y a la experiencia del estudiante, promoviendo la interacción entre el individuo y su entorno. Su enfoque en el aprendizaje activo y la resolución de problemas, permite a los estudiantes participar de manera significativa  en su educación, desarrollando habilidades críticas y reflexivas necesarias para la vida en sociedad (Dewey, 1938).
      .tarjeta.bg-white.p-3(x="20.6%" y="76%" numero="+")
        .h5.mb-2 Jean Piaget 
        p Conocido por su teoría del desarrollo cognitivo, aportó una comprensión profunda de cómo los niños adquieren y construyen conocimiento. Piaget propuso que el aprendizaje ocurre a través de diferentes etapas de desarrollo, en las que los niños pasan de una comprensión egocéntrica del mundo a una perspectiva más lógica y abstracta. Según su enfoque, los educadores deben adaptar su enseñanza al nivel de desarrollo cognitivo de cada estudiante, permitiendo que estos construyan su conocimiento a través de la exploración y la manipulación activa de su entorno (Piaget, 1970).

    p.mb-5 Al considerar las ideas de Montessori, Dewey y Piaget, se observa que, aunque cada uno tiene un enfoque único, todos comparten la creencia en la importancia de un aprendizaje activo y centrado en el estudiante. Sus teorías continúan influyendo en las prácticas educativas actuales, resaltando la necesidad de fomentar la curiosidad, la creatividad y el pensamiento crítico en los educandos. Estos principios son fundamentales para la formación de individuos competentes y comprometidos en la sociedad contemporánea.  

    #t_3_3.titulo-segundo
      div.d-flex
        span.me-3 3.3  
        h2 Diferentes enfoques educativos

    .row.mb-5
      .col-12.col-xl-7.d-flex.flex-column
        p Ahora vamos a profundizar en los diferentes enfoques educativos. Se ha preguntado alguna vez ¿por qué algunos métodos de enseñanza le funcionan mejor que otros? Esto se debe a que existen diversas corrientes pedagógicas que abordan el aprendizaje de maneras distintas, cada una con su propia perspectiva sobre cómo debería ser el proceso educativo.
        .d-flex.flex-column.align-items-start.bg-morado.p-4.mb-4(data-aos="fade-right")
          p.pe-xl-3.mb-3(data-aos="fade-up") Lo invitamos a conocer algunos enfoques educativos haciendo clic en el siguiente PDF Diferentes enfoques educativos.  
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_3.pdf.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Diferentes enfoques educativos.  
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')  

    #t_3_4.titulo-segundo
      div.d-flex
        span.me-3 3.4  
        h2 Corrientes contemporáneas

    .row.mb-0
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        p Las corrientes contemporáneas de la educación, han evolucionado a lo largo del tiempo para adaptarse a las necesidades cambiantes de la sociedad y del individuo. A medida que se profundiza en el estudio de estas corrientes, es posible identificar enfoques claves que han influido en la pedagogía actual. 
        .d-flex.flex-column.align-items-start.bg-morado.p-4.mb-4(data-aos="fade-left")
          p.pe-xl-3.mb-3(data-aos="fade-up") Para conocer cada una de estas corrientes, lo invitamos a consultar el PDF #[strong Corrientes contemporáneas].
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_1.pdf.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Corrientes contemporáneas  


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://pubs.ascd.pub/com/education/12/1/17/education-12-17.pdf" target="_blank" rel="noopener noreferrer") Rogers, C. (1983). Freedom to learn for the 80s. Columbus, OH: Charles E. Merrill Publishing Company.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="www.bobpearlman.org/BestPractices/PBL_Research.pdf" target="_blank" rel="noopener noreferrer") Thomas, J. W. (2000). A review of research on project-based learning. Autodesk Foundation.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/fS1xaVxCFf4?si=2dnMDYwOUVAoYoD6" target="_blank" rel="noopener noreferrer") Medina L. (5 sep 2023) Travesía histórica de la educación, la pedagogía y la investigación educativa.


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Corrientes filosóficas y pedagógicas',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Cuál es la finalidad de la educación?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Desarrollo personal',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Desarrollo social',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Ambas anteriores',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Ninguna de las anteriores',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'En la educación contemporánea, se busca:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Controles estrictos y rígidos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Desarrollo de competencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Eliminación del pensamiento crítico',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Estabilidad en métodos tradicionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: 'Durante el Renacimiento, la educación se enfocó en:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El desarrollo de las artes y las ciencias',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'La educación exclusivamente religiosa',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La educación de solo los varones',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El aprendizaje memorístico',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué enfoque educativo está asociado con la teoría del desarrollo cognitivo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Conductista',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Constructivista',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Humanista',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Pragmatista',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de las siguientes afirmaciones describe mejor el aprendizaje basado en proyectos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Es un enfoque teórico sin aplicación práctica',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Combina teoría y práctica en el proceso de aprendizaje',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Se centra únicamente en la evaluación final',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Implica un aprendizaje tradicional y memorístico',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
