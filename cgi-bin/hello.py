#!C:\Users\s157165\Anaconda3\envs\InternshipOneOnEpsilon\python.exe

import cgi
import cgitb
cgitb.enable()

print("Content-Type: text/html\r\n\r\n")
print("<html>")
print("<head><title>My first CGI program</title></head>")
print("<body>")
print("<h2>Hello world!</h2>")
form = cgi.FieldStorage()
if form.getvalue("name"):
    name= form.getvalue("name")
    print('<h2> Hello' + name + '! Thanks for using my script!</h1><br />')
if form.getvalue("happy"):
    print("<p> Yay! I am happy too!</p>")
if form.getvalue("sad"):
    print("<p>Oh no! Why are you sad?</p>")

print('<form method="post" action="hello.py">')
print('<p>Name: <input type="text" name="name"/></p>')
print('<input type="checkbox": name="happy" /> Happy')
print('<input type="checkbox": name="sad" /> Sad')
print('<input type="submit" value="Submit"/>')
print("</form>")
print("</body>")
print("</html>")