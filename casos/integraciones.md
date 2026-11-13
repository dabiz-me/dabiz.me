---
layout: case
title: Integraciones de terceros sin acoplar el negocio
summary: Diseñar una frontera estable entre el dominio de negocio y los servicios externos.
permalink: /casos/integraciones/
---

## El problema

Una plataforma empresarial necesita trabajar con distintos proveedores de servicios, cada uno con sus contratos, flujos de comunicación, respuestas y mecanismos de notificación. Acoplar esas particularidades al núcleo de negocio encarece los cambios y dificulta sustituir proveedores.

## La solución

Diseñé una arquitectura de integración basada en adaptadores y una capa anticorrupción (*Anti-Corruption Layer*). Cada integración traduce las operaciones y resultados del proveedor al lenguaje propio del dominio. Se contemplan tanto llamadas salientes a APIs como callbacks entrantes y su transformación en notificaciones internas.

Entre los ámbitos abordados se encuentran servicios de firma, comunicaciones, facturación y pagos.

## Mi responsabilidad

Diseño arquitectónico, definición de contratos y supervisión técnica, además de participación directa en determinadas implementaciones.

## Qué permitió

- Incorporar o sustituir proveedores sin trasladar sus cambios al modelo de negocio.
- Concentrar las diferencias de protocolo y flujo dentro de cada integración.
- Desplegar y probar componentes de integración de forma independiente cuando la arquitectura lo permite.

**Criterio aplicado:** abstraer las diferencias reales de los proveedores, no limitarse a transformar formatos de datos.
