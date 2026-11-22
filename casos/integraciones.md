---
layout: case
title: "Evolución arquitectónica: separar el negocio de las integraciones externas"
summary: "Cómo la experiencia con estructuras monolíticas orientó una frontera de microservicios para desacoplar los procesos funcionales de las particularidades de comunicación de las entidades financieras."
permalink: /casos/integraciones/
---

## De la experiencia previa a una decisión arquitectónica

En estructuras monolíticas anteriores, los componentes responsables de ejecutar procesos funcionales también necesitaban conocer las **particularidades conversacionales de los sistemas externos**. El acoplamiento no se limitaba a transformar mensajes: afectaba a cómo iniciar conversaciones, interpretar respuestas y recibir comunicaciones posteriores de las entidades.

Al abordar el refactor de la arquitectura, esa experiencia sirvió para orientar una decisión: separar el procesamiento funcional de la comunicación específica con proveedores externos. **No se trata de aplicar un patrón por sí mismo, sino de evitar reproducir un acoplamiento conocido en la nueva arquitectura.**

<figure class="dabiz-acl-figure">
  <img src="{{ '/assets/diagrams/caso-acl-evolucion.svg' | relative_url }}" alt="Evolución del criterio: experiencia con componentes monolíticos acoplados a conversaciones externas y posterior separación entre servicios funcionales y ACL." loading="lazy" width="980" height="270">
  <figcaption>La experiencia previa fundamentó la separación. El diagrama no implica una migración literal de un monolito concreto.</figcaption>
</figure>

## La solución: ACL como microservicio

La solución distingue **servicios funcionales** —PIS, AIS y Token— de **microservicios Anti-Corruption Layer (ACL)**, especializados en la integración con entidades financieras o proveedores técnicos como un hub bancario.

Las ACL son servicios independientes, no adaptadores incrustados en puertos de salida. La solución descrita no se planteó como una implementación de arquitectura hexagonal.

Cada ACL encapsula el conocimiento del contrato externo y se comunica con sus servicios pares. De esta forma, PIS conserva la gestión funcional de pagos, AIS la de información de cuentas y Token su especialización, sin tener que incorporar a su lógica cada particularidad de la conversación con una entidad.

**La frontera actúa en ambas direcciones:** para iniciar peticiones hacia el exterior y para recibir callbacks o retornos que se originan en los proveedores.

## Dos direcciones de comunicación

### 1. Salida: de los servicios funcionales a los bancos

Una operación funcional requiere comunicarse con una entidad. El servicio responsable se relaciona con la ACL correspondiente; esta adapta la petición al contrato externo y canaliza la comunicación. La respuesta vuelve a través de la misma frontera para que el servicio funcional continúe su proceso.

<figure class="dabiz-acl-figure">
  <img src="{{ '/assets/diagrams/caso-acl-salida.svg' | relative_url }}" alt="Comunicación saliente: PIS, AIS o Token solicitan una operación al microservicio ACL, este comunica con el banco y devuelve la respuesta." loading="lazy" width="980" height="265">
  <figcaption>Salida y respuesta síncrona. Una respuesta inmediata del banco no implica necesariamente que el proceso funcional haya finalizado.</figcaption>
</figure>

**La ACL no decide el resultado de negocio.** Traduce las particularidades de comunicación sin atribuir a la entidad estados o confirmaciones que todavía no ha comunicado.

### 2. Entrada: de los bancos a los servicios funcionales

El otro lado es igual de importante. Algunas comunicaciones se originan en la entidad: callbacks y otros retornos que pertenecen a una conversación iniciada previamente.

En lugar de obligar a PIS, AIS o Token a exponer y comprender los mecanismos propios de cada proveedor, la ACL recibe estas entradas, aplica el tratamiento que exige el contrato externo y comunica la información pertinente al servicio par.

<figure class="dabiz-acl-figure">
  <img src="{{ '/assets/diagrams/caso-acl-entrada.svg' | relative_url }}" alt="Comunicación entrante: el banco emite un callback o retorno, la ACL lo recibe y traduce, y comunica el resultado al servicio funcional correspondiente." loading="lazy" width="980" height="265">
  <figcaption>Entrada externa por la ACL. La correlación, el protocolo interno y los mecanismos de entrega concretos dependen de la implementación.</figcaption>
</figure>

El servicio funcional conserva la responsabilidad de sus transiciones de negocio. En particular, un retorno de navegador o callback no debe interpretarse automáticamente como prueba de ejecución definitiva de un pago.

## Qué responsabilidades separa

| Componente | Responsabilidad principal |
|:--|:--|
| **PIS** | Coordinación y tratamiento funcional de la iniciación y seguimiento de pagos. |
| **AIS** | Procesamiento funcional de la información de cuentas. |
| **Token** | Servicio funcional especializado; su reparto preciso de responsabilidades con las ACL requiere documentación adicional. |
| **ACL** | Comunicación externa, particularidades del proveedor, recepción de callbacks y traducción de las interacciones hacia sus servicios pares. |

Las entidades y proveedores externos conservan la autoridad sobre la información y los estados que comunican. El modelo interno debe preservar esa distinción.

## La contrapartida de esta decisión

Separar la integración en microservicios no hace desaparecer su complejidad; la **concentra en una frontera explícita**. A cambio de evitar que los servicios funcionales dependan directamente de las particularidades de cada proveedor, aparecen costes que deben asumirse conscientemente: más comunicaciones de red, contratos internos, despliegues independientes y necesidades de trazabilidad distribuida.

También hay decisiones técnicas que requieren especial cuidado:

- **Correlación:** relacionar peticiones salientes con respuestas o callbacks posteriores.
- **Idempotencia:** tratar comunicaciones repetidas o tardías sin provocar transiciones o acciones duplicadas.
- **Incertidumbre:** distinguir una respuesta ausente, un error de comunicación y una confirmación real.
- **Observabilidad:** seguir el recorrido de una operación entre el servicio funcional, la ACL y el sistema externo.
- **Evolución de los contratos:** aislar cambios específicos de un proveedor sin fingir que capacidades nuevas nunca afectan al modelo interno.

No se dispone aquí de métricas contrastadas para atribuir a esta decisión reducciones concretas de coste o tiempo.

## El criterio arquitectónico

**La arquitectura del refactor partió del conocimiento adquirido sobre un problema real:** las estructuras anteriores obligaban a los componentes funcionales a conocer demasiado sobre la comunicación con terceros.

La decisión de utilizar ACL independientes expresa una prioridad: permitir que la complejidad conversacional de los proveedores evolucione en componentes especializados, mientras los servicios de negocio conservan sus responsabilidades.

No es una defensa universal de añadir microservicios. Es una elección contextual, fundada en la experiencia y en el coste de los acoplamientos que se quería evitar.

*Nota de alcance: los diagramas representan las responsabilidades y flujos lógicos descritos; no fijan una topología de despliegue por proveedor, protocolos internos ni detalles todavía no contrastados de la implementación.*
