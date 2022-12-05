const axios = require('axios')



const aramaYap = async (req,res)=>{

    let sayfanumarasi = "";
    let aktifpage = 1;
  
    if(req.query.page){
      sayfanumarasi = "page="+req.query.page;
      aktifpage = req.query.page
    }

try{
    const aranacakKelime = req.body.search;
    const BlogAPI = await axios.get(`https://emrealtunbilek.com/wp-json/wp/v2/posts?search=${aranacakKelime}`);
    // console.log(gelenMakaleler.data);
    // console.log('biz burda');
    res.render('./makaleler/tumMakaleler.ejs',{makaleler:BlogAPI.data,sayfalama:BlogAPI.headers,aktifpage})

    }catch(err){
    res.send(err.response)
    console.log(err.response)
}
}


const tumMakaleleriGetir = async (req,res,next)=>{
  let sayfanumarasi = "";
  let aktifpage = 1;

  if(req.query.page){
    sayfanumarasi = "page="+req.query.page;
    aktifpage = req.query.page
  }

    try{
        const BlogAPI = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts?per_page=20&'+sayfanumarasi);
        // console.log(BlogAPI.data);
        // console.log(BlogAPI.headers);
        res.render('./makaleler/tumMakaleler',{makaleler:BlogAPI.data,sayfalama:BlogAPI.headers,aktifpage})
    }catch(err){
        res.send(err.response.data)
        console.log(err.response.data);
    }
    
};

const TekMakaleGetir = async (req,res,next)=>{
    req.params.id;
    try{
        const tekMakaleGetir = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts/'+req.params.id)
        // console.log(tekMakaleGetir.data);
        res.render('./makaleler/tekMakale',{makale:tekMakaleGetir.data})
    }catch(err){
        res.send(err.response.data);
    }
}


module.exports = {
    tumMakaleleriGetir,
    TekMakaleGetir,
    aramaYap,
}