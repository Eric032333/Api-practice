// import axios from 'axios';
$(document).ready(() => {

  // let url = 'http://jsonplaceholder.typicode.com/posts/'
  let url = 'https://opendata.epa.gov.tw/api/v1/ATM00634?%24skip=0&%24top=1000&%24format=json'
  axios.get(url)
  .then(function(resp) {
   for(let i = 0 ; i < resp.data.length ; i++ ){
    let respData = toPostHtml(resp.data[i])
    console.log(respData)
    let html = toPostHtml(resp.data[i])
          //    console.log(html)
          $('.container').append(html)
        }
      })




  
//   function toPostHtml(jsn) {
//     return `
//     <div>
//     <h1><a href="post/${jsn.id}">ID: ${jsn.id}</a></h1>
//     <h3>Title: ${jsn.title}</h3>
//     <p class="some-body">${jsn.body}</p>
//     </div>
//     `;
//   }

// })


function toPostHtml(jsn) {
    return `
    <div> 
   <a href="post/${jsn.SiteName}" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${jsn.SiteName}</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">${jsn.ItemName} ${jsn.Concentration}.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
    </div>
    `;
  }

})



//  function toPostHtml(jsn) {
//     return `
//     <div>
//     <h1><a href="post/${jsn.id}">ID: ${jsn.id}</a></h1>
//     <h3>Title: ${jsn.title}</h3>
//     <p class="some-body">${jsn.body}</p>
//     </div>
//     `;
//   }

// })










        //   let url2 = `http://jsonplaceholder.typicode.com/posts/${firstId}`
        // //   return axios.get(url2)
        //  })
        //  .then(function(resp){
        //    console.log(resp.data)
        //    let html = toPostHtml(resp.data)
        //    console.log(html)
        //    $('.container').append(html)
        //  })

    // callback hell
    // $.get(url, function (resp){
    //   let firstId = resp[0].id
    //   let url2 = (`http://jsonplaceholder.typicode.com/posts/${firstId}`)
    //   $.get(url2, function (resp){
    //     console.log(resp)
    //   })
    // })

    // console.log(url2)
    // $.get(url2)