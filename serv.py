from flask import Flask, render_template
app = Flask(__name__)
@app.route("/")
def home():
    return render_template('index.html')

@app.route("/CalcService/PassUsingModel")
def model():
    return render_template('CalcService/PassUsingModel.html')

@app.route("/CalcService/PassUsingViewData")
def data():
    return render_template('CalcService/PassUsingViewData.html')


@app.route("/CalcService/PassUsingViewBag")
def bag():
    return render_template('CalcService/PassUsingViewBag.html')

@app.route("/CalcService/AccessServiceDirectly")
def injection():
    return render_template('CalcService/AccessServiceDirectly.html')
if __name__ == "__main__":
    app.run( debug=True, port=80)
    