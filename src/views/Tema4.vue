<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Planeación de contenidos digitales
    
    .row.align-items-center.mb-5(data-aos="fade-up")
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/t4-i1.svg')
      .col-lg-9
        p.mb-4 El primer paso en la creación de contenidos digitales es 
          b la planeación 
          | y, en el siguiente video, comprenderemos porqué es importante y cómo utilizar una herramienta indispensable en ese proceso: 
          b el calendario editorial. 

    figure(data-aos="fade-up")
      .video.mb-5
        iframe(width="560" height="315" src="https://www.youtube.com/embed/p7ZwZhSjqTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-4(data-aos="fade-up")
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/A1_CF01_4_Calendario.xlsx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p
              b Anexo. 
              | Formato calendario de contenido.

    h3.titulo-tercero(data-aos="fade-up") ¿Por qué nunca debe faltar un calendario?

    TabsA.color-acento-botones.mb-5(data-aos="fade-up")
      .tarjeta.fondo-color-sistema-i.p-4(titulo="Aporta valor a la audiencia")
        .row.align-items-center.justify-content-center
          .col-6.col-md-2.mb-4.mb-md-0
            img.h85(src='@/assets/curso/temas/t4-i2.svg' alt='Icono bocina')
          .col-md
            h2 Aporta valor a la audiencia
            p.mb-0 La audiencia sentirá que se le toma en serio y que se está creando para ella. Hablar por hablar en las redes sociales lo convierte en esa famosa cuenta “humo” y, por supuesto, es nada creativa.

      .tarjeta.fondo-color-sistema-i.p-4(titulo="Proyecta las ideas")
        .row.align-items-center.justify-content-center
          .col-6.col-md-2.mb-4.mb-md-0
            img.h85(src='@/assets/curso/temas/t4-i3.svg' alt='Icono bocina')
          .col-md
            h2 Proyecta las ideas
            p Mide las reacciones y se adapta con tiempo a los cambios necesarios para mejorar.

      .tarjeta.fondo-color-sistema-i.p-4(titulo="Genera rapidez para crear")
        .row.align-items-center.justify-content-center
          .col-6.col-md-2.mb-4.mb-md-0
            img.h85(src='@/assets/curso/temas/t4-i4.svg' alt='Icono bocina')
          .col-md
            h2 Genera rapidez para crear
            p Una vez que sus pilares se encuentren claros y casados con el modelo de calendario editorial, las ideas llegarán en cantidad industrial. Se sabe hacia dónde va.

      .tarjeta.fondo-color-sistema-i.p-4(titulo="Produce una mejor escucha")
        .row.align-items-center.justify-content-center
          .col-6.col-md-2.mb-4.mb-md-0
            img.h85(src='@/assets/curso/temas/t4-i5.svg' alt='Icono bocina')
          .col-md
            h2 Produce una mejor escucha
            p El calendario editorial desarrolla un séptimo sentido: creación intuitiva. Se entiende mejor lo que se quiere comunicar y se entiende a la audiencia.

      .tarjeta.fondo-color-sistema-i.p-4(titulo="Ayuda a conocer mejor al público")
        .row.align-items-center.justify-content-center
          .col-6.col-md-2.mb-4.mb-md-0
            img.h85(src='@/assets/curso/temas/t4-i6.svg' alt='Icono bocina')
          .col-md
            h2 Ayuda a conocer mejor al público
            p Cada formato, cada temática, cada #[em post] tiene una audiencia diferente.

    .row.justify-content-center.mb-4
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Antes de ir al formato de calendario de contenido, 
            b realizaremos una planificación y una estrategia.

    p.mb-4(data-aos="fade-up")
      b Es importante 
      | tener presente que, para crear una estrategia de distribución sólida, se necesita una segura comprensión de los objetivos de contenido. Las siguientes preguntas nos ayudarán a guiarnos en esta toma de decisiones:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img.d-none.d-lg-flex
            img(src='@/assets/curso/temas/t4-i7.svg' alt='Icono bocina')
          .tarjeta.color-soft-blue
            .p-4
              .figure.w-100.mb-4.d-lg-none
                img.mx-auto(src='@/assets/curso/temas/t4-i7.svg' alt='Icono bocina',style="max-width: 100px;")
              ul.mb-0.lista-ul.lista-personalizada-1
                li 
                  i.fas.fa-check
                  | ¿Cuál es el objetivo? 
                li 
                  i.fas.fa-check
                  | ¿Qué estás intentando lograr? Liderazgo de pensamiento, conversiones, conocimiento de la marca.
                li 
                  i.fas.fa-check
                  | ¿Qué quieres que la gente realice una vez que haya interactuado con el contenido? Ya sea que se trate de acciones en redes sociales, visitas a páginas o descargas de demostración. Qué se supone que debe ser su contenido, en última instancia.
                li 
                  i.fas.fa-check
                  | ¿A quién intentas llegar? ¿Qué tipo de contenido consumen? ¿Qué nivel de conocimiento poseen? Cuando comprendas quiénes son esas personas "adecuadas", podrás identificar mejor cómo crear contenido que les interese. 
                li.mb-0
                  i.fas.fa-check
                  | ¿Qué canales utilizarás? Vas a querer apuntar a los canales más efectivos y relevantes para llegar a las personas. Una estrategia de distribución sólida, generalmente incluye una combinación de medios.  

    .row.justify-content-center
      .col-lg-8
        .cajon.color-primario.p-4
          p.mb-0 Una vez que se tiene 
            b la comprensión básica de los objetivos, 
            | se puede desarrollar el resto de la estrategia.

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

<style lang="sass" scoped>
.h85
  height: 85px

.color-soft-blue
  background-color: #f3f9ff

.customCards .tarjeta-avatar-b > div
  padding-left: 6%

.tarjeta-avatar-b .tarjeta
  @media screen and (max-width: $bp-max-md)
    margin-left: 0
    padding-left: 0
</style>
