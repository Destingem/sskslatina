import csv
import json
from unidecode import unidecode

# Define the mapping
replace_dict = {
    'Ť': 'c',
    'Š': 'a',
    'Ū': 'i',
    'ż': 'y',
    'Ý': 'r',
    '»': 'C'
}

# Placeholder for the data
data = []

# Define headers
headers = ["DATUM OD", "DATUM DO", "NAZEV", "MESTO", "TYP", "KATEGORIE",
           "DISCIPLINY", "PORADATEL", "KLUB", "KLUB CISLO", "REGISTRACE DO", "URL"]

# Open the file
with open('zavody.csv', 'r', encoding="utf8", errors='ignore') as file:
    # Read each line
    for line in file:
        # Split the columns by semi-colon
        columns = line.strip().split(";")
        # Apply the transformation
        transformed_columns = [unidecode(column.translate(str.maketrans(replace_dict))) for column in columns]
        # Append the transformed line to the data as dictionary
        data.append(dict(zip(headers, transformed_columns)))

# Save the data to a new CSV file
with open('processed_file.csv', 'w', encoding='utf-8', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=headers)
    writer.writeheader()
    writer.writerows(data)

# Save the data as a JSON file
with open('processed_file.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

# Define replacements
replacements = {
    'mui': 'muzi',
    "Mui": "Muzi",
    'eny': 'zeny',
    "Junioi": "Juniori",
  
    "ci" : " zaci",
    "kyn" : " zakyne",
    "Plze" : "Plzen",
    "Zrueno" : "Zruseno",
    "ZRUENO" : "Zruseno",
    "Jihoeska" : "Jihoceska",
    "vzduchovkov" : "vzduchovkova",
    "steleck" : "strelecka",
    "Bezolupy": "Brezolupy",
    "vlee" : "vleze",
    "mldee" : "mladeze",
    "Putovn" : "Putovni",
    "pohr" : "pohar",
    "Veterni" : "Veterani",
    "ronk" : "rocnik",
    "memoril" : "memorial",
    "vzduchov": "vzduchova",
    " R" : " ČR",
    "Mistrovstv" : "Mistrovstvi",
    "eska strelecka svaz" : "Česky strelecky svaz",
    "Slovanska" : "Slovenska",
    "Jarn cena" : "Jarni cena",
    "Historick zbran" : "Historicke zbrane",
    "Velikonon" : "Velikonocni",
    "stlen" : "strileni",
    "Sezemick" : "Sezemicky",
    "puka" : "puska",
    "vcerannch" : "vcerannich",
    "Chotbo" : "Chotebor",
    "Nov": "Nova",
    "Memoril" : "Memorial",
    "Zlnskaho" : "Zlinskeho",
    "Finle" : "Finale",
    "Zlnsk" : "Zlinsk",
    "kaho" : "keho",
    "Pohr" : "Pohar",
    "Sledovan": "Sledovany",
    "Aprlov" : "Aprilova",
    '"': '',
    # Add here more replacements as needed
}

# After creating the JSON, load it and make the replacements
with open('processed_file.json', 'r', encoding='utf-8') as file:
    json_data = json.load(file)

for item in json_data:
    for key in item:
        # Skip replacement in URL fields
        if key == "URL":
            continue
        if isinstance(item[key], str):
            for old, new in replacements.items():
                item[key] = item[key].replace(old, new)

# Save the modified data back to JSON
with open('processed_file.json', 'w', encoding='utf-8') as file:
    json.dump(json_data, file, ensure_ascii=False, indent=4)