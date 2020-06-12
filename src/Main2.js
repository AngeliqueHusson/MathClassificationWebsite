import React, {Component} from "react";
import './jekyll-theme-cayman.scss';
import "./App.css";
import $ from 'jquery'

class FormsAndInputs extends Component {
  constructor(props){
    super(props)
    this.state = {
      titleVideo: null,
      textVideo: null,
      store: '',
      store1: '',
      url: null
    }

  }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   const data = this.state
  // }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // /* Api call to data that I may need */
  // componentDidMount(){
  //   this.setState({
  //     textVideo: null
  //   })
  // }

  // function1 = (data) => {
componentDidMount = () => {
    let _this = this;

    $("#form1").submit(function(event) {
        event.preventDefault();
        var titleVideo = $("#input-title").val();
        var textVideo = $("#input-text").val();
        var dropdown = $("#input-method").val();
        _this.setState({store: "Loading..."})

        $("#form-message").html("<h3>The Result will be displayed here:</h3>Loading...")

      $.ajax({
        method: "POST",
        url: "http://localhost:8080/cgi-bin/Website.py",
        data: {
          titleVideo: titleVideo,
          textVideo: textVideo,
          dropdown: dropdown                  
        },
        dataType: 'html',
        complete: function(response){
          console.log("Succes");
          console.log(response);
          // console.log(response.responseText)
          // _this.setState({store: response.responseText})
          // alert("script ran ok")
          $("#form-message").html(response.responseText);
        },
        error: function(data){
          console.log("An error occured");
          console.log(data);
        }
      })

      // $(".form-message").load("http://localhost:8080/cgi-bin/Website.py", {
      //   titleVideo: titleVideo,
      //   textVideo: textVideo,
      //   dropdown: dropdown
      // }) 
      console.log("Succes!") 
    })

    $("#form2").submit(function(event){
      event.preventDefault();

      // Obtain video ID
      var url = $("#input-url").val();
      var dropdown = $("#input-method1").val();
      _this.setState({store1: "Loading..."})

      $("#form-message1").html("<h3>The Result will be displayed here:</h3>Loading...")

      var videoID = null;
      var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = url.match(regExp);
      if (match && match[2].length == 11) {
        var videoID = match[2];

        $.ajax({
          method: "POST",
          url: "http://localhost:8080/cgi-bin/WebsiteUrl.py",
          data: {
            videoID: videoID,
            dropdown: dropdown                  
          },
          dataType: 'html',
          complete: function(response){
            console.log("Succes");
            console.log(response);
            // console.log(response.responseText)
            // _this.setState({store: response.responseText})
            // alert("script ran ok")
            $("#form-message1").html(response.responseText);
          },
          error: function(data){
            console.log("An error occured");
            console.log(data);
          }
        })
      } else {
        var videoID = null; //error
        $("#form-message1").html("<p id='red'> Please enter a valid url and try again</p>")
      }
      console.log(videoID)
      console.log("Succes!") 
    })

}

  render() {
     const {titleVideo} = this.state
     const {textVideo} = this.state
     const {url} = this.state

    return (
      [
      <div className="main-content" id="main2">
        <h1>Input data</h1>
        <p>Insert the title and the text of a video, a text document or an article below.</p>
        <h4>Title:</h4>
        <form action = "http://localhost:8080/cgi-bin/Website.py" id="form1" type="post" target="_blank">
          <p><input id="input-title" type="text" placeholder="Title" name="titleVideo" onChange={this.handleInputChange} /> </p>     
          <p> {titleVideo} </p>
          <h4>Text:</h4>
          <p><input id="input-text" type="text" placeholder="Text" name="textVideo" onChange={this.handleInputChange} />  </p>
          <p> {textVideo} </p>
          <h4>Classification algorithm:</h4>
         <select id="input-method" name = "dropdown">
          <option value = "Logistic Regression" selected>Logistic Regression</option>
          <option value = "Support Vector Machine">Support Vector Machine</option>
          <option value = "Recurrent Neural Network">Recurrent Neural Network</option>
         </select>
          <p></p>
          <p><input id="sub" type="submit" value="Submit"/></p>
        </form>
      </div>,
      <div class="main-content" id="form-message">
        <h3>The Result will be displayed here:</h3>
        {this.state.store}
        </div>,
      <div className="main-content" id="main2">
      <h1>Input YouTube url</h1>
      <p>Instead of inserting the title and the captions, you only have to insert the video URL of a YouTube video below:</p>
      <form id="form2" target="_blank">
        <h4>URL:</h4>
        <p><input id="input-url" type="text" placeholder="URL" name="url" onChange={this.handleInputChange} />  </p>
        <p> {url} </p>
        <select id="input-method1" name = "dropdown">
          <option value = "Logistic Regression" selected>Logistic Regression</option>
          <option value = "Support Vector Machine">Support Vector Machine</option>
          <option value = "Recurrent Neural Network">Recurrent Neural Network</option>
         </select>
        <p></p>
        <p><input id="sub" type="submit" value="Submit"/></p>
      </form>
    </div>,
       <div class="main-content" id="form-message1">
       <h3>The Result will be displayed here:</h3>
       {this.state.store1}
       </div>,   
      <div class="site-footer" id="footer"> 
        <p class="site-footer-owner">Created by: Angeliqe Husson</p>
        <p class="site-footer-credits"> Supervisors:  Y. Nazarathy (University of Queensland), M.A.A. Boon (TU/e Eindhoven) </p>
      </div>

      ])
  }
}


export default FormsAndInputs;