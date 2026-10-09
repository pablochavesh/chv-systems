# CHV SYSTEMS — Premium Loader

Pantalla de carga circular de marca. Un solo archivo JS sin dependencias: inyecta su propio CSS, HTML y fuentes.

## Instalación en cualquier web

1. Copiá `chv-loader.js` al proyecto (por ejemplo, en `assets/`).
2. Pegá esta línea **justo después de `<body>`**:

```html
<script src="assets/chv-loader.js"></script>
```

Listo. El loader aparece al instante, sigue la carga real de la página (con una duración mínima para que la animación luzca) y sale con una cortina hacia arriba.

### Sin copiar archivos (desde la web oficial)

Si `chv-loader.js` está publicado en el dominio de CHV SYSTEMS, cualquier demo puede cargarlo directo:

```html
<script src="https://TU-DOMINIO/assets/chv-loader/chv-loader.js"></script>
```

## Activar / desactivar

- **En el código:** cambiá `data-enabled="true"` por `data-enabled="false"`.
- **Desde la URL, sin tocar código:** agregá `?loader=off` para apagarlo o `?loader=on` para forzarlo (por ejemplo `https://mi-cliente.com/?loader=off`). La URL manda sobre el atributo.

Con el loader apagado, `CHVLoader.onReveal` y `CHVLoader.onDone` se ejecutan de inmediato, así que las animaciones de la página funcionan igual.

## Opciones

```html
<script src="chv-loader.js"
        data-brand="CHV SYSTEMS"
        data-tagline="Web Design & Development"
        data-min="2400"
        data-max="9000"
        data-once="session"></script>
```

| Atributo | Por defecto | Qué hace |
|---|---|---|
| `data-enabled` | `true` | `false` apaga el loader. |
| `data-brand` | `CHV SYSTEMS` | Texto principal. La última palabra lleva el degradado. |
| `data-tagline` | `Web Design & Development` | Texto secundario. |
| `data-min` | `2400` | Duración mínima en ms. |
| `data-max` | `9000` | Tiempo máximo: si algo tarda más, el loader sale igual. |
| `data-once` | — | `session` = solo se muestra la primera visita de la sesión. |

## Sincronizar las animaciones de la página

```js
// Cuando la cortina empieza a subir (ideal para animar el hero)
CHVLoader.onReveal(() => heroTimeline.play());

// Cuando el loader se eliminó del DOM
CHVLoader.onDone(() => console.log('listo'));

// También como eventos: 'chv:loader-reveal' y 'chv:loader-done'
// Forzar la salida: CHVLoader.finish()
```

Respeta `prefers-reduced-motion`: con esa preferencia la animación se reduce a un fundido corto.
