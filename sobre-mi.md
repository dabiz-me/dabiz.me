---
layout: default
title: "Sobre mí | David Pérez"
description: "Trayectoria, experiencia y criterios de ingeniería de software de David Pérez: desarrollo, arquitectura, integración y coordinación técnica."
permalink: /sobre-mi/
---
<main class="themeix-main-content dabiz-detail-page dabiz-about-page">
  <section class="full-page clearfix dabiz-service-hero" aria-labelledby="page-title">
    <div class="container-fluid"><div class="about-wrapper"><div class="row"><div class="col-lg-10 mx-auto"><div class="about-content">
      <p class="dabiz-personal-eyebrow">Perfil profesional</p>
      <h1 id="page-title">Sobre mí</h1>
      <p class="lead">Una trayectoria construida desde el desarrollo hasta la arquitectura</p>
      <p>Mi trayectoria profesional comenzó en el desarrollo de software y ha evolucionado hacia el diseño de arquitecturas, la integración de sistemas y la responsabilidad técnica de equipos y aplicaciones empresariales.</p>
      <p>He trabajado en proyectos para organizaciones de distintos sectores, desde la Administración pública hasta el comercio, el transporte y los servicios financieros. Esa experiencia me ha permitido conocer tanto los problemas cotidianos del desarrollo como las decisiones que condicionan la evolución de un sistema a largo plazo.</p>
      <p>Sigo considerando el conocimiento técnico y la cercanía al código esenciales para tomar buenas decisiones de arquitectura.</p>
    </div></div></div></div></div>
  </section>
  <section class="dabiz-personal-section" aria-label="Fotografía personal">
    <div class="dabiz-personal-inner">
      <figure class="dabiz-personal-photo">
        <img src="{{ '/assets/images/author.png' | relative_url }}" alt="Autorretrato en contraluz de David Pérez, con el mar de Barcelona al fondo" loading="lazy" decoding="async">
      </figure>
      <div class="dabiz-personal-copy">
        <p class="dabiz-personal-eyebrow">Mi forma de trabajar</p>
        <h2>Cómo entiendo la ingeniería de software</h2>
        <h3>Comprender antes de diseñar</h3>
        <p>Antes de elegir una tecnología o definir una arquitectura, necesito entender qué problema queremos resolver, cuáles son sus restricciones y qué consecuencias tendrá cada decisión.</p>
        <h3>La arquitectura también tiene un coste</h3>
        <p>Una solución técnicamente sofisticada no siempre es la más adecuada. La complejidad tiene costes de desarrollo, operación y mantenimiento. Mi criterio es introducirla cuando existe una necesidad que la justifica.</p>
        <h3>Diseñar para la evolución</h3>
        <p>Los sistemas cambian, los equipos cambian y los requisitos también. Por eso doy importancia a delimitar responsabilidades, establecer contratos claros entre componentes y mantener la capacidad de modificar una solución sin comprometer todo el conjunto.</p>
      </div>
    </div>
  </section>
  {% include experiences_section.html %}
  <section class="full-page clearfix dabiz-service-outro" aria-labelledby="about-contact-title">
    <div class="container-fluid text-center">
      <h2 id="about-contact-title">¿Crees que puedo ayudarte?</h2>
      <p>Si tienes un proyecto de software, una integración compleja o una necesidad tecnológica concreta, podemos hablar de su contexto y valorar una posible colaboración.</p>
      <a class="dabiz-service-cta" href="{{ '/#contact' | relative_url }}">Hablemos de tu proyecto <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    </div>
  </section>
  {% include footer.html %}
</main>