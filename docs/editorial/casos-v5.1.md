# V5.1 — Registro editorial interno de casos profesionales

> **Documento interno de trabajo, no publicado como página Jekyll.** Contiene hipótesis, incertidumbres y preguntas; no constituye una fuente que confirme respuestas.

## Política y trazabilidad

- **Fuente primaria:** los archivos originales en `master` antes de V5.1: `casos/identidad-multitenant.md`, `casos/integraciones.md` y `casos/rest-eventos.md`.
- **Fuente de organización (propuesta editorial):** especificación V5.1, secciones 4–8. La tesis y los ejes narrativos ordenan la información, pero no acreditan hechos nuevos.
- La presencia de una afirmación en el caso original **no demuestra por sí misma** su implantación en producción, el alcance de la participación individual ni sus resultados. Cuando importa, se registra como **Por verificar**.
- Estados permitidos: Pendiente, Por verificar, Confirmado, Descartado. **Confirmado** exige un dato o evidencia específica que todavía debe aportarse; no se utiliza como sinónimo de «aparece en el texto anterior».
- Prioridades: Alta = esencial para la tesis o la precisión de una afirmación; Media = profundidad técnica; Baja = complementaria.
- Las páginas públicas V5.1 evitan placeholders; una ausencia de evidencia se resuelve mediante redacción acotada u omisión de la sección.
- **No añadir aquí datos de producción, clientes, diagramas internos, credenciales ni configuraciones confidenciales.** Las respuestas pueden anonimizarse.

## 1. Identidad y autorización multitenant

**Estado editorial:** estructura narrativa establecida; profundidad arquitectónica parcial; implementación, migración y resultados sin evidencia independiente.

**Tesis (propuesta editorial):** unificar la identidad sin confundir autenticación, pertenencia a organizaciones y autorización sobre recursos.

**Contenido anterior aprovechado:** dominios de identidad por negocio; servicio monolítico; rediseño integral; identidad única y pertenencias; *token exchange*; pertenencia y estado de negocio; Spring Authorization Server; roles, permisos y *scopes*; *resource servers*; biblioteca compartida de acceso. **Origen:** `casos/identidad-multitenant.md` en `master`.

**Decisiones editoriales:** separar problema, responsabilidad, decisiones, diseño y capacidades. Se ha reformulado «sustituir el monolito» como objetivo/capacidad de la arquitectura, no como migración completada. No se han añadido alternativas evaluadas ni métricas.

**Afirmaciones que requieren verificación:** estado de implantación de los componentes; alcance real de la migración; garantías y semántica de *token exchange*; modelo efectivo de roles, permisos y *scopes*; atribución precisa de la autoría.

| ID | Sección | Pregunta o información pendiente | Prioridad | Estado |
|---|---|---|---|---|
| ID-01 | Contexto | ¿Qué limitación funcional del esquema anterior motivó el rediseño? | Alta | Pendiente |
| ID-02 | Problema | ¿Qué incidencias o dificultades concretas se observaron al cambiar de negocio? | Alta | Pendiente |
| ID-03 | Responsabilidad | ¿Qué partes diseñaste, implementaste o supervisaste personalmente y cuáles desarrolló el equipo? | Alta | Por verificar |
| ID-04 | Decisiones | ¿Qué datos componen identidad, pertenencia y contexto, y dónde se mantienen? | Alta | Pendiente |
| ID-05 | Decisiones | ¿Qué modalidad de intercambio de tokens se adoptó y qué condiciones se validan en cada paso? | Alta | Por verificar |
| ID-06 | Decisiones | ¿Cómo se distinguen roles, permisos y *scopes* y qué componente resuelve cada uno? | Alta | Pendiente |
| ID-07 | Seguridad | ¿Cómo se gestiona caducidad, revocación y propagación de cambios de permisos o pertenencia? | Alta | Pendiente |
| ID-08 | Solución | ¿Qué responsabilidades de autorización pertenecen al IdP, a la biblioteca y a cada *resource server*? | Alta | Pendiente |
| ID-09 | Implementación | ¿Qué componentes están implementados, desplegados o aún diseñados? | Alta | Por verificar |
| ID-10 | Migración | ¿Se ha sustituido realmente el monolito anterior? ¿Qué partes permanecen? | Alta | Por verificar |
| ID-11 | Compromisos | ¿Qué costes de complejidad, mantenimiento o seguridad se aceptaron? | Media | Pendiente |
| ID-12 | Resultados | ¿Qué efectos observables pueden demostrarse sin revelar datos confidenciales? | Alta | Pendiente |
| ID-13 | Alternativas | ¿Se consideraron alternativas documentadas al diseño finalmente escogido? | Baja | Pendiente |

