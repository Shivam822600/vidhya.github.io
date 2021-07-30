import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Button, Divider } from "@material-ui/core";

import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import IconButton from '@material-ui/core/IconButton';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    
    cardroot: {
        width: 200,
        height: 250,
        marginBottom: 20,
        marginTop: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
        "&:hover": {
            backgroundColor: '#f3a683',
            transform: "scale(1)",
            tansition: "all 0.2s ease 0.2s",
        },
    },
    imageview:{
        width:190,
        height:110,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        margin:2,
        cursor:"pointer",
        "&:hover":{
          transform:"scale(1.25)",
          tansition:"all 0.5s ease 0s"
    
        }
    
        },

   

}))

export default function Finance(props) {
    const classes = useStyles();
return( 
<div>
<div style={{ display:'flex',width: "100%", background: "#fa8231",height:54 }}>
    <b style={{marginLeft:42,marginTop:17,fontSize:20,color:'#FFF'}} >Vidhyayan</b>
</div>
<div>
<Grid container spacing={1} style={{backgroundColor:'#dfe6e9'}}>
    <Grid item xs={12} sm={6} style={{display:'flex',paddingLeft:140}}>
        <Grid style={{marginTop:80,marginLeft:10}}>
        <b style={{fontSize:32,color:'#fa8231'}}>Creating Future <b style={{fontSize:32,color:'#000'}} >Tech Leader</b></b>
        <bolder style={{display:'flex',fontSize:20,marginTop:30}}>Live coding classes for age 6-15 to help your child learn to code</bolder>
       <Button variant="contained" style={{backgroundColor:'#fa8231',borderRadius:9,marginTop:50,marginLeft:100}}><b style={{color:'#FFF'}}>Join Now</b></Button>
        </Grid>
        </Grid>
        <Grid item xs={12} sm={6} style={{display:'flex'}}>
           <div style={{display:'flex'}}> 
               <img src=" iiii.png" width="550"  />
           </div>
        </Grid>
     
<div style={{paddingLeft:370}}>
    <b style={{fontSize:20,color:'#fa8231'}}>
        Cutting edge courses to make a child future ready
</b>
</div>
<div style={{paddingLeft:150,marginTop:60}}>
    <span  >
        <img  src="python.png" />
    </span>
    <span style={{paddingLeft:35}}>
    <img src="web.png" />
    </span>
    <span style={{paddingLeft:35}}>
    <img src="ai.png" />
    </span>
    <span style={{paddingLeft:35}}>
    <img src="ml.png" />
    </span>
    <span style={{paddingLeft:35}}>
    <img src="sc.png" />
    </span>
    <span style={{paddingLeft:35}}>
    <img src="app.png" />
    </span>
</div>
<div style={{paddingLeft:150,marginTop:30,marginBottom:30}}>
    <span  >
        <b>
            Python
        </b>
    </span>
    <span style={{paddingLeft:35}}>
    <b>
            Web Development
        </b>
    </span>
    <span style={{paddingLeft:35}}>
    <b>
            Artificial Intellegence
        </b>
    </span>
    <span style={{paddingLeft:35}}>
    <b>
            Machine Learning
        </b>
    </span>
    <span style={{paddingLeft:35}}>
    <b>
            Cyber Security
        </b>
    </span>
    <span style={{paddingLeft:35}}>
    <b>
            App Development
        </b>
    </span>
</div>
    </Grid>

    <div>
        <div style={{display:'flex',marginTop:40,marginLeft:280}}>
    <b style={{fontSize:24,color:'#fa8231',marginLeft:260}} >Why Coding?<br/></b>

    </div>

    <div style={{display:'flex',marginTop:10,marginLeft:290}}>
    <text style={{fontSize:18}} >Vidhyayan Focuses on developing 'skills' rather than 'syntax',to make children <br/></text>
    </div>
    <div>
    <Grid container spacing={1} >
    <Grid item xs={12} sm={4} style={{display:'flex',paddingLeft:140}}>
    <div>
    
    <span style={{display:'flex',marginTop:75}}><img src="1.png" /><br/></span>
    


    <span style={{display:'flex',marginTop:45}}><img src="2.png"/><br/></span>


    <span style={{display:'flex',marginTop:45}}><img src="3.png" /><br/></span>
</div>

<div>
    
    <b style={{display:'flex',marginTop:75}}>Logic<br/></b>
    <text>for pridicting & analysis<br/></text>


    <b style={{display:'flex',marginTop:25}}>Evaluation<br/></b>
    <text>Involves making judgement<br/></text>


    <b style={{display:'flex',marginTop:25}}>Algorithms<br/></b>
    <text>To make steps & rules</text>
</div>

        </Grid>
        <Grid item xs={12} sm={4} style={{display:'flex',paddingLeft:60,marginTop:20}}>
<div>
    <img src="cccccc.png" />
</div>
        </Grid>
        <Grid item xs={12} sm={4} style={{display:'flex',paddingLeft:70}}>
    <div>
    
    <span style={{display:'flex',marginTop:75}}><img src="4.png" /><br/></span>
    


    <span style={{display:'flex',marginTop:45}}><img src="5.png"/><br/></span>


    <span style={{display:'flex',marginTop:45}}><img src="6.png" /><br/></span>
</div>

<div>
    
    <b style={{display:'flex',marginTop:75}}>Abstraction<br/></b>
    <text>To remove unneccessary data<br/></text>


    <b style={{display:'flex',marginTop:25}}>Patterns<br/></b>
    <text>To make use of similarities<br/></text>


    <b style={{display:'flex',marginTop:25}}>Decomposition<br/></b>
    <text>Break down a problem</text>
</div>

        </Grid>
        <div> 
            <Button variant="contained" style={{backgroundColor:'#fa8231',borderRadius:9,marginTop:50,marginLeft:530}}><b style={{color:'#FFF'}}>Book a free class</b></Button>
        </div>
        </Grid>
    </div>
    <div style={{backgroundColor:'#dfe6e9'}}>

    <Grid Container spacing={2} style={{ display: 'flex', justifyContent: 'center', }}>
                    <Grid item xs={12} sm={4}>
                        <Grid Container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Card className={classes.cardroot} >
                               
                                <CardMedia
                                    className={classes.imageview}
                                    image="/laptop.png"
                                    
                                />
                                 <b style={{display:'flex',justifyContent:'center',color:'#5352ed',marginTop:5}}>Indroduction to Coding</b>
                             
                                <CardContent style={{marginTop:30}}>
                                    <Divider/>
                                    <b style={{display:'flex',justifyContent:'center',color:'#3742fa',marginTop:5}}>Know More</b>
                                </CardContent>

                            </Card>


                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid Container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <Card className={classes.cardroot}>
                              
                                <CardMedia
                                    className={classes.imageview}
                                   
                                    image="/laptop.png"
                                 
                                />
                                 <b style={{display:'flex',justifyContent:'center',color:'#5352ed',marginTop:5}}>Advance Coding</b>
                                 
                                 <CardContent style={{marginTop:30}}>
                                    <Divider/>
                                    <b style={{display:'flex',justifyContent:'center',color:'#3742fa',marginTop:5}}>Know More</b>
                                </CardContent>


                            </Card>


                        </Grid>

                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Grid Container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <Card className={classes.cardroot}>
                               
                                <CardMedia
                                    className={classes.imageview}
                                    image="/laptop.png"
                                />
                                <b style={{display:'flex',justifyContent:'center',color:'#5352ed',marginTop:5}}>Web App Development</b>
                               
                                 <CardContent style={{marginTop:30}}>
                                    <Divider/>
                                    <b style={{display:'flex',justifyContent:'center',color:'#3742fa',marginTop:5}}>Know More</b>
                                </CardContent>

                            </Card>


                        </Grid>

                    </Grid>
            
                    <Grid item xs={12} sm={4}>
                        <Grid Container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <Card className={classes.cardroot} >
                           
                                <CardMedia
                                    className={classes.imageview}
                                    image="/laptop.png"
                                    
                                />
                              <b style={{display:'flex',justifyContent:'center',color:'#5352ed',marginTop:5}}>Android App Develop.</b>
                            <CardContent style={{marginTop:30}}>
                                    <Divider/>
                                    <b style={{display:'flex',justifyContent:'center',color:'#3742fa',marginTop:5}}>Know More</b>
                                </CardContent>


                            </Card>


                        </Grid>
                        </Grid>
                    </Grid>
                    <div style={{display:'flex',justifyContent:'center'}}>
<FiberManualRecordIcon style={{color:'#5352ed'}} /> <FiberManualRecordIcon style={{color:'#7d5fff'}}/> <FiberManualRecordIcon style={{color:'#7d5fff'}}/>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',marginTop:20,marginBottom:20}}>
                        <img src="bann.png" width="60%" style={{borderRadius:'10px'}}  />
                    </div>
                    <div style={{backgroundColor:'#a29bfe',}}>
        <div style={{display:'flex',justifyContent:'center',marginTop:15}}>
          <b style={{fontsize:18,color:'#7d5fff'}}>Learning Path</b>
        </div >
        <div style={{marginTop:35,marginBottom:35}} >
        <span>
            <FiberManualRecordIcon style={{color:'#d63031'}}/>------------------------
        </span>
        <span>
        --------------------- <img src="plane.png" />------------------------
        </span>
        <span>-
        -----------------------<img src="plane.png" />------------------------
        </span>
        <span > 
        ------------------------ <img src="plane.png" />
        </span>
        </div>

        <div style={{marginTop:35,marginBottom:35}} >
        <span>
            Start today&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LEARNER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ENTERPRENEUR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span > 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAKER
        </span>
        </div>
    </div>

    <div>
    <div style={{display:'flex',justifyContent:'center',marginTop:15}}>
          <b style={{fontsize:18,color:'#7d5fff'}}>How its work</b>
        </div >
    <Grid container spacing={1} >
   
        <Grid item xs={12} sm={6} style={{display:'flex',paddingLeft:60,marginTop:20}}>
<div>
    <img src="last.png" width="450" />
</div>
        </Grid>
        <Grid item xs={12} sm={6} style={{display:'flex',paddingLeft:70}}>
    <div>
    
    <span style={{display:'flex',marginTop:75}}>
    <IconButton  style={{background:'#6c5ce7',fontSize:5}}>
           <b style={{fontSize:20,color:'#FFF'}}>1</b>
        </IconButton>
     
    </span>
    


    <span style={{display:'flex',marginTop:45}}>
    <IconButton  style={{background:'#6c5ce7',fontSize:5}}>
           <b style={{fontSize:20,color:'#FFF'}}>2</b>
        </IconButton>
    </span>


    <span style={{display:'flex',marginTop:45}}>
    <IconButton  style={{background:'#6c5ce7',fontSize:5}}>
           <b style={{fontSize:20,color:'#FFF'}}>3</b>
        </IconButton>
    </span>

    <span style={{display:'flex',marginTop:45}}>
    <IconButton  style={{background:'#6c5ce7',fontSize:5}}>
           <b style={{fontSize:20,color:'#FFF'}}>4</b>
        </IconButton>
    </span>

    <span style={{display:'flex',marginTop:45}}>
    <IconButton  style={{background:'#6c5ce7',fontSize:5}}>
           <b style={{fontSize:20,color:'#FFF'}}>5</b>
        </IconButton>
    </span>
</div>

<div>
    
    <b style={{display:'flex',marginTop:75,paddingLeft:5}}>Book<br/></b>
    <text>Book a free coding classes with us.You need a laptop with good internet connectivity <br/></text>


    <b style={{display:'flex',marginTop:25,paddingLeft:5}}>Book<br/></b>
    <text>Book a free coding classes with us.You need a laptop with good internet connectivity <br/></text>


    <b style={{display:'flex',marginTop:25,paddingLeft:5}}>Book<br/></b>
    <text>Book a free coding classes with us.You need a laptop with good internet connectivity </text>


<b style={{display:'flex',marginTop:25,paddingLeft:5}}>Book<br/></b>
    <text>Book a free coding classes with us.You need a laptop with good internet connectivity </text>


<b style={{display:'flex',marginTop:25,paddingLeft:5}}>Book<br/></b>
    <text>Book a free coding classes with us.You need a laptop with good internet connectivity </text>
</div>

        </Grid>
        <div style={{display:'flex',justifyContent:'center',marginLeft:140,marginTop:20,marginBottom:20}}>
                        <img src="banner.png" width="40%" style={{borderRadius:'10px'}} />
                    </div>
        </Grid>
        </div>
    </div>
    
    </div>
    
</div>

    
    
    
    </div>)

}