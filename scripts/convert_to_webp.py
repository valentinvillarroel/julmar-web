import os
from PIL import Image

def convert_to_webp(root_dir):
    image_extensions = ('.jpg', '.jpeg', '.png')
    conversion_map = []

    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(image_extensions):
                file_path = os.path.join(root, file)
                file_name_without_ext = os.path.splitext(file)[0]
                new_file_path = os.path.join(root, file_name_without_ext + ".webp")

                try:
                    with Image.open(file_path) as img:
                        img.save(new_file_path, "WEBP", quality=80)
                        
                        # Create relative paths for code replacement
                        rel_old = os.path.relpath(file_path, root_dir).replace("\\", "/")
                        rel_new = os.path.relpath(new_file_path, root_dir).replace("\\", "/")
                        
                        conversion_map.append((rel_old, rel_new))
                        print(f"Converted: {rel_old} -> {rel_new}")
                except Exception as e:
                    print(f"Error converting {file}: {e}")

    return conversion_map

if __name__ == "__main__":
    public_dir = "public"
    print("Starting conversion...")
    convert_to_webp(public_dir)
    print("Conversion complete.")
