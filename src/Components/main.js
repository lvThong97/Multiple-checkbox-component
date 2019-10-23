import React, { Component } from 'react';
import Reducers from '../Reducers/reducers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Main extends Component {
    lists_data = [
        { name: 'Draft', check: true },
        { name: 'With_pickup', check: true },
        { name: 'Printed', check: true },
        { name: 'Cancelle', check: false },
      
    ]
    constructor(props) {
        super(props)
        this.state = {
            statusDropdown: false,
            lists: [],
        }


    }
    componentDidMount() {
        this.setState({
            lists: this.lists_data
        })
    }
    showDropdown = () => {
        this.setState({ statusDropdown: !this.state.statusDropdown });

    }
    toogleCheck = (item, i) => {
        let { lists } = this.state;
        lists[i] = { name: item.name, check: !item.check };
        this.setState(
            lists
        );
    }
    showData = () => {
        if (this.state.lists.length === 0) return null;
        const listItems = this.state.lists.map((item, i) =>
            (<li className="text-left"><label><input type="checkbox" id="checkbox" checked={item.check} onChange={() => this.toogleCheck(item, i)} />{item.name}</label></li>)
        );
        return <ul className="list-unstyle ">{listItems}</ul>
    }
    showResult = () => {
        const listItems = this.state.lists.filter((item) => { return item.check });
        return listItems.map((item) => { return item['name'] }).toString();
    }

    searchData = () => {
        var input = document.getElementById('input').value;
        input = input.toLowerCase();
        var listInit = this.lists_data.filter((element) => {
            return element.name.toLowerCase().indexOf(input) + 1;
        });
     
        if (listInit.length === 0) {
            this.setState({ lists: this.lists_data })
        } else this.setState({ lists: listInit })

    }
    resetData = () => {
       
        this.setState({
            lists: this.lists_data,
            statusDropdown: false
        });
        console.log(this.state.lists);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <label className="col-md-2 text-danger text-right"><b>Search Option:</b></label>
                        <p className="d-flex dropbox col-md-3 float-left border border-secondary rounded" onClick={() => this.showDropdown()}>
                            <div className="p-2 w-100">
                                <div className="row text-uppercase font9 text-secondary">
                                    <b>STATUS</b>

                                </div>
                                <span className="row d-flex text-uppercase " id="content">{this.showResult()}</span>

                            </div>
                            <div className="p-2 flex-shrink-1 justify-content-end align-items-center">
                                <i className="fa fa-sort"></i>
                            </div>
                            


                        </p>



                    </div>

                    {(this.state.statusDropdown) ? (
                        <div className="row margin-top-10">

                            <div className="col-md-2"></div>
                            <div className="border border-secondary col-md-3 float-left">

                                <label className="text-danger float-left"><b>STATUS</b>

                                </label>
                                <div className="form-group has-search">
                                    <span className="form-control-feedback" />

                                    <input type="text" className="form-control" placeholder="Search" id="input" onKeyUp={() => this.searchData()} />
                                </div>

                                <div className="form-group">

                                    {this.showData()}

                                </div>

                            </div>
                        </div>
                    ) : (
                            null
                        )



                    }
                    <div className="result">
                        <div className="row">
                            <label className="col-md-2 float-right text-right"><b>Result: </b></label>
                            <div className="col-md-3 bg-xam textfl" >
                                <span className="float-left rounded text-uppercase">

                                    <div className="d-flex">{this.showResult()}<button className="fa fa-times-circle clear-style-btn bg-xam"></button></div>


                                </span>


                            </div>
                            <div className="col-md-2"><button className="btn btn-light float-left text-danger clear-bg-btn clear-style-btn" onClick={() => this.resetData()}><span className="glyphicon glyphicon-refresh"></span>  Reset</button></div>

                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
      return {list: state.Reducers};
}
const mapDispatchToProps = (dispatch)=> {
     actions: bindActionCreators(Reducers, dispatch);
}
export default connect( mapStateToProps, mapDispatchToProps )( Main );
