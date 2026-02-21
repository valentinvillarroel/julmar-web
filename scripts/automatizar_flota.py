import os
import shutil
import re
import json
from PIL import Image
import unicodedata

# Configuración
SOURCE_DIR = os.path.join("assets_y_datos", "NUEVAS_FOTOS_AQUI")
TARGET_PUBLIC_DIR = os.path.join("public", "machinery")
DATA_FILE = os.path.join("src", "data", "machines.js")

def slugify(value):
    """
    Convierte un texto en un slug amigable para URL y carpetas.
    Ej: "Camión Aljibe K-480" -> "camion-aljibe-k480"
    """
    value = str(value)
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub(r'[^\w\s-]', '', value).strip().lower()
    return re.sub(r'[-\s]+', '-', value)

def sanitize_name(name):
    """
    Intenta ocultar patentes simples (formato AA-BB-12 o AABB12) del nombre visible.
    Esto es básico, se recomienda revisar manual.
    """
    # Patrón simple de patente Chilena (4 letras 2 numeros o 2 letras 4 numeros)
    # Solo elimina si está explícito, ej: "Camion JXLP99" -> "Camion"
    # Para seguridad, es mejor que el nombre de la carpeta venga limpio.
    return name.strip()

def get_next_id(file_path):
    """Lee el archivo machines.js para encontrar el ID más alto."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            ids = re.findall(r'id:\s*(\d+)', content)
            if ids:
                return max(map(int, ids)) + 1
    except Exception as e:
        print(f"Error leyendo ID: {e}")
    return 20 # Fallback

def determine_category(name):
    name_lower = name.lower()
    if "excavadora" in name_lower: return "Excavadora"
    if "retro" in name_lower: return "Retroexcavadora"
    if "cargador" in name_lower: return "Cargador Frontal"
    if "aljibe" in name_lower: return "Camión Aljibe"
    if "camion" in name_lower or "camión" in name_lower: return "Camión Tolva/Pluma"
    if "rodillo" in name_lower or "compactador" in name_lower: return "Compactación"
    if "motoconformadora" in name_lower or "moto" in name_lower: return "Motoniveladora"
    return "Maquinaria"

def process_images():
    print("--- INICIANDO AUTOMATIZACIÓN DE FLOTA ---")
    
    if not os.path.exists(SOURCE_DIR):
        print(f"ERROR: No existe la carpeta '{SOURCE_DIR}'")
        return

    # 1. Detectar nuevas máquinas (carpetas en NUEVAS_FOTOS_AQUI)
    new_machines_dirs = [d for d in os.listdir(SOURCE_DIR) if os.path.isdir(os.path.join(SOURCE_DIR, d))]
    
    if not new_machines_dirs:
        print("No se encontraron carpetas nuevas en 'NUEVAS_FOTOS_AQUI'.")
        print("Crea una carpeta por máquina (ej: 'Excavadora CAT 320') y pon las fotos dentro.")
        return

    new_machines_data = []
    next_id = get_next_id(DATA_FILE)

    for machine_name in new_machines_dirs:
        print(f"\nProcesando: {machine_name}...")
        
        # Paths
        source_machine_path = os.path.join(SOURCE_DIR, machine_name)
        slug_name = slugify(machine_name)
        target_machine_path = os.path.join(TARGET_PUBLIC_DIR, slug_name)
        
        # Crear carpeta destino
        os.makedirs(target_machine_path, exist_ok=True)
        
        # Procesar Imágenes
        processed_images = []
        files = sorted(os.listdir(source_machine_path))
        
        for idx, file in enumerate(files):
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                try:
                    # Abrir y convertir
                    img_path = os.path.join(source_machine_path, file)
                    img = Image.open(img_path)
                    
                    # Convertir a RGB si es necesario
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGB")
                    
                    # Redimensionar si es gigante (>1920px ancho)
                    if img.width > 1920:
                        ratio = 1920 / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((1920, new_height), Image.Resampling.LANCZOS)
                    
                    # Nombre archivo destino
                    new_filename = f"image-{idx+1}.webp"
                    target_file_path = os.path.join(target_machine_path, new_filename)
                    
                    # Guardar optimizado
                    img.save(target_file_path, "WEBP", quality=80)
                    
                    # Guardar ruta relativa para el JS
                    web_path = f"/machinery/{slug_name}/{new_filename}"
                    processed_images.append(web_path)
                    print(f"  -> Foto procesada: {new_filename}")
                    
                except Exception as e:
                    print(f"  X Error con foto {file}: {e}")

        if not processed_images:
            print("  ! No se encontraron imágenes válidas.")
            continue

        # Crear Objeto de Datos
        main_image = processed_images[0]
        gallery_images = processed_images # Incluye la principal támbien en la galería o no, según gusto. Aquí ponemos todas.
        
        clean_name = sanitize_name(machine_name)
        category = determine_category(clean_name)
        
        machine_data = {
            "id": next_id,
            "name": clean_name,
            "category": category,
            "capacity": "Potencia / Capacidad (Editar)",
            "description": "Descripción generada automáticamente. Editar.",
            "image": main_image,
            "gallery": gallery_images,
            "features": ["Característica 1", "Característica 2"],
            "specs": { "Dato": "Valor" }
        }
        
        new_machines_data.append(machine_data)
        next_id += 1
        print(f"  OK. Datos preparados para ID {machine_data['id']}")

    # 2. Actualizar machines.js
    if new_machines_data:
        append_to_js(new_machines_data)
        print("\n--- ¡PROCESO COMPLETADO! ---")
        print("1. Verifica las fotos en 'public/machinery'")
        print("2. Revisa 'src/data/machines.js' para ajustar descripciones y datos técnicos.")
        
        # Opción: Mover carpetas procesadas a una carpeta "PROCESADAS" para no repetir
        processed_dir = os.path.join(SOURCE_DIR, "YA_PROCESADAS")
        os.makedirs(processed_dir, exist_ok=True)
        for d in new_machines_dirs:
            try:
                shutil.move(os.path.join(SOURCE_DIR, d), os.path.join(processed_dir, d))
            except:
                pass


def append_to_js(new_machines):
    """
    Inyecta el JSON de las nuevas máquinas antes del cierre del array '];'
    """
    try:
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Buscar el último cierre de array exportado
        # Buscamos '];' al final del archivo (o cerca)
        end_marker = "];"
        last_index = content.rfind(end_marker)
        
        if last_index == -1:
            print("ERROR CRÍTICO: No encontré el cierre '];' en machines.js. Copia estos datos manualmente:")
            print(json.dumps(new_machines, indent=4))
            return

        # Generar string de nuevos objetos
        insertion = ""
        for m in new_machines:
            # Formatear como JS object (claves sin comillas si es posible, pero JSON es válido JS)
            # Haremos un JSON y quitaremos comillas de claves simples para mantener estilo
            json_str = json.dumps(m, indent=4, ensure_ascii=False)
            # Hack simple para quitar comillas de las claves (opcional, por estética)
            # json_str = re.sub(r'"(\w+)":', r'\1:', json_str) 
            insertion += ",\n    " + json_str

        # Insertar
        new_content = content[:last_index] + insertion + "\n" + content[last_index:]
        
        with open(DATA_FILE, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print(f"Se agregaron {len(new_machines)} máquinas nuevas a la base de datos.")
        
    except Exception as e:
        print(f"Error escribiendo JS: {e}")

if __name__ == "__main__":
    process_images()
