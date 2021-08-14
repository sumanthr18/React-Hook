import React,{Component} from "react";
// import {TvImage} from '../Images/TV Image';

class Blogs extends Component{
    constructor(props){
        super(props);
        this.state = {
            Blog : [
                {
                    title : `Mi 108 cm (43 Inches) 4K Ultra HD Android Smart LED TV 4X`,
                    subtitle : `L43M4-4AIN (Black)`,
                    description : ` Resolution: 4K Ultra HD (3840x2160) | Refresh Rate: 60 hertz
                    Connectivity: 3 HDMI ports to connect set top box, Blu-ray speakers or a gaming console 
                    | 2 USB ports to connect hard drives or other USB devices | 3.5mm Jack to connect your 
                    Audio devices | 1 LAN port `
                },
                {
                    title : `Mi 136 cm (54 Inches) 4K Ultra HD Android Smart LED TV 4X`,
                    subtitle : `L43M4-4AIN (Blue)`,
                    description : ` Resolution: 4K Ultra HD (3840x2160) | Refresh Rate: 60 hertz
                    Connectivity: 3 HDMI ports to connect set top box, Blu-ray speakers or a gaming console 
                    | 2 USB ports to connect hard drives or other USB devices | 3.5mm Jack to connect your 
                    Audio devices | 1 LAN port `
                },
                {
                    title : `Mi 168 cm (65 Inches) 4K Ultra HD Android Smart LED TV 4X`,
                    subtitle : `L43M4-4AIN (Silver)`,
                    description : ` Resolution: 4K Ultra HD (3840x2160) | Refresh Rate: 60 hertz
                    Connectivity: 3 HDMI ports to connect set top box, Blu-ray speakers or a gaming console 
                    | 2 USB ports to connect hard drives or other USB devices | 3.5mm Jack to connect your 
                    Audio devices | 1 LAN port `
                }
            ]
        };
    }
    render(){
        let result = this.state.Blog.map((item)=>{
            return (
                <div className='col-md-4'>
                    <div className="card my-2" >
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{item.subtitle}</h6>
                        <p className="card-text">{item.description}</p>
                    </div>
                    </div>
                </div>
                
            )
        });
        return(
            <>
                <section className="container mb-5">
                    <h1>Blogs</h1>
                    <div className="row">{result}</div>
                </section>        
            </>
        )
    }
}

export default Blogs;