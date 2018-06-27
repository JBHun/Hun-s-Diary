import React,{Component} from 'react';
import { Button,Input } from 'reactstrap';

export default class DoCreate extends Component{
    constructor(props){
        super(props);
        this.state={
            date:'',
            title:'',
            text:''
        };
        this.change=this.change.bind(this);
        this.click=this.click.bind(this);
    }
    change(e){
        let next = {};
        next[e.target.name]=e.target.value;
        this.setState(next);
    }
    click(){
        
        const content={
            title: this.state.title,
            date: this.state.date,
            text : this.state.text
        };
        if(content.title===""||content.date===""||content.text===""){
            alert('빈칸을 모두 입력하세요.');
            return;
        }
        
        this.props.onCreate(content);

        this.setState({
            title:'',
            date:'',
            text:''
        });
    }
    fileSelect=event=>{
        console.log(event.target.file[0]);
    }
    
    render(){
        
        return(
            <div>
                <span>오늘 하루 어땠나요?</span>
                <p>
                    <Input
                        type="text"
                        name="title"
                        placeholder="제목"
                        value={this.state.title}
                        onChange={this.change}
                    />
                    <Input
                        type="date"
                        name="date"
                        value={this.state.date}
                        onChange={this.change}
                    />
                    <Input
                        type="textarea"
                        name="text"
                        placeholder="일기내용"
                        value={this.state.text}
                        onChange={this.change}
                    />
                    <Button 
                    outline size="sm" 
                    color="primary" 
                    onClick={this.click}>작성완료</Button>
                </p>
            </div>
        )
    }
    
}
