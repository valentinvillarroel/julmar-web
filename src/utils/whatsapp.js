export const formatWhatsAppMessage = (formData) => {
    const { name, rut, phone, email, equipment, duration, location, details } = formData;

    return `*SOLICITUD DE COTIZACIÓN WEB*

👤 *Cliente:* ${name}
🆔 *RUT:* ${rut || 'No especificado'}
🚜 *Equipo:* ${equipment || 'No especificado'}
📍 *Ubicación:* ${location || 'No especificado'}
⏱ *Duración:* ${duration || 'No especificado'}
📞 *Telétono:* ${phone}
✉️ *Email:* ${email || 'No especificado'}
📝 *Detalles:* ${details || 'Sin detalles adicionales'}`;
};

export const generateWhatsAppLink = (phone, message) => {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
