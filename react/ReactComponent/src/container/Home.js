import React from 'react';
import UserCard from '../components/UserCard';
import SearchUser from '../components/SearchUser';
import Title from '../components/Title';
import Footer from '../components/Footer';
import API from '../service/user';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log('am from constructor Home');
        this.onSearchTermUpdate = this.onSearchTermUpdate.bind(this);
        this.onSubmitSearch = this.onSubmitSearch.bind(this);
        this.state = {
            searchTerm: '',
            login: {
                user: {},
                isLoading: true,
                isError: false
            },
            searchedUser: {
                user: {},
                isLoading: true,
                isError: false
            }
        };
    }
   /* async getGitHubUserWithFetch () {
        const response = await fetch("https://api.github.com/users/khaziwallis");
        const jsonData = await response.json();
        return jsonData;
    }*/
    async componentDidMount() {
        this.setState({
            login: {
                user: {},
                isLoading: true,
                isError: false
            }
        });
        console.log('am from componentDidMount Home');
        const result = await API.getGithubUser('khaziwallis');
        if (result?.login) {
            this.setState({
                login: {
                    user: result,
                    isLoading: false,
                    isError: false
                }
            });
        } else {
            this.setState({
                login: {
                    user: {},
                    isLoading: false,
                    isError: true
                }
            });
        }
    }
    async getGithubUserDetails() {
        this.setState({
            searchedUser: {
                user: {},
                isLoading: true,
                isError: false
            }
        });
        const result = await API.getGithubUser(this.state.searchTerm);
        if (result?.login) {
            this.setState({
                searchedUser: {
                    user: result,
                    isLoading: false,
                    isError: false
                }
            });
        } else {
            this.setState({
                searchedUser: {
                    user: {},
                    isLoading: false,
                    isError: true
                }
            });
        }
    }
    onSearchTermUpdate(searchTerm) {
        console.log(searchTerm);
        this.setState({
            searchTerm: searchTerm
        })
    }
    onSubmitSearch() {
        this.getGithubUserDetails();
    }
    componentDidUpdate() {
        console.log('am from componentDidMount Home');
    }
    componentDidUpdate() {
        console.log('am from componentDidMount Home');
    }
    render() {
        console.log('am from render Home');

        return (
            <>
                <Title user={this.state.login.user}/>
                <div className="appContainer">
                    <SearchUser onUpdate={this.onSearchTermUpdate} onSubmit={this.onSubmitSearch} />
                    { this.state.searchedUser.isLoading ? <></> : (
                        <>
                            <marquee className="marqueeText" direction="right">
                                Result for Search: 
                                <span className="searchText">
                                    {' '} {this.state.searchTerm}
                                </span>
                            </marquee>
                            <UserCard user={this.state.searchedUser?.user} />
                        </>
                    )}
                </div>
                <Footer />
            </>
        )
    }
}

export default Home;