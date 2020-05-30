#!C:\Users\s157165\Anaconda3\envs\InternshipOneOnEpsilon\python.exe

import cgi, cgitb
cgitb.enable()

form = cgi.FieldStorage()
textVideo = form.getvalue('textVideo')
titleVideo = form.getvalue('titleVideo')

print("Content-Type: text/html\r\n\r\n")
print("<html>")
print("<head><title>My first CGI program</title></head>")
print("<body>")
print("<h1>Hello website!</h1>")
print(textVideo,titleVideo)
print("</body>")
print("</html>")