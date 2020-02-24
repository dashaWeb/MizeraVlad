window.addEventListener("load", getLoaded);
function getLoaded(){
  load();

}
let testImg = document.querySelector('.testImg')
function load(){
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d3a6d97575ee472fa7fc3c51cd086c36';
    fetch(url)
        .then(
            function(response){
                console.log(response)
                return response.json();
            }
        )
      .then(
          function(data){
              console.log(data);
              return data.articles
          }
      )
      .then((ttt)=>{
          console.log(ttt)
          var title = ttt.map(function(item){
              return item.title;
          })
          var img = ttt.map(function(item){
              return item.urlToImage;
          })
          var txt = ttt.map(function(item){
              return item.description
          })
          var url = ttt.map(function(item){
              return item.url
          })
          let api = [ title , img , txt , url]
          return api;
      }

      )

      .then((api)=>{
          
          var div = []
          for(let i=0;i<api[0].length;i++){
              div[i] = document.createElement('div')
              div[i].setAttribute('class','block col-6')
              testImg.insertAdjacentElement('afterbegin',div[i])
          }
          for(let second = 0; second<api[3].length;second++){
            var a = document.createElement('a');
            a.setAttribute('class','perehod');
            a.setAttribute('href',api[3][second]);
            a.textContent = 'Read More   (CLICK)';
            div[second].insertAdjacentElement('afterbegin',a)
        }
          for(let second = 0; second<api[2].length;second++){
              var p = document.createElement('p');
              p.setAttribute('class','text perehod');
              p.textContent = api[2][second];
              div[second].insertAdjacentElement('afterbegin',p)
          }
          for(let second = 0; second<api[1].length;second++){
            var img = document.createElement('img')
            img.setAttribute('src',api[1][second]);
            img.setAttribute('class','kartinki')
            div[second].insertAdjacentElement('afterbegin',img)
        }
          for(let second = 0; second<api[0].length;second++){
              var h3 = document.createElement('h3')
              h3.setAttribute('class','zagolovok');
              h3.textContent = api[0][second]
              div[second].insertAdjacentElement('afterbegin',h3)
          }
          
      }

      )
}

window.onscroll = function() {
    var scrollElem = document.getElementById("scrollToTop");
    if (document.body.scrollTop > document.documentElement.clientHeight) {
       scrollElem.style.opacity = "1";
       
    } else {
        scrollElem.style.opacity = "1";
        
    }
 }
 var timeOut;
 function goUp() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
       window.scrollBy(0,-100);
       timeOut = setTimeout('goUp()',20);
       
    } else clearTimeout(timeOut);
 }


var clock=document.querySelector('#clock');
var n = false;
function time(){
var date = new Date();
var h= date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
Date.prototype.nameMonth=['January','February','March','April','may','June','July','August','Semtenber','October','November','December',];
Date.prototype.nameDay=['Monday','Tuesday','Wednesday','Thursday','Friday','Suturday','Sunday',];

if(s<10){
    s="0"+s;
    
}
if(m<10){
    m="0"+m;
    
}
if(h<10){
    h="0"+h;
    
}
if(n==false){
    clock.innerHTML=h +":"+ m +":"+ s;
    n=true;
    
}
else{
    clock.innerHTML=h+" "+m+" "+s;
    n=false;


}
data.innerHTML=date.nameMonth[date.getMonth()] +" "+ date.nameDay[date.getDay()-1];

}
setInterval('time()',500);