**Próxima conversación (V5.2):** comenzar por ID-01, ID-03, ID-05, ID-08, ID-09 e ID-10. No completar el resto por inferencia.

## 2. Integraciones de terceros

**Estado editorial:** estructura establecida; falta ejemplo representativo, evidencia de resultados y límites operativos.

**Tesis (propuesta editorial):** evitar que las particularidades de proveedores externos contaminen el modelo de negocio.

**Contenido anterior aprovechado:** adaptadores, *Anti-Corruption Layer*, contratos, llamadas a APIs, *callbacks*, notificaciones internas, firma/comunicaciones/facturación/pagos, responsabilidad de diseño, supervisión y algunas implementaciones. **Origen:** `casos/integraciones.md` en `master`.

**Decisiones editoriales:** distinguir problema de dependencia, frontera de integración y capacidades de evolución. Se ha evitado afirmar cambios de proveedor realizados o reducciones de coste. La expresión «desplegar y probar de forma independiente» queda condicionada a cada arquitectura concreta.

**Afirmaciones que requieren verificación:** casos concretos de implantación, gestión de fallos, grado de aislamiento efectivo, participación individual y beneficios observados.

| ID | Sección | Pregunta o información pendiente | Prioridad | Estado |
|---|---|---|---|---|
| INT-01 | Contexto | ¿Qué integración real y anonimizable permite ilustrar el caso? | Alta | Pendiente |
| INT-02 | Problema | ¿Qué problema concreto provocó introducir la frontera de integración? | Alta | Pendiente |
| INT-03 | Responsabilidad | ¿Qué contratos, adaptadores y supervisiones fueron responsabilidad directa? | Alta | Por verificar |
| INT-04 | Decisiones | ¿Qué contratos internos se definieron y qué invariantes mantienen? | Alta | Pendiente |
| INT-05 | Solución | ¿Cómo se transforman operaciones salientes, errores y notificaciones entrantes? | Alta | Pendiente |
| INT-06 | Integración | ¿Qué comunicaciones son síncronas y cuáles asíncronas? | Media | Pendiente |
| INT-07 | Errores | ¿Cómo se tratan timeouts, fallos temporales y rechazos definitivos? | Media | Pendiente |
| INT-08 | Pruebas | ¿Qué pruebas de contratos, integración y callbacks se aplicaron? | Media | Pendiente |
| INT-09 | Evolución | ¿Cómo se detectan y gestionan cambios de API o contratos externos? | Media | Pendiente |
| INT-10 | Observabilidad | ¿Qué trazabilidad se implementó entre peticiones y callbacks? | Media | Pendiente |
| INT-11 | Resultados | ¿Se introdujo o sustituyó algún proveedor? ¿Qué efectos pueden acreditarse? | Alta | Por verificar |
| INT-12 | Compromisos | ¿Qué mantenimiento añadido introducen los adaptadores y las abstracciones? | Media | Pendiente |

## 3. REST y eventos para servicios distribuidos

**Estado editorial:** estructura establecida; garantías y alcance operativo pendientes de precisión.

**Tesis (propuesta editorial):** elegir entre sincronía y asincronía según garantías, consecuencias de fallo y compromisos aceptados.

