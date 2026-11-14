---
layout: case
title: Identidad y autorización multitenant
summary: Unificar la identidad de usuario y separar la autenticación, el contexto de negocio y los permisos.
permalink: /casos/identidad-multitenant/
---

## El problema

La solución anterior utilizaba múltiples dominios de identidad por negocio, junto con un servicio monolítico que concentraba responsabilidades de clientes y usuarios. El cambio entre negocios y la configuración de seguridad resultaban difíciles de mantener y evolucionar.

## La solución

Diseñé una nueva arquitectura de seguridad, con una identidad de usuario única y pertenencia a múltiples negocios. El contexto de negocio se expresa en los tokens; para cambiarlo se utiliza un flujo de *token exchange* con comprobación de pertenencia y estado del negocio.

La solución separa un proveedor de identidad basado en Spring Authorization Server, un servicio de roles, permisos y *scopes*, y los servicios de recursos que validan los tokens. Una biblioteca compartida de control de acceso permite declarar y aplicar restricciones de forma consistente, incluidas comprobaciones de contexto en peticiones.

## Mi responsabilidad

Autoría y diseño integral de la nueva arquitectura de seguridad. La migración se planteó como un rediseño completo de este ámbito, no como una adaptación incremental del modelo anterior.

## Qué permitió

- Sustituir el monolito anterior de gestión de clientes y usuarios.
- Trabajar con identidades unificadas y pertenencias a múltiples negocios.
- Separar responsabilidades de identidad, concesión de permisos y aplicación del control de acceso.
- Hacer explícitas las comprobaciones de contexto de negocio en las operaciones.

**Criterio aplicado:** centralizar las reglas comunes sin ocultar las comprobaciones de autorización que debe realizar cada servicio.
