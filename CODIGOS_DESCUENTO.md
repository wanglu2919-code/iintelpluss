# 💰 SISTEMA DE CÓDIGOS DE DESCUENTO

## ✅ Sistema Implementado y Funcionando

Tu sitio web ahora tiene un sistema completo de códigos de descuento que **reduce la instalación a $100** en todos los planes.

## 🆕 ACTUALIZACIÓN: Solo TUS Códigos Funcionan

**Cambio importante:** Ahora **SOLO los códigos que TÚ agregues** funcionarán. Si un cliente inventa un código random, **NO funcionará**.

- ✅ Código que TÚ agregaste: `MARIA2026` → **FUNCIONA**
- ❌ Código random del cliente: `RANDOM123` → **NO FUNCIONA**

**Ver:** `COMO_AGREGAR_CODIGOS.md` para instrucciones completas.

---

## 🎟️ CÓDIGOS ACTIVOS

Estos 7 códigos están activos y funcionando:

```
PROMO100     → Instalación a $100
BIENVENIDO   → Instalación a $100
FACEBOOK     → Instalación a $100
VECINO       → Instalación a $100
REFERIDO     → Instalación a $100
VIP          → Instalación a $100
ESPECIAL     → Instalación a $100
```

**Todos reducen la instalación a $100**, pero el ahorro varía según el plan:

| Plan         | Precio Original | Con Código | Ahorro  |
|--------------|----------------|------------|---------|
| Plan Básico  | $120           | $100       | **$20** |
| Plan Premium | $135           | $100       | **$35** |
| Plan Ultra   | $150           | $100       | **$50** |

---

## 📱 CÓMO FUNCIONA

### Para el Cliente:

1. **Selecciona un plan** → Click en "Agendar Instalación"
2. **Llena el formulario** (nombre, teléfono, dirección, fecha, hora)
3. **Ve el campo:** "✨ ¿Tienes un código de descuento? (Opcional)"
4. **Escribe el código** (ej: PROMO100)
5. **Click en "Aplicar"**
6. **⏳ LOADING 4 SEGUNDOS:** Ve "Validando..." con spinner animado
7. **Resultado:**
   - ✅ "¡Código válido! Ahorraste $XX en la instalación 💰"
   - ❌ "Código inválido. Verifica e intenta de nuevo."
   - Muestra: "Precio original: $XXX → Nuevo precio: $100"

### En la Confirmación:

Después de agendar, el cliente ve:
- ✅ Su número de confirmación
- ✅ Detalles del plan
- ✅ **Sección especial de descuento:**
  - "¡Descuento Aplicado!"
  - Código usado: PROMO100
  - Ahorraste: $35 💰

---

## 📬 LO QUE RECIBES POR TELEGRAM

Cuando un cliente agenda **CON código**, recibes:

```
🔔 Nueva Cita Agendada - Intel Plus

👤 Nombre: Juan Pérez
📞 Teléfono: (425) 123-4567
📍 Dirección: 123 Main St, Seattle
📅 Fecha: 2026-05-01
⏰ Hora: 10:00-12:00

📦 PLAN SELECCIONADO:
• Plan: Plan Premium
• Precio: $40/mes
• Internet: Internet Ilimitado
• TV: 300+ Canales Premium HD
• Instalación: $135

💰 DESCUENTO APLICADO:
• Código: PROMO100
• Descuento: $35
• Instalación original: $135
• Instalación final: $100

✅ Cliente confirmado vía web
```

---

## 🎯 CÓMO USAR LOS CÓDIGOS

### Códigos Públicos (Para compartir en redes):
```
BIENVENIDO - "¡Primera instalación? Usa código BIENVENIDO"
FACEBOOK   - "Síguenos en Facebook y usa código FACEBOOK"
```

### Códigos VIP (Para negociar por WhatsApp):
```
Cliente: "Está muy caro"
Tú: "Te doy un código especial: VIP"
Cliente usa VIP → Ahorra $35-$50 según plan
```

### Códigos Estratégicos:
```
VECINO     - "¿Te recomendó un vecino? Código VECINO"
REFERIDO   - "Código REFERIDO para clientes referidos"
ESPECIAL   - "Oferta especial del mes"
```

---

## ⚙️ CÓMO AGREGAR/QUITAR CÓDIGOS

Si quieres cambiar los códigos más adelante, busca en el archivo:
`src/app/pages/Home.tsx`

Línea 95:
```javascript
const validCodes = ["PROMO100", "BIENVENIDO", "FACEBOOK", "VECINO", "REFERIDO", "VIP", "ESPECIAL"];
```

**Para agregar un código nuevo:**
```javascript
const validCodes = ["PROMO100", "BIENVENIDO", "FACEBOOK", "VECINO", "REFERIDO", "VIP", "ESPECIAL", "NUEVO"];
```

**Para quitar un código:**
```javascript
const validCodes = ["PROMO100", "BIENVENIDO", "FACEBOOK"]; // Solo estos 3
```

Luego subes los cambios a GitHub y Vercel actualiza automáticamente.

---

## 📊 VENTAJAS DEL SISTEMA

✅ **Cierra más ventas** - Código de descuento hace que el cliente se sienta especial  
✅ **Control total** - Tú decides qué códigos están activos  
✅ **Tracking** - Sabes qué código usó cada cliente  
✅ **Flexible** - Puedes dar códigos personalizados  
✅ **Profesional** - Validación instantánea como Amazon  
✅ **No se puede abusar** - Instalación siempre queda en $100, nunca menos  

---

## ⚠️ IMPORTANTE

- **NO BAJES DE $100** - El código siempre deja instalación en $100
- **Códigos en mayúsculas** - PROMO100 ✅ / promo100 ❌
- **Sin espacios** - PROMO100 ✅ / PROMO 100 ❌
- **Cliente puede ver códigos inválidos** - Si escribe mal, le dice "Código inválido"

---

## 🚀 PRÓXIMOS PASOS

Espera 2-3 minutos y los códigos estarán funcionando en:
https://iintelpluss.com

**Pruébalo tú mismo:**
1. Ve a tu sitio
2. Click en "Agendar Instalación" de cualquier plan
3. Llena el formulario
4. Escribe: PROMO100
5. Click "Aplicar"
6. Verás: "¡Código válido! Ahorraste $XX 💰"

¡Ya está listo para usar! 🎉
