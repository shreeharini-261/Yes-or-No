from flask import Flask, render_template, url_for, request
app= Flask(__name__)

#main route
@app.route("/")
def main():
    return render_template("index.html")

@app.route("/date")
def date():
    return render_template("date.html")

if __name__=="__main__":
    app.run(debug=True)

