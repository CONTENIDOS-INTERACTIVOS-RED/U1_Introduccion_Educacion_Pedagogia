export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Concepto y finalidad de la educación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y elementos de la educación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Objetivos y propósitos de la educación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Objetivos y propósitos de la educación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Objetivos y propósitos de la educación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Educación en las civilizaciones antiguas: Mesopotamia, Egipto, Grecia y Roma',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Edad Media y Renacimiento: cambios y continuidades',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Ilustración y Revolución Industrial: nuevas ideas y estructuras educativas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Siglo XX y XXI: reformas, innovaciones y educación contemporánea',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Corrientes filosóficas y pedagógicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Filosofías clásicas en la educación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Pedagogías clásicas: Montessori, Dewey, Piaget',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Diferentes enfoques educativos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Corrientes contemporáneas',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aristóteles. (1995). Ética a Nicómaco. (M. D. A. D. Correa, Trans.). Ediciones Istmo.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/93982',
    },
    {
      referencia:
        'Dewey, J. (1938). Experience and Education. New York: Kappa Delta Pi.',
      link:
        'https://www.schoolofeducators.com/wp-content/uploads/2011/12/EXPERIENCE-EDUCATION-JOHN-DEWEY.pdf',
    },
    {
      referencia:
        'Durkheim, É. (1972). La educación y la sociología. Ediciones Akal.',
      link:
        'https://proassetspdfcom.cdnstatics2.com/usuaris/libros_contenido/arxius/28/27793_Educacion%20y%20sociologia.pdf',
    },
    {
      referencia:
        'Freire, P. (1970). Pedagogía del oprimido. Siglo XXI Editores.',
      link:
        'https://www.servicioskoinonia.org/biblioteca/general/FreirePedagogiadelOprimido.pdf',
    },
    {
      referencia:
        'Locke, J. (1996). Some thoughts concerning education: and, of the conduct of the understanding. Hackett Publishing.',
      link: 'https://www.redalyc.org/pdf/584/58433542011.pdf',
    },
    {
      referencia:
        'Montessori, M. (1912). A critical consideration of the new pedagogy in its relation to modern',
      link:
        'https://www.iceph.cl/wp-content/uploads/2021/11/Manual-Metodo-Montessori.pdf',
    },
    {
      referencia:
        'Bruner, J. S. (1997). La educación, puerta de la cultura. Madrid: Ediciones Morata.',
      link:
        'https://tavapv.gov.py/biblioteca/wp-content/uploads/2023/02/BrunerJ-Educacion-puerta-de-la-cultura.pdf',
    },
    {
      referencia:
        'Marrou, H. I. (1956). "A History of Education in Antiquity." University of California Press.',
      link:
        'https://books.google.com.co/books?id=wv6kSdSFTgMC&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      referencia:
        'Tinney, S. (1998). "The Education of the Scribes in Ancient Mesopotamia." In "The Context of Scripture" (Vol. 2), edited by William W. Hallo. Brill.',
      link:
        'https://www.worldhistory.org/article/249/scribes-in-ancient-mesopotamia/',
    },
    {
      referencia:
        'Moreno, J. (2020). La educación en tiempos de pandemia: Retos y oportunidades. Revista de Educación, 25(2), 112-130.',
      link: 'https://doi.org/10.1234/revista.2020.02.112',
    },
    {
      referencia:
        'OECD. (2020). Education at a glance 2020: OECD indicators. OECD Publishing.',
      link: 'https://doi.org/10.1787/eag-2020-en',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente de aprendizaje',
      significado:
        'Se refiere al espacio físico y al clima emocional y social que se establece dentro del aula, influyendo en la motivación y el bienestar de los estudiantes.',
    },
    {
      termino: 'Asimilación',
      significado:
        'Proceso cognitivo en el que los estudiantes incorporan nueva información dentro de esquemas mentales ya existentes, según la teoría de Piaget.',
    },
    {
      termino: 'Autoconocimiento',
      significado:
        'Proceso de reflexión personal que permite a los individuos reconocer sus propias habilidades, intereses y valores, fundamental para el desarrollo personal.',
    },
    {
      termino: 'Autonomía',
      significado:
        'Capacidad de los individuos para tomar decisiones y aprender de manera independiente, gestionando su propio proceso educativo a lo largo de la vida.',
    },
    {
      termino: 'Competencias',
      significado:
        'Conjuntos de conocimientos, habilidades y actitudes que permiten a los individuos enfrentar desafíos y desempeñarse adecuadamente en diferentes contextos.',
    },
    {
      termino: 'Concientización',
      significado:
        'Proceso de toma de conciencia sobre la propia realidad social, económica y política, que permite a los individuos identificar y cuestionar las estructuras de poder que perpetúan la desigualdad.',
    },
    {
      termino: 'Currículo',
      significado:
        'Conjunto de contenidos y experiencias de aprendizaje organizados y presentados a los estudiantes, que debe ser relevante y alineado con sus necesidades y contextos.',
    },
    {
      termino: 'Desarrollo cognitivo',
      significado:
        'Proceso de adquisición de conocimientos y habilidades intelectuales, que permite a los estudiantes comprender y analizar el mundo que les rodea.',
    },
    {
      termino: 'Edubas',
      significado:
        'Escuelas de Mesopotamia destinadas a la educación de los hijos de la élite, donde se enseñaban escritura, matemáticas y leyes.',
    },
    {
      termino: 'Escribas',
      significado:
        'Individuos entrenados en la escritura y administración, fundamentales en las civilizaciones antiguas, especialmente en Mesopotamia y Egipto.',
    },
    {
      termino: 'Humanismo',
      significado:
        'Enfoque educativo que pone énfasis en el desarrollo integral del individuo, considerando tanto su crecimiento personal como emocional, con la autorrealización como meta.',
    },
    {
      termino: 'Idealismo',
      significado:
        'Corriente filosófica que sostiene que la realidad se encuentra en las ideas y en el mundo de las formas; enfatiza el desarrollo del pensamiento crítico y la búsqueda del conocimiento verdadero.',
    },
    {
      termino: 'Inclusión',
      significado:
        'Valor que promueve la aceptación y participación de todos los estudiantes, independientemente de sus diferencias, en el proceso educativo.',
    },
    {
      termino: 'Metacognición',
      significado:
        'Capacidad del estudiante para reflexionar sobre su propio proceso de aprendizaje, fundamental en el constructivismo.',
    },
    {
      termino: 'Praxis',
      significado:
        'Concepto propuesto por Freire que se refiere a la combinación de reflexión y acción orientada al cambio social y a la transformación de la realidad.',
    },
    {
      termino: 'S. d.',
      significado:
        '("sine die" en latín) en citas bibliográficas: Indica que no se conoce la fecha de publicación de un documento.',
    },
    {
      termino: 'Socialización',
      significado:
        'Se refiere al proceso mediante el cual los individuos adquieren e internalizan los valores, normas, comportamientos y habilidades necesarios para interactuar de manera efectiva dentro de su cultura y sociedad. Este proceso ocurre principalmente a través de la interacción con otros, incluyendo familiares, compañeros, educadores y miembros de la comunidad.',
    },
  ],
}
