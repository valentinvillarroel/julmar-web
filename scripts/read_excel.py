import pandas as pd
import json

try:
    # Read all sheets
    xls = pd.ExcelFile('assets_y_datos/FLOTA JULMAR sub arriendo.xlsx')
    data = {}
    for sheet_name in xls.sheet_names:
        df = pd.read_excel(xls, sheet_name=sheet_name)
        # Convert to records, handling NaNs
        data[sheet_name] = df.where(pd.notnull(df), None).to_dict(orient='records')
    
    with open('assets_y_datos/sub_arriendo_data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, default=str)
    print("JSON saved to assets_y_datos/sub_arriendo_data.json")
except Exception as e:
    print(f"Error: {e}")
