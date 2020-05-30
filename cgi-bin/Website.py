#!C:\Users\s157165\Anaconda3\envs\InternshipOneOnEpsilon\python.exe

import string
import pickle
import cgi, cgitb
from nltk.corpus import stopwords, words
from nltk.corpus import words
from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize
cgitb.enable()

class Classification:
    def website(file, title):
        # category_id_df = pd.read_csv("category_id_df.csv")
        # id_to_category = dict(category_id_df[['y_id', 'newHashtag']].values)  # Dictionary connecting id to hashtag
        id_to_category = {0: 'Exploding Dots', 1: 'Statistics and probability', 2: 'Geometry', 3: 'Numbers',
                          4: 'Polygons lines and quadrilaterals', 5: 'Arithmetic', 6: 'Algebra',
                          7: 'Logic and discrete maths', 8: 'Measurement', 9: 'Trigonometry', 10: 'Calculus'}

        # Porter stemming method
        ps = PorterStemmer()
        My_dict = {}
        for i in words.words():
            My_dict[i] = i

        # hash table implemtation of dictionary
        textString = file.replace('/n', "")
        textString1 = title.replace('/n', "")

        # eliminate the punctuation in form of characters
        textString = [char for char in textString if char not in string.punctuation]
        textString1 = [char for char in textString1 if char not in string.punctuation]
        textString = ''.join(textString)
        textString1 = ''.join(textString1)
        textString = textString.lower()
        textString1 = textString1.lower()

        # tokenize
        textString_token = word_tokenize(textString)
        textString_token1 = word_tokenize(textString1)

        # stopwords eliminating 1st time
        textString_stop = [word for word in textString_token if word not in stopwords.words('english')]
        textString_stop1 = [word for word in textString_token1 if word not in stopwords.words('english')]

        # Spelling checking and dividing two connected words
        list1 = []
        for word in textString_stop:
            if word in My_dict:
                list1.append(word)
            else:
                list2 = []
                count_j = 0
                for j in range(1, len(word)):
                    if word[:j] in My_dict and word[j:] in My_dict:
                        list2.append(word[:j])
                        list2.append(word[j:])
                        count_j += 1
                if count_j == 1:
                    list1.extend(list2)

        # eliminate stopwords 2nd time
        clean_sentence = [word for word in list1 if word.lower() not in stopwords.words('english')]
        clean_title = [word for word in textString_stop1 if word.lower() not in stopwords.words('english')]

        qw = len(clean_sentence)
        tp = 20
        qx = len(clean_title)
        tl = tp * qw / (100 - tp)
        m = round(tl / qx)

        for j in range(1, m):
            clean_sentence.append(title)  # Adding the titles to the captions

        ## Stemming
        text = []
        for w in clean_sentence:
            x = ps.stem(w)  # Stemming method
            text.append(x)

        text = ' '.join(text)
        text = str(text)

        loaded_model = pickle.load(open('C:/Users/s157165\Documents/Jaar 5 2019-2020 Master/Internship Australia/MathClassification/cgi-bin/finalized_model.sav', 'rb'))
        vectorizer1 = pickle.load(open('C:/Users/s157165\Documents/Jaar 5 2019-2020 Master/Internship Australia/MathClassification/cgi-bin/vectorizer1.sav', 'rb'))
        result = loaded_model.predict(vectorizer1.transform([text]))
        result = id_to_category[result[0]]

        return result


form = cgi.FieldStorage()
textVideo = form.getvalue("textVideo")
titleVideo = form.getvalue("titleVideo")

web = Classification.website("Hello, I love loving exploding dots numbers and also I participate in exercising when I am busy calculating",
                             "This is a numbers video")

webs = Classification.website(textVideo,titleVideo)

print("Content-Type: text/html\r\n\r\n")
print("<html>")
print("<head><title>My first CGI program</title></head>")
print("<body>")
print("<h1>Classification results</h1>")
print("<p>The title of the video:</p>")
print(titleVideo)
print("<p>The text of the video:</p>")
print(textVideo)
print("<h2>The video called \" %s \" is classified as: %s</h2>" % (titleVideo, webs))
print("</body>")
print("</html>")