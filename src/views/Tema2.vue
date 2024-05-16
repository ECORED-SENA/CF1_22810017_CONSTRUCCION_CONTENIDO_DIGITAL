<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de contenido digital
    
    .row.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img-2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            h3.mb-0 Los prototipos de formatos con contenidos digitales que las personas o las empresas comparten se pueden clasificar de la siguiente manera:

    #t_2_1.titulo-segundo.color-acento-contenido
      .h4 2.1 Básicos
    
    p.mb-4 Son aquellos que cualquier persona con acceso a un dispositivo móvil puede crear y publicar en sus redes sociales, estos son:
    

    SlyderA.mb-5(data-aos="fade-up")
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i2.jpg', alt='Imágen mostrando Fotografía digital')
          figcaption.h5 Fotografía digital
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i1.jpg', alt='Imágen mostrando Video grabado o video en vivo')
          figcaption.h5 Video grabado o video en vivo
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i12.jpg', alt='Imágen mostrando Audio')
          figcaption.h5 Audio
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i14.jpg', alt='Imágen mostrando Texto')
          figcaption.h5 Texto
    
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      .h4 2.2  Intermedios

    p.mb-4(data-aos="fade-up") El contenido digital intermedio es aquel que requiere el uso de herramientas de edición para producirlas e incluso pueden ser creadas desde el dispositivo móvil. La mayoría se desarrollan con un objetivo de comunicación y son contenidos planeados.
      br
      br
      | Algunas de las más conocidas son:

    SlyderA.mb-5(data-aos="fade-up")
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i13.jpg', alt='Imágen mostrando un ejemplo de Fotografía digital')
          figcaption.h5 Infografía (Ejemplo)
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i11.jpg', alt='Imágen mostrando un Póster')
          figcaption.h5 Póster
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i10.jpg', alt='Imágen mostrando una Presentacion')
          figcaption.h5 Presentaciones
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i9.jpg', alt='Imágen mostrando Video promocional')
          figcaption.h5 Video promocional
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i3.jpg', alt='Imágen mostrando Podcast')
          figcaption.h5 Pódcast

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h4 2.3 Avanzados

    p.mb-4(data-aos="fade-up") Este tipo de contenidos digitales requieren de profesionales en el área, para producirlos.
      br
      br
      | En esta categoría podemos encontrar:

    SlyderA.mb-5(data-aos="fade-up")
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i4.jpg', alt='Imágen mostrando Páginas Web')
          figcaption.h5 Páginas web
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i6.jpg', alt='Imágen mostrando Videojuegos')
          figcaption.h5 Videojuegos
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i8.jpg', alt='Imágen mostrando Videos seriados')
          figcaption.h5 Videos seriados
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i5.jpg', alt='Imágen mostrando e-book interactivos')
          figcaption.h5 #[em E-books] interactivos
      .slider-ejemplos
        figure
          img(src='@/assets/curso/temas/t1-i7.jpg', alt='Imágen mostrando Seminarios Web o webinar')
          figcaption.h5 Seminarios web o webinars

    .cajon.color-primario.p-4
      .row.align-items-center.justify-content-center
        .col-6.col-md-2.mb-3.mb-md-0
          img(src='@/assets/curso/temas/youtube.svg', alt='Icono de Youtube')
        .col-md
          p.mb-3 Existe una larga lista de modelos u opciones de contenidos digitales que podemos crear, incluyendo combinaciones entre ellos; un ejemplo, muy común, se puede observar en las páginas de venta de productos, donde podemos encontrar un carrusel de imágenes (más de 2 imágenes en la misma publicación) y en algunos casos, acompañado de un video explicativo del producto. 
            br
            br
            b Pero, la decisión de qué tipo de contenido digital debo crear para mi emprendimiento, dependerá de la planeación del contenido, tema que aprenderemos a continuación.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped>
::v-deep
  .slyder-a__bullets
    bottom: 80px
</style>
