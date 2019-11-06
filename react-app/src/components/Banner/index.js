import react, {Component} from 'react';

class Banner extends Component {
    constructor(props) {
        super(props);
        let {step, speed} = this.props;
        this.state = {
            step,
            speed
        }
    }

    componentDidMount() {
        let { data = [] } = this.props;
        if(data.length === 0) return;
        let cloneData = data.slice(0);
        cloneData.push(data[data.length - 1]);
        cloneData.unShift(data[0]);
        this.cloneData = cloneData;
    }
    

    render() {
        
        return (<section className='container'>
            <ul className='wrapper'>
                {
                    this.cloneData.map((item, index) => (
                        <li>
                            <img src={item.url} alt={item.title} key={index}/>
                        </li>
                    ))
                }
            </ul>
            <ul className='focus'>
                {
                    this.data.map((_, index) => {
                        <li key={index}></li>
                    })
                }
            </ul>
        </section>)
    }
}