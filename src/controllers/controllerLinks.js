const db= require("../database")
module.exports={
    showAll:async function(req,res){
        const links=await db.query('SELECT * FROM links');
        res.render('links/list',{links});
    },
    add:function(req,res){
        res.render("links/add");
    },
    create:async function(req,res){
      const {title,url,description}=  req.body
      const newlink={
        title,
        url,
        description
      };
      await db.query('INSERT INTO links set ?',[newlink]);
      res.redirect("/links");
    },
    remove:async function(req,res){
        const {id}=req.params;
        await db.query('DELETE FROM links WHERE ID = ?',[id]);
        res.redirect('/links');
    },
    show:async function(req,res){
        const {id}=req.params;
        const link=await db.query('SELECT * FROM links WHERE ID = ?',[id]);
        res.render('links/edit',{link:link[0]});
    },
    edit: async function(req,res){
        const {id}=req.params;
        const {title,url,description}=req.body;
        const newlink={
            title,
            url,
            description
        }
        //await db.query('UPDATE links SET title=?,url=?,description=?,created_at=NOW() WHERE id=?',[title,url,description,id]);
        await db.query('UPDATE links SET ?,created_at=NOW() WHERE id=?',[newlink,id]);
        res.redirect('/links');
    }
}