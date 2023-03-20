import axios from 'axios';

axios({
    method: 'get',
    url: 'http://localhost:1202/api/getUser',
    responseType: 'stream'
  })
.then(function (res) {
    console.log(res.data);
});