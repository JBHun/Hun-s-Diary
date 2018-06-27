import React,{Component} from 'react';
import SeeDo from './SeeDo';
import DoCreate from './DoCreate';
import 'bootstrap/dist/css/bootstrap.css'
import update from 'react-addons-update';
import './Do.css';
import EditRemove from './EditRemove';


export default class Do extends Component{

    constructor(props){
        super(props);
            this.state={
                selected:-1,
                keyword:'',
                contents:[
                    {date:'2018-06-24',
                    title:'BHC뿌링클 치킨',
                    text:'러시아 월드컵을 해서 BHC뿌링클 치킨을 먹었다. 뿌링뿌링 소스가 참 맛있다.',
                    },
                    {date:'2018-06-23',
                    title:'버거킹 몬스터와퍼',
                    text:'하루종일 아무것도 먹지않아서 버거킹에서 몬스터와퍼를 먹었다.. 겁나크다 ㅋㅋ',
                    },
                    {date:'2018-06-22',
                    title:'미각아구동태해물찜',
                    text:'동태탕을 먹었는데 아주맛있었다. 특히 난 고니가 맛있는 것 같다.',
                    },
                    {
                    date:'2018-06-21',
                    title:'비빔면+군만두',
                    text:'뭐 누구든 좋아하는 비빔면에 군만두이다. 짱이였다.',
                    }
                ]
        }
        this.Change=this.Change.bind(this);
        this.Create=this.Create.bind(this);
        this.Delete=this.Delete.bind(this);
        this.Edit=this.Edit.bind(this);
        this.Click = this.Click.bind(this);
    }

    Change(e){
        this.setState({
            keyword : e.target.value
        });
    }
    
    Click(key){
        this.setState({
            selected: key
        });
    }

    Create(info){
        this.setState({
            contents: update(this.state.contents,{
                $push:[info]
            })
        });
    }

    Delete(){
        if(this.state.selected < 0) {
            return;
        }

        this.setState({
            contents: update(this.state.contents,
                { $splice: [[this.state.selected, 1]] }
            ),
            selected: -1
        });
    }

    Edit(title,date,text){
        this.setState({
            contents: update(this.state.contents,{
                [this.state.selected]:{
                    title:{$set:title},
                    date:{$set:date},
                    text:{$set:text}
                }
            })
        });
    }

    render(){
        const mapToComponents = (data) => {
            data.sort(function(a,b){
                return a.date < b.date ? 1 : -1;
            });

            data=data.filter(
                (contact)=>{
                    return contact.date.indexOf(this.state.keyword) > -1;
                }
            )
            return data.map((item, i) => {
                return (<SeeDo
                    item={item}
                    key={i}
                    onClick={() => this.Click(i)}
                    />
                    );
            });
        };
        
        return(
            <div>
                <div className="Do">
                    <div>병훈이의 먹방 일기</div>
                    <span>Today: {new Date().toLocaleDateString()}</span>
                    
                
                    <div className="Search"> 검색 : <input 
                    placeholder="년-월-일"
                    name="keyword"
                    value={this.state.keyword}
                    onChange={this.Change} />
                
                    </div>
                </div>
                <div className="Contents">
                <DoCreate 
                onCreate={this.Create}/>

                <EditRemove
                    selected={this.state.selected!== -1}
                    content={this.state.contents[this.state.selected]}
                    onRemove={this.Delete}
                    onEdit={this.Edit}
                />

                {mapToComponents(this.state.contents)
                }
                
                </div>
                
            </div>
        );
    }
    
}