let business = document.querySelector('.business');
business.addEventListener('click',function business(){
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d3a6d97575ee472fa7fc3c51cd086c36';
    fetch(url)
        .then(
            function(response){
                console.log(response)
                return response.json();
            }
        )
      .then(
          function(data){
              console.log(data);
              return data.articles
          }
      )
      .then((ttt)=>{
          console.log(ttt)
          var title = ttt.map(function(item){
              return item.title;
          })
          var img = ttt.map(function(item){
              return item.urlToImage;
          })
          var txt = ttt.map(function(item){
              return item.description
          })
          var url = ttt.map(function(item){
              return item.url
          })
          let api = [ title , img , txt , url]
          return api;
      }

      )

      .then((api)=>{
          
          var div = []
          for(let i=0;i<api[0].length;i++){
              div[i] = document.createElement('div')
              div[i].setAttribute('class','block col-6')
              testImg.insertAdjacentElement('afterbegin',div[i])
          }
          for(let second = 0; second<api[3].length;second++){
            var a = document.createElement('a');
            a.setAttribute('class','perehod');
            a.setAttribute('href',api[3][second]);
            a.textContent = 'Read More   (CLICK)';
            div[second].insertAdjacentElement('afterbegin',a)
        }
          for(let second = 0; second<api[2].length;second++){
              var p = document.createElement('p');
              p.setAttribute('class','text perehod');
              p.textContent = api[2][second];
              div[second].insertAdjacentElement('afterbegin',p)
          }
          for(let second = 0; second<api[1].length;second++){
            var img = document.createElement('img')
            img.setAttribute('src',api[1][second]);
            img.setAttribute('class','kartinki')
            div[second].insertAdjacentElement('afterbegin',img)
        }
          for(let second = 0; second<api[0].length;second++){
              var h3 = document.createElement('h3')
              h3.setAttribute('class','zagolovok');
              h3.textContent = api[0][second]
              div[second].insertAdjacentElement('afterbegin',h3)
          }
          
      }

      )
}

)

