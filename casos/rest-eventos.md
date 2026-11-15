---
layout: case
title: REST y eventos para servicios distribuidos
summary: Elegir comunicación síncrona o asíncrona según las garantías y consecuencias de cada operación.
permalink: /casos/rest-eventos/
---

## Contexto y problema

En una arquitectura distribuida, resolver todas las interacciones mediante llamadas REST puede generar dependencias síncronas innecesarias. Sustituir todas las llamadas por eventos tampoco elimina los problemas de entrega, duplicación, orden o consistencia.

La decisión relevante consiste en determinar qué necesita cada operación y qué fallos deben tratarse.

## Mi responsabilidad

Participé en las decisiones de arquitectura de comunicación por funcionalidad, en la definición de *exchanges* y colas y en la valoración de compromisos de disponibilidad, consistencia y recuperación.

## Decisiones arquitectónicas

Se seleccionaron mecanismos de comunicación según las necesidades de cada funcionalidad: **REST cuando la interacción requiere una respuesta síncrona**, y eventos mediante RabbitMQ cuando el proceso admite asincronía.

El diseño de los flujos asíncronos contempla reintentos, colas de mensajes fallidos (DLQ/DLX), correlación e idempotencia. Estas medidas responden a problemas diferentes: los reintentos no evitan por sí mismos los duplicados y una cola de mensajes fallidos no garantiza por sí sola la recuperación.

Para determinadas operaciones, el diseño descrito utiliza *Transactional Outbox* con Debezium para relacionar persistencia y publicación posterior de eventos. No se presupone consistencia fuerte en todas las interacciones.

## Solución adoptada

La solución combina llamadas REST con flujos de eventos sobre RabbitMQ, organizados mediante *exchanges* y colas. Incluye mecanismos de tratamiento de fallos y seguimiento de las operaciones asíncronas.

En las operaciones que lo requieren se recurre a *Transactional Outbox* y Debezium; su ámbito exacto y sus garantías operativas deberán contrastarse antes de describirlos con mayor detalle.

## Capacidades arquitectónicas

Los eventos permiten reducir dependencias síncronas cuando el proceso admite asincronía y separar la respuesta al solicitante del trabajo posterior de otros consumidores. La correlación, la idempotencia y las rutas de mensajes fallidos proporcionan mecanismos para abordar fallos en esos flujos.

Son capacidades del planteamiento, no pruebas de una reducción medida de latencia, de recuperación automática universal ni de entrega exactamente una vez.

## Compromisos y criterio aplicado

La asincronía introduce responsabilidades de recuperación y consistencia que no desaparecen por incorporar un intermediario de mensajería. El criterio fue elegir garantías para cada operación según sus consecuencias de negocio, sin considerar la comunicación por eventos superior por definición.
