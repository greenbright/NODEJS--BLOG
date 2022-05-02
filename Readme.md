 | BEFORE USING MVC MODEL|
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { render } = require('express/lib/response');

// setup express app
const app = express();
// CONNECT TO MONGODB
const dbURI = 'mongodb+srv://webnode-js:pass12345@cluster0.xzivq.mongodb.net/webnode?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology : true})
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err));
// Register view engine
app.set('view engine','ejs')



//middleware and static files like css, images etc
app.use(express.static('public'));
// to obtain the data from the form such as title, snippet and body we use the line below
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

/*
// mongoose and mongo sandbox routes - SENDING DATA TO DATABASE
app.get('/add-blog', (req,res)=>{
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });
    blog.save()
    .then((result) =>{
        res.send(result)
    }) 
    .catch((err)=>{
        console.log(err);
    });
  })
// RETRIEVING DATA FROM DATABASE
app.get('/all-blogs', (req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    });
})
// RETRIEVING A SINGLE DOCUMENT
app.get('/single-blog',(req,res)=>{
    Blog.findById('622a6214939dbe33dc6c2111')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    });
})

//using middleware
app.use((req,res, next)=>{ 
    console.log('new request made');
    console.log('host', req.hostname)
    console.log('path', req.path);
    console.log('method', req.method);
    next();
})
*/
app.get('/', (req,res)=>{
    res.redirect('/blogs')
    
});
app.get('/about', (req,res)=>{
    //res.send('<p>Home page</p>')
     //res.sendFile('./views/about.html', {root:__dirname});
     res.render('about',{title:'about'});
    
});
/*Redirect
  app.get('/about-us', (req,res)=>{
      res.redirect('/about'); 
  })*/

  //blogs routes
  app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
    res.render('index', {title: 'All blogs', blogs: result})
    })
    .catch((err)=>{
        console.log(err)
    })
  })

  app.post('/blogs',(req, res)=>{
      const blog = new Blog(req.body);
      blog.save()
      .then((result)=>{
          res.redirect('/blogs')
      })
    .catch((err)=>{
          console.log(err)
      })
  })

  app.get('/blogs/:id',(req,res)=>{
      const id = req.params.id;
      Blog.findById(id)
      .then((result)=>{
        res.render('details',{blog:result,title:'Blog Details'})
        // blog:result , i  can change the name of blog to anything
      })
      .catch((err)=>{
          console.log(err)
      })
      //console.log(id);  
  })

  app.delete('/blogs/:id',(req,res)=>{
      const id = req.params.id;
      Blog.findByIdAndDelete(id)
      .then(result=>{
        res.json({redirect:'/blogs'})
      })
      .catch((err)=>{
          console.log(err)
      })
  })
  app.get('/blog/create',(req,res)=>{
   res.render('create',{title:'create'})
  })
//404 - midddleware
app.use((req,res)=>{
//res.sendFile('./veiws/404.html',{root:__dirname});
res.status(404).render('404',{title:'404'})
})