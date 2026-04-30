# Cómo Crear la Imagen de Preview para Redes Sociales

## ¿Qué es esto?
Es la imagen que aparece cuando compartes tu enlace en WhatsApp, Facebook, Telegram, etc.

## Especificaciones Técnicas
- **Tamaño:** 1200 x 630 píxeles
- **Formato:** JPG o PNG
- **Nombre del archivo:** `og-preview.jpg`
- **Ubicación:** Carpeta `public/` de tu proyecto

## Opción 1: Crear tu propia imagen (Recomendado)

### Usar Canva (Gratis):
1. Ve a https://www.canva.com
2. Crea un diseño de **1200 x 630 px**
3. Agrega:
   - Logo o nombre "Intel Plus"
   - Texto principal: "Internet y TV Premium"
   - Subtexto: "Planes desde $25/mes | Seattle, WA"
   - Íconos de internet/TV
   - Colores: Azul (#3B82F6) y gradientes
4. Descarga como JPG
5. Renombra el archivo a `og-preview.jpg`

### Usar Figma:
1. Crea un frame de 1200x630px
2. Diseña tu preview con branding de Intel Plus
3. Exporta como JPG

## Opción 2: Usar una foto existente

Puedes usar una de las fotos de instalaciones que ya tienes, pero asegúrate de:
- Redimensionarla a 1200x630px
- Agregar texto encima con el nombre y oferta
- Guardarla como `og-preview.jpg`

## Cómo subirla al sitio

Una vez que tengas tu `og-preview.jpg`:

1. Colócala en la carpeta `public/` de tu proyecto
2. Sube los cambios a GitHub:
   ```bash
   git add public/og-preview.jpg
   git commit -m "Agregar imagen de preview para redes sociales"
   git push origin main
   ```
3. Espera 2-3 minutos a que Vercel actualice

## Cómo probar que funciona

1. **Facebook Debugger:** https://developers.facebook.com/tools/debug/
   - Pega tu URL: https://iintelpluss.com
   - Click en "Scrape Again"
   - Deberías ver tu imagen

2. **WhatsApp:**
   - Envía el enlace a ti mismo
   - La preview debería aparecer en 30 segundos

3. **Twitter Card Validator:** https://cards-dev.twitter.com/validator

## Contenido Sugerido para la Imagen

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         INTEL PLUS
    Internet y TV Premium
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ Hasta 2000 Mbps
📺 300+ Canales Premium  
💰 Desde $25/mes

Seattle • Tacoma • Bellevue
(425) 652-8120
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Nota Importante

Después de subir la imagen, algunas plataformas pueden tardar:
- WhatsApp: 30 segundos - 2 minutos
- Facebook: 5-10 minutos (usa el debugger para forzar actualización)
- Twitter: Instantáneo
