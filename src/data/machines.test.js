import { describe, it, expect } from 'vitest';
import { machines } from './machines';

describe('Machines Data Integrity', () => {
    it('should have a unique ID for each machine', () => {
        const ids = machines.map(m => m.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(ids.length);
    });

    it('should have required fields for each machine', () => {
        machines.forEach(machine => {
            expect(machine).toHaveProperty('id');
            expect(machine).toHaveProperty('name');
            expect(machine).toHaveProperty('category');
            expect(machine.name).toBeTruthy();
            expect(machine.category).toBeTruthy();
        });
    });

    it('should have a valid image path for each machine', () => {
        machines.forEach(machine => {
            expect(machine.image).toMatch(/^\/machinery\//);
        });
    });

    it('should have valid gallery images if gallery exists', () => {
        machines.forEach(machine => {
            if (machine.gallery) {
                expect(Array.isArray(machine.gallery)).toBe(true);
                machine.gallery.forEach(img => {
                    expect(img).toMatch(/^\/machinery\//);
                });
            }
        });
    });

    it('should have a category from the allowed list', () => {
        const allowedCategories = [
            'Retroexcavadoras',
            'Camiones Aljibe',
            'Excavadoras',
            'Cargadores',
            'Implementos'
        ];

        machines.forEach(machine => {
            expect(allowedCategories).toContain(machine.category);
        });
    });
});
