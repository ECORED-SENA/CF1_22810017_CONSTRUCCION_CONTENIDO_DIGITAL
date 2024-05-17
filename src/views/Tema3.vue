<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Objetivos de comunicación asociados al contenido digital
    
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/t3-i1.svg')
      .col-lg-9
        p.mb-4  Es importante comprender que toda acción tiene una reacción. Por este motivo, cada vez que publiquemos un contenido en nuestras redes sociales, este ocasionará ciertas reacciones.
        p.mb-4  Por eso, antes de producir la pieza digital, debemos 
          span.text-bold proyectar 
          | y, para hacerlo, es vital definir los objetivos que se desean alcanzar.
    p.mb-4 En el siguiente video, conoceremos qué son los objetivos de comunicación asociados al contenido digital, y analizaremos un ejemplo.

    figure
      img.mb-5(src="@/assets/curso/temas/img-video-temporal.png")
      //.video.mb-5
      //  iframe...

    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Al finalizar el video, analiza: #[b ¿qué información crees que debe llevar ese #[em post] que compartirá la empresa en sus redes sociales?]

</template>

<script>
export default {
  name: 'Tema3',
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
