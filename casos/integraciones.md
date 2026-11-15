---
layout: case
title: Integraciones de terceros sin acoplar el negocio
summary: Diseñar una frontera entre el dominio de negocio y los contratos y procesos de proveedores externos.
permalink: /casos/integraciones/
---

## Contexto y problema

Una plataforma empresarial puede necesitar distintos proveedores de firma, comunicaciones, facturación o pagos. Cada proveedor introduce contratos, flujos, respuestas y mecanismos de notificación propios.

Trasladar esas particularidades al núcleo de negocio dificulta mantener las integraciones y cambiar de proveedor sin afectar a otros componentes.

## Mi responsabilidad

Me ocupé del diseño arquitectónico, la definición de contratos y la supervisión técnica, con participación directa en determinadas implementaciones.

## Decisiones arquitectónicas

El diseño utiliza **adaptadores y una capa anticorrupción** (*Anti-Corruption Layer*) para separar el lenguaje y los contratos de los proveedores del modelo de negocio interno.

La separación no se limita a transformar formatos de datos: también contempla las diferencias en operaciones, resultados y flujos de comunicación.

Se distinguen dos direcciones de integración: las llamadas salientes a APIs externas y la recepción de *callbacks* que se traducen en notificaciones internas. Así, los mecanismos específicos de un proveedor quedan en la frontera de integración y no se trasladan directamente al dominio.

## Solución adoptada

La arquitectura define contratos de integración y adaptadores responsables de traducir las operaciones y los resultados de cada proveedor a los conceptos del dominio. Para las comunicaciones entrantes, contempla la transformación de *callbacks* en notificaciones internas.

Este enfoque se ha abordado en ámbitos de firma, comunicaciones, facturación y pagos.

## Capacidades arquitectónicas

La separación facilita que el núcleo de negocio dependa de contratos internos en lugar de hacerlo directamente de las APIs de cada proveedor. Permite abordar la incorporación o sustitución de proveedores concentrando sus diferencias en las integraciones correspondientes.

La independencia de despliegue y pruebas depende de cómo se materialice cada integración. No se atribuyen a este diseño reducciones de coste o tiempo que no estén documentadas.

## Criterio aplicado

Abstraer las diferencias relevantes de los proveedores, incluidos sus flujos y contratos, sin presentar la abstracción como una garantía automática de sustitución sin esfuerzo.
