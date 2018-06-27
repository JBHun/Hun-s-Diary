import React,{Component} from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './EditRemove.css';

export default class EditRemove extends Component {

    constructor(props){
        super(props);
        
        this.state={
            isEdit: false,
            title:'',
            date:'',
            text:'',
        };
        this.Change=this.Change.bind(this);
        this.Edit=this.Edit.bind(this);
        this.Toggle=this.Toggle.bind(this);
    }

    Change(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }

    Toggle() {
        if(!this.state.isEdit) {
            this.setState({
                title: this.props.content.title,
                date: this.props.content.date,
                text: this.props.content.text
            });
        } else {
            this.Edit();
        }

        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    Edit(){
        this.props.onEdit(
            this.state.title, this.state.date, this.state.text);
            alert('수정 완료');
    }

    render() {
        const edit = (
            <div className="EditRemove">
            <Input 
                name="title"
                placeholder="제목"
                value={this.state.title}
                onChange={this.Change}/>
            <Input 
                type="date"
                name="date"
                placeholder="날짜"
                value={this.state.date}
                onChange={this.Change}/>
            <Input 
                type="textarea"
                name="text"
                placeholder="제목"
                value={this.state.text}
                onChange={this.Change}/>
            <Button outline size="sm" color="success"
            onClick={this.Toggle}>OK</Button>    
            </div>
        );

        const details = (
            <div className="EditRemove">
                <Card>
                <CardBody>

                    <CardTitle>{this.props.content.title}</CardTitle>

                    <CardSubtitle>{this.props.content.date}</CardSubtitle>

                    <CardText>{this.props.content.text}</CardText>

                    <span className="rightbutton">

                        <Button outline size="sm" color="success"
                        onClick={this.Toggle}>Edit</Button>

                        <Button outline size="sm"color="danger"
                        onClick={this.props.onRemove}>
                        Delete</Button>

                    </span>
                    
                </CardBody>
                </Card>
            </div>
        );
        const view = this.state.isEdit ? edit : details;
        const blank = (<div>수정/삭제하려면 게시물을 눌러주세요.</div>);

        return (
            <div>
                {this.props.selected ? view : blank}
            </div>
        );
    }
}

EditRemove.defaultProps = {
    content: {
        title: '',
        date: '',
        text:''
    }
};