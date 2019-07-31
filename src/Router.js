import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Rec from './Recommand';
import Rank from './Rank'
import Rank2 from './Rank2'
import Ana from './Analyze';
import Detail from './Detail';
import Srch from './Search';
import Globe from './Globe';
class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
    //    <Route path='/analyze' component={Ana} />
          <Route path='/predict' component={Rec} />
          <Route path='/rank' component={Rank} />
					<Route path='/rank2' component={Rank2} />
					<Route path="/movie/:id" component={Detail} />
					<Route path="/search" component={Srch} />
					<Route path="/world" component={Globe} />
          <Redirect from='/' to='/home'></Redirect>
        </Switch>
      </Router>
    );
  }
}
export default Root;