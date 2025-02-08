from flask import Flask, render_template, url_for, request, jsonify
app= Flask(__name__)

#main route
@app.route("/")
def main():
    return render_template("index.html")

@app.route("/date")
def date():
    return render_template("date.html")

@app.route("/log_option", methods=["POST"])
def log_option():
    data = request.get_json()
    selected_option = data.get('selected_option')
    
    # Print the selected option in the terminal
    print(f"User selected: {selected_option}")
    
    # Return a response to the client
    return jsonify({"message": f"Option '{selected_option}' logged successfully!"})

if __name__=="__main__":
    app.run(host="0.0.0.0", port=5000)


