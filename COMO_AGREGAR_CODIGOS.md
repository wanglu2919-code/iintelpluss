# 🎟️ CÓMO AGREGAR TUS PROPIOS CÓDIGOS DE DESCUENTO

## ✅ Sistema Actualizado

Ahora **SOLO los códigos que TÚ agregues funcionarán**. Si un cliente inventa un código random, NO funcionará.

---

## 📝 CÓMO AGREGAR UN CÓDIGO NUEVO

### Paso 1: Abre el archivo
Ve a: `src/app/pages/Home.tsx`

### Paso 2: Busca la línea 93-108
Verás esto:

```javascript
// ========================================
// TUS CÓDIGOS DE DESCUENTO
// ========================================
// SOLO agrega aquí los códigos que TÚ quieres que funcionen
// Ejemplo: Si le das "MARIA2026" a un cliente, agrégalo aquí
// Si el cliente inventa "RANDOM123", NO funcionará porque no está en esta lista

const validCodes = [
  // Códigos que YA están activos:
  "PROMO100",
  "BIENVENIDO",
  "FACEBOOK",
  "VECINO",
  "REFERIDO",
  "VIP",
  "ESPECIAL",

  // Agrega tus nuevos códigos aquí:
  // "MARIA2026",
  // "JUAN50",
  // "DESCUENTO40",
];
```

### Paso 3: Agrega tu código
Borra los `//` y agrega tu código:

**ANTES:**
```javascript
  // "MARIA2026",
];
```

**DESPUÉS:**
```javascript
  "MARIA2026",
];
```

### Paso 4: Guarda y sube
```bash
git add src/app/pages/Home.tsx
git commit -m "Agregar código MARIA2026"
git push origin main
```

---

## 📋 EJEMPLOS COMPLETOS

### Ejemplo 1: Agregar 1 código nuevo
```javascript
const validCodes = [
  "PROMO100",
  "BIENVENIDO",
  "FACEBOOK",
  "VECINO",
  "REFERIDO",
  "VIP",
  "ESPECIAL",
  "MARIA2026",        // ← NUEVO CÓDIGO
];
```

### Ejemplo 2: Agregar varios códigos
```javascript
const validCodes = [
  "PROMO100",
  "BIENVENIDO",
  "FACEBOOK",
  "VECINO",
  "REFERIDO",
  "VIP",
  "ESPECIAL",
  "MARIA2026",        // Para María
  "JUAN50",           // Para Juan
  "CARLOS100",        // Para Carlos
  "DESCUENTO40",      // Código genérico
];
```

### Ejemplo 3: Eliminar códigos viejos
```javascript
const validCodes = [
  "PROMO100",
  "VIP",
  "ESPECIAL",
  // Eliminé: BIENVENIDO, FACEBOOK, VECINO, REFERIDO
];
```

---

## ⚙️ NUEVA FUNCIONALIDAD: LOADING DE 4 SEGUNDOS

Cuando el cliente hace clic en **"Aplicar"**, ahora:

1. ⏳ **Botón cambia a "Validando..."** con spinner
2. ⏳ **Espera 4 segundos**
3. ✅ **Muestra resultado:** "Código válido" o "Código inválido"

Esto hace que se vea más profesional y real.

---

## ❓ PREGUNTAS FRECUENTES

### ¿Puedo crear códigos con números?
✅ Sí: `CODIGO2026`, `PROMO50`, `DESC100`

### ¿Puedo crear códigos con guiones o espacios?
❌ NO uses guiones o espacios: `PROMO-100` ❌ / `PROMO 100` ❌
✅ Usa solo letras y números: `PROMO100` ✅

### ¿Los códigos son case-sensitive?
✅ SÍ - El código se convierte automáticamente a MAYÚSCULAS
- Cliente escribe: `promo100` → Se convierte a: `PROMO100`
- Cliente escribe: `PrOmO100` → Se convierte a: `PROMO100`

### ¿Cuántos códigos puedo tener?
✅ Todos los que quieras. No hay límite.

### ¿Puedo dar el mismo código a varios clientes?
✅ SÍ - El mismo código puede usarse múltiples veces

### ¿Puedo rastrear quién usó qué código?
✅ SÍ - Te llega por Telegram en cada cita agendada

---

## 🚀 FLUJO COMPLETO

### TÚ:
1. Cliente te escribe: "Está muy caro"
2. Le das un código personalizado: "Te doy código especial: MARIA2026"
3. Agregas `"MARIA2026"` al archivo
4. Subes los cambios a GitHub
5. En 2-3 minutos está activo

### CLIENTE:
1. Va a tu sitio web
2. Agenda instalación
3. Escribe: `MARIA2026`
4. Click "Aplicar"
5. ⏳ Ve "Validando..." 4 segundos
6. ✅ Ve: "¡Código válido! Ahorraste $35 💰"

### TÚ (RECIBES):
```
💰 DESCUENTO APLICADO:
• Código: MARIA2026
• Descuento: $35
• Instalación original: $135
• Instalación final: $100
```

---

## ⚠️ IMPORTANTE

### ✅ LO QUE SÍ FUNCIONA:
- `"PROMO100"` ← Está en la lista
- `"MARIA2026"` ← Está en la lista
- `"VIP"` ← Está en la lista

### ❌ LO QUE NO FUNCIONA:
- `"RANDOM123"` ← NO está en la lista
- `"DESCUENTO"` ← NO está en la lista
- `"ABC"` ← NO está en la lista

Solo los códigos que **TÚ agregues manualmente** en el archivo funcionarán.

---

## 🎯 RESUMEN

1. **Abre:** `src/app/pages/Home.tsx`
2. **Ve a línea 93**
3. **Agrega tu código:** `"TUCODIGO",`
4. **Guarda y sube a GitHub**
5. **Espera 2-3 minutos**
6. **¡Listo!** Tu código funciona

¡Así de fácil! 🚀