**Contenido anterior aprovechado:** REST, RabbitMQ, *exchanges*, colas, reintentos, DLQ/DLX, correlación, idempotencia, *Transactional Outbox*, Debezium y criterios por operación. **Origen:** `casos/rest-eventos.md` en `master`.

**Decisiones editoriales:** relacionar mecanismos con clases de fallo, sin presentar asincronía como solución universal. Se ha conservado «para determinadas operaciones» al referirse a Outbox/Debezium; no se presupone uso generalizado ni semántica *exactly once*.

**Afirmaciones que requieren verificación:** flujos efectivos, política real de reintentos, persistencia/publicación, manejo de duplicados, alcance de Debezium, incidencias y resultados.

| ID | Sección | Pregunta o información pendiente | Prioridad | Estado |
|---|---|---|---|---|
| EVT-01 | Contexto | ¿Qué flujo funcional real y anonimizado representa el problema? | Alta | Pendiente |
| EVT-02 | Problema | ¿Qué dependencia síncrona o fallo concreto motivó el cambio? | Alta | Pendiente |
| EVT-03 | Responsabilidad | ¿Qué decisiones, configuraciones e implementaciones fueron personales o del equipo? | Alta | Por verificar |
| EVT-04 | Decisiones | ¿Qué criterios exactos determinaron usar REST o eventos en ese flujo? | Alta | Pendiente |
| EVT-05 | Topología | ¿Qué rol cumplen los *exchanges*, las colas y los consumidores en el ejemplo? | Media | Pendiente |
| EVT-06 | Entrega | ¿Qué garantías de publicación, confirmación, consumo y reconocimiento están implantadas? | Alta | Por verificar |
| EVT-07 | Reintentos | ¿Qué política de reintentos y destino definitivo de mensajes fallidos existe? | Alta | Pendiente |
| EVT-08 | Idempotencia | ¿Cómo se identifica y trata un duplicado, y qué operaciones son idempotentes? | Alta | Pendiente |
| EVT-09 | Correlación | ¿Cómo se correlacionan mensajes y operaciones a través de los servicios? | Media | Pendiente |
| EVT-10 | Consistencia | ¿Qué ocurre si se confirma la persistencia pero falla la publicación? | Alta | Pendiente |
| EVT-11 | Outbox/CDC | ¿En qué flujos se utiliza realmente Outbox con Debezium, con qué límites y despliegue? | Alta | Por verificar |
| EVT-12 | Recuperación | ¿Qué procedimientos de recuperación o reproceso están disponibles? | Media | Pendiente |
| EVT-13 | Operación | ¿Qué problemas se observaron en producción y qué decisiones cambiaron? | Media | Pendiente |
| EVT-14 | Resultados | ¿Qué resultados operativos o funcionales están documentados? | Alta | Pendiente |

## Decisiones transversales abiertas

| ID | Sección | Pregunta o información pendiente | Prioridad | Estado |
|---|---|---|---|---|
| GEN-01 | Confidencialidad | ¿Qué nivel de detalle técnico puede publicarse por caso sin exponer información restringida? | Alta | Pendiente |
| GEN-02 | Evidencia | ¿Qué registros no sensibles, documentación autorizada o testimonios pueden respaldar resultados? | Alta | Pendiente |
| GEN-03 | Presentación | ¿Qué secciones conviene ampliar solo después de disponer de ejemplos reales y comprobables? | Media | Pendiente |

## Verificación técnica V5.1

- Markdown con front matter y permalinks preservados; tarjetas y layout sin modificaciones.
- `docs/editorial/` excluido de la compilación del sitio en `_config.yml`. **Nota:** la exclusión evita su publicación en Jekyll, pero el documento sigue siendo accesible a quienes puedan leer el repositorio. No almacenar aquí secretos.
- No se añaden diagramas, métricas, ni dependencias.
- **Pendiente de ejecutar fuera del conector GitHub:** `bundle exec jekyll build`, inspección de `_site`, navegación y revisión visual responsive en navegador. No dar estas pruebas por superadas sin ejecutarlas.
