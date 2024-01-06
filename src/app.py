from flask import Flask, render_template, url_for
import os
import json
import re

BASE_DIR = os.getcwd()
DATABASE_DIR = os.path.join(BASE_DIR, "data")

app = Flask(__name__)

@app.route("/")
def index():
    data = [
        {
            "title": "Cotización del dolar blue 2023",
            "url":url_for('data'),
        },
        {
            "title": "Mercado de cervezas",
            "url": url_for("beer_shop"),
        }
    ]
    return render_template("index.html", title="Paginas disponibles", data=data)

@app.route("/data")
def data():
    database = os.path.join(DATABASE_DIR, "evolution.json")
    data = []
    with open(database, "r") as data_file:
        data_j = json.loads(data_file.read())[::-1]
        for d in data_j:
            if re.search(r'2023', d['date']) and d['source'] == "Blue":
                data.append(d)
    return render_template("dataPage.html", title="Historial del dolar", data=data)

@app.route("/beer-shop")
def beer_shop():
    database = os.path.join(DATABASE_DIR, "shop.json")
    data = []
    with open(database, "r") as data_file:
        data_j = json.loads(data_file.read())
        for d in data_j:
            img = d["image"]
            d["image"] = os.path.join("/static/media", img)
            data.append(d)
    return render_template("beerShop.html", title="Mercado de Cervezas", data=data)