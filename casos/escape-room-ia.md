---
layout: editorial-case
title: De una idea a una experiencia interactiva con IA
summary: Un acompañamiento real para crear y publicar un escape room con Genially y Claude en Chrome en el contexto de una asignatura de máster.
permalink: /casos/escape-room-ia/
---

> **Sobre esta experiencia.** Acompañé a una persona que debía preparar un juego interactivo para una asignatura de su máster. El juego se construyó, se probó y funcionó. Fue un acompañamiento real en un contexto académico, no un servicio comercial contratado.

## El punto de partida

Una persona necesitaba crear un juego de pistas y acertijos, al estilo de un *escape room*, para una asignatura de su máster. Además de diseñarlo, debía **publicarlo para que otras personas pudieran jugar mediante un enlace**, desde distintos dispositivos.

El reto no era desarrollar software desde cero. Había que seleccionar una herramienta adecuada, organizar las pruebas, configurar las interacciones y conseguir que el resultado funcionara.

## La elección de Genially

Un formulario con preguntas encadenadas habría servido, pero el resultado sería un cuestionario, no un *escape room*.

Elegimos **Genially** por sus posibilidades para crear una experiencia visual e interactiva y compartirla en Internet. Esa decisión resolvía la parte de presentación y publicación, pero planteaba otro problema: el tiempo necesario para montar pantallas, objetos, pistas y enlaces entre elementos.

## El problema del montaje

Una vez diseñadas las pruebas, trasladarlas a Genially exigía repetir operaciones de configuración. Analizamos distintas vías para evitar que la persona tuviera que realizar todo ese trabajo manualmente:

- **API de la aplicación.** Se descartó porque no disponíamos de acceso a esa vía de integración con la cuenta gratuita utilizada.
- **Cookies o tokens de sesión.** Se descartó recurrir a una automatización que gestionase manualmente esos datos: podían caducar y suponían riesgos de seguridad.
- **Playwright.** Permitía automatizar el navegador, pero introducir programación y mantenimiento era excesivo para una actividad puntual y para el nivel técnico de la persona.

La solución elegida fue **Claude en Chrome**. En lugar de desarrollar una integración, utilizamos un asistente de IA capaz de operar sobre el navegador con una sesión ya iniciada y autorizada, para ayudar con las tareas repetitivas de montaje.

La decisión no consistió en buscar la tecnología más sofisticada, sino la que permitía avanzar sin trasladar a la persona una complejidad técnica innecesaria.

## El acompañamiento realizado

1. **Definir la experiencia.** Aclaramos el objetivo del trabajo y la estructura del juego.
2. **Seleccionar la plataforma.** Elegimos Genially teniendo en cuenta la interactividad y la publicación del resultado.
3. **Preparar las pruebas.** Utilizamos IA como apoyo para estructurar y elaborar el contenido.
4. **Resolver la configuración.** Evaluamos alternativas de automatización y utilizamos Claude en Chrome como apoyo al montaje en el navegador.
5. **Probar el resultado.** Comprobamos el funcionamiento del juego y su disponibilidad para los participantes.

## El resultado

**Se creó un escape room funcional con Genially, se probó y se publicó para su acceso mediante un enlace.** La intervención combinó decisiones sobre la plataforma, elaboración del contenido y ayuda de IA en las tareas de configuración.

No se incluyen cifras de pruebas, horas invertidas ni un reparto detallado de tareas entre la persona y el asistente porque todavía no están documentados aquí.

## ¿Qué aporta el acompañamiento tecnológico?

La ayuda no consistió simplemente en recomendar una aplicación. Consistió en comprender el objetivo, comparar alternativas, descartar caminos desproporcionados y acompañar a una persona hasta conseguir una experiencia que funcionara.

## Más allá de un escape room

El mismo criterio sirve para preparar materiales formativos, presentaciones interactivas o actividades digitales: aprovechar las herramientas existentes y utilizar la IA cuando simplifica el trabajo, sin convertir una necesidad puntual en un proyecto de desarrollo a medida.
