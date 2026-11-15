---
layout: case
title: Identidad y autorización multitenant
summary: Unificar la identidad de usuario sin confundir autenticación, pertenencia a negocios y autorización sobre recursos.
permalink: /casos/identidad-multitenant/
---

## Contexto y problema

La solución anterior utilizaba múltiples dominios de identidad por negocio y un servicio monolítico que concentraba responsabilidades de clientes y usuarios. El cambio entre negocios y la configuración de seguridad resultaban difíciles de mantener y evolucionar.

El rediseño abordó la relación entre una identidad de usuario única, su pertenencia a varios negocios y los permisos aplicables en cada contexto.

## Mi responsabilidad

Asumí la autoría y el diseño integral de la nueva arquitectura de seguridad. La migración se planteó como un rediseño de este ámbito, en lugar de una adaptación incremental del modelo anterior.

## Decisiones arquitectónicas

La decisión central fue **separar identidad, contexto de negocio y autorización**. Una misma identidad puede pertenecer a varios negocios, sin que esa pertenencia equivalga por sí sola a disponer de todos sus permisos.

Para expresar un cambio de contexto de negocio se diseñó un flujo de *token exchange* que comprueba la pertenencia del usuario y el estado del negocio. La comprobación del contexto no sustituye las restricciones de acceso que deben aplicar los servicios de recursos.

También se separaron las responsabilidades de emisión de tokens, gestión de roles, permisos y *scopes*, y validación de acceso a recursos. El criterio fue centralizar mecanismos comunes sin ocultar las decisiones de autorización propias de cada servicio.

## Solución diseñada

La arquitectura descrita comprende un proveedor de identidad basado en Spring Authorization Server, un servicio de roles, permisos y *scopes*, y servicios de recursos que validan tokens.

Una biblioteca compartida de control de acceso permite declarar y aplicar restricciones de forma consistente, incluidas comprobaciones del contexto de negocio durante las peticiones.

## Capacidades del diseño

Este planteamiento define una vía para sustituir las responsabilidades concentradas en el servicio monolítico anterior y trabajar con identidades unificadas y pertenencias a múltiples negocios. Asimismo, delimita las responsabilidades de identidad, gestión de permisos y aplicación del control de acceso.

Estas son **capacidades y objetivos de la arquitectura descrita**, no métricas de mejora ni una confirmación del estado final de la migración.

## Criterio aplicado

Unificar la identidad no implica unificar indiscriminadamente los permisos: el contexto de negocio y la autorización sobre cada recurso deben seguir siendo explícitos.
