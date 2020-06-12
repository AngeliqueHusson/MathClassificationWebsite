import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './Title';
import Main from './Main';
import Main2 from './Main2';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery'

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <Main />
    <Main2 />
    {/* <script>
        {/* $(document).ready(function() {
          $("form").submit(function(event) {
            event.preventDefault();
            var titleVideo = $("#input-title").val();
            var textVideo = $("#input-text").val();
            var dropdown = $("#input-method").val();

            $(".form-message").load("http://localhost:8080/cgi-bin/Website.py", {
              titleVideo: titleVideo,
              textVideo: textVideo,
              dropdown: dropdown
            })  
          })
        }); *}

      $(document).ready(function(){
        $("form").submit(function(event) {
            event.preventDefault();
            var titleVideo = $("#input-title").val();
            var textVideo = $("#input-text").val();
            var dropdown = $("#input-method").val();

            $.ajax({
                url: "http://localhost:8080/cgi-bin/Website.py",
                type: "POST",
                data: {
                  titleVideo: titleVideo,
                  textVideo: textVideo,
                  dropdown: dropdown                  
                },
                // dataType: "text",
                succes: function(response){
                  $("#form-message").html(response);
                }
                // succes: function(msg){
                //   alert("script ran ok");
                // },
              });
            })
    	    
            

            // $("#ajaxtest").load("http://localhost:8080/cgi-bin/Website.py", {
            //   textVideo: {textVideo},
            //   titleVideo: {titleVideo} 
            // }, function(){
            //   alert("Hi there!");
            // })
          	//   })
             });
        </script> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
