<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.borde-11.p-3.p-lg-4
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general del componente formativo, que enuncia las temáticas desarrolladas y destaca aspectos clave estudiados. Tema central: contenido digital. Temas integradores: tipos, objetivos, planeación y derechos de autor.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
