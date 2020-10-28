import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductItem from './components/ProductItem';

function App() {

	return (
		<>
    <Switch>
      <Route path='/products/:product_id' component={ProductItem}></Route>
    </Switch>

		<div>
			<ProductList />
		</div>

		</>
	);
}

export default App;
