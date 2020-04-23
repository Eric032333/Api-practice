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



