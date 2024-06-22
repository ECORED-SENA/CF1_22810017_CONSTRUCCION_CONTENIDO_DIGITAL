<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos y características del contenido digital
    
    .row.mb-5(data-aos="fade-up")
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/t1-i1.svg')
      .col-lg-9
        p.mb-4 Constantemente estamos interactuando con contenido digital; muchas veces sin prestar atención a sus detalles y características y, al desconocer esta información, desaprovechamos todo el potencial que pueden brindarnos para el marketing de nuestros emprendimientos.
          br
          br
          | Por ello, se recomienda que vea el siguiente video, en el cual 
          b se explicarán los conceptos básicos y las características del contenido digital.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/3dU9hPchEf8?si=DaL-PXk-IIHrf_WY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center
      .col-lg-7
        .cajon.color-primario.p-4
          p.mb-0 Al finalizar el video, analiza: 
            b ¿cuál es el contenido digital que más utilizas?
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
