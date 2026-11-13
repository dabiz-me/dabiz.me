---
layout: case
title: REST y eventos para servicios distribuidos
summary: Elegir entre comunicación síncrona y asíncrona atendiendo a las garantías reales de cada operación.
permalink: /casos/rest-eventos/
---

## El problema

En una arquitectura distribuida, resolver todas las interacciones mediante llamadas REST puede generar dependencias síncronas innecesarias. Pasar todo a eventos tampoco resuelve por sí solo los problemas de entrega, duplicación, orden o consistencia.

## La solución

Participé en la definición de los mecanismos de comunicación de diferentes funcionalidades, decidiendo cuándo utilizar REST y cuándo publicar eventos mediante RabbitMQ, así como la organización de exchanges y colas.

Los flujos asíncronos contemplan reintentos, colas de mensajes fallidos (DLQ/DLX), correlación e idempotencia. Para determinadas operaciones se utiliza *Transactional Outbox* con Debezium para coordinar la persistencia y la posterior publicación de eventos.

No se presupone consistencia fuerte en todas las operaciones: las garantías se seleccionan según sus consecuencias de negocio.

## Mi responsabilidad

Decisiones de arquitectura de comunicación por funcionalidad, definición de intercambios y colas, y valoración de compromisos de disponibilidad, consistencia y recuperación.

## Qué permitió

- Reducir dependencias síncronas cuando el proceso admite asincronía.
- Responder antes al solicitante cuando no necesita esperar a todos los consumidores.
- Facilitar recuperación y tratamiento de fallos en los flujos de eventos.
- Incorporar consumidores adicionales sin exigir cambios sustanciales en el productor.

**Criterio aplicado:** no prometer entrega exactamente una vez ni ausencia universal de eventos inconsistentes; diseñar garantías concretas donde aportan valor.
