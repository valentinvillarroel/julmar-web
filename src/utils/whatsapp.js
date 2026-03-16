export const formatWhatsAppMessage = (formData) => {
    const { name, rut, phone, email, equipment, duration, location, details } = formData;

    return `*SOLICITUD DE COTIZACIÓN WEB*
*JulMar SpA - Respaldo en Faena*

👤 *Cliente:* ${name}
🆔 *RUT:* ${rut || 'No especificado'}
🚜 *Equipo:* ${equipment || 'No especificado'}
📍 *Ubicación:* ${location || 'No especificado'}
⏱ *Duración:* ${duration || 'No especificado'}
📞 *Teléfono:* ${phone}
✉️ *Email:* ${email || 'No especificado'}
📝 *Detalles:* ${details || 'Sin detalles adicionales'}

---
_Enviado desde el portal oficial julmar.cl_`;
};

export const generateWhatsAppLink = (phone, message) => {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
