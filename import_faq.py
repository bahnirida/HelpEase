import csv
from support_bot.models import FAQ

def import_faq_from_csv(path_csv):
    with open(path_csv, encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            question = row['prompt']
            answer = row['response']
            # Crée un enregistrement FAQ
            FAQ.objects.create(question=question, answer=answer)

# Exécution (à adapter avec le chemin complet)

