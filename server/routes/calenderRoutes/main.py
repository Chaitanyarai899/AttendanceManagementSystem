from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from helper import  subjectinfo



app = Flask(__name__)
mysql = MySQL(app)




@app.route('/calender', methods=["POST","GET"])
def calender():
    enrollment_no = request.args['enrollment_no']
    date = request.args['date']
    batch_id = request.args['batch_id']

    return jsonify(subjectinfo(date, enrollment_no, batch_id))
    



if __name__ == '__main__':
    app.run(debug=True)