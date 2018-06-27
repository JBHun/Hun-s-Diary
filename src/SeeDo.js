import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./SeeDo.css";

 


export default class SeeDo extends Component{

 
    
    render(){
        return(
            <div className="SeeDo" 
            onClick={this.props.onClick}>
                <Card >
                    <CardImg top height="200px" src="https://www.wpclipart.com/blanks/book_blank/diary_open_blank.png" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.item.title}</CardTitle>

                        <CardSubtitle>{this.props.item.date}</CardSubtitle
                        >
                        <CardText>{this.props.item.text}</CardText>

                        <span>
                        <a href={"https://search.naver.com/search.naver?query="+this.props.item.title} target="_blank">
                        <Button outline size="sm" color="secondary">Search</Button>
                        </a>
                        </span>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

//<a target="_blank" href={"https://www.google.co.kr/search?q="+this.props.name}>