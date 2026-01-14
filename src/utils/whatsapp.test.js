import { describe, it, expect } from 'vitest';
import { formatWhatsAppMessage, generateWhatsAppLink } from './whatsapp';

describe('WhatsApp Utilities', () => {
    describe('formatWhatsAppMessage', () => {
        it('should format message with all fields present', () => {
            const formData = {
                name: 'John Doe',
                rut: '12.345.678-9',
                phone: '+56912345678',
                email: 'john@example.com',
                equipment: 'Excavadora',
                duration: '1 mes',
                location: 'Santiago',
                details: 'Urgente'
            };
            const message = formatWhatsAppMessage(formData);

            expect(message).toContain('👤 *Cliente:* John Doe');
            expect(message).toContain('🆔 *RUT:* 12.345.678-9');
            expect(message).toContain('🚜 *Equipo:* Excavadora');
            expect(message).toContain('📍 *Ubicación:* Santiago');
            expect(message).toContain('⏱ *Duración:* 1 mes');
            expect(message).toContain('📞 *Telétono:* +56912345678');
            expect(message).toContain('✉️ *Email:* john@example.com');
            expect(message).toContain('📝 *Detalles:* Urgente');
        });

        it('should handle missing optional fields with default values', () => {
            const formData = {
                name: 'Jane Doe',
                phone: '+56987654321'
            };
            const message = formatWhatsAppMessage(formData);

            expect(message).toContain('👤 *Cliente:* Jane Doe');
            expect(message).toContain('🆔 *RUT:* No especificado');
            expect(message).toContain('🚜 *Equipo:* No especificado');
            expect(message).toContain('📍 *Ubicación:* No especificado');
            expect(message).toContain('⏱ *Duración:* No especificado');
            expect(message).toContain('✉️ *Email:* No especificado');
            expect(message).toContain('📝 *Detalles:* Sin detalles adicionales');
        });
    });

    describe('generateWhatsAppLink', () => {
        it('should generate correct URL', () => {
            const phone = '56912345678';
            const message = 'Hello World';
            const url = generateWhatsAppLink(phone, message);

            expect(url).toBe('https://wa.me/56912345678?text=Hello%20World');
        });

        it('should encode special characters in message', () => {
            const phone = '56912345678';
            const message = 'Hello & Welcome';
            const url = generateWhatsAppLink(phone, message);

            expect(url).toContain('Hello%20%26%20Welcome');
        });
    });
});
