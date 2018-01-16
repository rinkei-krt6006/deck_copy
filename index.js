function addButton (){
  let buttonArea = document.getElementsByClassName("js-tweet-actions tweet-actions full-width ")
  const buttonAreaLength = buttonArea.length
  for(let i=0;i<buttonAreaLength;i++){
    if(buttonArea[i].children.length===5){
      let copyButton = document.createElement('button');
      copyButton.innerHTML = "Copy"
      copyButton.onclick = function(){
        let tweetTextArea = document.getElementsByTagName("textarea")[0]
        tweetTextArea.value = this.parentNode.parentNode.previousElementSibling.children[1].innerHTML
      }
      buttonArea[i].appendChild(copyButton);
      console.log("addButton")
    }
  }
}
setInterval(addButton,4)

//タグ
//<a href="https://twitter.com/search?q=%23testtweet" rel="hashtag" target="_blank" class="link-complex"><span class="hash">#</span><span class="link-complex-target">testtweet</span></a>