let entertainment = document.querySelector('.entertainment');
entertainment.addEventListener('click',function entertainment(){
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=d3a6d97575ee472fa7fc3c51cd086c36';
    fetch(url)
        .then(
            function(response){
                console.log(response)
                return response.json();
            }
        )
      .then(
          function(data){
              console.log(data);
              return data.articles
          }
      )
      .then((ttt)=>{
          console.log(ttt)
          var title = ttt.map(function(item){
              return item.title;
          })
          var img = ttt.map(function(item){
              return item.urlToImage;
          })
          var txt = ttt.map(function(item){
              return item.description
          })
          var url = ttt.map(function(item){
              return item.url
          })
          let api = [ title , img , txt , url]
          return api;
      }

      )

      .then((api)=>{
          
          var div = []
          for(let i=0;i<api[0].length;i++){
              div[i] = document.createElement('div')
              div[i].setAttribute('class','block col-6')
              testImg.insertAdjacentElement('afterbegin',div[i])
          }
          for(let second = 0; second<api[3].length;second++){
            var a = document.createElement('a');
            a.setAttribute('class','perehod');
            a.setAttribute('href',api[3][second]);
            a.textContent = 'Read More   (CLICK)';
            div[second].insertAdjacentElement('afterbegin',a)
        }
          for(let second = 0; second<api[2].length;second++){
              var p = document.createElement('p');
              p.setAttribute('class','text perehod');
              p.textContent = api[2][second];
              div[second].insertAdjacentElement('afterbegin',p)
          }
          for(let second = 0; second<api[1].length;second++){
            var img = document.createElement('img')
            img.setAttribute('src',api[1][second]);
            img.setAttribute('class','kartinki')
            div[second].insertAdjacentElement('afterbegin',img)
        }
          for(let second = 0; second<api[0].length;second++){
              var h3 = document.createElement('h3')
              h3.setAttribute('class','zagolovok');
              h3.textContent = api[0][second]
              div[second].insertAdjacentElement('afterbegin',h3)
          }
          
      }

      )
}

)
let health = document.querySelector('.health');
health.addEventListener('click',function health(){
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d3a6d97575ee472fa7fc3c51cd086c36';
    fetch(url)
        .then(
            function(response){
                console.log(response)
                return response.json();
            }
        )
      .then(
          function(data){
              console.log(data);
              return data.articles
          }
      )
      .then((ttt)=>{
          console.log(ttt)
          var title = ttt.map(function(item){
              return item.title;
          })
          var img = ttt.map(function(item){
              return item.urlToImage;
          })
          var txt = ttt.map(function(item){
              return item.description
          })
          var url = ttt.map(function(item){
              return item.url
          })
          let api = [ title , img , txt , url]
          return api;
      }

      )

      .then((api)=>{
          
          var div = []
          for(let i=0;i<api[0].length;i++){
              div[i] = document.createElement('div')
              div[i].setAttribute('class','block col-6')
              testImg.insertAdjacentElement('afterbegin',div[i])
          }
          for(let second = 0; second<api[3].length;second++){
            var a = document.createElement('a');
            a.setAttribute('class','perehod');
            a.setAttribute('href',api[3][second]);
            a.textContent = 'Read More   (CLICK)';
            div[second].insertAdjacentElement('afterbegin',a)
        }
          for(let second = 0; second<api[2].length;second++){
              var p = document.createElement('p');
              p.setAttribute('class','text perehod');
              p.textContent = api[2][second];
              div[second].insertAdjacentElement('afterbegin',p)
          }
          for(let second = 0; second<api[1].length;second++){
            var img = document.createElement('img')
            img.setAttribute('src',api[1][second]);
            img.setAttribute('class','kartinki')
            div[second].insertAdjacentElement('afterbegin',img)
        }
          for(let second = 0; second<api[0].length;second++){
              var h3 = document.createElement('h3')
              h3.setAttribute('class','zagolovok');
              h3.textContent = api[0][second]
              div[second].insertAdjacentElement('afterbegin',h3)
          }
          
      }

      )
}

)
let science = document.querySelector('.science');
science.addEventListener('click',function science(){
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=d3a6d97575ee472fa7fc3c51cd086c36';
    fetch(url)
        .then(
            function(response){
                console.log(response)
                return response.json();
            }
        )
      .then(
          function(data){
              console.log(data);
              return data.articles
          }
      )
      .then((ttt)=>{
          console.log(ttt)
          var title = ttt.map(function(item){
              return item.title;
          })
          var img = ttt.map(function(item){
              return item.urlToImage;
          })
          var txt = ttt.map(function(item){
              return item.description
          })
          var url = ttt.map(function(item){
              return item.url
          })
          let api = [ title , img , txt , url]
          return api;
      }

      )

      .then((api)=>{
          
          var div = []
          for(let i=0;i<api[0].length;i++){
              div[i] = document.createElement('div')
              div[i].setAttribute('class','block col-6')
              testImg.insertAdjacentElement('afterbegin',div[i])
          }
          for(let second = 0; second<api[3].length;second++){
            var a = document.createElement('a');
            a.setAttribute('class','perehod');
            a.setAttribute('href',api[3][second]);
            a.textContent = 'Read More   (CLICK)';
            div[second].insertAdjacentElement('afterbegin',a)
        }
          for(let second = 0; second<api[2].length;second++){
              var p = document.createElement('p');
              p.setAttribute('class','text perehod');
              p.textContent = api[2][second];
              div[second].insertAdjacentElement('afterbegin',p)
          }
          for(let second = 0; second<api[1].length;second++){
            var img = document.createElement('img')
            img.setAttribute('src',api[1][second]);
            img.setAttribute('class','kartinki')
            div[second].insertAdjacentElement('afterbegin',img)
        }
          for(let second = 0; second<api[0].length;second++){
              var h3 = document.createElement('h3')
              h3.setAttribute('class','zagolovok');
              h3.textContent = api[0][second]
              div[second].insertAdjacentElement('afterbegin',h3)
          }
          
      }

      )
}

)
let sports = document.querySelector('.sports');
sports.addEventListener('click',function sports(){
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=d3a6d97575ee472fa7fc3c51cd086c36';
    fetch(url)
        .then(
            function(response){
                console.log(response)
                return response.json();
            }
        )
      .then(
          function(data){
              console.log(data);
              return data.articles
          }
      )
      .then((ttt)=>{
          console.log(ttt)
          var title = ttt.map(function(item){
              return item.title;
          })
          var img = ttt.map(function(item){
              return item.urlToImage;
          })
          var txt = ttt.map(function(item){
              return item.description
          })
          var url = ttt.map(function(item){
              return item.url
          })
          let api = [ title , img , txt , url]
          return api;
      }

      )

      .then((api)=>{
          
          var div = []
          for(let i=0;i<api[0].length;i++){
              div[i] = document.createElement('div')
              div[i].setAttribute('class','block col-6')
              testImg.insertAdjacentElement('afterbegin',div[i])
          }
          for(let second = 0; second<api[3].length;second++){
            var a = document.createElement('a');
            a.setAttribute('class','perehod');
            a.setAttribute('href',api[3][second]);
            a.textContent = 'Read More   (CLICK)';
            div[second].insertAdjacentElement('afterbegin',a)
        }
          for(let second = 0; second<api[2].length;second++){
              var p = document.createElement('p');
              p.setAttribute('class','text perehod');
              p.textContent = api[2][second];
              div[second].insertAdjacentElement('afterbegin',p)
          }
          for(let second = 0; second<api[1].length;second++){
            var img = document.createElement('img')
            img.setAttribute('src',api[1][second]);
            img.setAttribute('class','kartinki')
            div[second].insertAdjacentElement('afterbegin',img)
        }
          for(let second = 0; second<api[0].length;second++){
              var h3 = document.createElement('h3')
              h3.setAttribute('class','zagolovok');
              h3.textContent = api[0][second]
              div[second].insertAdjacentElement('afterbegin',h3)
          }
          
      }

      )
}

)
let technology = document.querySelector('.technology');
technology.addEventListener('click',function technology(){
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d3a6d97575ee472fa7fc3c51cd086c36';
    fetch(url)
        .then(
            function(response){
                console.log(response)
                return response.json();
            }
        )
      .then(
          function(data){
              console.log(data);
              return data.articles
          }
      )
      .then((ttt)=>{
          console.log(ttt)
          var title = ttt.map(function(item){
              return item.title;
          })
          var img = ttt.map(function(item){
              return item.urlToImage;
          })
          var txt = ttt.map(function(item){
              return item.description
          })
          var url = ttt.map(function(item){
              return item.url
          })
          let api = [ title , img , txt , url]
          return api;
      }

      )

      .then((api)=>{
          
          var div = []
          for(let i=0;i<api[0].length;i++){
              div[i] = document.createElement('div')
              div[i].setAttribute('class','block col-6')
              testImg.insertAdjacentElement('afterbegin',div[i])
          }
          for(let second = 0; second<api[3].length;second++){
            var a = document.createElement('a');
            a.setAttribute('class','perehod');
            a.setAttribute('href',api[3][second]);
            a.textContent = 'Read More   (CLICK)';
            div[second].insertAdjacentElement('afterbegin',a)
        }
          for(let second = 0; second<api[2].length;second++){
              var p = document.createElement('p');
              p.setAttribute('class','text perehod');
              p.textContent = api[2][second];
              div[second].insertAdjacentElement('afterbegin',p)
          }
          for(let second = 0; second<api[1].length;second++){
            var img = document.createElement('img')
            img.setAttribute('src',api[1][second]);
            img.setAttribute('class','kartinki')
            div[second].insertAdjacentElement('afterbegin',img)
        }
          for(let second = 0; second<api[0].length;second++){
              var h3 = document.createElement('h3')
              h3.setAttribute('class','zagolovok');
              h3.textContent = api[0][second]
              div[second].insertAdjacentElement('afterbegin',h3)
          }
          
      }

      )
}

)

// let technology = document.querySelector('.technology');
// technology.addEventListener('click',function technology(){
//     let url = 'https://coinmarketcapzakutynskyv1.p.rapidapi.com/getCryptocurrenciesList';
// function currency(){
// fetch(url){
// 	"method": "POST",
// 	"headers": {
// 		"x-rapidapi-host": "CoinMarketCapzakutynskyV1.p.rapidapi.com",
// 		"x-rapidapi-key": "8df3aa960fmsh3dfa47b4bcdd8c6p1fe551jsn79d799e411c7",
// 		"content-type": "application/x-www-form-urlencoded"
// 	},
// 	"body": {}
// })
// .then(response => {
// 	console.log(response);
// })

