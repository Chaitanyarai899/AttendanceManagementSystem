import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

conn = mysql.connector.connect(user = os.getenv("User"), password =os.getenv("Password"),host = os.getenv("Host"), database= 'ggsipu_attendance', port = os.getenv("Port") )



def getPeriodId(date, batch_id): #gets all the period id's generated for the batch on the given date.
   cursor = conn.cursor()
   cursor.execute(f"SELECT period_id FROM period_id WHERE batch_ID = '{batch_id}' AND stamp LIKE '{date}%'; ")
   period_id = cursor.fetchall()
   return period_id 

def getPA(enrollment_no, date): #gets all the PA of the enrollment number on the given date.
     cursor = conn.cursor()
     cursor.execute(f"SELECT PA FROM attendance WHERE enrollment_no = '{enrollment_no}' AND PA LIKE '%{date}%'; ")
     PA = cursor.fetchall()
     return PA


def intersection(period_id, PA):  #gives all the period id's the student was present in on the given date. 
   attended = [value for value in period_id if value in PA]  
   return attended

def uncommonitem(period_id, PA):
    unattended = set(period_id) ^ set(PA)   
    return list(unattended)

def periodID_to_Subjects(attended):
    subjectcode = []
    for i in range(len(attended)):
           subjectcode.append(attended[i][0][7:14:1])
    return subjectcode



date = '2023-01-06'
enrollment_no = '0661919121'
batch_id = '12'

def subjectinfo(date, enrollment_no, batch_id):
    Present = periodID_to_Subjects(intersection(getPeriodId(date, batch_id),getPA(enrollment_no, date)))
    notPresent = periodID_to_Subjects(uncommonitem(getPeriodId(date, batch_id),getPA(enrollment_no, date)))
    Final = f"Attended Subjects: {Present}, Unattended Subjects: {notPresent}"   
    return Final






print(subjectinfo(date, enrollment_no, batch_id))
#print(periodID_to_Subjects(intersection(getPeriodId(date, batch_id),getPA(enrollment_no, date))))
#print(periodID_to_Subjects(uncommonitem(getPeriodId(date, batch_id),getPA(enrollment_no, date))))