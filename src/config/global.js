export default {
  global: {
    componenteFormativo: 'Contenido, planeación digital y derechos de autor',
    descripcionCurso:
      'El desarrollo de este componente es introductorio a temas necesarios para iniciar en el proceso de construcción de contenidos digitales desde las características básicas del contenido digital, definición de objetivos, planeación digital y derechos de autor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos básicos y características del contenido digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de contenido digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Básicos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Intermedios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Avanzados',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Objetivos de comunicación asociados al contenido digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Planeación de contenidos digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Derechos de autor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de licencias',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Fuentes de contenido libre',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Atribución de derechos',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Derechos de autor',
      referencia:
        'Organización Mundial de la Propiedad Intelectual OMPI. (2016). <em>Principios básicos del derecho de autor y los derechos conexos.</em>',
      tipo: 'PDF',
      descarga: '/downloads/wipo_pub_909_2016.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autor',
      significado: 'Persona física que realiza la creación intelectual.',
    },
    {
      termino: 'Avatar',
      significado:
        'Representación gráfica que identifica a un usuario. Los avatares pueden ser fotografías reales o dibujos animados.',
    },
    {
      termino: '<em>Banner</em>',
      significado:
        'Forma de publicidad en internet que consiste en incluir una pieza publicitaria gráfica dentro de una página web; por lo general, se pone en el encabezado del sitio.',
    },
    {
      termino: '<em>Call to action</em>',
      significado:
        'Es un botón o enlace situado en un site que busca atraer clientes potenciales y convertirlos en clientes finales, normalmente a través de un formulario en una página de destino o landing page.',
    },
    {
      termino: 'Comunicar',
      significado:
        'Transmitir y recibir información por medio de un código común, de un emisor a un receptor.',
    },
    {
      termino: 'Contenido de valor',
      significado:
        'Es el contenido que ayuda y aporta valor real a los usuarios. En internet se puede distinguir entre el contenido de valor, el contenido comercial y el contenido de relleno, publicando contenido de valor en lugar de contenido comercial se logra que se comparta en redes sociales, fidelizar a los usuarios y llegar a nuevos clientes.',
    },
    {
      termino: 'Copia o ejemplar',
      significado:
        'Soporte material que contiene la obra como resultado de un acto de reproducción.',
    },
    {
      termino: 'Formato de imagen',
      significado:
        'Datos digitales en un formato específico, que permite ser visualizado en una computadora o dispositivo compatible; los más usados son PNG, JPEG, TIFF y GIF.',
    },
    {
      termino: 'Infografía',
      significado:
        'Combinación de imágenes y textos, sintética, explicativa y fácil de entender, con el fin de comunicar información de manera visual y simplificar su transmisión.',
    },
    {
      termino: '<em>Live streaming</em>',
      significado:
        'Transmisión de contenido de audio o video de manera inmediata, sin necesidad de ser almacenada, por ejemplo, los programas de radio se transmiten en tiempo real.',
    },
    {
      termino: 'Multimedia',
      significado:
        'Se refiere a cualquier plataforma que utiliza diferentes medios de expresión para comunicar y dar a conocer información, desde texto e imágenes hasta gifs, videos y audios.',
    },
    {
      termino: 'Objetivos',
      significado: 'Fin que se quiere alcanzar y al cual se dirige una acción.',
    },
    {
      termino: 'Planear',
      significado:
        'Acción que implica la elaboración de un plan o proyecto de trabajo, estudio o de alguna actividad a realizar en el futuro.',
    },
    {
      termino: 'Pódcast',
      significado:
        'Publicación digital en audio o video que se puede descargar o escuchar vía streaming. Suele alojarse en una página web o blog, pero también en plataformas especializadas en audio como itunes, spotify o soundcloud.',
    },
    {
      termino: '<em>Shooting</em>',
      significado:
        'Sesión fotográfica en la que se hacen varias tomas del mismo producto para finalmente elegir la o las mejores imágenes que muestran lo que la marca quiere expresar sobre ese producto o servicio.',
    },
    {
      termino: '<em>Stitching</em>',
      significado:
        'Proceso por el cual se combinan múltiples imágenes (foto stiching) para producir una imagen panorámica o una de alta resolución, normalmente mediante un programa de ordenador.',
    },
    {
      termino: '<em>Storytelling</em>',
      significado:
        'Contar una historia sobre el producto a través de imágenes o videos, con el fin de lograr una mayor conexión con el cliente. Se representa lo que el producto le puede ofrecer o cómo se vería usándolo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ángeles, 2020, Contenidos digitales: qué son, tipos y ejemplos, Recuperado de ',
      link: 'https://www.pantallea.com/contenidos-digitales-tipos-ejemplos/',
    },
    {
      referencia:
        'Diana Agudelo, 2019. ¿Qué es una estrategia de contenidos y por qué es importante?, Recuperado de ',
      link: 'https://www.triario.co/blog/que-es-una-estrategia-contenidos',
    },
    {
      referencia:
        'Luz Peréz Baz, 2020. Los 4 tipos de objetivos que tienes que definir para el éxito de tu negocio. Recuperado de ',
      link:
        'https://www.makinglovemarks.es/blog/objetivos-estrategia-comunicacion/',
    },
    {
      referencia:
        'Organización Mundial de Propiedad Intelectual OMPI, 2018. La propiedad intelectual en el ámbito digital, Recuperado de ',
      link: 'https://www.wipo.int/ip-outreach/es/ipday/2016/ip_digital.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
